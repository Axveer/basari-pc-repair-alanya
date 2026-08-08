import About from "@/components/site/About";
import Blog from "@/components/site/Blog";
import Contact from "@/components/site/Contact";
import ContactStrip from "@/components/site/ContactStrip";
import DiagnosticWizard from "@/components/site/DiagnosticWizard";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import MovedBanner from "@/components/site/MovedBanner";
import Parts from "@/components/site/Parts";
import ServiceCards from "@/components/site/ServiceCards";
import Services from "@/components/site/Services";
import StickyActionBar from "@/components/site/StickyActionBar";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import Why from "@/components/site/Why";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <ContactStrip />
        <MovedBanner />
        <About />
        <Services />
        <DiagnosticWizard />
        <Why />
        <Parts />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <StickyActionBar />
    </div>
  );
};

export default Index;
