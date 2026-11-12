import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-orange-600 tracking-tight">Mits Sadhana</Link>
        <Link href="/" className="hover:text-orange-500 font-medium">Home</Link>
      </nav>
      <main className="max-w-4xl mx-auto py-16 px-6 bg-white my-10 shadow-sm rounded-3xl border border-orange-100">
        <h1 className="text-4xl font-extrabold mb-4">Cancellation and Refund Policy</h1>
        <p className="text-gray-500 mb-10 font-medium font-mono text-sm">Last Updated: June 2026</p>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            At Mits Sadhana, we strive to ensure absolute satisfaction with our pooja services, samagri delivery, and subscriptions. Because our items are perishable (like fresh flowers) and services are time-bound, the following policies apply:
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Order Cancellation</h2>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Express Delivery Orders:</strong> Can only be cancelled within 10 minutes of placing the order, provided the order has not yet been dispatched by our delivery partners.</li>
              <li><strong>Pandit Bookings:</strong> Can be cancelled up to 24 hours before the scheduled pooja time for a full refund. Cancellations made less than 24 hours prior may be subject to a 50% cancellation fee.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Refunds for Failed or Missing Items</h2>
            <p>
              If an item in your order is missing, damaged upon arrival, or fundamentally incorrect, you must report it to our support team within 2 hours of delivery. We will initiate a refund or offer a replacement. Authorized refunds are processed back to the original method of payment (via Razorpay) within 5-7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Subscriptions</h2>
            <p>
              Monthly delivery subscriptions can be paused or cancelled from the app at any time. If cancelled mid-month, you will be refunded on a pro-rata basis for the remaining undelivered days in the billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Non-Refundable Services</h2>
            <p>
              Completed poojas and successfully delivered perishable items (flowers, prasad) are strictly non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. How to Request a Refund</h2>
            <p>
              Email us at <strong>refunds@mitsadhana.com</strong> with your Order ID, or use the Help & Support section within the mobile app.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
