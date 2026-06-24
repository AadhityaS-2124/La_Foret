import React from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    setCheckoutStep
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setCartOpen(false); // Close cart drawer
    setCheckoutStep('processing'); // Trigger simulated checkout sequence
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#000000]/30 backdrop-blur-[1px] transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        {/* Drawer Panel */}
        <div
          className="w-screen max-w-md bg-[#F2F1ED] text-primary flex flex-col justify-between border-l border-primary/20"
          style={{ borderRadius: '0px' }}
        >
          {/* Header */}
          <div className="px-6 py-6 border-b border-primary/10 flex items-center justify-between">
            <h2 className="font-label-md text-label-md uppercase tracking-wider">Shopping Bag</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="flex items-center gap-1 text-secondary hover:text-primary transition-colors py-1"
            >
              <span className="material-symbols-outlined text-[20px] block">close</span>
              <span className="font-label-sm text-label-sm uppercase">Close</span>
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-20">
                <span className="material-symbols-outlined text-[48px] text-secondary mb-4">shopping_bag</span>
                <p className="font-body-lg text-body-lg text-secondary">Your shopping bag is empty.</p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="mt-6 px-6 py-3 border border-primary text-primary font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all"
                  style={{ borderRadius: '0px' }}
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              <div className="divide-y divide-primary/10">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="py-6 flex gap-4 first:pt-0 last:pb-0">
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-surface-container overflow-hidden flex-shrink-0">
                      <img
                        className="w-full h-full object-cover grayscale"
                        src={item.product.image}
                        alt={item.product.name}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-body-md text-body-md font-medium">{item.product.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-secondary hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                        <p className="font-label-sm text-label-sm text-secondary mt-1">
                          ${item.product.price} USD
                        </p>
                      </div>

                      {/* Quantity Selectors */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-primary/20" style={{ borderRadius: '0px' }}>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2.5 py-1 text-secondary hover:text-primary hover:bg-[#1A1A1A]/5 transition-colors font-medium"
                          >
                            —
                          </button>
                          <span className="px-3 py-1 font-label-sm text-label-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2.5 py-1 text-secondary hover:text-primary hover:bg-[#1A1A1A]/5 transition-colors font-medium"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-label-md text-label-md font-medium">
                          ${item.product.price * item.quantity} USD
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {cartItems.length > 0 && (
            <div className="px-6 py-8 bg-[#FBFBF9] border-t border-primary/10 space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">Subtotal</span>
                <span className="font-headline-md text-headline-md font-normal">${subtotal} USD</span>
              </div>
              <p className="font-label-sm text-label-sm text-secondary tracking-normal">
                Shipping, duties, and taxes calculated at checkout.
              </p>
              <button
                onClick={handleCheckoutClick}
                className="w-full bg-[#1A1A1A] text-[#FBFBF9] py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-accent-sage transition-all duration-300 border-0"
                style={{ borderRadius: '0px' }}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
