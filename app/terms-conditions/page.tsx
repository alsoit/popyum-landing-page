import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Pop Yum',
};

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose">
          
          <section className="mb-12">
            <p className="mb-4 text-lg font-semibold">
              Please Note: These terms apply to retail purchases only. Wholesale orders have separate terms.
            </p>
          </section>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Welcome to Pop Yum!</h2>
            <p className="mb-4">
              This website www.popyum.co.uk is owned and operated by Pop Yum Ltd. ("Pop Yum", "we", "us", or "our"). 
              By using our website and placing an order, you agree to these Terms of Service and our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>. 
              If you disagree, please don't use our website. We reserve the right to update these terms at any time. 
              The latest version will be displayed on our website with the date it was last updated. By continuing to 
              use the site after any changes are posted, you agree to the new terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Security & Privacy</h2>
            <p className="mb-4">
              We use secure payment processing to ensure your information is safe. We comply with data protection 
              regulations and will not share your personal information with anyone.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Feedback & Complaints</h2>
            <p className="mb-4">
              We value your feedback! Contact us at info@popyum.com with any comments or concerns.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Copyright</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, and images, is our property or the property of 
              our respective owners and is protected by copyright laws.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Website Terms of Use</h2>
            <p className="mb-4">
              The information on this website is for general guidance only. Products and prices are subject to change. 
              We own the copyright to all website materials.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Unlawful Use</h2>
            <p className="mb-4">
              This website is for lawful purposes only. Do not use it in any way that harms Pop Yum, other users, 
              or the website's functionality.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Notices</h2>
            <p className="mb-4">
              Unless stated otherwise, all communication from you to us must be written and sent to our contact address 
              listed above. Notices from us will be displayed on our website.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Invalidity</h2>
            <p className="mb-4">
              If any part of these Terms of Service is unenforceable, the remaining terms will still be valid.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Events Beyond Our Control</h2>
            <p className="mb-4">
              We are not liable for any delays or failures in delivery or product defects caused by events beyond our 
              reasonable control, such as strikes, natural disasters, or technical issues.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Pricing & Product Information</h2>
            <p className="mb-4">
              Prices are shown on the website at the time of purchase. We strive for accurate descriptions and images, 
              but there may be slight variations. All prices are in £ and include applicable taxes.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Payment</h2>
            <p className="mb-4">
              We accept all major credit and debit cards through Stripe for secure transactions. Payment is processed at checkout. 
              The name and billing address must match the cardholder's information. You'll receive an order confirmation with 
              payment details. All transactions will be carried out in GBP. We accept the following credit/debit cards:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>MasterCard</li>
              <li>Visa</li>
              <li>Maestro/Solel/Visa Debit</li>
              <li>Electron/Delta</li>
              <li>AMEX</li>
            </ul>
            <p className="mb-4">
              All prices quoted include 20.00% VAT. Payment will be processed at the time of order. The name and billing address 
              given must be the same as the registered name and address of the cardholder. In accordance with the standing Consumer 
              Protection Distance Selling Regulations (2000) we will mail you details of your order and confirmation details of payment. 
              This website operates on an 'invitation to treat' basis and not as an 'offer for sale' as a result, Pop Yum Foods Ltd. 
              reserves the right to decline orders which cannot be fulfilled on the basis outlined in this document.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">12. Order Changes</h2>
            <p className="mb-4">
              We process orders quickly, so changes are usually not possible. Please double-check your delivery and contact 
              information before checkout.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Discounts</h2>
            <p className="mb-4">
              To redeem a discount, enter the code at checkout. We cannot apply discounts if a valid code isn't entered. 
              Discounts have specific terms and conditions, and only one code applies per order. Discounts may not apply to 
              sale items or bundle products.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">14. Resale & Distribution</h2>
            <p className="mb-4">
              Reselling Pop Yum products on online marketplaces like Amazon or eBay is prohibited without our express permission.
            </p>
          </section>

          {/* Section 15 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">15. Availability</h2>
            <p className="mb-4">
              We strive to have all products in stock, but sometimes we run out. If we can't fulfil your order, we'll let you know 
              ASAP and offer a full refund. During peak times, delivery may take a few extra days, but we'll notify you on the website.
            </p>
          </section>

          {/* Section 16 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">16. Delivery</h2>
            <p className="mb-4">
              We offer various delivery options, including international shipping. See our delivery section for details. We take 
              care to package your popcorn securely, but we cannot guarantee perfect conditions for international orders outside 
              the United Kingdom. Delivery occurs Monday-Friday, excluding holidays.
            </p>
          </section>

          {/* Section 17 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">17. Returns</h2>
            <p className="mb-4">
              We want you to love Pop Yum! If you're not happy, you can return unopened and undamaged saleable products within 
              30 days of purchase for a full refund or replacement. Return shipping is covered by you unless the product is 
              faulty, damaged, or incorrect. We may accept returns outside of 30 days at our discretion. Once the item is 
              returned and checked. Items are refunded within 30 days of receiving the undamaged saleable product. 
            </p>
            <p className="mb-4">
              If returning goods please obtain a proof of posting from your delivery service provider. Without this we cannot 
              be responsible for any items that fail to reach us. Contact us at info@popyum.com for information about returning 
              items to us. All returns must be sent to: 
            </p>
            <p className="mb-4">
              Pop Yum Foods<br/>
              163 Alexandra Rd<br/>
              Gateshead<br/>
              NE8 1RB
            </p>
            <p className="mb-4">
              Please note if your product has not been purchased from our website directly we will not be able to assist you further. 
              We are not liable for any item(s) purchased from our stockists.
            </p>
          </section>

          {/* Section 18 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">18. Allergen information</h2>
            <p className="mb-4">
              Our products are made in a facility that handles nuts, peanuts, dairy, gluten, and sesame seeds. We cannot guarantee 
              they are completely free of traces. Allergen information is available on each product page. Contact us at 
              info@popyum.com if you have any questions.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}