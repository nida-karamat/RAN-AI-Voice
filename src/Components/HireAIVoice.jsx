"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import BookaDemo from "./BookaDemo";
import LiveDemo from "./LiveDemo";
import img1 from "../assets/Images/img1.jpg";
import img2 from "../assets/Images/img2.jpg";
import img3 from "../assets/Images/img3.jpg";
import img4 from "../assets/Images/img4.jpg";
import img5 from "../assets/Images/img5.jpg";
import img6 from "../assets/Images/img6.jpg";
import img7 from "../assets/Images/img7.jpg";
import background from "../assets/Images/background.jpg";

const aiEmployees = [
  { name: "Zara", role: "AI Receptionist", image: img4 },
  { name: "James", role: "AI Engineer", image: img5 },
  { name: "Alex", role: "AI Debt Collector", image: img6 },
  { name: "Lisa", role: "AI Sales Executive", image: img7 },
];

const badgeVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: [1, 1.2, 1],
    opacity: 1,
    transition: { repeat: Infinity, duration: 1.2 },
  },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const HireAIVoice = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showLiveDemo, setShowLiveDemo] = useState(false);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="
        w-full overflow-x-hidden mt-[-50px] sm:mt-[-60px] md:mt-[-80px]
        flex flex-col items-center justify-center 
        relative bg-cover bg-center bg-no-repeat
        pt-[calc(env(safe-area-inset-top)+80px)] sm:pt-24 md:pt-32
      "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* ✅ Fixed Responsive Badge */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-2 mb-4 px-3 w-full mt-2 sm:mt-4"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span
            variants={badgeVariant}
            className="
              flex flex-wrap items-center justify-center
              gap-1.5 sm:gap-2 
              bg-gray-100 shadow-sm text-gray-700 
              text-[10px] xs:text-xs sm:text-sm md:text-base 
              font-medium 
              px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 
              rounded-full border border-gray-200 
              overflow-hidden text-center
              max-w-[90%] sm:max-w-fit
            "
          >
            <span
              className="
                flex-shrink-0 bg-blue-600 text-white 
                text-[10px] xs:text-xs sm:text-sm md:text-base 
                font-semibold px-2 sm:px-3 py-0.5 sm:py-1 
                rounded-full shadow-md animate-pulse
              "
            >
              ● New
            </span>
            <span className="truncate sm:whitespace-nowrap">
              AI Voice Agents for Business
            </span>
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center text-black leading-tight mb-2 px-4"
        >
          Hire <span className="text-blue-600">AI Voice</span>
        </motion.h1>

        {/* Main Title + Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-3 px-4 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black">
            Employees
          </h1>
          <span className="flex -space-x-3">
            {[img1, img2, img3].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`avatar-${i}`}
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-lg"
                whileHover={{ scale: 1.3, rotate: [0, 15, -15, 0] }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ))}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black">
            That Never Miss a Call
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-gray-500 text-base sm:text-lg text-center max-w-2xl mb-8 px-4"
        >
          Transform your business communications with secure, HIPAA-ready AI
          voice agents designed for healthcare, sales, and support.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 px-4"
        >
          {/* Live Demo Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-gray-500 bg-white text-gray-800 font-medium hover:bg-gray-50 transition-shadow shadow-md flex items-center justify-center gap-2"
            onClick={() => setShowLiveDemo(true)}
          >
            Try Live Demo
          </motion.button>

          {/* Book A Demo Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-900 text-white font-medium flex items-center justify-center gap-3 hover:opacity-90 transition-shadow shadow-lg"
            onClick={() => setShowDemoForm(true)}
          >
            Book A Demo
            <motion.span
              className="ml-2 w-6 h-6 flex items-center justify-center bg-white text-blue-600 rounded-full"
              whileHover={{ scale: 1.2, rotate: 20 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ x: [0, 2, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.span>
          </motion.button>
        </motion.div>

        {/* AI Employees Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="
            grid 
            grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 
            gap-4 sm:gap-6 
            max-w-6xl w-full mx-auto mt-10 sm:mt-12 px-3 sm:px-6 md:px-8
          "
        >
          {aiEmployees.map((employee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 18,
                delay: index * 0.2,
              }}
              whileHover={{
                rotateY: index % 2 === 0 ? 15 : -15,
                rotateX: 5,
                scale: 1.1,
                boxShadow: "0 20px 35px rgba(0,0,0,0.25)",
              }}
              className="
                rounded-2xl overflow-hidden bg-white relative 
                flex flex-col items-center cursor-pointer
              "
              style={{ perspective: 1000 }}
            >
              <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden rounded-2xl">
                <img
                  src={employee.image}
                  alt={`${employee.name} ${employee.role}`}
                  className="w-full h-full object-cover sm:object-cover"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-center text-white text-xs sm:text-sm font-medium bg-black/60 px-3 py-1 rounded">
                {employee.name}: {employee.role}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Demo Modals */}
      <AnimatePresence>
        {showDemoForm && <BookaDemo onClose={() => setShowDemoForm(false)} />}
        {showLiveDemo && <LiveDemo onClose={() => setShowLiveDemo(false)} />}
      </AnimatePresence>
    </motion.section>
  );
};

export default HireAIVoice;
