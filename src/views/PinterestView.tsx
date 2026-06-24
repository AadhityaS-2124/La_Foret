import React, { useState } from 'react';

interface Pin {
  id: string;
  title: string;
  image: string;
  category: string;
  saved: boolean;
}

const initialPins: Pin[] = [
  {
    id: "pin1",
    title: "Tokyo Cathedral Brutalist Architecture (Tange)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    category: "Brutalism",
    saved: false
  },
  {
    id: "pin2",
    title: "Kyoto Machiya Shoji Door Framing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGiaSm0IoZouvs1zzSf6EVh7mWzqn7_NfyUOpcGqFgToolxUlyxYdohh0gXMg-dWoqtVbtjpcBgE5KP5SrQwDkYHb7lQ6cS6aGPr3_KrdFIRGnPlcAATKLmOueeu2raTj3YGMmTuhiv_rk_MiGIz1e4mDuCYBdYFDCRzysFqpsx52T5d2AlYTnrm3_q8qbQyn2d4FlXbU7BDGTJ1Nbnsap02FHdRHCsykrcmFZapG62YxjRvTsxEfos9afuiiGbr-ym11YMdz4dAI",
    category: "Timber Work",
    saved: false
  },
  {
    id: "pin3",
    title: "Raw Silk Loom Weaving Close-up",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhn7Bp6y5lD4vqqH_jgvsGo9_gMjAssQBzNZHmfGfh6mz7DNHMsSUAg-AFkrz7Yf4Qy4bulq6PKgBOvovWne7w4aJov5LPDyqTo1zsY4XwH_GVo7XpjlJyYehncJ0-tNi7Y5Tm-GWf6j9es3Q1bCjhWI-uUvoKNq5Et4aWO20TCgg2OcbFEtBiCUKwCZqeONU5_J9SRiYAVCTPv7Y8gri00vp8SYpFq0YIKB2brSL8hZGdfGE4pGNTDNehNzAYOsdS6TwqY6kyxKE",
    category: "Loom Craft",
    saved: false
  },
  {
    id: "pin4",
    title: "Draped Wool Cocoon Texture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkUDPIZYsSunFaI37pZRQsG8zb6j11WED8o55Iusui1MhkwfjIDvXjpSU00rJ9jD8ZVS6zHpwLe3rodJA0J2-Ox2616Pt53qAvr5__y2jJAOVwRJnkgKGa_IM-TVhg66eEhHQI4VSOx58W_o6BgjtzTd7tTxMyID6HoKIsfd4Oreye4qLM7-DlEBEbZkJoKt8N9Ayg-NcfZO43mAswq3zm6KPNNSVHBb08oundm5lhuSLzkq_XMcx5RRvzcnKnmk9M_K5Vol6CjNk",
    category: "Merino Wool",
    saved: false
  },
  {
    id: "pin5",
    title: "Diagonal Folded Paper Origami",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=600",
    category: "Geometry",
    saved: false
  },
  {
    id: "pin6",
    title: "Dry Zen Garden Sand Ripple Pattern",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600",
    category: "Ma (Silence)",
    saved: false
  },
  {
    id: "pin7",
    title: "Concrete Panel Joinery Line details",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600",
    category: "Materials",
    saved: false
  },
  {
    id: "pin8",
    title: "Atelier Studio Blueprint Drawings",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpRR5MSf6-XLJ--c6KlJyXPfa3287xxxCE7W6MmBUOB4G7fV-wwCTy4NkMacnsgl5xCsLKWPvqECO6o0uxE8aJp4lrKd-k-A52EMnsxTfDpXFNyCcoGIo18dU0EjiaUQ2z0i1yHwzqDsUo_LWkOMiePynOugq5pvdjnUIZAUmZZrJFaUD6QD7EJNduZlueaYeiNuf8u1p-0P7ghtciQiSkB0ziyd1CUUwRReakyETnzvq4tZanaF1EKHSnIH1AeTS8NZsuBVqfB0U",
    category: "Precision Grid",
    saved: false
  }
];

export const PinterestView: React.FC = () => {
  const [pins, setPins] = useState<Pin[]>(initialPins);

  const toggleSave = (pinId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPins(pins.map(p => {
      if (p.id === pinId) {
        return { ...p, saved: !p.saved };
      }
      return p;
    }));
  };

  return (
    <section className="min-h-screen pt-36 pb-24 bg-[#FBFBF9] text-primary">
      <div className="max-w-5xl mx-auto px-margin-mobile md:px-0">
        
        {/* Profile Info */}
        <div className="text-center mb-16 max-w-lg mx-auto">
          <div className="w-16 h-16 bg-[#F2F1ED] text-primary font-headline-md text-xl flex items-center justify-center mx-auto mb-6 border border-primary/10" style={{ borderRadius: '9999px' }}>
            LF
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2">La Forêt Atelier</h1>
          <div className="flex justify-center gap-4 font-label-sm text-label-sm text-secondary uppercase mb-6 tracking-widest">
            <span>12 Boards</span>
            <span>•</span>
            <span>324 Pins</span>
            <span>•</span>
            <span>12k views</span>
          </div>
          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            Aesthetic inspiration, brutalist forms, Kyoto Machiya details, and organic fabric swatches. Curated by the design team of La Forêt.
          </p>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-4 gap-6 space-y-6">
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="break-inside-avoid bg-surface-container border border-primary/5 relative overflow-hidden group flex flex-col"
              style={{ borderRadius: '0px' }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src={pin.image}
                  alt={pin.title}
                />
                
                {/* Save Button Overlay */}
                <div className="absolute inset-0 bg-[#000000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-4">
                  <button
                    onClick={(e) => toggleSave(pin.id, e)}
                    className={`px-4 py-2 font-label-sm text-label-sm uppercase tracking-widest transition-all ${
                      pin.saved
                        ? 'bg-accent-sage text-white'
                        : 'bg-[#1A1A1A] text-[#FBFBF9] hover:bg-accent-sage'
                    }`}
                    style={{ borderRadius: '0px' }}
                  >
                    {pin.saved ? 'Saved' : 'Save'}
                  </button>
                </div>
              </div>

              {/* Pin Details */}
              <div className="p-4 bg-[#F2F1ED] flex-grow">
                <span className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block mb-2">
                  {pin.category}
                </span>
                <p className="font-body-md text-body-md text-primary leading-snug line-clamp-2">
                  {pin.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
