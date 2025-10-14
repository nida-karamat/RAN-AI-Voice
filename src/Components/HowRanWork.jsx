"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
export default function RanVoiceSetup() {
  const [activeStep, setActiveStep] = useState(1);

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const stepCards = {
    1: {
      title: "Configure",
      description:
        "Easily set up your AI employee by uploading call scripts, defining workflows, configuring integrations, and applying business rules—all in just minutes.",
      layout: "venn",
      cardColor: "from-indigo-200 via-blue-100 to-blue-200",
    },
    2: {
      title: "Train",
      description:
        "Teach your AI employee the tone, responses, and conversation style using real-world examples to ensure it performs exactly as your team expects.",
      layout: "rings",
      cardColor: "from-green-200 via-green-300 to-green-400",
      color: ["#29e06cff", "#224ec5ff", "#6da316ff"], // green shades
    },
    3: {
      title: "Deploy",
      description:
        "Launch your AI employee instantly across all channels. Monitor performance, get analytics, and optimize responses for maximum efficiency.",
      layout: "rings3",
      cardColor: "from-purple-200 via-purple-300 to-purple-400",
      color: ["#a78bfa", "#8b5cf6", "#7c3aed"], // purple shades for Step 3 rings
    },
  };

  const currentCard = stepCards[activeStep];

  return (
    <section className="flex items-center justify-center px-6 sm:px-10 py-20 overflow-hidden relative">
      {/* Floating gradient auras */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full blur-3xl opacity-30 -z-10"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.2, 1.4, 1.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-30 -z-10"
      />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Steps Indicator */}
          <motion.div
            className="flex items-center justify-start gap-1 sm:gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {[1, 2, 3].map((step, i) => (
              <React.Fragment key={i}>
                <motion.button
                  whileHover={{ scale: 1.1, rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveStep(step)}
                  className={`flex items-center justify-center font-semibold text-base sm:text-lg rounded-full shadow-md transition-all
                    ${activeStep === step
                      ? "bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 ring-4 ring-blue-400"
                      : "bg-gray-200 text-gray-400 w-8 h-8 sm:w-10 sm:h-10"
                    }`}
                >
                  {step}
                </motion.button>
                {step < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1.5 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 sm:w-16 h-[2px] border-t-2 border-gray-400 border-dashed mx-1 sm:mx-2"
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-snug mb-4">
              How <span className="text-blue-600">RanVoice</span> Works
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg">
              Get your AI voice employee up and running in just three simple steps.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 bg-gray-200 hover:bg-gray-400 text-gray-900 px-7 py-4 rounded-full transition-all duration-300 shadow-xl group"
          >
            <span className="font-medium text-lg">Start Your 48-Hour Setup</span>
            <motion.div
              whileHover={{ x: 8, rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-9 h-9 bg-black rounded-full flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* RIGHT SECTION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`relative bg-gradient-to-br rounded-3xl p-10 sm:p-12 shadow-2xl border border-blue-200 overflow-hidden ${currentCard.cardColor}`}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
            >
              {currentCard.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-700 leading-relaxed text-sm sm:text-base"
            >
              {currentCard.description}
            </motion.p>

            {/* Step 1: Original Venn */}
            {currentCard.layout === "venn" && activeStep === 1 && (
              <motion.div className="relative flex items-center justify-center h-48 sm:h-56 mt-6">
                <motion.svg
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-60 h-60"
                  viewBox="0 0 200 150"
                >
                  <circle cx="70" cy="60" r="45" fill="none" stroke="#4338ca" strokeWidth="2" opacity="0.6" />
                  <circle cx="130" cy="60" r="45" fill="none" stroke="#4338ca" strokeWidth="2" opacity="0.6" />
                  <circle cx="100" cy="95" r="45" fill="none" stroke="#4338ca" strokeWidth="2" opacity="0.6" />
                </motion.svg>
              </motion.div>
            )}

            {/* Step 2: Green Rings */}
            {currentCard.layout === "rings" && activeStep === 2 && (
              <motion.div className="relative flex items-center justify-center h-48 sm:h-56 mt-6">
                {currentCard.color.map((clr, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{
                      width: `${80 + i * 20}px`,
                      height: `${80 + i * 20}px`,
                      borderColor: clr,
                    }}
                    animate={{
                      rotate: [0, 15 * (i + 1), -15 * (i + 1), 0],
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </motion.div>
            )}

            {/* Step 3: Purple Offset/Rotated Rings */}
            {currentCard.layout === "rings3" && activeStep === 3 && (
              <motion.div className="relative flex items-center justify-center h-48 sm:h-56 mt-6">
                {currentCard.color.map((clr, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2"
                    style={{
                      width: `${80 + i * 25}px`,
                      height: `${80 + i * 25}px`,
                      borderColor: clr,
                      top: `${i * 5}px`,
                      left: `${i * 5}px`,
                    }}
                    animate={{
                      rotate: [0, 20 * (i + 1), -20 * (i + 1), 0],
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
