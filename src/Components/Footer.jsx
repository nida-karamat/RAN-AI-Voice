import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/Images/logo.jpg";

export default function RanVoiceFooter() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <footer className="bg-white overflow-hidden ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        {/* ======== Main Grid ======== */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 mb-12"
        >
          {/* Left Column - Brand */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-center sm:text-left"
          >
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <span className="text-2xl font-bold text-gray-900 gap-1 flex items-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-20 w-auto rounded-md object-cover"
                />
                <span className="font-bold mt-7 text-blue-600 ">AI</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Redefining intelligence with AI-powered solutions for the modern
              business.
            </p>
          </motion.div>

          {/* Middle Column - Solutions */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
              Solutions
            </h3>
            <ul className="space-y-2">
              {[
                "AI Voice Assistant",
                "Automation Tools",
                "Industry Insights",
                "Machine Learning",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Company */}
          <motion.div variants={itemVariants} className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 mb-4 text-base sm:text-lg">
              Company
            </h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Blog", "Contact"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ======== Bottom Bar ======== */}
        <motion.div
          variants={itemVariants}
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-300"
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Ran AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -2, color: "#2563EB" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-500 hover:text-blue-600 text-xs sm:text-sm transition-colors"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
