import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | KanpurCabs",
  description:
    "Privacy policy explaining how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle and protect your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <p className="text-sm text-slate-500">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>

          <h2>1. Introduction</h2>
          <p>
            At KanpurCabs, we value your privacy and are committed to protecting
            your personal data. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website or use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us
            voluntarily when booking a vehicle or contacting us. This includes:
          </p>
          <ul>
            <li>
              <strong>Personal Details:</strong> Name, email address, phone
              number, and physical address.
            </li>
            <li>
              <strong>Booking Information:</strong> Pickup and drop-off
              locations, travel dates, and vehicle preferences.
            </li>
            <li>
              <strong>Payment Information:</strong> Transaction details (Note:
              We do not store full credit card numbers on our servers; payments
              are processed securely via third-party gateways).
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, and usage data collected via cookies.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the collected information for various purposes, including:
          </p>
          <ul>
            <li>To process and manage your vehicle bookings.</li>
            <li>
              To communicate with you regarding your booking, send
              confirmations, and provide customer support.
            </li>
            <li>To improve our website, services, and user experience.</li>
            <li>
              To send promotional emails and updates, provided you have opted in
              to receive them.
            </li>
            <li>
              To comply with legal obligations and prevent fraudulent
              activities.
            </li>
          </ul>

          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties.
            We may share your information only in the following situations:
          </p>
          <ul>
            <li>
              <strong>Service Providers:</strong> With drivers assigned to your
              trip to ensure smooth pickup and drop-off, and with payment
              processors.
            </li>
            <li>
              <strong>Legal Requirements:</strong> If required by law, court
              order, or government authority to protect our rights or ensure the
              safety of our users.
            </li>
          </ul>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience.
            Cookies are small files stored on your device that help us analyze
            website traffic and remember your preferences. You can choose to
            disable cookies through your browser settings, though some parts of
            the site may not function properly.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            personal data from unauthorized access, alteration, disclosure, or
            destruction. However, please be aware that no method of transmission
            over the internet or electronic storage is 100% secure.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, or delete your personal information. You can also opt out
            of marketing communications at any time. To exercise these rights,
            please contact us.
          </p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy or
            data practices, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@kanpurcabs.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123, Civil Lines, Kanpur, Uttar Pradesh 208001</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
