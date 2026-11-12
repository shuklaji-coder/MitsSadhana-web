import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-orange-600 tracking-tight">Mits Sadhana</Link>
        <Link href="/" className="hover:text-orange-500 font-medium">Home</Link>
      </nav>
      <main className="max-w-4xl mx-auto py-16 px-6 bg-white my-10 shadow-sm rounded-3xl border border-orange-100 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
          We're here to help you. Have any questions regarding our services or your recent order? Reach out to us through any of the channels below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-orange-50 border border-orange-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mb-4 shadow-sm">
              📞
            </div>
            <h3 className="text-xl font-bold mb-2">Phone & WhatsApp Support</h3>
            <p className="text-gray-600 text-lg">+91 95808 49709</p>
          </div>

          <div className="p-8 rounded-2xl bg-orange-50 border border-orange-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mb-4 shadow-sm">
              ✉️
            </div>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <p className="text-gray-600 text-lg">support@mitsadhana.com</p>
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-gray-900 text-white flex flex-col items-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-4">
            📍
          </div>
          <h3 className="text-2xl font-bold mb-4">Registered Office</h3>
          <p className="text-gray-300 text-lg max-w-lg">
            MitSadhana Spiritual Services, Vasai East, Palghar, Maharashtra - 401208, India.
          </p>
        </div>
      </main>
    </div>
  );
}
