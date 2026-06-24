import React from 'react';
import { CartProvider } from './context/CartContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

// Views
import { HomeView } from './views/HomeView';
import { ObjectsView } from './views/ObjectsView';
import { ProductDetailView } from './views/ProductDetailView';
import { AboutView } from './views/AboutView';
import { JournalView } from './views/JournalView';

// Footer & Social Views
import { PrivacyView } from './views/PrivacyView';
import { TermsView } from './views/TermsView';
import { ShippingView } from './views/ShippingView';
import { ContactView } from './views/ContactView';
import { InstagramView } from './views/InstagramView';
import { PinterestView } from './views/PinterestView';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Route matching logic
  const renderActiveView = () => {
    switch (currentPath) {
      case '':
        return <HomeView />;
      case 'objects':
        return <ObjectsView />;
      case 'about':
        return <AboutView />;
      case 'journal':
        return <JournalView />;
      case 'privacy':
        return <PrivacyView />;
      case 'terms':
        return <TermsView />;
      case 'shipping':
        return <ShippingView />;
      case 'contact':
        return <ContactView />;
      case 'instagram':
        return <InstagramView />;
      case 'pinterest':
        return <PinterestView />;
      default:
        // Handle dynamic paths
        if (currentPath.startsWith('objects/')) {
          const id = currentPath.split('/')[1];
          return <ProductDetailView productId={id} />;
        }
        // Fallback
        return <HomeView />;
    }
  };

  const isSocialRoute = currentPath === 'instagram';

  if (isSocialRoute) {
    return (
      <div className="h-screen overflow-hidden bg-[#ffffff] text-[#262626] selection:bg-accent-sage selection:text-white font-sans antialiased">
        {renderActiveView()}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-primary flex flex-col selection:bg-accent-sage selection:text-white">
      <Header />
      
      <main className="flex-grow">
        {renderActiveView()}
      </main>
      
      <Footer />
      
      {/* Drawers and Overlays */}
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <RouterProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </RouterProvider>
  );
};

export default App;
