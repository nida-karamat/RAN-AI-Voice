
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/logo.jpg";
import { scroller } from "react-scroll";
import { X } from "lucide-react";
import CalComModal from "./CalComModal";

const navItems = [
  { name: "Industries", id: "industries" },
  { name: "Meet the Hires", id: "meet" },
  { name: "How it Works", id: "how-it-works" },
  { name: "Integrations", id: "integrations" },
  { name: "Case Studies", id: "cases" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const [calModalOpen, setCalModalOpen] = useState(false);

  const handleScrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 600,
      smooth: "easeInOutQuart",
      offset: showBanner ? -120 : -60,
    });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
              transition={{ type: "tween", stiffness: 200 }}
            >
              <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`relative cursor-pointer font-medium text-sm group rounded-full overflow-hidden ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white px-5 py-2 shadow-lg"
                      : "text-black hover:bg-blue-50 px-5 py-2"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    rotate: [0, 1.5, -1.5, 0],
                    boxShadow: "0px 8px 25px rgba(59,130,246,0.3)",
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScrollTo(item.id)}
                >
                  <span className="relative z-10">{item.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Desktop Try Live Demo Button */}
            <motion.button
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 rounded-full font-medium text-white shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(59,130,246,0.5)" }}
              onClick={() => setCalModalOpen(true)}
            >
              Let's Talk
              <motion.span
                className="bg-white text-blue-600 p-1 rounded-full flex items-center justify-center"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaArrowRight className="w-3 h-3" />
              </motion.span>
            </motion.button>

            {/* Mobile Hamburger */}
            <button className="lg:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
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
              className="fixed top-0 right-0 h-120 w-55 bg-white z-50 shadow-lg p-6 flex flex-col gap-4 rounded-md border border-gray-700"
            >
              <button onClick={() => setMenuOpen(false)} className="self-end text-gray-700 hover:text-gray-900">
                <X size={24} />
              </button>

              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-lg font-medium cursor-pointer block w-full text-left px-4 py-2 rounded-md transition-all ${
                    activeSection === item.id ? "bg-blue-600 text-white" : "text-black hover:bg-blue-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center justify-center font-medium shadow transition mt-4"
                whileHover={{ scale: 1.05 }}
                onClick={() => { setMenuOpen(false); setCalModalOpen(true); }}
              >
                Let's Talk
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

      {/* Spacer */}
      <div className={showBanner ? "h-[140px]" : "h-[120px]"}></div>

      {/* Cal.com Modal */}
      <CalComModal isOpen={calModalOpen} onClose={() => setCalModalOpen(false)} />
    </>
  );
};

export default Navbar;
