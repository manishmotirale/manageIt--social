import React from "react";
import logo from "@/assets/logo.png";

const FooterLogo = () => (
  <div
    className="w-14 h-14 sm:w-16 sm:h-16
               rounded-full bg-brand-dark
               flex items-center justify-center
               border border-brand-teal
               shadow-lg shrink-0
               relative overflow-hidden
               mb-4 sm:mb-6"
  >
    <img
      src={logo}
      alt="Manage It Social Logo"
      className="w-full h-full object-cover"
    />
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-brand-orange text-brand-dark
                       pt-12 sm:pt-16
                       pb-6 sm:pb-8
                       px-4 sm:px-6 md:px-12
                       border-t border-brand-dark/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
          {/* Brand */}
          <div
            className="col-span-1 md:col-span-2
                          text-center md:text-left
                          flex flex-col items-center md:items-start"
          >
            <FooterLogo />

            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              MANAGE IT SOCIAL
            </h3>

            <p className="text-brand-dark/80 max-w-xs leading-relaxed text-sm sm:text-base">
              Bold creative agency specializing in social media content
              creation, ads, strategy, and branding.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4
              className="font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider
                           border-b border-brand-dark/20 pb-2 inline-block"
            >
              Quick Links
            </h4>

            <ul className="space-y-3 sm:space-y-4 font-medium text-brand-dark/80 text-sm sm:text-base">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4
              className="font-bold mb-4 sm:mb-6 text-sm uppercase tracking-wider
                           border-b border-brand-dark/20 pb-2 inline-block"
            >
              Contact
            </h4>

            <ul className="space-y-3 sm:space-y-4 font-medium text-brand-dark/80 text-sm sm:text-base">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:business@manageit.social"
                  className="hover:text-white transition-colors"
                >
                  business@manageit.social
                </a>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>8956323991</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 sm:pt-8 border-t border-brand-dark/10
                        flex flex-col md:flex-row
                        justify-between items-center
                        text-xs sm:text-sm
                        text-brand-dark/60
                        gap-4"
        >
          <p className="text-center md:text-left">
            © 2026 Manage It Social. All rights reserved.
          </p>

          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-brand-dark">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-dark">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
