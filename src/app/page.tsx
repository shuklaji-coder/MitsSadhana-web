import Link from 'next/link';

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.rohan2342.MitSadhana";
const WHATSAPP_URL = "https://wa.me/919580849709?text=Namaste%20Mits%20Sadhana%20team,%20I%20want%20to%20know%20more%20about%20your%20services";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-orange-600 tracking-tight flex items-center gap-2">
          <span>🕉️</span> Mits Sadhana
        </Link>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#services" className="hover:text-orange-500 transition-colors">Services</Link>
          <Link href="#plans" className="hover:text-orange-500 transition-colors">Flower Plans</Link>
          <Link href="#features" className="hover:text-orange-500 transition-colors">Why Mits Sadhana</Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 hover:bg-green-100 border border-green-200 px-3 py-2 rounded-full transition-colors"
          >
            <span>💬</span> WhatsApp
          </a>
          <a 
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium shadow-sm transition-all text-sm inline-flex items-center gap-2"
          >
            <span>Get the App</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20 pb-24 border-b border-orange-100 bg-gradient-to-b from-orange-50 to-white">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          <span>🌸</span> 100% Verified Pandits & Fresh Daily Flowers
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
          Your Spiritual Journey, <br className="hidden md:block"/>
          <span className="text-orange-600">Simplified.</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-10 leading-relaxed font-medium">
          Mits Sadhana is India's most trusted spiritual companion — verified Pandit bookings, fresh doorstep Pooja Samagri delivery before 7:30 AM, sacred Aarti player, and daily Gita wisdom.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/30 transition-transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186c-.368-.328-.61-.813-.61-1.356V3.17c0-.543.242-1.028.609-1.356zm11.235 11.238l2.673-2.674-12.72-7.23 10.047 9.904zm0 .896l-10.047 9.904 12.72-7.23-2.673-2.674zm1.533-1.533l3.659 2.083c.964.549.964 1.447 0 1.996l-3.659 2.083-2.45-2.45 2.45-2.45z"/>
            </svg>
            <span>Google Play</span>
          </a>
          <div className="relative group">
            <button
              type="button"
              className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3.5 rounded-full text-lg font-semibold shadow-lg flex items-center justify-center gap-3 cursor-default opacity-90"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-2 .6-2.63 1.34-.56.64-1.05 1.71-.92 2.74 1.01.08 2.03-.5 2.63-1.21z"/>
              </svg>
              <span>App Store</span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-500/90 text-white px-2 py-0.5 rounded-full">Coming Soon</span>
            </button>
          </div>
        </div>
      </main>

      {/* Services Overview */}
      <section id="services" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Everything for your Sacred Journey</h2>
        <p className="text-center text-gray-500 max-w-xl mx-auto mb-16">Authentic, pure, and punctual spiritual services tailored for modern homes.</p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-3xl bg-orange-50 border border-orange-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🕉️</div>
            <h3 className="text-xl font-bold mb-3">Verified Pandits</h3>
            <p className="text-gray-600 leading-relaxed">Book qualified Vedic Pandits for Satyanarayan Katha, Griha Pravesh, Rudrabhishek, and Havans with upfront transparent rates.</p>
          </div>
          <div className="p-8 rounded-3xl bg-yellow-50 border border-yellow-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🌸</div>
            <h3 className="text-xl font-bold mb-3">Fresh Flowers Before 7:30 AM</h3>
            <p className="text-gray-600 leading-relaxed">Subscribe for fresh marigold, rose, and bel patra deliveries straight from local Malis with doorstep delivery proof.</p>
          </div>
          <div className="p-8 rounded-3xl bg-red-50 border border-red-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">📖</div>
            <h3 className="text-xl font-bold mb-3">Aarti Player & Japa Mala</h3>
            <p className="text-gray-600 leading-relaxed">Listen to divine morning Aartis with background audio, count your 108 Japa chants, and track your Bhagavad Gita study progress.</p>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section (Synced with Mobile App) */}
      <section id="plans" className="py-20 px-6 bg-gradient-to-b from-orange-50/50 to-white border-t border-orange-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <span>🌺</span> Doorstep Puja Flowers Every Morning
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Daily Flower Subscription Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Never worry about morning puja flowers again. Fresh, sacred blossoms plucked at dawn and delivered to your doorstep before 6:00 AM by your neighborhood Mali.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Plan 1 */}
          <div className="bg-white rounded-3xl p-7 border border-orange-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">Daily Essential</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Daily Puja Basic</h3>
              <p className="text-xs text-gray-500 mt-1">Perfect for daily home altar rituals</p>
              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-gray-900">₹299</span>
                  <span className="text-xs text-gray-500 font-medium">/ month</span>
                </div>
                <p className="text-[11px] text-orange-600 font-semibold mt-1">Only ₹10 / day • 30 Days</p>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 mb-8">
                <li className="flex items-center gap-2"><span>✅</span> 1 Fresh Flower Mala (Daily Garland)</li>
                <li className="flex items-center gap-2"><span>✅</span> Sacred Belpatra & Durva Grass</li>
                <li className="flex items-center gap-2"><span>✅</span> 3-4 Fresh Daily Puja Flowers</li>
                <li className="flex items-center gap-2"><span>✅</span> Punctual 6:00 AM Doorstep Delivery</li>
                <li className="flex items-center gap-2"><span>✅</span> Vacation Pause Anytime via App</li>
              </ul>
            </div>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold py-3 rounded-2xl text-sm border border-orange-200 transition-colors"
            >
              Subscribe on App
            </a>
          </div>

          {/* Plan 2: Most Popular */}
          <div className="bg-white rounded-3xl p-7 border-2 border-orange-500 shadow-xl relative flex flex-col justify-between transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              🔥 Most Popular
            </div>
            <div>
              <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">Home Protection</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Daily + Nimbu Mirchi</h3>
              <p className="text-xs text-gray-500 mt-1">Daily flowers with Saturday Nazar Suraksha</p>
              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-orange-600">₹329</span>
                  <span className="text-xs text-gray-500 font-medium">/ month</span>
                </div>
                <p className="text-[11px] text-green-700 font-semibold mt-1">₹11 / day • Saturday Nimbu-Mirchi Included</p>
              </div>
              <ul className="space-y-3 text-xs text-gray-700 mb-8 font-medium">
                <li className="flex items-center gap-2"><span>✅</span> Everything in Daily Puja Basic</li>
                <li className="flex items-center gap-2"><span>🌶️</span> <strong>Saturday Fresh Nimbu-Mirchi</strong></li>
                <li className="flex items-center gap-2"><span>✅</span> 1 Fresh Flower Mala + Belpatra + Durva</li>
                <li className="flex items-center gap-2"><span>✅</span> Punctual 6:00 AM Doorstep Delivery</li>
                <li className="flex items-center gap-2"><span>✅</span> Dedicated Local Verified Mali</li>
              </ul>
            </div>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-2xl text-sm shadow-md transition-colors"
            >
              Get Most Popular Plan
            </a>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-3xl p-7 border border-orange-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider">Premium Rituals</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Premium Devotion</h3>
              <p className="text-xs text-gray-500 mt-1">Opulent fresh flowers for grand Mandirs</p>
              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-gray-900">₹599</span>
                  <span className="text-xs text-gray-500 font-medium">/ month</span>
                </div>
                <p className="text-[11px] text-purple-700 font-semibold mt-1">Priority 5:30 AM Brahmamuhurta Slot</p>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 mb-8">
                <li className="flex items-center gap-2"><span>✅</span> 8-10 Handpicked Sacred Flowers (Lotus/Rose)</li>
                <li className="flex items-center gap-2"><span>✅</span> Handcrafted Double-Strand Mala</li>
                <li className="flex items-center gap-2"><span>✅</span> Generous Belpatra, Durva & Tulsi</li>
                <li className="flex items-center gap-2"><span>⚡</span> Priority 5:30 AM Morning Slot</li>
                <li className="flex items-center gap-2"><span>✅</span> Vacation Pause & Flexible Dates</li>
              </ul>
            </div>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold py-3 rounded-2xl text-sm border border-orange-200 transition-colors"
            >
              Subscribe on App
            </a>
          </div>

          {/* Plan 4: Best Value */}
          <div className="bg-white rounded-3xl p-7 border-2 border-amber-400 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">Best Value</span>
              <h3 className="text-xl font-bold text-gray-900 mt-4">Premium + Nimbu</h3>
              <p className="text-xs text-gray-500 mt-1">Full premium offering + Saturday protection</p>
              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-gray-900">₹629</span>
                  <span className="text-xs text-gray-500 font-medium">/ month</span>
                </div>
                <p className="text-[11px] text-amber-700 font-semibold mt-1">Complete Devotion & Protection Bundle</p>
              </div>
              <ul className="space-y-3 text-xs text-gray-600 mb-8">
                <li className="flex items-center gap-2"><span>✅</span> Everything in Premium Devotion</li>
                <li className="flex items-center gap-2"><span>🌶️</span> <strong>Saturday Fresh Nimbu-Mirchi</strong></li>
                <li className="flex items-center gap-2"><span>⚡</span> Priority 5:30 AM Morning Slot</li>
                <li className="flex items-center gap-2"><span>✅</span> Handcrafted Double-Strand Mala</li>
                <li className="flex items-center gap-2"><span>⭐</span> VIP Priority Mali Support</li>
              </ul>
            </div>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-2xl text-sm transition-colors shadow-sm"
            >
              Get Best Value Plan
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Need a custom temple or commercial society flower supply?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold underline">
              Chat with our team on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section id="features" className="py-16 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Secure, Verified & Punctual</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          All our Pandits and Malis undergo strict background verification. Transactions are processed via 128-bit SSL encrypted RBI-compliant payment gateways.
        </p>
        <div className="flex justify-center flex-wrap gap-6 opacity-85 font-semibold text-xs md:text-sm tracking-wider">
          <span className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">🛡️ RAZORPAY VERIFIED</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">🔒 128-BIT SSL ENCRYPTION</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">⚡ 6:00 AM DELIVERY SLA</span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-green-950 text-green-300 px-4 py-2 rounded-lg border border-green-800 hover:bg-green-900 transition-colors">
            💬 +91 95808 49709 WHATSAPP
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
              <span>🕉️</span> Mits Sadhana
            </div>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Making Vedic traditions accessible, authentic, and seamless for millions of devotees across India.
            </p>
            <p className="text-sm text-gray-600 font-medium">contact@mitsadhana.com</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 font-semibold block mt-1 hover:underline">
              WhatsApp: +91 95808 49709
            </a>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#services" className="hover:text-orange-500">Pandit Booking</Link></li>
              <li><Link href="#plans" className="hover:text-orange-500 font-medium text-orange-600">Daily Flower Plans (From ₹299)</Link></li>
              <li><Link href="#services" className="hover:text-orange-500">Puja Samagri Kits</Link></li>
              <li><Link href="#services" className="hover:text-orange-500">Kundli & Astrology</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-orange-500">Contact Us</Link></li>
              <li><a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Google Play Store</a></li>
              <li><span className="text-gray-400">iOS App Store (Coming Soon)</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Compliance & Legal</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/privacy" className="hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-500">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="hover:text-orange-500">Refund & Cancellation</Link></li>
              <li><Link href="/delete-account" className="hover:text-orange-500 font-semibold text-red-500">Delete Account & Data</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 border-t border-gray-100 pt-8">
          © {new Date().getFullYear()} Mits Sadhana Services Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
