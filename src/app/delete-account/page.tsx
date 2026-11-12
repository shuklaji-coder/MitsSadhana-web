import Link from 'next/link';

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900 py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-orange-100">
        <Link href="/" className="text-orange-600 font-semibold text-sm hover:underline mb-6 inline-block">
          ← Back to Mits Sadhana Home
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Account Deletion & Data Privacy</h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          In accordance with Google Play Store policies and our commitment to user data privacy, Mits Sadhana provides users with full autonomy over their personal data.
        </p>

        <div className="space-y-6">
          <section className="bg-orange-50/60 p-6 rounded-2xl border border-orange-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Option 1: In-App Instant Deletion</h2>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>Open the <strong>Mits Sadhana</strong> application on your mobile device.</li>
              <li>Navigate to your <strong>Profile</strong> tab and tap the <strong>Settings (Gear Icon)</strong>.</li>
              <li>Scroll down to the <strong>Account Management</strong> section.</li>
              <li>Tap <strong>Delete Account & Data</strong> and confirm your request.</li>
            </ol>
            <p className="text-xs text-gray-500 mt-3">
              Your profile, delivery addresses, karma points, and active subscriptions will be immediately detached and scheduled for permanent purge.
            </p>
          </section>

          <section className="bg-orange-50/60 p-6 rounded-2xl border border-orange-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Option 2: Request via Support Email</h2>
            <p className="text-sm text-gray-700 mb-3">
              If you have uninstalled the app or cannot access your account, you can request full data removal by sending an email from your registered email address or mentioning your registered mobile number:
            </p>
            <div className="bg-white p-4 rounded-xl border border-orange-200 text-sm font-mono text-orange-950">
              To: <strong>support@mitsadhana.com</strong><br />
              Subject: <strong>Account & Data Deletion Request - Mits Sadhana</strong><br />
              Body: Please specify your registered Phone Number or Google Email.
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Our Data Protection Officer will process your request within 7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Data Retention Policy</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Upon account deletion, all personal identifiers (name, phone number, physical address, profile photo) are immediately sanitized. Financial invoices for past completed transactions may be retained for statutory tax and accounting obligations under Indian taxation laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
