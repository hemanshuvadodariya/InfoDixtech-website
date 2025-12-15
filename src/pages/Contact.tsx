import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    // ---------------------------------------------------------
    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // ---------------------------------------------------------
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (formRef.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
            setResult("Message sent successfully!");
            setIsSubmitting(false);
            e.currentTarget.reset();
          },
          (error) => {
            console.log(error.text);
            setResult("Failed to send message. Please try again.");
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <div className="animate-fade-in">
      {/* ---------------------- HERO ---------------------- */}
      <section className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let’s Build Your Next Digital Solution</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Contact us today for reliable, results-driven digital services. We’re here to provide the support, strategy, and solutions you need.
          </p>
        </div>
      </section>

      {/* ---------------------- FORM SECTION ---------------------- */}
      <section className="py-24 container mx-auto px-4 -mt-10">
        <div className="grid lg:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden bg-white max-w-5xl mx-auto">

          {/* Left Side: Direct Contact Info */}
          <div className="bg-blue-600 p-10 text-white flex flex-col justify-between relative min-h-[400px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <p className="text-blue-100 mb-8">
                Prefer to reach out directly? Give us a call or send us an email.
              </p>

              <div className="space-y-6">
                {/* Email Direct Link */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-blue-500 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <a href="mailto:working.hemanshu@gmail.com" className="text-blue-100 hover:text-white transition">
                      working.hemanshu@gmail.com</a>
                  </div>
                </div>

                {/* Phone Direct Link */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-blue-500 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <a href="tel:+15550001234" className="text-blue-100 hover:text-white transition">
                      +1 (555) 000-1234
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-blue-500 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visit Us</h4>
                    <p className="text-blue-100">
                      123 Digital Avenue,<br />Tech City, TC 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decor */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-tl-full opacity-50"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-br-full opacity-20"></div>
          </div>

          {/* Right Side Form (EmailJS) */}
          <div className="p-8 md:p-12 bg-white">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Have a question?</h2>
            <p className="text-slate-500 mb-8">Fill out the form below and we'll get back to you.</p>

            <form ref={formRef} className="space-y-5" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Name</label>
                  {/* Note: 'name' attribute must match your EmailJS template variable names */}
                  <input type="text" name="user_name" placeholder="Full name" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Email</label>
                  <input type="email" name="user_email" placeholder="Your email" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Subject</label>
                <input type="text" name="subject" placeholder="Project Inquiry" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-500 uppercase">Message</label>
                <textarea name="message" placeholder="Tell us about your project..." rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-gray-50 focus:bg-white" required></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-bold text-white transition duration-300 shadow-lg ${isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-slate-900 hover:bg-blue-600"
                  }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <p className={`text-sm mt-4 text-center ${result.includes("success") ? "text-green-600" : "text-red-500"}`}>
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ---------------------- FAQ SECTION ---------------------- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4">
            {[
              {
                q: "How quickly will your team respond to my inquiry?",
                a: "We usually respond within 24 hours on business days. For urgent messages, we do our best to reply even sooner."
              },
              {
                q: "Do you offer a free consultation before starting a project?",
                a: "Yes. We provide a free consultation to discuss your goals, understand your vision, and recommend the best approach."
              },
              {
                q: "What information should I include when contacting you?",
                a: "Sharing details like your project goals, timeline, budget range, and any references helps us understand your needs better."
              },
              {
                q: "Can you support my existing website or ongoing SEO work?",
                a: "Absolutely. We offer website maintenance, SEO improvements, performance optimization, and long-term support."
              }
            ].map((item, i) => (
              <details
                className="group bg-white rounded-xl shadow-sm border border-slate-200 open:ring-2 open:ring-blue-100"
                key={i}
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-700">{item.q}</span>
                  <span className="transition group-open:rotate-45 text-blue-500 text-2xl font-light">
                    +
                  </span>
                </summary>
                <div className="text-slate-600 px-6 pb-6 pt-0 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;