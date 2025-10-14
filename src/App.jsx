"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "./Layout/Layout";
import HireAIVoice from "./Components/HireAIVoice";
import BusinessesLoves from "./Components/BusinessesLoves";
import AIPoweredVoice from "./Components/AIPoweredVoice";
import TransformYourBusiness from "./Components/TransformYouBusiness";
import HowRanWorks from "./Components/HowRanWork";
import ReadytoTransformBusiness from "./Components/ReadytoTransformBusiness";
import Footer from "./Components/Footer";
import Integrate from "./Components/Integrate";
import Logo from "./assets/Images/logo.jpg";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1f] via-black to-[#0a0f1f] overflow-hidden text-center px-4">
        {/* Floating gradient background waves */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #3b82f6 0%, transparent 70%)",
              "radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 70%)",
              "radial-gradient(circle at 40% 50%, #3b82f6 0%, transparent 70%)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating glow particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0.5 + Math.random(),
                opacity: 0.3 + Math.random() * 0.7,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
                opacity: [0.2, 0.9, 0.2],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Rotating glowing rings around logo */}
        <motion.div
          className="absolute w-60 h-60 rounded-full border-2 border-blue-500 blur-[2px] opacity-60"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-44 h-44 rounded-full border-2 border-indigo-500 blur-[3px] opacity-40"
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        {/* Main logo animation */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: 0 }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.5, 1, 0.8],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative z-10 rounded-full shadow-2xl"
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain rounded-full bg-white p-3 shadow-lg"
          />
        </motion.div>

        {/* Text shimmer + fade (responsive & centered) */}
        <motion.p
          className="mt-8 sm:mt-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 text-base sm:text-lg md:text-xl tracking-[0.15em] sm:tracking-[0.2em] uppercase font-semibold z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Preparing Your Experience...
        </motion.p>

        {/* Bottom fade light wave */}
        <motion.div
          className="absolute bottom-0 w-full h-32 sm:h-40 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl"
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    );
  }

  // After Loader
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="overflow-x-hidden"
    >
      <Layout />

      <section id="industries">
        <HireAIVoice />
      </section>

      <section>
        <BusinessesLoves />
      </section>

      <section id="how">
        <AIPoweredVoice />
      </section>

      <section id="meet">
        <TransformYourBusiness />
      </section>

      <section id="how-it-works">
        <HowRanWorks />
      </section>

      <section id="integrations">
        <Integrate />
      </section>

      <section id="cases">
        <ReadytoTransformBusiness />
      </section>

      <Footer />
    </motion.div>
  );
};

export default App;
