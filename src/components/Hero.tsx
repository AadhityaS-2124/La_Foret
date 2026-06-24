import React from 'react';
import { useRouter } from '../context/RouterContext';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="min-h-screen pt-32 pb-20 md:py-0 md:h-[921px] flex flex-col md:flex-row items-center overflow-hidden border-b border-primary/10">
      {/* Left Imagery (60%) */}
      <div className="w-full md:w-[60%] h-[512px] md:h-full relative overflow-hidden group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkUDPIZYsSunFaI37pZRQsG8zb6j11WED8o55Iusui1MhkwfjIDvXjpSU00rJ9jD8ZVS6zHpwLe3rodJA0J2-Ox2616Pt53qAvr5__y2jJAOVwRJnkgKGa_IM-TVhg66eEhHQI4VSOx58W_o6BgjtzTd7tTxMyID6HoKIsfd4Oreye4qLM7-DlEBEbZkJoKt8N9Ayg-NcfZO43mAswq3zm6KPNNSVHBb08oundm5lhuSLzkq_XMcx5RRvzcnKnmk9M_K5Vol6CjNk')`,
          }}
          aria-label="A high-fashion editorial photograph of a minimalist architectural coat in neutral charcoal wool draped over a structural chair."
        />
      </div>

      {/* Right Content (40%) */}
      <div className="w-full md:w-[40%] px-margin-mobile md:px-16 py-12 md:py-0 flex flex-col justify-center bg-[#FBFBF9] h-full">
        <h1 className="font-headline-xl text-[48px] sm:text-[56px] md:text-headline-xl mb-6 text-primary leading-[1.1] tracking-tight">
          Form follows function.
        </h1>
        <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-md">
          Wardrobe essentials designed with architectural intent and zero-waste materials. Crafted for the intentional life.
        </p>
        <div>
          <button
            onClick={() => navigate('objects')}
            className="px-10 py-5 border border-primary text-primary font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-[#FBFBF9] transition-all duration-300"
          >
            Explore the Collection
          </button>
        </div>
      </div>
    </section>
  );
};
