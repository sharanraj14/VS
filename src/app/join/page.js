"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function JoinPage() {
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwFAjpwV9tuP7_6hoGgbDvlpQnXohmZQ-ZqBvrKRwmYttj-x-1AMLGmOJ_jMwzHT-qi/exec";

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const resumeFile = fileInputRef.current?.files?.[0];
      if (!resumeFile) {
        setMessage("Please select a resume file.");
        setIsSubmitting(false);
        return;
      }

      const fileDataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (ev) => resolve(ev.target.result);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(resumeFile);
      });

      const formData = new FormData(formRef.current);
      const formObject = Object.fromEntries(formData.entries());
      formObject.resumeFile = fileDataUrl;
      formObject.resumeName = resumeFile.name;

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });

      const data = await res.json().catch(() => null);

      if (data && data.result === "success") {
        setMessage("Application submitted successfully!");
        formRef.current.reset();
        setFileName("No file chosen");
        if (typeof window !== "undefined" && window.grecaptcha) {
          try {
            window.grecaptcha.reset();
          } catch {}
        }
      } else {
        const errMsg =
          (data && data.message) ||
          `Unexpected response from server (status ${res.status}).`;
        throw new Error(errMsg);
      }
    } catch (err) {
      setMessage("An error occurred: " + (err?.message || err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Fonts & Scripts */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
      />
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
      />

      {/* Global Styles */}
      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
          background-color: #0a0a0a;
          color: #f3f4f6;
          overflow-x: hidden;
        }
        body::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: radial-gradient(
              at 80% 10%,
              hsla(280, 80%, 50%, 0.2) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 20% 90%,
              hsla(260, 90%, 50%, 0.2) 0px,
              transparent 50%
            );
          animation: move-gradient 20s ease-in-out infinite;
        }
        @keyframes move-gradient {
          0%,
          100% {
            background-position: 0% 50%, 100% 50%;
          }
          50% {
            background-position: 100% 50%, 0% 50%;
          }
        }

        .form-section {
          background-color: rgba(23, 23, 23, 0.2);
          padding: 2rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .form-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: #c084fc;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .form-label {
          display: block;
          color: #e5e7eb;
          margin-bottom: 0.5rem;
        }
        .form-input {
          width: 100%;
          background-color: rgba(10, 10, 10, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: #fff;
        }
        .form-input:focus {
          outline: none;
          border-color: #c084fc;
          box-shadow: 0 0 10px rgba(192, 132, 252, 0.3);
        }
        .form-checkbox {
          width: 1rem;
          height: 1rem;
          accent-color: #c084fc;
        }
        .get-started-btn {
          background-color: #fff;
          color: #9333ea;
          font-weight: 700;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
        }
        .get-started-btn:hover {
          background-color: #f3f4f6;
        }
        .container {
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 800;
          color: #c084fc;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
              alt="VS Logo"
              width={56}
              height={56}
              className="rounded-full"
              unoptimized
            />
            <span className="text-2xl font-extrabold text-white">
              Virtual Switch
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-gray-300">
            <Link href="/" className="hover:text-purple-400">
              Home
            </Link>
            <Link href="/services" className="hover:text-purple-400">
              Services
            </Link>
            <Link href="/about" className="hover:text-purple-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-purple-400">
              Contact
            </Link>
            <Link href="/join" className="text-purple-400">
              Opportunities
            </Link>
          </nav>
        </div>
      </header>

      {/* Form */}
      <main className="container py-12">
        <section className="form-section mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">Join Our Team</h2>
            <p className="text-gray-300 mt-2">
              We're always looking for talented individuals to join our team.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* Career Section */}
            <div>
              <h3 className="form-subtitle">Career</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="post" className="form-label">
                    Post <span className="text-red-500">*</span>
                  </label>
                  <select id="post" name="Role" className="form-input" required>
                    <option value="">Select a role</option>
                    <option>Virtual Assistant</option>
                    <option>Web Developer</option>
                    <option>CRM Specialist</option>
                    <option>Graphic Designer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="resume" className="form-label">
                    Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <label
                      htmlFor="resume"
                      className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md"
                    >
                      Choose File
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      required
                    />
                    <span className="ml-4 text-gray-400">{fileName}</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="qualification" className="form-label">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="qualification"
                    name="Qualification"
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Personal Data Section */}
            <div>
              <h3 className="form-subtitle">Personal Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="full-name" className="form-label">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="Name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dob" className="form-label">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="DOB"
                    className="form-input"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="form-label">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="Address"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="form-label">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="City"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="form-label">
                    State / Province / Region <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="State"
                    className="form-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="form-subtitle">Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="past-experience" className="form-label">
                    Past Experience
                  </label>
                  <input
                    type="text"
                    id="past-experience"
                    name="PastExperience"
                    className="form-input"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="reason-to-leave" className="form-label">
                    Reason to Leave
                  </label>
                  <textarea
                    id="reason-to-leave"
                    name="ReasonToLeave"
                    rows="3"
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* Declaration + reCAPTCHA */}
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declaration"
                  required
                  className="form-checkbox"
                />
                <label htmlFor="declaration" className="ml-2 block text-white">
                  I declare that the information provided is true and correct.
                </label>
              </div>
              <div className="flex justify-center my-4">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                />
              </div>
              <button
                type="submit"
                className="get-started-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>

          {message && (
            <p
              className={`text-center mt-4 ${
                message.toLowerCase().includes("error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS"
                alt="VS Logo"
                width={48}
                height={48}
                className="rounded-full"
                unoptimized
              />
              <span className="text-xl font-bold text-white">Virtual Switch</span>
            </div>
            <p className="text-sm">
              Your industry experts, specializing in seamless management of outsourcing needs.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="hover:text-white"><i className="fab fa-instagram" /></a>
              <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in" /></a>
              <a href="#" className="hover:text-white"><i className="fab fa-skype" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Vector Artwork</a></li>
              <li><a href="#" className="hover:text-white">Embroidery Digitizing</a></li>
              <li><a href="#" className="hover:text-white">Digital Image Editing</a></li>
              <li><a href="#" className="hover:text-white">Data Processing</a></li>
              <li><a href="#" className="hover:text-white">Web App Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Claim</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">
          © 2025 Virtual Switch, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
