"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import BookaDemo from "./BookaDemo";  

import background from "../assets/Images/background.jpg";
import AIAgentCards from "./AIAgentCards";
import img1 from "../assets/Images/img1.jpg";
// ✅ Images imports
import liza from "../assets/Images/liza.png";
import lizaHover from "../assets/Images/liza1.jpg";
import diego from "../assets/Images/diego.png";
import diegoHover from "../assets/Images/diego2.jpg";
import ethan from "../assets/Images/ethan.png";
import ethanHover from "../assets/Images/ethan2.jpg";
import amina from "../assets/Images/amina.png";
import aminaHover from "../assets/Images/amina2.jpg";

// ✅ Circle images
import liza1 from "../assets/Images/liza/liza1.jpg";
import liza2 from "../assets/Images/liza/liza2.jpg";
import liza3 from "../assets/Images/liza/liza3.jpg";
import liza4 from "../assets/Images/liza/liza4.jpg";

import diego1 from "../assets/Images/diego/diego1.jpg";
import diego2 from "../assets/Images/diego/diego2.jpg";
import diego3 from "../assets/Images/diego/diego3.jpg";
import diego4 from "../assets/Images/diego/diego4.jpg";

import ethan1 from "../assets/Images/ethan/ethan1.jpg";
import ethan2 from "../assets/Images/ethan/ethan2.jpg";
import ethan3 from "../assets/Images/ethan/ethan3.jpg";
import ethan4 from "../assets/Images/ethan/ethan4.jpg";

import amina1 from "../assets/Images/amina/anima1.jpg";
import amina2 from "../assets/Images/amina/anima2.jpg";
import amina3 from "../assets/Images/amina/anima3.jpg";
import amina4 from "../assets/Images/amina/anima4.jpg";

// ✅ AI Employees Data
const aiEmployees = [
  {
    name: "Liza",
    role: "AI Receptionist",
    image: liza,
    hoverImage: lizaHover,
    smallImages: [liza1, liza2, liza4, liza3],
    id: 1,
  },
  {
    name: "Diego",
    role: "AI SDR Agent",
    image: diego,
    hoverImage: diegoHover,
    smallImages: [diego1, diego4, diego2, diego3],
    id: 2,
  },
  {
    name: "Ethan",
    role: "AI Legal Assistant",
    image: ethan,
    hoverImage: ethanHover,
    smallImages: [ethan1, ethan2, ethan3, ethan4],
    id: 3,
  },
  {
    name: "Amina",
    role: "AI Care Nurse",
    image: amina,
    hoverImage: aminaHover,
    smallImages: [amina1, amina2, amina3, amina4],
    id: 4,
  },
];

const labels = [
  "AI Receptionist",
  "AI Legal Assistant",
  "AI SDR Agent",
  "AI Care Nurse",
];

const badgeVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 2,
    y: 0,
    transition: {
      duration: 0.4, // faster entrance
      delay: 0.1, // minimal delay
      ease: "easeOut",
    },
  },
};

const HireAIVoice = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  // Temporary per-card preview while hovering a circle
  const [hoverPreviewByEmployee, setHoverPreviewByEmployee] = useState({});
  // Persistent per-card chosen hover image (set on click)
  const [customHoverImageByEmployee, setCustomHoverImageByEmployee] = useState({});

  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => setActiveIndex(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);
  const [activeCircle, setActiveCircle] = useState(null);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full overflow-x-hidden flex flex-col items-center justify-center relative bg-cover bg-center bg-no-repeat -mt-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* --- Header Section --- */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-2 mb-4 px-3 w-full mt-2 sm:mt-4"
          variants={badgeVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="flex items-center gap-2 bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full border border-gray-200 mt-29  sm:mt-8 md:mt-10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 0.9, // faster pulse
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full animate-pulse">
              ● New
            </span>
            AI Voice Agents for Business
          </motion.span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold text-center text-black leading-tight mb-2 px-4"
        >
          Hire <span className="text-blue-600 mt-10">AI Voice</span>
        </motion.h1>

        {/* Title + Avatars */}
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
            {[liza1, diego4, ethan1, amina4].map((src, i) => (
              <motion.div
                key={i}
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-lg overflow-hidden relative"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 20px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.img
                  src={src}
                  alt={`avatar-${i}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{
                    objectPosition: "center top",
                    imageRendering: "high-quality",
                    transform: "translateZ(0)",
                    filter: "contrast(1.1) saturate(1.05) brightness(1.05)", // sharper + brighter
                  }}
                  whileHover={{
                    filter: "contrast(1.2) saturate(1.1) brightness(1.1)",
                  }}
                />
              </motion.div>
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
          Transform your business communications with secure, <span className="text-blue-800 font-semibold">HIPAA-ready AI  voice</span>  {" "}
          agents designed for healthcare, sales, and support.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 px-4"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-gray-500 bg-white text-gray-800 font-medium hover:bg-gray-50 transition-shadow shadow-md flex items-center justify-center gap-2"
          >
            Book A Demo
          </motion.button>

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
            Try Live Demo
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
      </div>

      {/* --- AI Employees Grid --- */}
      <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full mx-auto mt-10 px-6 relative z-10">
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
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            onTouchStart={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            className="relative rounded-2xl overflow-visible flex flex-col items-center group cursor-pointer aspect-[3/4]"
          >
            {/* Default Image */}
            <motion.img
              src={employee.image}
              alt={employee.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hoverPreviewByEmployee[employee.id] || customHoverImageByEmployee[employee.id]
                  ? "opacity-0"
                  : activeIndex === index
                  ? "opacity-0"
                  : "group-hover:opacity-0"
              }`}
            />

            {/* Hover Image */}
            <motion.img
              src={
                hoverPreviewByEmployee[employee.id] ||
                customHoverImageByEmployee[employee.id] ||
                employee.hoverImage
              }
              alt={`${employee.name}-hover`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hoverPreviewByEmployee[employee.id] || customHoverImageByEmployee[employee.id]
                  ? "opacity-100"
                  : activeIndex === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            />

            {/* Left dark overlay */}
            <div
              className={`absolute top-0 left-0 h-full w-1/2 rounded-l-2xl bg-gradient-to-r from-black/80 to-transparent transition-opacity duration-500 pointer-events-none z-10 ${
                activeIndex === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            />

            {/* ✅ Circle Images */}
            <div
              className={`absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2 sm:gap-3 transition-all duration-300 z-30 ${
                activeIndex === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {employee.smallImages.map((img, i) => (
                <motion.div
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();

                    // ✅ Open popup
                    const popupId = (employee.id - 1) * 4 + i + 1;
                    setSelectedEmployee({
                      Card: () => (
                        <AIAgentCards
                          popupId={popupId}
                          onClose={() => setSelectedEmployee(null)}
                        />
                      ),
                    });

                    // ✅ Mark this circle as active
                    setActiveCircle(`${employee.id}-${i}`);

                    // ✅ Persist this image as the card's chosen hover image
                    setCustomHoverImageByEmployee((prev) => ({
                      ...prev,
                      [employee.id]: img,
                    }));
                  }}
                  onMouseEnter={(e) => {
                    e.stopPropagation();
                    setHoverPreviewByEmployee((prev) => ({
                      ...prev,
                      [employee.id]: img,
                    }));
                  }}
                  onMouseLeave={(e) => {
                    e.stopPropagation();
                    setHoverPreviewByEmployee((prev) => {
                      const next = { ...prev };
                      delete next[employee.id];
                      return next;
                    });
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    setHoverPreviewByEmployee((prev) => ({
                      ...prev,
                      [employee.id]: img,
                    }));
                  }}
                  onBlur={(e) => {
                    e.stopPropagation();
                    setHoverPreviewByEmployee((prev) => {
                      const next = { ...prev };
                      delete next[employee.id];
                      return next;
                    });
                  }}
                  whileHover={{ scale: 1.08 }}
                  animate={{
                    scale: activeCircle === `${employee.id}-${i}` ? 1.08 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                  /* removed semi-transparent bg and backdrop blur per request
                     keep only a blue shadow on hover */
                  className={`flex items-center gap-2 sm:gap-3 rounded-full px-2 sm:px-3 py-1 sm:py-1.5 transition cursor-pointer 
        ${activeCircle === `${employee.id}-${i}`
          ? "shadow-[0_0_18px_6px_rgba(59,130,246,0.65)]"
          : "hover:shadow-[0_0_18px_6px_rgba(59,130,246,0.45)]"
        } max-w-full sm:max-w-fit`}
                >
                  <img
                    src={img}
                    alt={`${employee.name}-${i}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover flex-shrink-0 isolate transition-transform duration-200"
                    style={{
                      imageRendering: "auto",
                      filter: activeCircle === `${employee.id}-${i}` ? "brightness(1.03) contrast(1.05)" : "none",
                      transform: "translateZ(0)",
                      isolation: "isolate",
                      objectPosition: "center top",
                    }}
                    loading="eager"
                  />
                  {/* label next to circle removed - footer will show related label on hover */}
                </motion.div>
              ))}
            </div>

            {/* 🟢 Footer Label (shows only when hovering a circle for this card) */}
            <AnimatePresence>
              {hoverPreviewByEmployee[employee.id] && (
                <motion.div
                  key={`footer-${employee.id}-${hoverPreviewByEmployee[employee.id]}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 right-0 text-center text-white text-sm sm:text-base font-medium py-2 rounded-b-2xl z-20 pointer-events-none"
                >
                  {(() => {
                    const hovered = hoverPreviewByEmployee[employee.id];
                    const idx = hovered ? employee.smallImages.indexOf(hovered) : -1;
                    return idx >= 0 ? labels[idx] : employee.role;
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))} 
      </motion.div>  {/* <-- CLOSE THE GRID CONTAINER (was missing) */}

        {/* --- Popups --- */}
      <AnimatePresence>
        {showDemoForm && <BookaDemo onClose={() => setShowDemoForm(false)} />}

        {selectedEmployee && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 overflow-y-auto"
            onClick={() => setSelectedEmployee(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl my-8"
            >
              <selectedEmployee.Card
                onClose={() => setSelectedEmployee(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default HireAIVoice;
