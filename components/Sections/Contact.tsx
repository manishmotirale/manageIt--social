import React, { useState } from "react";
import { Reveal } from "../UI/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most social media strategies take 2-4 weeks to develop, while full management begins immediately after the strategy phase.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Absolutely! We tailor every plan to your specific goals, whether it's brand awareness, lead gen, or pure community growth.",
  },
  {
    question: "What platforms do you specialize in?",
    answer:
      "We are experts in Instagram, TikTok, and X (Twitter), focusing on high-engagement short-form content and community building.",
  },
];

const Contact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="contact" className="bg-brand-dark py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Info & FAQ */}
          <div>
            <Reveal>
              <h2 className="text-4xl font-bold text-white mb-4">
                Common Questions
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                Ready to level up your social game? Drop us a line and let's
                create something bold together.
              </p>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                    <button
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                      className="w-full p-5 text-left flex justify-between items-center transition-colors hover:bg-white/5"
                    >
                      <span className="font-semibold text-gray-200">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        className="text-brand-orange"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right - Form (Brightened Version) */}
          <div className="bg-white/[0.08] p-8 md:p-12 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-200 uppercase tracking-wider ml-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white/15 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-200 uppercase tracking-wider ml-1">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white/15 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-200 uppercase tracking-wider ml-1">
                  Gmail *
                </label>
                <input
                  type="email"
                  placeholder="you@gmail.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white/15 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-200 uppercase tracking-wider ml-1">
                  Instagram URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://instagram.com/yourpage"
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:bg-white/15 transition-all"
                />
              </div>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 20px 40px rgba(255, 103, 0, 0.4)", // Brightened shadow
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-orange text-white py-5 rounded-xl mt-8 shadow-lg shadow-brand-orange/30 transition-all
             font-black uppercase tracking-[0.2em] text-sm" // Typography changes here
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
