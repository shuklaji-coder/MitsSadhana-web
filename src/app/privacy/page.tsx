import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-orange-600 tracking-tight">Mits Sadhana</Link>
        <Link href="/" className="hover:text-orange-500 font-medium">Home</Link>
      </nav>
      <main className="max-w-4xl mx-auto py-16 px-6 bg-white my-10 shadow-sm rounded-3xl border border-orange-100">
        <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10 font-medium font-mono text-sm">Last Updated: June 2026</p>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Mits Sadhana ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Mits Sadhana when you use our website and mobile applications.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as your name, email address, phone number, physical address (for daily needs/puja delivery), and payment details when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Facilitate your bookings for Pandits and pooja materials.</li>
              <li>Process your payments securely via our payment partners (e.g., Razorpay).</li>
              <li>Communicate with you about your orders, subscriptions, and services.</li>
              <li>Improve, personalize, and expand our platform's functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Information Sharing</h2>
            <p>
              We share your information with trusted third parties strictly to fulfill services. For example: delivery partners (Malis) will see your address and contact network; Payment gateways (Razorpay) will securely process your payment details. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data. All payment transactions are encrypted and processed by RBI-approved payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at: <strong>support@mitsadhana.com</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
