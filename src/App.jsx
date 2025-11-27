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
import logo from "./assets/Images/logo.jpg";
import ScrollToHashElement from "./Components/ScrollToHashElement";
import CallScreen from "./Components/CallScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [callModal, setCallModal] = useState({ show: false, caller: null });

  const loadingMessages = [
    "Initializing RAN Voice systems...",
    "Loading neural voice modules...",
    "Calibrating smart workflows...",
    "Preparing your AI experience...",
  ];

  // --- Boot Voice + Loader ---
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      const fallback = setTimeout(() => setLoading(false), 6000);
      return () => clearTimeout(fallback);
    }

    const synth = window.speechSynthesis;
    const greeting = "Welcome to RAN Voice — preparing your experience...";

    const preferredVoices = [
      "Google UK English Female",
      "Google US English",
      "Microsoft Aria Online (Natural) - English (United States)",
      "Microsoft Zira Desktop - English (United States)",
      "Jenny (Natural) - English (United States)",
    ];

    const feminineWords = [
      "female",
      "aria",
      "jenny",
      "sofia",
      "sonia",
      "olivia",
      "sara",
      "zira",
    ];

    const speakGreeting = () => {
      const utter = new SpeechSynthesisUtterance(greeting);
      utter.rate = 0.82;
      utter.pitch = 1.15;
      utter.volume = 0.92;

      const voices = synth.getVoices();
      const voice =
        voices.find((v) => preferredVoices.includes(v.name)) ||
        voices.find((v) =>
          feminineWords.some((w) => v.name.toLowerCase().includes(w))
        ) ||
        voices.find((v) => v.lang?.toLowerCase().startsWith("en"));

      if (voice) utter.voice = voice;

      synth.cancel();
      synth.speak(utter);
    };

    if (synth.getVoices().length === 0) {
      synth.addEventListener("voiceschanged", speakGreeting, { once: true });
    } else {
      speakGreeting();
    }

    const timer = setTimeout(() => setLoading(false), 6000);
    return () => {
      synth.cancel();
      clearTimeout(timer);
    };
  }, []);

  // --- Typewriter effect ---
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [loading]);

  // --- Listen for CallScreen open event ---
  useEffect(() => {
    const handler = (e) => {
      setCallModal({ show: true, caller: e?.detail || null });
    };
    window.addEventListener("openCallScreen", handler);
    return () => window.removeEventListener("openCallScreen", handler);
  }, []);

  // ----------------------------
  // LOADING SCREEN
  // ----------------------------
  if (loading) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 text-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg,rgb(88, 131, 204) 0%,rgb(151, 176, 221) 35%,rgb(127, 167, 228) 70%,rgb(149, 228, 228) 100%)",
        }}
      >
        <motion.div
          initial={{ y: 140, scale: 0.85, opacity: 0 }}
          animate={{
            y: [140, 25, 0],
            scale: [0.85, 1, 1.12],
            opacity: [0, 0.9, 1],
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
            times: [0, 0.65, 1],
          }}
        >
          <img
            src={logo}
            alt="Company Logo"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)] mt-8"
          />
        </motion.div>

        <motion.p
          key={textIndex}
          className="mt-6 text-blue-700 text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {loadingMessages[textIndex]}
        </motion.p>

        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 md:h-48 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-300 via-blue-500 to-transparent"></div>
          <svg
            className="w-full h-full opacity-80"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="ran-mountain-gradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.9" />
                <stop offset="45%" stopColor="#93c5fd" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <path
              fill="url(#ran-mountain-gradient)"
              d="M0,256L120,229.3C240,203,480,149,720,149.3C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>

        <motion.div
          className="absolute bottom-0 w-full h-32 sm:h-40 bg-gradient-to-t from-blue-300/40 to-transparent blur-3xl"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    );
  }

  // ----------------------------
  // MAIN CONTENT
  // ----------------------------
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="overflow-x-hidden"
    >
      <ScrollToHashElement />

      {callModal.show && (
        <div className="fixed inset-0 z-60 flex items-start justify-center p-4 sm:p-6 bg-black/50">
          <div className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl">
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

      <BusinessesLoves />

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
