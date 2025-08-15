"use client";
import React, { useState, useEffect, useRef } from 'react';

// --- Reusable Components ---

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="/" className="flex items-center gap-3 text-purple-400">
                    <img src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="VS Logo" className="h-14 w-14 rounded-full" />
                    <span className="text-2xl font-extrabold text-white">Virtual Switch</span>
                </a>
                <div className="hidden md:flex items-center gap-8">
                    <a href="/" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
                    <a href="/services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
                    <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
                    <a href="/join" className="text-purple-400 transition-colors">Opportunities</a>
                </div>
                <div className="hidden lg:flex flex-col items-end">
                    <div>
                        <span className="text-sm text-gray-400">Toll Free</span>
                        <span className="font-bold text-purple-400 ml-2">+1(800) 259-1090</span>
                    </div>
                    <div className="flex space-x-4 mt-2 text-gray-400">
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-purple-400"><i className="fab fa-google"></i></a>
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-90">
                    <a href="/" className="block py-3 px-4 text-sm hover:bg-gray-700">Home</a>
                    <a href="/services" className="block py-3 px-4 text-sm hover:bg-gray-700">Services</a>
                    <a href="#" className="block py-3 px-4 text-sm hover:bg-gray-700">About</a>
                    <a href="#" className="block py-3 px-4 text-sm hover:bg-gray-700">Contact</a>
                    <a href="/join" className="block py-3 px-4 text-sm hover:bg-gray-700">Opportunities</a>
                </div>
            )}
        </nav>
    );
};

const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

const Footer = () => (
    <RevealOnScroll>
        <footer className="bg-black text-gray-400 py-12 mt-12 border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img src="https://placehold.co/100x100/C084FC/0A0A0A?text=VS" alt="VS Logo" className="h-12 w-12 rounded-full" />
                        <span className="text-xl font-bold text-white">Virtual Switch</span>
                    </div>
                    <p className="text-sm">Your industry experts, specializing in seamless management of outsourcing needs, propelling your business towards success.</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-white"><i className="fab fa-skype"></i></a>
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
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
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
            <p className="text-center text-sm mt-12 border-t border-gray-800 pt-8">© 2025 Virtual Switch, Inc. All rights reserved.</p>
        </footer>
    </RevealOnScroll>
);

// --- Join Page Component ---

export default function JoinPage() {
    const formRef = useRef(null);
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('No file chosen');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('No file chosen');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwFAjpwV9tuP7_6hoGgbDvlpQnXohmZQ-ZqBvrKRwmYttj-x-1AMLGmOJ_jMwzHT-qi/exec"; // <-- Important: Paste your script URL here
        const resumeFile = fileInputRef.current.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const formData = new FormData(formRef.current);
            const formObject = Object.fromEntries(formData.entries());
            
            formObject.resumeFile = event.target.result;
            formObject.resumeName = resumeFile.name;

            fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formObject),
            })
            .then(res => res.json())
            .then(data => {
                if (data.result === 'success') {
                    setMessage('Application submitted successfully!');
                    formRef.current.reset();
                    setFileName('No file chosen');
                    if (window.grecaptcha) {
                        window.grecaptcha.reset();
                    }
                } else {
                    throw new Error(data.message);
                }
            })
            .catch(error => {
                setMessage('An error occurred: ' + error.message);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
        };
        
        if (resumeFile) {
            reader.readAsDataURL(resumeFile);
        } else {
            setMessage('Please select a resume file.');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen">
            <style jsx="true" global="true">{`
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
                
                body {
                  font-family: 'Inter', sans-serif;
                  background-color: #0A0A0A;
                  color: #f3f4f6;
                  overflow-x: hidden;
                }

                body::before {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    background: radial-gradient(at 80% 10%, hsla(280, 80%, 50%, 0.2) 0px, transparent 50%), 
                                radial-gradient(at 20% 90%, hsla(260, 90%, 50%, 0.2) 0px, transparent 50%);
                    animation: move-gradient 20s ease-in-out infinite;
                }

                @keyframes move-gradient {
                    0%, 100% { background-position: 0% 50%, 100% 50%; }
                    50% { background-position: 100% 50%, 0% 50%; }
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
                    transition: border-color 0.3s, box-shadow 0.3s;
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
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    transition: background-color 0.3s;
                    border: none;
                }
                .get-started-btn:hover {
                    background-color: #f3f4f6;
                }
            `}</style>
            <Header />
            <main className="container mx-auto px-4">
                <RevealOnScroll>
                    <section className="form-section">
                        <div className="text-center mb-8">
                            <h2 className="section-title">Join Our Team</h2>
                            <p className="service-paragraph">We're always looking for talented individuals to join our growing team. If you're passionate about what you do, we'd love to hear from you.</p>
                        </div>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <h3 className="form-subtitle">Career</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="post" className="form-label">Post <span className="text-red-500">*</span></label>
                                        <select id="post" name="Role" className="form-input" required>
                                            <option value="">Select a role</option>
                                            <option>Virtual Assistant</option>
                                            <option>Web Developer</option>
                                            <option>CRM Specialist</option>
                                            <option>Graphic Designer</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="resume" className="form-label">Resume <span className="text-red-500">*</span></label>
                                        <div className="flex items-center">
                                            <label htmlFor="resume" className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors">Choose File</label>
                                            <input type="file" id="resume" name="resume" className="hidden" ref={fileInputRef} onChange={handleFileChange} required />
                                            <span className="ml-4 text-gray-400">{fileName}</span>
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="qualification" className="form-label">Highest Qualification <span className="text-red-500">*</span></label>
                                        <input type="text" id="qualification" name="Qualification" className="form-input" required />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="form-subtitle">Personal Data</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="full-name" className="form-label">Full name <span className="text-red-500">*</span></label>
                                        <input type="text" id="full-name" name="Name" className="form-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="form-label">Email <span className="text-red-500">*</span></label>
                                        <input type="email" id="email" name="Email" className="form-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="dob" className="form-label">Date of birth <span className="text-red-500">*</span></label>
                                        <input type="date" id="dob" name="DOB" className="form-input" required />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="address" className="form-label">Address <span className="text-red-500">*</span></label>
                                        <input type="text" id="address" name="Address" className="form-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="form-label">City <span className="text-red-500">*</span></label>
                                        <input type="text" id="city" name="City" className="form-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="form-label">State / Province / Region <span className="text-red-500">*</span></label>
                                        <input type="text" id="state" name="State" className="form-input" required />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="form-subtitle">Experience</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="past-experience" className="form-label">Past Experience</label>
                                        <input type="text" id="past-experience" name="PastExperience" className="form-input" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="reason-to-leave" className="form-label">Reason to Leave</label>
                                        <textarea id="reason-to-leave" name="ReasonToLeave" rows="3" className="form-input"></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4 text-center">
                                <div className="flex items-center justify-center">
                                    <input type="checkbox" id="declaration" name="declaration" required className="form-checkbox" />
                                    <label htmlFor="declaration" className="ml-2 block text-white">I declare that the information provided is true and correct.</label>
                                </div>
                                <div className="flex justify-center my-4">
                                    <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
                                </div>
                                <button type="submit" className="get-started-btn" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </div>
                        </form>
                        {message && <p className={`text-center mt-4 ${message.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
                    </section>
                </RevealOnScroll>
            </main>
            <Footer />
        </div>
    );
}
