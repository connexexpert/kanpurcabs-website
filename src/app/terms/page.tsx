import { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions | KanpurCabs",
  description:
    "Terms and conditions for booking and using car rental services with KanpurCabs.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before booking our services."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
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
            Welcome to KanpurCabs. By accessing our website and utilizing our
            car rental services, you agree to be bound by the following Terms &
            Conditions. Please read them carefully.
          </p>

          <h2>2. Booking Policy</h2>
          <ul>
            <li>All bookings are subject to vehicle availability.</li>
            <li>
              A minimum advance payment of 20% is required to confirm a booking.
            </li>
            <li>Booking confirmations are sent via email or SMS/WhatsApp.</li>
            <li>
              The company reserves the right to upgrade the vehicle class at no
              extra cost if the booked category is unavailable.
            </li>
          </ul>

          <h2>3. Pricing and Payment Terms</h2>
          <ul>
            <li>
              Fares mentioned on the website are estimated based on standard
              conditions.
            </li>
            <li>
              Toll taxes, parking fees, state taxes, and entry tickets are not
              included in the base fare and must be paid by the customer on
              actuals.
            </li>
            <li>
              For outstation trips, a minimum billing of 250 kms per day is
              applicable.
            </li>
            <li>
              Driver allowance is charged per calendar day. Night halt charges
              apply if the driver is engaged between 10:00 PM and 6:00 AM.
            </li>
            <li>
              Final payment must be settled directly with the driver or via
              digital payment links provided by our office before the end of the
              trip.
            </li>
          </ul>

          <h2>4. Cancellation and Refund Policy</h2>
          <ul>
            <li>
              Cancellations made 24 hours prior to the scheduled pickup time
              will receive a full refund of the advance amount.
            </li>
            <li>
              Cancellations made within 24 hours of the pickup time may be
              subject to a cancellation fee of up to 20% of the estimated trip
              cost.
            </li>
            <li>
              No-shows will result in forfeiture of the entire advance payment.
            </li>
            <li>
              Refunds will be processed to the original payment method within
              5-7 business days.
            </li>
          </ul>

          <h2>5. Vehicle and Driver Policy</h2>
          <ul>
            <li>
              The customer must not force the driver to violate traffic rules,
              exceed speed limits, or overload the vehicle beyond its legal
              seating capacity.
            </li>
            <li>
              Smoking, consumption of alcohol, and illegal substances are
              strictly prohibited inside the vehicles.
            </li>
            <li>
              Pets are not allowed in the vehicles unless explicitly agreed upon
              during the booking process.
            </li>
          </ul>

          <h2>6. Damage Policy</h2>
          <p>
            The customer shall be held responsible for any interior or exterior
            damage caused to the vehicle due to negligence or misconduct by the
            customer or their co-passengers. Cleaning fees may apply for
            excessive dirt or spillage.
          </p>

          <h2>7. Liability</h2>
          <p>
            KanpurCabs shall not be liable for any delays, missed flights, or
            losses caused by traffic, weather conditions, mechanical breakdowns,
            or circumstances beyond our control. Our liability is limited
            strictly to providing a replacement vehicle (subject to
            availability) or a proportional refund for unutilized services.
          </p>

          <h2>8. Dispute Resolution</h2>
          <p>
            Any disputes arising out of these terms shall be subject to the
            exclusive jurisdiction of the courts located in Kanpur, Uttar
            Pradesh.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            info@kanpurcabs.com or call our helpline.
          </p>
        </div>
      </div>
    </div>
  );
}
