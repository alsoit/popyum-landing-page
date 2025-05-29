import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy - Pop Yum',
};

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device when you visit websites. 
              They help sites remember your preferences and improve your experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <table className="w-full mb-4">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Cookie Type</th>
                  <th className="py-2">Purpose</th>
                  <th className="py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Essential</td>
                  <td className="py-2">Site functionality (cart, login)</td>
                  <td className="py-2">Session</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Preferences</td>
                  <td className="py-2">Language/region settings</td>
                  <td className="py-2">1 year</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Statistics</td>
                  <td className="py-2">Anonymous usage data</td>
                  <td className="py-2">2 years</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              We use trusted partners with GDPR-compliant practices:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Stripe:</strong> Payment processing</li>
              <li><strong>Google Analytics:</strong> Traffic analysis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
            <p className="mb-4">
              Manage preferences through our <Link href="#" className="text-blue-600 hover:underline">Consent Manager</Link> or browser settings:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 hover:underline">Firefox</a></li>
              <li><a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 hover:underline">Edge</a></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p className="mb-4">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}. 
              We'll notify users of significant changes through site banners.
            </p>
          </section>

          <section className="mb-12">
            <p className="text-sm text-gray-600">
              For more information about our data practices, see our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}