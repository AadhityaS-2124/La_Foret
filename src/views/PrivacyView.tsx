import React from 'react';

export const PrivacyView: React.FC = () => {
  return (
    <section className="min-h-screen pt-36 pb-24 bg-[#FBFBF9] text-primary">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-0">
        <h1 className="font-headline-lg text-headline-lg mb-4 text-primary">Privacy Policy</h1>
        <p className="font-body-md text-body-md text-secondary mb-12">
          Last updated: June 24, 2026
        </p>

        <div className="w-full h-[1px] bg-primary/20 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xs text-secondary/80 leading-relaxed text-justify font-light space-y-0">
          <div className="space-y-8">
            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">1. Scope of Reflection & Commitments</h3>
              <p>
                This Privacy Policy describes the policies and procedures of La Forêt ("we", "our", "us", or "the Atelier") regarding the collection, transmission, recording, processing, and safeguarding of digital data. We operate under strict tenets of Japandi design, which prioritize simplicity, structure, and respect for individual boundaries. This architectural philosophy is integrated directly into our code and data layer: we do not trade, monetize, sell, or rent customer information, and we limit all tracking mechanisms to the absolute minimum necessary to coordinate transaction checkouts, calculate logistics, and transmit occasional written reflections.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">2. Categories of Personal Data Collected</h3>
              <p>
                In order to process order fulfillment, we collect several categories of information that you actively provide to our studio during your interaction:
              </p>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                <li><strong>Identity Information:</strong> Legal name, surname, and title.</li>
                <li><strong>Contact details:</strong> Shipping address, billing address, active email address, and telephone number.</li>
                <li><strong>Financial Records:</strong> Transaction subtotals, object inventories, billing summaries, and checkout states. Payment credentials (card numbers, routing codes) are processed immediately by certified secure gateways and are never visible to or stored on our servers.</li>
                <li><strong>Communication Logs:</strong> Email interactions, contact form submissions, and direct message history within our social channels.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">3. Automatically Logged Data & Technology</h3>
              <p>
                When navigating our digital catalog, our systems automatically collect limited structural and technical data. This includes IP addresses, browser agents, operating system configurations, referring site URLs, page view events, and time spent on specific object views. This information is processed exclusively in an aggregated, non-identifying manner to evaluate system speeds, manage cache instances, and identify technical bottlenecks.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">4. Cookies and Active Preferences</h3>
              <p>
                Our website utilizes basic, functional cookies to preserve the state of your shopping bag, manage active navigation router history, and cache font choices. We do not integrate commercial third-party marketing trackers, cross-site advertising scripts, or invasive user-tracking pixels. If you wish to disable cookies, you may configure your web browser's privacy parameters to refuse all cookie transactions; however, doing so will prevent the e-commerce checkout interface from operating correctly.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">5. Legal Bases for Data Processing</h3>
              <p>
                We process your personal information under several distinct legal frameworks:
              </p>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                <li><strong>Contractual Obligation:</strong> To assemble, package, invoice, and deliver purchased wardrobe garments and objects.</li>
                <li><strong>Legitimate Interest:</strong> To secure our infrastructure, identify fraudulent transactions, and maintain atelier communications.</li>
                <li><strong>Consent:</strong> When you voluntarily register for our newsletter reflections or submit a inquiry form.</li>
                <li><strong>Statutory Compliance:</strong> To satisfy tax audit requirements, corporate reporting rules, and legal mandates from jurisdictions in which we operate.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">6. Payment Processing Protocol</h3>
              <p>
                All financial operations conducted on this storefront are encrypted utilizing TLS 1.3 encryption standards. The processing of card details is governed exclusively by international PCI-DSS compliance regulations, overseen by our certified partner payment networks. Our studio personnel never receive, store, or manipulate credit card credentials, securing your financial transactions against common digital threats.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">7. Logistics & Third-Party Service Providers</h3>
              <p>
                We share structured contact details with a highly curated selection of third-party fulfillment services:
              </p>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                <li><strong>Shipping & Postal Couriers:</strong> DHL, FedEx, and Japan Post to complete physical shipping logistics.</li>
                <li><strong>Data Infrastructure Providers:</strong> Host servers and database engines located in secure regional centers.</li>
                <li><strong>Atelier Communication Services:</strong> Dedicated engines to manage newsletter subscription lists and client emails.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 !mt-0">
            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">8. Data Preservation & Retaining Policies</h3>
              <p>
                We store your personal details only for the duration required to complete the purposes outlined in Section 5. Tax documents and purchase transactions are stored for a mandatory statutory period of seven (7) years under local corporate accounting laws. Marketing email addresses are retained continuously until you choose to unsubscribe, at which point your data is immediately pruned from our active distribution lists.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">9. Transnational Data Transfers</h3>
              <p>
                Because La Forêt maintains physical ateliers in Kyoto, Japan, and coordinates logistics with textile mills in Belgium, Italy, and New Zealand, your data may be transferred, stored, or accessed across international borders. These jurisdictions may possess different privacy protection frameworks. In all such cases, we ensure that transfers are protected by standard contractual clauses and security compliance measures to ensure equivalent data protection.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">10. Security Controls and Protections</h3>
              <p>
                We employ physical, technical, and administrative protections to secure user information. Access to client data is strictly limited to authorized studio directors and developers on a need-to-know basis. Our systems undergo regular vulnerability checks, and we maintain secured firewalls to isolate our database from external networks.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">11. Your Rights under GDPR, CCPA, & APPI</h3>
              <p>
                Depending on your location, you possess standard digital rights regarding your personal information:
              </p>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                <li><strong>Right of Access:</strong> The right to demand a copy of the personal details we maintain.</li>
                <li><strong>Right of Rectification:</strong> The right to request correction of inaccurate data.</li>
                <li><strong>Right of Erasure:</strong> The right to demand complete deletion of your records.</li>
                <li><strong>Right to Restrict Processing:</strong> The right to pause processing under disputed cases.</li>
                <li><strong>Right to Data Portability:</strong> The right to receive your data in a structured, machine-readable format.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">12. Data Breaches & Response Measures</h3>
              <p>
                In the highly unlikely event of a system compromise or unauthorized access to personal records, we commit to notifying relevant supervisory authorities and affected individuals within seventy-two (72) hours of breach identification. We will provide detailed reports regarding the nature of the compromise, steps taken to mitigate harm, and recommendations for user security.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">13. Children's Privacy Guidelines</h3>
              <p>
                Our storefront, collection catalog, and design reflections are intended exclusively for adult users. We do not knowingly collect, log, or maintain data from individuals under eighteen (18) years of age. If we learn that a minor has submitted personal details, we will take immediate measures to purge those records from our active servers.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">14. Modifications to This Policy</h3>
              <p>
                We reserve the right to revise this Privacy Policy to reflect changes in our data processing methods or modifications to privacy regulations. Any updates will be posted directly to this URL with a revised date stamp. We encourage you to inspect this page periodically to remain informed about our privacy safeguards.
              </p>
            </div>

            <div>
              <h3 className="font-label-sm text-[11px] uppercase tracking-widest text-primary mb-2">15. Contact Studio Coordinator</h3>
              <p>
                For questions regarding this policy, to request data inspection, or to exercise your digital deletion rights, please write to our Kyoto coordinator at:
                <br />
                <span className="block mt-2 font-normal text-primary">
                  La Forêt Atelier
                  <br />
                  Attn: Data Privacy Officer
                  <br />
                  Gionmachi Minamigawa, Higashiyama Ward, Kyoto 605-0074, Japan
                  <br />
                  Email: <a href="mailto:privacy@laforet.com" className="underline hover:text-accent-sage transition-colors">privacy@laforet.com</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
