"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Mail, Calendar } from "lucide-react";
import { BsBagPlus } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";

const cardsData = [
  {
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    title: "Analytics & BI",
    description:
      "Sync with Google Analytics, Tableau, and more to analyze performance, uncover insights, and drive smarter business decisions.",
  },
  {
    icon: <Mail className="w-5 h-5 text-purple-500" />,
    title: "Communication",
    description:
      "Integrate with Slack, Microsoft Teams, and others to unify collaboration, simplify updates, and keep your team connected everywhere.",
  },
  {
    icon: <Calendar className="w-5 h-5 text-green-500" />,
    title: "Scheduling Tools",
    description:
      "Connect with Calendly, Acuity, and more to automate bookings, reduce manual work, and keep schedules running seamlessly.",
  },
  {
    icon: <BsBagPlus className="w-5 h-5 text-blue-500" />,
    title: "Healthcare Systems",
    description:
      "Link with Epic, Cerner, and others to securely manage patient data, improve workflows, and deliver better healthcare experiences.",
  },
  {
    icon: <FaPhoneAlt className="w-5 h-5 text-blue-500" />,
    title: "Phone Systems",
    description:
      "Integrate with Twilio, RingCentral, and more to manage calls, ensure reliability, and scale communication without extra effort.",
  },
  {
    icon: <TbDatabase className="w-5 h-5 text-blue-500" />,
    title: "CRM Systems",
    description:
      "Connect with HubSpot, Salesforce, and others to centralize customer data, track leads, and streamline your entire sales process.",
  },
];

export default function Integrate() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);

  // Start auto-slide
  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveIndex((prev) => (prev + 1) % cardsData.length);
      }
    }, 1800);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Hover & touch handlers
  const handlePauseStart = () => {
    isPausedRef.current = true;
    clearInterval(intervalRef.current);
  };

  const handlePauseEnd = () => {
    isPausedRef.current = false;
    // Instantly move to next card and restart smoothly
    setActiveIndex((prev) => (prev + 1) % cardsData.length);
    startAutoSlide();
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight mt-12"
          >
            Integrate Instantly With
            <br />
            Your <span className="text-blue-600">Tools</span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto md:mx-0"
          >
            Connect with your favorite tools. Swipe or tap to preview integrations.
          </motion.p>
        </div>

        {/* Right Section */}
        <div
          className="flex-1 flex flex-col justify-center items-center relative w-full"
          onMouseEnter={handlePauseStart}
          onMouseLeave={handlePauseEnd}
          onTouchStart={handlePauseStart}
          onTouchEnd={handlePauseEnd}
        >
          {/* Cards Container */}
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] h-[260px] sm:h-[280px] md:h-[320px] flex items-center justify-center">
            <AnimatePresence initial={false}>
              {cardsData.map((card, idx) => {
                const isActive = idx === activeIndex;
                const offset = activeIndex - idx;

                return (
                  <motion.div
                    key={idx}
                    className="absolute w-full"
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{
                      y: window.innerWidth < 640 ? 0 : offset * 12,
                      opacity: idx <= activeIndex ? 1 : 0,
                      scale: isActive ? 1 : 0.95,
                      rotate: window.innerWidth < 640 ? 0 : offset * 2,
                    }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      mass: 0.3,
                    }}
                    style={{ zIndex: isActive ? 10 : 10 - (activeIndex - idx) }}
                  >
                    <motion.div
                      className="bg-blue-100 border border-blue-300 shadow-2xl p-4 sm:p-6 flex gap-3 items-start rounded-3xl h-auto min-h-[160px] sm:min-h-[180px]"
                      whileHover={{
                        scale: 1.08,
                        y: -5,
                        boxShadow: "0px 10px 35px rgba(59,130,246,0.3)",
                      }}
                      whileTap={{
                        scale: 0.96,
                        boxShadow: "0px 8px 25px rgba(59,130,246,0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="bg-white rounded-xl p-2 flex-shrink-0 shadow-sm"
                      >
                        {card.icon}
                      </motion.div>

                      <div>
                        <motion.h3
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-base sm:text-lg font-semibold text-gray-900 mb-1"
                        >
                          {card.title}
                        </motion.h3>
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="text-gray-600 text-sm leading-relaxed"
                        >
                          {card.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex gap-2 mt-8 justify-center w-full">
            {cardsData.map((_, idx) => (
              <motion.button
                key={idx}
                onMouseDown={handlePauseStart}
                onMouseUp={handlePauseEnd}
                onTouchStart={handlePauseStart}
                onTouchEnd={handlePauseEnd}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === idx
                    ? "bg-blue-600 scale-110"
                    : "bg-gray-400"
                }`}
                aria-label={`Show card ${idx + 1}`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
