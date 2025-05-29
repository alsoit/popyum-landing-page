import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - Pop Yum',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              Welcome to Pop Yum! (Pop Yum, 163 Alexandra Rd, Gateshead, NE8 1RB, United Kingdom) 
              This Privacy Policy explains how we handle your information when you visit our website 
              (popyum.co.uk) or use our services (we call that &quot;the Service&quot;).
            </p>
            <p className="mb-4">
              We might update this policy from time to time. We&apos;ll always post the updated version on 
              our website (so keep an eye out!). The new policy will take effect after 180 days, and 
              by continuing to use our Service after that, you&apos;re letting us know you agree to the changes. 
              It&apos;s a good idea to check back here every now and then.
            </p>
          </section>

          {/* Data Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What we collect</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email</li>
              <li>Mobile</li>
              <li>Date of Birth</li>
              <li>Address</li>
              <li>Work Address</li>
              <li>Gender</li>
              <li>Marital Status</li>
            </ul>
          </section>

          {/* Collection Methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How we collect</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>When you sign up: Filling out a registration form or providing personal details lets us create a personalised account for you.</li>
              <li>As you interact with our site: Your activity helps us understand what features you like and how we can improve.</li>
              <li>From publicly available sources: We may use information from public sources (following all applicable laws) to enhance your experience.</li>
            </ul>
          </section>

          {/* Data Usage */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How we use your information</h2>
            <p className="mb-4">
              We&apos;ll only use your information for these purposes unless the law requires us to do otherwise. 
              But if we ever need your information for something new, we&apos;ll always ask for your permission first.
            </p>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How we share your information</h2>
            <p className="mb-4">
              Rest assured, any third-party we work with is required to use your information only for the specific 
              purpose it&apos;s shared and to keep it secure.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Retention of your information</h2>
            <ol className="list-decimal pl-6 mb-4">
              <li>Most information: We typically hold onto your personal details for 1 year after you stop using your account, or for as long as it takes to complete the reason we collected it (like processing an order).</li>
              <li>Sometimes a bit longer: In some cases, the law or other reasons (like preventing fraud) might require us to keep certain information for longer.</li>
              <li>After that, it's anonymised: Once we don't need your information anymore, we anonymise it (meaning it can't be traced back to you) and might store it for things like reporting or improving our services.</li>
            </ol>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your rights</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>See what we have:</strong> Want to know what information we store about you? You can request a copy!</li>
              <li><strong>Fix any mistakes:</strong> Spotted an error in your details? Let us know and we'll update it.</li>
              <li><strong>Make it disappear:</strong> No longer using our service? You can ask us to erase your information completely (in some cases).</li>
              <li><strong>Download your data:</strong> Want to take your information elsewhere? We can provide a copy in a format you can easily use.</li>
              <li><strong>Change your mind:</strong> Gave us permission to use your information? You can take it back anytime.</li>
              <li><strong>Object or limit use:</strong> Don't like how we're using your information? You can ask us to stop or limit it.</li>
              <li><strong>Complain if needed:</strong> Feel something's not right? You have the right to complain to a relevant authority.</li>
            </ul>
            <p className="mb-4">Remember, If you choose not to share some information, you might not be able to use all our features. To exercise any of these rights, simply email us at info@popyum.co.uk. We'll get back to you as soon as possible according to the law.</p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="mb-4">
              We use cookies (small data files) to remember things about your visit and make your experience better. 
              Think of them like tiny reminders for our website. Want to know more about how cookies work and how you 
              can control them? Check out our <Link href="/cookie-policy" className="text-blue-600 hover:underline">Cookie Policy</Link> for all the details!
            </p>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p className="mb-4">
              We use strong security measures to protect your information from getting lost, misused, or changed 
              without permission. Think of it like having a high-tech vault for your data. While we take security 
              very seriously, it's important to remember that no system is foolproof. That's why we can't guarantee 
              the complete security of information traveling over the internet (like when you send us something online). 
              However, we do everything we can to keep your information safe.
            </p>
          </section>

          {/* Grievance Officer */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Grievance/Data protection officer</h2>
            <p className="mb-4">
              If you have any inquiries or worries about how we handle your information, you can reach out to our friendly team. 
              Just shoot an email to info@popyum.co.uk and we'll get back to you as soon as possible. Prefer to chat in person? 
              You can also contact our Grievance Officer at:
            </p>
            <p className="mb-4">
              Pop Yum<br/>
              163 Alexandra Rd<br/>
              Gateshead<br/>
              NE8 1RB
            </p>
            <p className="mb-4">
              We'll work hard to address your concerns and follow all the relevant laws and regulations.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}