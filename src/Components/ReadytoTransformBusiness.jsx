
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import laptop from "../assets/Images/laptop.png";
import CalComModal from "./CalComModal";

export default function ReadyToTransformYourBusiness() {
  const [calModalOpen, setCalModalOpen] = useState(false);
  return (
    <div className="bg-white flex items-center justify-center px-2 sm:px-4 py-10 sm:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-6xl relative">
        {/* 🔵 Floating gradient blobs */}
        <motion.div
          className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-blue-400 rounded-full opacity-20 blur-3xl pointer-events-none"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-indigo-400 rounded-full opacity-20 blur-3xl pointer-events-none"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* 🌈 Main Gradient Card */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-700 rounded-3xl p-4 sm:p-8 md:p-14 lg:p-16 relative overflow-visible z-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              className="space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ready to Transform Your{" "}
                  <span className="font-semibold inline">Business With AI?</span>
                </h1>
                <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                  Join thousands of companies already using Ran AI to revolutionize
                  their operations. Start your AI transformation journey today.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex mx-auto lg:mx-0 items-center gap-3 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg group"
                onClick={() => setCalModalOpen(true)}
              >
                Let's Talk
                <motion.div
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaArrowRight className="w-4 h-4 text-white" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE + RINGS */}
            <div className="relative flex items-center justify-center overflow-visible min-h-[220px] sm:min-h-[260px]">
              {/* Top-Left Ring (hidden on small screens) */}
              <motion.div
                className="absolute hidden md:block border-blue-900 rounded-full shadow-[0_0_40px_rgba(30,64,175,0.6)]"
                style={{
                  top: "max(-24px, -4vw)",
                  left: "max(-24px, -4vw)",
                  width: "clamp(80px, 24vw, 200px)",
                  height: "clamp(80px, 24vw, 200px)",
                  borderWidth: "clamp(5px, 1vw, 12px)",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.08, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Bottom-Right Ring (hidden on small screens) */}
              <motion.div
                className="absolute hidden md:block border-blue-900 rounded-full shadow-[0_0_40px_rgba(30,64,175,0.6)]"
                style={{
                  bottom: "max(-24px, -4vw)",
                  right: "max(-24px, -4vw)",
                  width: "clamp(80px, 24vw, 200px)",
                  height: "clamp(80px, 24vw, 200px)",
                  borderWidth: "clamp(5px, 1vw, 12px)",
                }}
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.08, 1],
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Center Image */}
              <motion.div
                className="relative z-10 w-full max-w-[180px] sm:max-w-[250px] md:max-w-md lg:max-w-lg"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  src={laptop}
                  alt="AI Screen Mockup"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Cal.com Modal */}
      <CalComModal isOpen={calModalOpen} onClose={() => setCalModalOpen(false)} />
    </div>
  );
}
