import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { LOCALES } from "@/i18n/translations";
import { SERVICE_IDS, servicePath } from "@/lib/seo";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

const queryClient = new QueryClient();

/** Scrolls to the top on SPA route changes (hash links keep native behavior). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash.length === 0) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      {/* basename keeps routing correct on GitHub Pages project URLs (/<repo>/). */}
      <BrowserRouter
        basename={import.meta.env.BASE_URL}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <LanguageProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* One indexable URL per language — matching the static pages built at deploy time. */}
            <Route path="/en" element={<Index />} />
            <Route path="/de" element={<Index />} />
            <Route path="/ru" element={<Index />} />
            {/* Localized service landing pages (4 services × 4 languages). */}
            {LOCALES.flatMap((locale) =>
              SERVICE_IDS.map((id) => (
                <Route
                  key={`${locale}-${id}`}
                  path={servicePath(locale, id).replace(/\/$/, "")}
                  element={<ServicePage serviceId={id} />}
                />
              )),
            )}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
