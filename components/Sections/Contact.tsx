import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const [formData, setFormData] = useState({
    company: "",
    phone: "",
    email: "",
    instagram: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          instagram: formData.instagram,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({
        company: "",
        phone: "",
        email: "",
        instagram: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-brand-dark py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - FAQ */}
          {/* Left - FAQ */}
          <div className="w-full max-w-xl ml-auto">
            <Reveal>
              <h2 className="text-4xl font-bold text-white mb-4">FAQ</h2>

              <p className="text-gray-300 text-lg w-[25rem] mb-8">
                Ready to level up your social game? Drop us a line and let's
                create something bold together.
              </p>
            </Reveal>

            <div className="space-y-4 w-[20rem]">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={0.1 * index}>
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm w-[25rem]">
                    <button
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                      className="w-[25rem] p-5 text-left flex justify-between items-center hover:bg-white/5 transition"
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
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 pb-5 text-gray-400 text-sm">
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

          {/* Right - Contact Form */}
          <div className="bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  label: "Company Name *",
                  name: "company",
                  placeholder: "Your company name",
                },
                {
                  label: "Contact Number *",
                  name: "phone",
                  placeholder: "+91",
                },
                {
                  label: "Email *",
                  name: "email",
                  type: "email",
                  placeholder: "you@gmail.com",
                },
                {
                  label: "Instagram URL (Optional)",
                  name: "instagram",
                  placeholder: "https://instagram.com/yourpage",
                },
              ].map(({ label, name, placeholder, type }) => (
                <div key={name} className="space-y-2">
                  <label className="text-xs font-bold text-gray-200 uppercase tracking-wider ml-1">
                    {label}
                  </label>
                  <input
                    type={type || "text"}
                    name={name}
                    value={(formData as any)[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={name !== "instagram"}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange outline-none"
                  />
                </div>
              ))}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-orange text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
