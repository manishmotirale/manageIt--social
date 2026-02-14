import React from "react";
import logo from "../../assets/logo.png";

const FooterLogo = () => (
  <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center border border-brand-dark/20 shadow-md mb-6 overflow-hidden">
    <img
      src={logo}
      alt="Manage It Social Logo"
      className="w-full h-full object-cover"
    />
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-orange text-brand-dark pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col items-start text-left">
            <FooterLogo />

            <h3 className="font-bold text-xl tracking-wide mb-4">
              MANAGE IT SOCIAL
            </h3>

            <p className="text-brand-dark/80 max-w-sm leading-relaxed">
              Bold creative agency specializing in social media content
              creation, ads, strategy, and branding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg uppercase tracking-widest mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-brand-dark/80">
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
          <div>
            <h3 className="font-bold text-lg uppercase tracking-widest mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-brand-dark/80">
              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
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

              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0"
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
                <span>+91 89563 23991</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-dark/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-brand-dark/60 gap-4">
          <p className="text-center md:text-left">
            © 2026 Manage It Social. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-dark transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-dark transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
