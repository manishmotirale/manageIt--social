import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "../UI/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most social media strategies take 2–4 weeks to develop, while full management begins immediately after the strategy phase.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Absolutely! We tailor every plan to your specific goals, whether it's brand awareness, lead generation, or community growth.",
  },
  {
    question: "What platforms do you specialize in?",
    answer:
      "We specialize in Instagram, TikTok, and X (Twitter), focusing on high-engagement short-form content and growth.",
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-brand-dark py-16 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT SIDE — FAQ */}
          <div className="w-full max-w-xl mx-auto md:mx-0 md:ml-auto">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center md:text-left">
                FAQ
              </h2>

              <p className="text-gray-300 text-base sm:text-lg mb-8 text-center md:text-left">
                Ready to level up your social game? Drop us a line and let's
                create something bold together.
              </p>
            </Reveal>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm w-[20rem]">
                    {/* QUESTION */}
                    <button
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                      className="w-full p-4 sm:p-5 text-left flex justify-between items-center hover:bg-white/5 transition"
                    >
                      <span className="font-semibold text-gray-200 text-sm sm:text-base">
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{
                          rotate: activeIndex === index ? 180 : 0,
                        }}
                        className="text-brand-orange flex-shrink-0 ml-3"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </motion.span>
                    </button>

                    {/* ANSWER */}
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

          {/* RIGHT SIDE — FORM */}
          <div className="w-full">
            <div className="bg-white/10 p-6 sm:p-8 md:p-12 rounded-3xl border border-white/20 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* INPUTS */}
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
                ].map((input) => (
                  <div key={input.name}>
                    <label className="text-xs font-bold text-gray-200 uppercase tracking-wider ml-1">
                      {input.label}
                    </label>

                    <input
                      type={input.type || "text"}
                      name={input.name}
                      value={(formData as any)[input.name]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      required={input.name !== "instagram"}
                      className="w-full mt-2 bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange outline-none"
                    />
                  </div>
                ))}

                {/* BUTTON */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-orange text-white py-4 sm:py-5 rounded-xl font-bold uppercase tracking-wider disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>

                {/* STATUS */}
                {status === "success" && (
                  <p className="text-green-400 text-center text-sm">
                    Message sent successfully!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-400 text-center text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
