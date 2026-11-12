import Link from 'next/link';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-orange-600 tracking-tight">Mits Sadhana</Link>
        <Link href="/" className="hover:text-orange-500 font-medium">Home</Link>
      </nav>
      <main className="max-w-4xl mx-auto py-16 px-6 bg-white my-10 shadow-sm rounded-3xl border border-orange-100">
        <h1 className="text-4xl font-extrabold mb-4">Terms and Conditions</h1>
        <p className="text-gray-500 mb-10 font-medium font-mono text-sm">Last Updated: June 2026</p>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Welcome to Mits Sadhana. By accessing our website, app, and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Services Offered</h2>
            <p>
              Mits Sadhana provides a platform to book verified Pandits for poojas, and a marketplace to order pooja samagri and daily spiritual needs. We aim to ensure quality but do not directly employ the independent Pandits or Malis on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. User Responsibilities</h2>
            <p>
              You must be at least 18 years old to book services. You agree to provide accurate location, contact, and payment information. You are strictly prohibited from using the platform for any illegal or unauthorized purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Pricing and Payments</h2>
            <p>
              Pricing for services and products is subject to change based on the location and timing of the service. All payments processed via our payment partners (Razorpay) are secure. In case of Cash on Delivery, payment must be handed over in full to our delivery executive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an "as is" and "as available" basis. While we strive to ensure timely delivery and spiritual satisfaction, Mits Sadhana does not guarantee that the services will be free of errors or interruptions due to traffic, weather, or other unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
