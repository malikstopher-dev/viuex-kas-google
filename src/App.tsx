import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { RfqProvider } from './context/RfqContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/common/Toast';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProcurementPage } from './components/pages/ProcurementPage';
import { IndustriesPage } from './components/pages/IndustriesPage';
import { RfqPage } from './components/pages/RfqPage';
import { ContactPage } from './components/pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentRouteId } = useLanguage();

  const renderCurrentView = () => {
    switch (currentRouteId) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage initialCategory="all" />;
      case 'products-lifting':
        return <ProductsPage initialCategory="lifting" />;
      case 'products-fasteners':
        return <ProductsPage initialCategory="fasteners" />;
      case 'products-hardware':
        return <ProductsPage initialCategory="hardware" />;
      case 'procurement':
        return <ProcurementPage />;
      case 'industries':
        return <IndustriesPage />;
      case 'rfq':
        return <RfqPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F2EE] font-sans antialiased text-[#111318] selection:bg-[#A21A8D] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {renderCurrentView()}
      </main>
      <Footer />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <RfqProvider>
          <AppContent />
        </RfqProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
