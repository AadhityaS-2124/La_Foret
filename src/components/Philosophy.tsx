import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <>
      {/* Brand Philosophy Block */}
      <section className="w-full bg-[#F2F1ED] py-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left: Quotation */}
          <div className="pr-0 md:pr-12">
            <blockquote className="font-headline-lg text-[32px] md:text-headline-lg italic leading-tight text-primary">
              "We believe that true luxury lies in the silence between the details. It is not what we add, but what we have the courage to leave out."
            </blockquote>
            <p className="font-label-md text-label-md mt-8 uppercase tracking-widest text-secondary">— The La Forêt Manifesto</p>
          </div>

          {/* Right: Micro-paragraphs */}
          <div className="space-y-12">
            <div className="border-l border-primary/20 pl-8">
              <h4 className="font-label-md text-label-md uppercase tracking-widest mb-3 text-primary">Traceable Supply Chains</h4>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Every fiber is accounted for. From the sheep farms of New Zealand to our atelier in Kyoto, we maintain a direct connection to every stage of creation.
              </p>
            </div>
            <div className="border-l border-primary/20 pl-8">
              <h4 className="font-label-md text-label-md uppercase tracking-widest mb-3 text-primary">Organic Textures</h4>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                We prioritize raw, untreated materials that age with the wearer. Linen, wool, and hemp treated only with earth-derived pigments.
              </p>
            </div>
            <div className="border-l border-primary/20 pl-8">
              <h4 className="font-label-md text-label-md uppercase tracking-widest mb-3 text-primary">Circular Lifecycle</h4>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Designed to be dismantled. Our zero-waste patterns ensure that every scrap is repurposed into new textiles or biodegradable packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Showcase (Secondary imagery) */}
      <section className="py-40 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter">
          {/* Silk loom weaving macro */}
          <div
            className="w-full md:w-1/3 h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhn7Bp6y5lD4vqqH_jgvsGo9_gMjAssQBzNZHmfGfh6mz7DNHMsSUAg-AFkrz7Yf4Qy4bulq6PKgBOvovWne7w4aJov5LPDyqTo1zsY4XwH_GVo7XpjlJyYehncJ0-tNi7Y5Tm-GWf6j9es3Q1bCjhWI-uUvoKNq5Et4aWO20TCgg2OcbFEtBiCUKwCZqeONU5_J9SRiYAVCTPv7Y8gri00vp8SYpFq0YIKB2brSL8hZGdfGE4pGNTDNehNzAYOsdS6TwqY6kyxKE')`,
            }}
            aria-label="Raw silk textile macro weave detailing hand-craftsmanship."
          />
          
          {/* Japanese architectural structure */}
          <div
            className="w-full md:w-2/3 h-[500px] bg-cover bg-center flex items-end p-6 sm:p-10"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGiaSm0IoZouvs1zzSf6EVh7mWzqn7_NfyUOpcGqFgToolxUlyxYdohh0gXMg-dWoqtVbtjpcBgE5KP5SrQwDkYHb7lQ6cS6aGPr3_KrdFIRGnPlcAATKLmOueeu2raTj3YGMmTuhiv_rk_MiGIz1e4mDuCYBdYFDCRzysFqpsx52T5d2AlYTnrm3_q8qbQyn2d4FlXbU7BDGTJ1Nbnsap02FHdRHCsykrcmFZapG62YxjRvTsxEfos9afuiiGbr-ym11YMdz4dAI')`,
            }}
            aria-label="Modern architecture overlooking dry Japanese sand garden."
          >
            <div className="bg-[#FBFBF9] p-8 max-w-sm border border-primary/10">
              <h5 className="font-label-md text-label-md uppercase mb-4 tracking-wider text-primary">Architecture as Muse</h5>
              <p className="font-body-md text-body-md text-secondary">
                Our silhouettes are informed by the brutalist forms of Tange and the rhythmic simplicity of Scandinavian woodcraft. This environmental harmony serves as the primary inspiration for the brand La Forêt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
