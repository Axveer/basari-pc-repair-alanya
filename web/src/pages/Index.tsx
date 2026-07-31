import About from "@/components/site/About";
import Blog from "@/components/site/Blog";
import Contact from "@/components/site/Contact";
import ContactStrip from "@/components/site/ContactStrip";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import MovedBanner from "@/components/site/MovedBanner";
import Parts from "@/components/site/Parts";
import ServiceCards from "@/components/site/ServiceCards";
import Services from "@/components/site/Services";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import Why from "@/components/site/Why";
import { LanguageProvider } from "@/i18n/LanguageProvider";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <ServiceCards />
          <ContactStrip />
          <MovedBanner />
          <About />
          <Services />
          <Why />
          <Parts />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </LanguageProvider>
  );
};

export default Index;
