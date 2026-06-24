import React, { useState, useMemo } from 'react';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';

type CategoryFilter = 'all' | 'outerwear' | 'trousers' | 'knitwear' | 'apparel' | 'accessories';
type SortOption = 'default' | 'price-asc' | 'price-desc';

export const ObjectsView: React.FC = () => {
  const { addToCart } = useCart();
  const { navigate } = useRouter();
  
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [activeSort, setActiveSort] = useState<SortOption>('default');

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'All Objects', value: 'all' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Trousers', value: 'trousers' },
    { label: 'Knitwear', value: 'knitwear' },
    { label: 'Apparel', value: 'apparel' },
    { label: 'Accessories', value: 'accessories' }
  ];

  // Filter and Sort Logic
  const processedProducts = useMemo(() => {
    let list = [...products];

    // Filter
    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    // Sort
    if (activeSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [activeCategory, activeSort]);

  return (
    <section className="min-h-screen pt-36 pb-24 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Our Objects</h1>
        <p className="font-body-md text-body-md text-secondary max-w-md mx-auto">
          An edit of architectural essentials engineered for durability and intentional utility.
        </p>
      </div>

      {/* Filters and Sorting Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-primary/20 pb-6 mb-16 gap-6">
        {/* Category Tags */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`font-label-sm text-label-sm uppercase tracking-wider transition-colors pb-1 border-b ${
                activeCategory === cat.value
                  ? 'text-primary border-primary font-medium'
                  : 'text-secondary border-transparent hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown (Styled in hard-edge minimalism) */}
        <div className="flex items-center gap-3">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Sort by</span>
          <select
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value as SortOption)}
            className="bg-[#FBFBF9] border border-primary/20 text-primary font-label-sm text-label-sm uppercase tracking-wider px-3 py-2 outline-none focus:border-primary cursor-pointer"
            style={{ borderRadius: '0px' }}
          >
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {processedProducts.length === 0 ? (
        <div className="py-24 text-center">
          <span className="material-symbols-outlined text-[48px] text-secondary mb-4">search_off</span>
          <p className="font-body-lg text-body-lg text-secondary">No items found matching the selected category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-gutter">
          {processedProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`objects/${product.id}`)}
              className="group cursor-pointer relative flex flex-col"
            >
              {/* Image Container with Hover Quick Add */}
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
                    className="bg-[#1A1A1A] text-[#FBFBF9] px-6 py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-accent-sage transition-all duration-300 border-0"
                    style={{ borderRadius: '0px' }}
                  >
                    QUICK ADD +
                  </button>
                </div>
              </div>

              {/* Product Info */}
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
      )}
    </section>
  );
};
