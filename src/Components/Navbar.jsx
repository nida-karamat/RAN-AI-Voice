"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Images/logo.jpg";
import { Link as ScrollLink } from "react-scroll";
import { X } from "lucide-react";

const navItems = [
  { name: "Industries", id: "industries" },
  { name: "Meet the Hires", id: "meet" },
  { name: "How it Works", id: "how-it-works" },
  { name: "Integrations", id: "integrations" },
  { name: "Case Studies", id: "cases" },
];

const Navbar = ({ onBookDemo }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Highlight nav item based on scroll position
      let found = navItems[0].id;
      for (let i = 0; i < navItems.length; i++) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            found = navItems[i].id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        {/* ---------- Top Banner (Closable) ---------- */}
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full bg-blue-700 text-white flex flex-col items-center justify-center px-6 py-3 gap-2 text-center overflow-hidden relative"
            >
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-2 text-sm sm:text-base flex-wrap justify-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <span role="img" aria-label="megaphone">
                  📢
                </span>
                <motion.span className="font-semibold text-white" whileHover={{ scale: 1.05 }}>
                  HIPAA-ready voice AI:
                </motion.span>
                <motion.span
                  className="text-white/90"
                  animate={{ x: [0, 3, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Secure, compliant, built for enterprises.
                </motion.span>
                <motion.a
                  href="#"
                  className="underline hover:text-blue-200 flex items-center gap-1 text-sm sm:text-base mt-1"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Get started today <FaArrowRight className="inline-block" />
                </motion.a>
              </motion.div>

              <motion.button
                onClick={() => setShowBanner(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
                whileHover={{ scale: 1.2 }}
              >
                <X size={18} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== Navbar ===== */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full border-b border-gray-300"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={Logo} alt="Logo" className="h-14 w-auto object-contain" />
              <span className="text-xl font-bold text-blue-700 mt-6">AI</span>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`relative cursor-pointer font-medium text-sm group ${
                    activeSection === item.id
                      ? "text-blue-700"
                      : "text-blue-800"
                  }`}
                  whileHover={{ y: -3 }}
                >
                  <ScrollLink
                    to={item.id}
                    smooth
                    duration={600}
                    offset={showBanner ? -120 : -60}
                    onSetActive={() => setActiveSection(item.id)}
                    spy={true}
                  >
                    <motion.span
                      className={`bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent ${
                        activeSection === item.id
                          ? "font-bold underline underline-offset-4"
                          : ""
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                    </motion.span>
                  </ScrollLink>
                  {/* Active underline */}
                  <motion.span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0"
                    }`}
                    layoutId={`underline-${idx}`}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Desktop Button */}
            <motion.button
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 rounded-full font-medium text-white shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(59,130,246,0.5)" }}
              onClick={onBookDemo}
            >
              Book a demo
              <motion.span
                className="bg-white text-blue-600 p-1 rounded-full flex items-center justify-center"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaArrowRight className="w-3 h-3" />
              </motion.span>
            </motion.button>

            {/* Hamburger */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X size={24} />
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: menuOpen ? 90 : 0 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </motion.div>
              )}
            </button>
          </div>

          {/* Mobile Slide Menu */}
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black z-40"
                  onClick={() => setMenuOpen(false)}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed top-0 right-0 h-95 w-55 bg-white z-50 shadow-lg p-6 flex flex-col gap-4 rounded-md  border border-gray-700"
                >
                  <button onClick={() => setMenuOpen(false)} className="self-end text-gray-700 hover:text-gray-900">
                    <X size={24} />
                  </button>

                  {navItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <ScrollLink
                        to={item.id}
                        smooth
                        duration={600}
                        offset={showBanner ? -120 : -60}
                        onClick={() => setMenuOpen(false)}
                        onSetActive={() => setActiveSection(item.id)}
                        spy={true}
                        className={`text-lg font-medium cursor-pointer relative ${
                          activeSection === item.id
                            ? "text-blue-700 font-bold underline underline-offset-4"
                            : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </ScrollLink>
                    </motion.div>
                  ))}

                  <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center justify-center font-medium shadow transition mt-4"
                    whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(59,130,246,0.5)" }}
                    onClick={() => { onBookDemo(); setMenuOpen(false); }}
                  >
                    Book a demo
                    <motion.span
                      className="ml-2 bg-white text-blue-600 rounded-full p-1 flex items-center justify-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <FaArrowRight className="w-3 h-3" />
                    </motion.span>
                  </motion.button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* Spacer */}
      <div className={showBanner ? "h-[140px]" : "h-[120px]"}></div>
    </>
  );
};

export default Navbar;