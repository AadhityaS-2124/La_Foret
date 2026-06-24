import React from 'react';

export const ShippingView: React.FC = () => {
  return (
    <section className="min-h-screen pt-36 pb-24 bg-[#FBFBF9] text-primary">
      <div className="max-w-2xl mx-auto px-margin-mobile md:px-0">
        <h1 className="font-headline-lg text-headline-lg mb-4 text-primary">Shipping & Returns</h1>
        <p className="font-body-md text-body-md text-secondary mb-12">
          Details regarding delivery timelines, custom duties, and our returns framework.
        </p>

        <div className="w-full h-[1px] bg-primary/20 mb-12" />

        <div className="space-y-10 font-body-md text-body-md text-secondary leading-relaxed text-justify-custom font-light">
          <div>
            <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-3">1. International Shipping</h3>
            <p>
              We ship our objects globally from our Kyoto atelier. All orders are packed by hand in biodegradable structural card boxes with zero plastics.
            </p>
            <table className="w-full mt-4 border-collapse font-label-sm text-label-sm text-left">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="py-2 text-primary">Destination</th>
                  <th className="py-2 text-primary">Delivery Timeline</th>
                  <th className="py-2 text-primary">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 text-secondary">
                <tr>
                  <td className="py-3">Japan (Domestic)</td>
                  <td className="py-3">1 - 3 Business Days</td>
                  <td className="py-3">Complimentary</td>
                </tr>
                <tr>
                  <td className="py-3">North America & Europe</td>
                  <td className="py-3">5 - 9 Business Days</td>
                  <td className="py-3">$25 USD</td>
                </tr>
                <tr>
                  <td className="py-3">Rest of the World</td>
                  <td className="py-3">7 - 12 Business Days</td>
                  <td className="py-3">$35 USD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-3">2. Customs & Import Duties</h3>
            <p>
              For international shipments, customs duties and import taxes may be assessed by your local postal authority upon arrival. These charges are determined by local customs legislation and are the sole responsibility of the customer.
            </p>
          </div>

          <div>
            <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-3">3. Returns Framework</h3>
            <p>
              We accept returns within 14 days of delivery. To maintain our sustainability commitments and reduce logistics overhead, we request that you evaluate measurements carefully before buying:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Objects must be returned in their original condition—unworn, unwashed, and with all structural linen tags intact.</li>
              <li>Returns must be packed in the original zero-waste shipping boxes to avoid damage.</li>
              <li>Return shipping costs and associated duties are the responsibility of the customer.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-label-sm text-label-sm uppercase tracking-wider text-primary mb-3">4. Exchanging Objects</h3>
            <p>
              Due to the limited batch production of our silhouettes, we cannot guarantee exchanges. If you require a different size or object, we recommend returning your purchase for a store credit and placing a new order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
