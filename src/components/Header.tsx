import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { totalItems, setCartOpen } = useCart();
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (path: string) => {
    if (path === '') {
      return currentPath === '';
    }
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <>
      {/* Global Utility Banner */}
      <div className="w-full bg-accent-sage text-white py-3 px-margin-mobile text-center z-[60] relative">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-[11px] sm:text-xs">
          International Shipping Available on All Objects
        </span>
      </div>

      <header
        className={`fixed left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop transition-all duration-300 border-b ${
          isScrolled
            ? 'top-0 bg-[#FBFBF9]/95 backdrop-blur-sm h-16 border-primary/10'
            : 'top-12 bg-transparent h-20 border-primary/5'
        }`}
      >
        <div className="max-w-container-max w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={(e) => handleNavClick('', e)}
              className="font-headline-md text-headline-md font-bold tracking-tighter text-primary border-0 bg-transparent cursor-pointer p-0 flex items-center"
            >
              <Logo className="h-7 w-7 mr-1.5" />
              <span>La Forêt</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10">
            <button
              onClick={(e) => handleNavClick('', e)}
              className={`font-label-md text-label-md transition-colors pb-1 border-b uppercase ${
                isLinkActive('')
                  ? 'text-primary border-primary font-medium'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              Collection
            </button>
            <button
              onClick={(e) => handleNavClick('objects', e)}
              className={`font-label-md text-label-md transition-colors pb-1 border-b uppercase ${
                isLinkActive('objects')
                  ? 'text-primary border-primary font-medium'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              Objects
            </button>
            <button
              onClick={(e) => handleNavClick('about', e)}
              className={`font-label-md text-label-md transition-colors pb-1 border-b uppercase ${
                isLinkActive('about')
                  ? 'text-primary border-primary font-medium'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              About
            </button>
            <button
              onClick={(e) => handleNavClick('journal', e)}
              className={`font-label-md text-label-md transition-colors pb-1 border-b uppercase ${
                isLinkActive('journal')
                  ? 'text-primary border-primary font-medium'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              Journal
            </button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hover:opacity-85 transition-opacity py-1">
              <span className="material-symbols-outlined text-[20px] block">search</span>
            </button>
            
            <button
              onClick={() => setCartOpen(true)}
              className="hover:opacity-85 transition-opacity flex items-center gap-1.5 py-1"
            >
              <span className="material-symbols-outlined text-[20px] block">shopping_bag</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-[11px] sm:text-xs">
                Cart ({totalItems})
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden hover:opacity-85 transition-opacity py-1"
            >
              <span className="material-symbols-outlined text-[24px] block">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#F2F1ED] border-b border-primary/20 flex flex-col md:hidden z-40 transition-all duration-300">
            <nav className="flex flex-col py-6 px-margin-mobile gap-4">
              <button
                className={`font-label-md text-label-md py-2 uppercase border-b border-primary/10 text-left ${
                  isLinkActive('') ? 'text-primary font-semibold' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick('', e)}
              >
                Collection
              </button>
              <button
                className={`font-label-md text-label-md py-2 uppercase border-b border-primary/10 text-left ${
                  isLinkActive('objects') ? 'text-primary font-semibold' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick('objects', e)}
              >
                Objects
              </button>
              <button
                className={`font-label-md text-label-md py-2 uppercase border-b border-primary/10 text-left ${
                  isLinkActive('about') ? 'text-primary font-semibold' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick('about', e)}
              >
                About
              </button>
              <button
                className={`font-label-md text-label-md py-2 uppercase text-left ${
                  isLinkActive('journal') ? 'text-primary font-semibold' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick('journal', e)}
              >
                Journal
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
