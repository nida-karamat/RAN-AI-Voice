
import React from "react";
import { motion } from "framer-motion";
import { LuAudioLines } from "react-icons/lu";
import expGroup from "../assets/Images/expGroup1.svg";
import liza from "../assets/Images/liza1.jpg";
import diego from "../assets/Images/diego2.jpg";

export default function AIPoweredVoice() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-10 md:px-20 overflow-hidden relative">
      {/* Floating background aura */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[320px] sm:w-[400px] md:w-[480px] h-[320px] sm:h-[400px] md:h-[480px] bg-indigo-300 rounded-full opacity-20 blur-3xl -z-10"
      />

      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-center mb-16 sm:mb-20"
      >
        <motion.div
          whileHover={{ rotate: 12, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-indigo-100 p-5 rounded-full shadow-xl">
            <LuAudioLines className="w-10 h-10 text-indigo-600" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-snug"
        >
          Enhance customer experiences with <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-indigo-600"
            viewport={{ once: true }}
          >
            AI-powered
          </motion.span>{" "}
          voice solutions.
        </motion.h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-7xl mx-auto">
        {/* Left Card - Chat */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.03, y: -10 }}
          className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-indigo-200 relative overflow-hidden min-h-[500px] sm:min-h-[520px]"
        >
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4"
          >
            Smart Call Routing
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10"
          >
            Automatically direct customers to the right AI agent or department,
            reducing wait times and boosting efficiency.
          </motion.p>

          {/* Chat bubbles */}
          <div className="space-y-4 sm:space-y-6">
            {[{ text: "Hey mate, how’s all going?", user: true },
              { text: "Yeah everything is good", user: false },
              { text: "Glad to hear! Let’s proceed.", user: true },
              { text: "Sure, go ahead!", user: false }
            ].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-start gap-3 ${msg.user ? "justify-start" : "justify-end"}`}
              >
                {msg.user && (
                  <img
                    src={liza}
                    alt="user"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-[center_top]"
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-xl px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base shadow-md max-w-[75%] ${msg.user ? "bg-gray-100 text-gray-800" : "bg-indigo-100 text-indigo-700"}`}
                >
                  {msg.text}
                </motion.div>
                {!msg.user && (
                  <img
                    src={diego}
                    alt="agent"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover object-[center_top]"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Card - Voice Analytics */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.03, y: -10 }}
          className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200 rounded-3xl p-6 sm:p-10 shadow-2xl border border-indigo-200 relative overflow-hidden min-h-[500px] sm:min-h-[520px]"
        >
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4"
          >
            Voice Analytics
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 max-w-full sm:max-w-md"
          >
            Gain insights from every conversation with AI-driven speech
            analysis that detects intent, sentiment, and trends.
          </motion.p>

          {/* Animated image section with smooth floating */}
          <motion.div
            initial={{ rotate: -10, opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ rotate: -6, opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0], // smooth up-down float
              rotate: [-6, -8, -6], // subtle rotation
              scale: [1, 1.03, 1], // gentle pulsing
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-70 sm:max-w-[400px] md:max-w-[480px] h-auto mx-auto"
          >
            <motion.img
              src={expGroup}
              alt="Soundwave Analytics"
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.07, rotate: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
