
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Start48HourSetup from "./start48HourSetup";
import config from "../assets/Images/config.png";
import train from "../assets/Images/train.png";
import deploy from "../assets/Images/deploy.png";

export default function RanVoiceSetup() {
  const [activeStep, setActiveStep] = useState(1);
  const [openSetup, setOpenSetup] = useState(false);

  // 🔁 Auto switch every 4.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const stepCards = {
    1: {
      title: "Configure",
      subtitle: "Upload scripts & call flows",
      description:
        "Easily set up your AI employee by uploading call scripts, defining workflows, configuring integrations, and applying business rules—all in just minutes.",
      img: config,
      bg: "linear-gradient(135deg, rgba(168,171,245,0.9), rgba(135,138,235,0.7))",
      glow: "rgba(168,171,245,0.8)",
    },
    2: {
      title: "Train",
      subtitle: "NLP learns your processes",
      description:
        "Train your AI employee on your unique business data, customer conversations, and workflows—so it understands your terminology, tone, and processes just like a real team member.",
      img: train,
      bg: "linear-gradient(135deg, #bae6fd, #ace2fcff)",
      glow: "rgba(186,230,253,0.8)",
    },
    3: {
      title: "Deploy",
      subtitle: "Live in 48h",
      description:
        "Your AI employee goes live within 48 hours, seamlessly integrated with your phone systems to start handling real customer calls—fully supported and monitored in real time.",
      img: deploy,
      bg: "linear-gradient(135deg, #bbf7d0, #8fdbabff)",
      glow: "rgba(187,247,208,0.8)",
    },
  };

  const currentCard = stepCards[activeStep];

  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 overflow-hidden">
      {/* 🌈 Floating gradient auras */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full blur-3xl opacity-40 -z-10 "
      />
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1.1, 1.4, 1.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full blur-3xl opacity-40 -z-10"
      />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* Step Indicators */}
          <div className="flex items-center justify-start gap-1 sm:gap-2">
            {[1, 2, 3].map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  animate={{
                    scale: activeStep === step ? 1.18 : 1,
                    backgroundColor:
                      activeStep === step ? "#2563eb" : "#e5e7eb",
                    color: activeStep === step ? "#fff" : "#9ca3af",
                    boxShadow:
                      activeStep === step
                        ? "0px 0px 25px rgba(37,99,235,0.6)"
                        : "none",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="flex items-center justify-center font-semibold text-base sm:text-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-md"
                >
                  {step}
                </motion.div>
                {step < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-10 sm:w-16 h-[2px] border-t-2 border-gray-400 border-dashed mx-1 sm:mx-2"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Title + Subtitle */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-4">
              How <span className="text-blue-600">RanVoice</span> Works
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-lg">
              Get your AI voice employee up and running in just three simple
              steps.
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gray-200 hover:bg-gray-400 text-gray-900 px-6 sm:px-7 py-3 sm:py-4 rounded-full shadow-xl transition-all duration-300 group"
            onClick={() => setOpenSetup(true)}
          >
            <span className="font-medium text-base sm:text-lg">
              Start Your 48-Hour Setup
            </span>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-black rounded-full flex items-center justify-center"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* ✅ RIGHT SIDE — Left-aligned Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, scale: 0.85, rotateY: 80, rotate: -2 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              rotate: 0,
              transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 180,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              rotateY: -80,
              rotate: 2,
              transition: { duration: 0.45, ease: "easeInOut" },
            }}
            className="relative rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-blue-200 overflow-hidden flex flex-col items-start justify-center backdrop-blur-md"
            style={{
              background: currentCard.bg,
              boxShadow: `0 0 40px ${currentCard.glow}`,
            }}
          >
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-left w-full"
            >
              {currentCard.title}
            </motion.h2>

            {/* Image */}
            <motion.img
              src={currentCard.img}
              alt={currentCard.title}
              initial={{ opacity: 0, scale: 0.85, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain mb-4 self-center"
            />

            {/* Subtitle + Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="text-left max-w-md"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {currentCard.subtitle}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {currentCard.description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {openSetup && <Start48HourSetup onClose={() => setOpenSetup(false)} />}
    </section>
  );
}
