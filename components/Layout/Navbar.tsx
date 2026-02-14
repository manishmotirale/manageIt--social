import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact us", href: "#contact" },
];

const Logo = () => (
  <motion.div
    className="w-14 h-14 ml-5 md:w-20 md:h-20 rounded-full 
                overflow-hidden shadow-xl cursor-pointer shrink-0 "
  >
    <img
      src={logo}
      alt="Manage It Logo"
      className="w-full h-full object-cover "
    />
  </motion.div>
);

const Navbar: React.FC = () => {
  return (
    <motion.nav
      className="fixed top-4 md:top-6 left-0 right-1 z-50 flex justify-center px-3 sm:px-4 md:px-12 lg:px-16"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div className="w-full max-w-[1500px] flex items-center justify-start gap-2 sm:gap-6 overflow-x-auto">
        {/* Logo */}
        <a href="#home">
          <Logo />
        </a>

        {/* Links Pill (same UI, just scaled) */}
        <div
          className="
    flex bg-brand-dark rounded-full
    h-10 sm:h-12 md:h-14
    items-center justify-between
    px-4 sm:px-6 md:px-10
    shadow-xl gap-4 sm:gap-6 md:gap-8
    border border-white/5 backdrop-blur-sm
  "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white font-body font-medium hover:text-brand-orange transition-colors relative group text-xs sm:text-sm md:text-base whitespace-nowrap"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
