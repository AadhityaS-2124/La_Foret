import React from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';

interface ProductDetailViewProps {
  productId: string;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ productId }) => {
  const { addToCart, setCartOpen } = useCart();
  const { navigate } = useRouter();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <section className="min-h-screen pt-36 pb-24 px-margin-mobile flex flex-col items-center justify-center text-center bg-[#FBFBF9]">
        <span className="material-symbols-outlined text-[64px] text-secondary mb-4">error</span>
        <h1 className="font-headline-lg text-headline-lg mb-2">Object Not Found</h1>
        <p className="font-body-md text-body-md text-secondary mb-8">
          The requested architectural object could not be resolved.
        </p>
        <button
          onClick={() => navigate('objects')}
          className="px-8 py-4 border border-primary text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
        >
          Return to Objects
        </button>
      </section>
    );
  }

  const handleAddToBag = () => {
    addToCart(product);
    setCartOpen(true); // Open the drawer immediately to show success
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto">
      {/* Back Link */}
      <div className="mb-12">
        <button
          onClick={() => navigate('objects')}
          className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors py-1 group"
        >
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider">Back to Objects</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
        {/* Left: Image (60%) */}
        <div className="w-full lg:w-[55%] bg-surface-container overflow-hidden">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms]"
            src={product.image}
            alt={product.alt}
          />
        </div>

        {/* Right: Technical Specs & Add to Bag (45%) */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between py-2">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-2">
              Object {product.id} • {product.category}
            </span>
            <h1 className="font-headline-lg text-[32px] sm:text-headline-lg text-primary mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="font-headline-md text-headline-md text-primary mb-8 font-light">
              ${product.price} USD
            </p>

            <div className="w-full h-[1px] bg-primary/10 mb-8" />

            {/* Description */}
            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">Reflections</h4>
                <p className="font-body-md text-body-md text-primary leading-relaxed text-justify-custom">
                  {product.description}
                </p>
              </div>

              <div>
                <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">Materials</h4>
                <p className="font-body-md text-body-md text-secondary">
                  {product.materials}
                </p>
              </div>

              <div>
                <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">Sizing & Fit</h4>
                <p className="font-body-md text-body-md text-secondary">
                  {product.sizing}
                </p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-primary/10 mb-8" />

            {/* Design Details */}
            <div className="mb-12">
              <h4 className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-4">Atelier Specifications</h4>
              <ul className="space-y-3">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 bg-primary/40 mt-2.5 flex-shrink-0" />
                    <span className="font-body-md text-body-md text-primary">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <button
              onClick={handleAddToBag}
              className="w-full bg-[#1A1A1A] text-[#FBFBF9] py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-accent-sage transition-all duration-300 border-0"
              style={{ borderRadius: '0px' }}
            >
              ADD TO BAG • ${product.price} USD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
