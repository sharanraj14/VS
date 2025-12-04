"use client";

import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const termsData = [
  {
    title: "Scope of Services & Limitations",
    content: `Virtual Switch will provide virtual assistance services as agreed in the proposal or onboarding document. Any additional tasks or services outside the agreed scope will require prior approval and may incur additional fees. Virtual Switch is not responsible for tasks that require licensed professionals (e.g., legal, medical, or financial advisory services) unless expressly agreed in writing.`,
  },
  {
    title: "Performance & Quality Disclaimer",
    content: `While Virtual Switch strives to meet client requirements and deadlines, the company is not liable for delays or outcomes caused by client-side factors such as delayed feedback, unclear instructions, or lack of necessary information.`,
  },
  {
    title: "Intellectual Property Rights",
    content: `Upon full payment, any work product created for the client under this agreement becomes the client's property. Virtual Switch retains the right to use non-confidential, non-identifying portions of the work for portfolio or marketing purposes unless otherwise agreed.`,
  },
  {
    title: "Force Majeure Clause",
    content: `Virtual Switch will not be held liable for failure to perform services due to circumstances beyond its control, including but not limited to natural disasters, government restrictions, internet outages, strikes, or pandemics.`,
  },
  {
    title: "Communication Channels & Response Times",
    content: `All communication should occur via the designated official channels (e.g., email, project management tool, or agreed messaging platform). Virtual Switch aims to respond within 24 business hours. Urgent requests will be addressed subject to team availability.`,
  },
  {
    title: "Refund Policy",
    content: `Fees paid are non-refundable except where required by law or mutually agreed upon in writing.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <main className="container mx-auto px-4 py-12">
        <RevealOnScroll>
          <h1 className="text-4xl font-extrabold text-purple-400 mb-12 text-center">
            Terms and Conditions
          </h1>

          <div className="space-y-10">
            {termsData.map((term, index) => (
              <section key={index}>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">
                  {index + 1}. {term.title}
                </h3>
                <p className="leading-relaxed">{term.content}</p>
              </section>
            ))}
          </div>
        </RevealOnScroll>
      </main>
    </div>
  );
}
