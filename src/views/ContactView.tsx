import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="min-h-screen pt-36 pb-24 bg-[#FBFBF9] text-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Title */}
        <div className="text-center mb-20">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Atelier Communications</span>
          <h1 className="font-headline-lg text-headline-lg mt-2 text-primary">Get In Touch</h1>
          <div className="w-12 h-[1px] bg-primary/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-gutter items-stretch">
          {/* Left Column: Studio Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-primary/10 pb-12 lg:pb-0 lg:pr-16">
            <div className="space-y-12">
              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-3">Kyoto Workroom</h3>
                <p className="font-body-md text-body-md text-primary leading-relaxed">
                  La Forêt Atelier<br />
                  48 Gionmachi Minamigawa<br />
                  Higashiyama Ward, Kyoto 605-0074<br />
                  Japan
                </p>
              </div>

              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-3">Atelier Hours</h3>
                <p className="font-body-md text-body-md text-primary leading-relaxed">
                  Tuesday – Saturday<br />
                  11:00 am – 6:00 pm JST
                </p>
              </div>

              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-3">Electronic Mail</h3>
                <a
                  href="mailto:atelier@laforet.com"
                  className="font-body-md text-body-md text-primary hover:text-accent-sage transition-colors underline"
                >
                  atelier@laforet.com
                </a>
              </div>

              <div>
                <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-3">Voice Communication</h3>
                <p className="font-body-md text-body-md text-primary">
                  +81 (75) 555-0198
                </p>
              </div>
            </div>

            <div className="mt-16 text-secondary font-label-sm text-[11px] uppercase tracking-widest hidden lg:block">
              La Forêt • Kyoto • Copenhagen
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8">
            {isSubmitted ? (
              <div className="bg-[#F2F1ED] p-10 border border-primary/10 text-center" style={{ borderRadius: '0px' }}>
                <span className="material-symbols-outlined text-[48px] text-accent-sage mb-4 animate-pulse">
                  mark_email_read
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4 font-normal">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="font-body-md text-body-md text-secondary max-w-md mx-auto mb-8">
                  Thank you for contacting the La Forêt Atelier. A member of our design team will review your message and reply within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-3 border border-primary text-primary font-label-sm text-label-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all"
                  style={{ borderRadius: '0px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Kenji Tange"
                      className="bg-transparent border-0 border-b border-primary/25 focus:border-primary focus:ring-0 pb-2 text-primary font-body-md outline-none transition-all placeholder:text-primary/20"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. client@domain.com"
                      className="bg-transparent border-0 border-b border-primary/25 focus:border-primary focus:ring-0 pb-2 text-primary font-body-md outline-none transition-all placeholder:text-primary/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Sizing Inquiry for Structural Blazer"
                    className="bg-transparent border-0 border-b border-primary/25 focus:border-primary focus:ring-0 pb-2 text-primary font-body-md outline-none transition-all placeholder:text-primary/20"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your inquiry in detail..."
                    className="bg-transparent border-0 border-b border-primary/25 focus:border-primary focus:ring-0 pb-2 text-primary font-body-md outline-none transition-all placeholder:text-primary/20 resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#1A1A1A] text-[#FBFBF9] py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-accent-sage transition-all duration-300 border-0"
                    style={{ borderRadius: '0px' }}
                  >
                    DISPATCH MESSAGE
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
