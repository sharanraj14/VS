"use client";
import React from "react";
import RevealOnScroll from "../components/RevealOnScroll"; // Extracted if reused
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen container mx-auto px-4 py-8">
      <RevealOnScroll>
        <h1 className="text-4xl font-extrabold text-purple-400 mb-12 text-center">
          TERMS AND CONDITIONS
        </h1>
        <div className="space-y-8 text-gray-300 policy-content">
          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">1. Scope of Services & Limitations</h3>
            <p>
              Virtual Switch will provide virtual assistance services as agreed in the proposal or onboarding document. Any additional tasks or services outside the agreed scope will require prior approval and may incur additional fees. Virtual Switch is not responsible for tasks that require licensed professionals (e.g., legal, medical, or financial advisory services) unless expressly agreed in writing.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">2. Performance & Quality Disclaimer</h3>
            <p>
              While Virtual Switch strives to meet client requirements and deadlines, the company is not liable for delays or outcomes caused by client-side factors such as delayed feedback, unclear instructions, or lack of necessary information.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">3. Intellectual Property Rights</h3>
            <p>
              Upon full payment, any work product created for the client under this agreement becomes the client&apos;s property. Virtual Switch retains the right to use non-confidential, non-identifying portions of the work for portfolio or marketing purposes unless otherwise agreed.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">4. Force Majeure Clause</h3>
            <p>
              Virtual Switch will not be held liable for failure to perform services due to circumstances beyond its control, including but not limited to natural disasters, government restrictions, internet outages, strikes, or pandemics.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">5. Communication Channels & Response Times</h3>
            <p>
              All communication should occur via the designated official channels (e.g., email, project management tool, or agreed messaging platform). Virtual Switch aims to respond within 24 business hours. Urgent requests will be addressed subject to team availability.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">6. Refund Policy</h3>
            <p>
              Fees paid are non-refundable except where required by law or mutually agreed upon in writing.
            </p>
          </section>
        </div>
      </RevealOnScroll>
    </main>
  );
}
