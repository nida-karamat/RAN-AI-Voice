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
import ScrollToHashElement from "./Components/ScrollToHashElement"; // 👈 Added import
import CallScreen from "./Components/CallScreen"; // new top-level call UI
import background from "./assets/Images/background.jpg";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [callModal, setCallModal] = useState({ show: false, caller: null }); // top-level call modal state
  const loadingMessages = [
    "Initializing RAN AI systems...",
    "Loading neural voice modules...",
    "Calibrating smart workflows...",
    "Preparing your AI experience...",
  ];

  useEffect(() => {
    // Voice greeting
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(
      "Welcome to RAN Voice — preparing your experience..."
    );
    synth.speak(utter);

    // Loader timer
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through typewriter text
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [loading]);

  // listen for Try-button dispatch from AIAgentCards
  useEffect(() => {
    const handler = (e) => {
      const caller = e?.detail || null;
      setCallModal({ show: true, caller });
    };
    window.addEventListener("openCallScreen", handler);
    return () => window.removeEventListener("openCallScreen", handler);
  }, []);

  if (loading) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden text-center px-4"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(59,130,246,0.18), rgba(99,102,241,0.12)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Floating aur glowing soft circles background */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Center hero glow behind logo (clearly visible) */}
        <motion.div
          className="pointer-events-none absolute w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(191,219,254,0.75) 0%, rgba(147,197,253,0.55) 40%, rgba(147,197,253,0.25) 60%, transparent 70%)",
            filter: "blur(18px)",
          }}
          initial={{ opacity: 0.6, scale: 0.9 }}
          animate={{ opacity: [0.55, 0.8, 0.55], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated tech grid overlay (professional) */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                to right,
                rgba(255,255,255,0.10),
                rgba(255,255,255,0.10) 1px,
                transparent 1px,
                transparent 80px
              ),
              repeating-linear-gradient(
                to bottom,
                rgba(255,255,255,0.10),
                rgba(255,255,255,0.10) 1px,
                transparent 1px,
                transparent 80px
              )
            `,
            backgroundSize: 'auto',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.9))',
          }}
          animate={{ backgroundPosition: ['0px 0px, 0px 0px', '40px 20px, 20px 40px', '0px 0px, 0px 0px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle pulsing nodes on grid intersections */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(38)].map((_, i) => {
            const left = (i * 11 + 8) % 95;
            const top = (i * 7 + 12) % 85;
            return (
              <motion.span
                key={`node-${i}`}
                className="absolute rounded-full"
                style={{
                  width: 8,
                  height: 8,
                  left: `${left}%`,
                  top: `${top}%`,
                  background: 'white',
                  filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.7))',
                  opacity: 0.7,
                }}
                animate={{ opacity: [0.35, 0.9, 0.35], scale: [0.9, 1.2, 0.9] }}
                transition={{ duration: 3 + (i % 5) * 0.6, repeat: Infinity, ease: 'easeInOut', delay: (i % 7) * 0.2 }}
              />
            );
          })}
        </div>
  
        {/* Rotating aura rings */}
      
  
        {/* Logo soft glow - smooth one-time zoom-in (no continuous movement) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.3, 1],
            opacity: [0, 1, 0.95],
          }}
          transition={{
            duration: 1.9,
            ease: "easeOut",
          }}
        >
          <img
            src={Logo}
            alt="Company Logo"
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] mt-8"
          />
        </motion.div>
  
        {/* Loading text */}
        <motion.p
          key={textIndex}
          className="mt-8 text-blue-700 text-base sm:text-lg md:text-xl font-semibold tracking-wide uppercase bg-clip-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loadingMessages[textIndex]}
        </motion.p>
  
        {/* Subtle wave glow bottom */}
        <motion.div
          className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-blue-300/40 to-transparent blur-3xl"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    );
  }
  

  // Main content after loading
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="overflow-x-hidden"
    >
      {/* 👇 Scrolls automatically when hash is present */}
      <ScrollToHashElement />

      {/* Top-level CallScreen modal (opened via "openCallScreen" event) */}
      {callModal.show && (
        <div className="fixed inset-0 z-60 flex items-start justify-center p-6 bg-black/50">
          <div className="w-full max-w-6xl">
            <CallScreen
              caller={callModal.caller}
              onClose={() => setCallModal({ show: false, caller: null })}
            />
          </div>
        </div>
      )}

      <Layout />

      <section id="industries">
        <HireAIVoice />
      </section>

      <section>
        <BusinessesLoves />
      </section>

      <section id="industry-insights">
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
