import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QualityProcess } from './components/QualityProcess';
import { IndustriesSection } from './components/IndustriesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState<string>('');

  const handleSelectProductForQuote = (productName: string) => {
    setSelectedQuoteProduct(productName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-slate-100 font-['Inter'] selection:bg-amber-500 selection:text-black">
      {/* Navbar Header */}
      <Navbar onOpenCatalog={() => setIsCatalogOpen(true)} />

      {/* Main Corporate Sections */}
      <main>
        {/* Hero [Dark Theme] */}
        <Hero onOpenCatalog={() => setIsCatalogOpen(true)} />

        {/* About Us [Light Theme] */}
        <AboutSection />

        {/* Manufacturing Capabilities [Dark Theme] */}
        <CapabilitiesSection />

        {/* B2B Products Catalog [Light Theme] */}
        <ProductsSection onSelectProductForQuote={handleSelectProductForQuote} />

        {/* Why Choose Us [Dark Theme] */}
        <WhyChooseUs />

        {/* Six-Stage Quality Process [Light Theme] */}
        <QualityProcess />

        {/* Industries Served [Dark Theme] */}
        <IndustriesSection />

        {/* Factory Certifications [Light Theme] */}
        <CertificationsSection />

        {/* Client Endorsements [Dark Theme] */}
        <TestimonialsSection />

        {/* Contact & RFQ Request [Light Theme] */}
        <ContactSection preselectedProduct={selectedQuoteProduct} />
      </main>

      {/* Corporate Footer [Dark Theme] */}
      <Footer />

      {/* Floating Elements & Modals */}
      <WhatsAppButton />
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
        onSelectProductForQuote={handleSelectProductForQuote}
      />
    </div>
  );
}
