import React from 'react';

export const AboutView: React.FC = () => {
  return (
    <section className="min-h-screen pt-36 pb-24 bg-[#FBFBF9] text-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Title */}
        <div className="text-center mb-24">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">The Atelier Story</span>
          <h1 className="font-headline-xl text-[48px] sm:text-[56px] md:text-headline-xl mt-4 mb-8 text-primary italic font-light">
            "The Aesthetics of Silence"
          </h1>
          <div className="w-16 h-[1px] bg-primary mx-auto opacity-30"></div>
        </div>

        {/* Big Editorial Image */}
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden bg-surface-container mb-24">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGiaSm0IoZouvs1zzSf6EVh7mWzqn7_NfyUOpcGqFgToolxUlyxYdohh0gXMg-dWoqtVbtjpcBgE5KP5SrQwDkYHb7lQ6cS6aGPr3_KrdFIRGnPlcAATKLmOueeu2raTj3YGMmTuhiv_rk_MiGIz1e4mDuCYBdYFDCRzysFqpsx52T5d2AlYTnrm3_q8qbQyn2d4FlXbU7BDGTJ1Nbnsap02FHdRHCsykrcmFZapG62YxjRvTsxEfos9afuiiGbr-ym11YMdz4dAI"
            alt="Japanese architecturally-inspired atelier garden and framing"
          />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter mb-32">
          {/* Main Statement */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg font-normal mb-8 leading-tight">
              Honoring raw materials, structural clarity, and deliberate construction.
            </h2>
            <p className="font-body-lg text-body-lg text-secondary">
              At La Forêt, we design garments not as passing trends, but as structural objects meant to coexist with their wearer.
            </p>
          </div>

          {/* Detailed Paragraphs */}
          <div className="lg:col-span-7 space-y-8 text-secondary font-body-md text-body-md leading-relaxed text-justify-custom">
            <p>
              Established in 2024, our studio represents a deliberate synthesis of Japanese architectural rigor and Scandinavian functional warmth—a philosophy widely described as Japandi. We operate out of a restored timber Machiya in the heart of Kyoto and collaborate with micro-millers and wool farms globally to enforce an absolute traceable supply chain.
            </p>
            <p>
              Our design process is subtraction-based. We begin by drafting silhouette concepts inspired by brutalist geometry and traditional wood joints. We iterate continuously, removing buttons, seams, and linings until we arrive at the absolute, pure expression of the garment's form. If an element does not perform a functional duty, it does not earn its place on the pattern.
            </p>
            <p>
              We prioritize organic fabrics that carry histories. Our heavy linen is woven on traditional narrow shuttle looms in Belgium; our raw hemp and cotton fibers are colored using natural earth clays, ash, and plant juices. These textiles are designed to react to humidity, wear, and sunlight—developing a unique patina that reflects the story of the individual.
            </p>
          </div>
        </div>

        {/* 1px Blueprint Line */}
        <div className="w-full h-[1px] bg-primary/20 mb-32" />

        {/* Triple Pillar Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter mb-16">
          <div className="space-y-4">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Pillar 01</span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal">Radical Sourcing</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              We audit every farm, loom, and dye vat. Our New Zealand merino sheep roam freely, and our Kyoto weaving partners operate under fair, generational structures.
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Pillar 02</span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal">Zero-Waste Craft</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              We design pattern templates where pieces lock together like puzzles, leaving zero fabric waste. Any residual scraps are carded back into new yarn.
            </p>
          </div>
          <div className="space-y-4">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block">Pillar 03</span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal">Designed to Dismantle</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Every garment is stitched with organic cotton thread and fitted with zero plastic binders. At its end of life, it can be dismantled and fully returned to the soil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
