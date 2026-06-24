import React from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductGrid: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-40 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto">
      <div className="text-center mb-24">
        <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">The Living Edit</h2>
        <div className="w-12 h-[1px] bg-primary mx-auto opacity-30"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-gutter">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer relative flex flex-col">
            {/* Image Container with Hover Action */}
            <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-surface-container relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src={product.image}
                alt={product.alt}
              />
              
              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-[#F2F1ED]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="bg-[#1A1A1A] text-[#FBFBF9] px-6 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-accent-sage transition-all duration-300 shadow-none border-0"
                  style={{ borderRadius: '0px' }}
                >
                  QUICK ADD +
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary mb-1">{product.id}</span>
                <h3 className="font-body-lg text-body-lg font-normal text-primary">{product.name}</h3>
              </div>
              <span className="font-label-md text-label-md text-primary">${product.price} USD</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
