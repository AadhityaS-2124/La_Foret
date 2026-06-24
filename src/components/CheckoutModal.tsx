import React, { useEffect, useState } from 'react';
import { useCart, CheckoutStep } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const { checkoutStep, setCheckoutStep, clearCart } = useCart();
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (checkoutStep === 'idle') {
      setProgressWidth(0);
      return;
    }

    if (checkoutStep === 'processing') {
      setProgressWidth(10);
      const timer1 = setTimeout(() => {
        setCheckoutStep('finalizing');
      }, 1500);
      return () => clearTimeout(timer1);
    }

    if (checkoutStep === 'finalizing') {
      setProgressWidth(60);
      const timer2 = setTimeout(() => {
        setCheckoutStep('success');
      }, 1500);
      return () => clearTimeout(timer2);
    }

    if (checkoutStep === 'success') {
      setProgressWidth(100);
      const timer3 = setTimeout(() => {
        clearCart();
        setCheckoutStep('idle');
      }, 2000);
      return () => clearTimeout(timer3);
    }
  }, [checkoutStep, setCheckoutStep, clearCart]);

  if (checkoutStep === 'idle') return null;

  const getStepText = () => {
    switch (checkoutStep) {
      case 'processing':
        return 'Processing Secure Payment...';
      case 'finalizing':
        return 'Finalizing Order...';
      case 'success':
        return 'Order Placed Successfully!';
      default:
        return '';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/40 backdrop-blur-[1px]">
      {/* Modal Dialog */}
      <div
        className="w-full max-w-md bg-[#FBFBF9] text-primary p-10 border border-primary relative flex flex-col items-center justify-center text-center"
        style={{ borderRadius: '0px' }}
      >
        {/* Minimalist Icon / Status */}
        <div className="mb-6">
          {checkoutStep === 'success' ? (
            <span className="material-symbols-outlined text-[48px] text-accent-sage animate-bounce">
              check_circle
            </span>
          ) : (
            <span className="material-symbols-outlined text-[48px] text-primary animate-spin">
              progress_activity
            </span>
          )}
        </div>

        {/* Status Text */}
        <h3 className="font-headline-md text-headline-md font-normal mb-8 leading-tight">
          {getStepText()}
        </h3>

        {/* Minimalist Progress Line */}
        <div className="w-full h-[1px] bg-primary/10 relative overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-[1500ms] ease-out"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        {/* Rebranding Notice */}
        <div className="mt-8 text-secondary font-label-sm text-[11px] uppercase tracking-widest">
          La Forêt Atelier • Secured Transaction
        </div>
      </div>
    </div>
  );
};
