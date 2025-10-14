"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import img4 from "../assets/Images/img4.jpg";
import img2 from "../assets/Images/img2.jpg";
import img7 from "../assets/Images/img7.jpg";
import img6 from "../assets/Images/img6.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";

const aiEmployees = [
  {
    id: 1,
    title: "AI Receptionist",
    desc: "Answer every incoming call instantly with a friendly, directing customers with unmatched speed, accuracy, and professionalism—no missed opportunities, ever.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["24/7 Availability", "Call Routing", "Professional Handling"],
    img: img4,
    tag: "~40% fewer missed calls",
    label: "Liza: AI Receptionist",
    details: [
      "Understands caller intent instantly",
      "Can forward calls intelligently",
      "Schedules appointments automatically",
      "Integrates with your CRM or booking system",
    ],
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    desc: "Provide multilingual patient support around the clock, delivering sensitive, accurate responses that enhance care without delays or confusion.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: [
      "Appointment Reminders",
      "Health Screening",
      "Prescription Refills",
    ],
    img: img2,
    tag: "Boost attendance ~35%",
    label: "Liza: AI Healthcare",
    details: [
      "Handles patient queries in multiple languages",
      "Reminds patients of appointments & medications",
      "Assists with prescription refills and updates",
      "Works with EMR/EHR systems seamlessly",
    ],
  },
  {
    id: 3,
    title: "Sales Representative",
    desc: "Engage prospects 24/7 by qualifying leads, booking demos, and following up consistently—driving growth without fatigue or scheduling gaps.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Lead Qualification", "CRM Integration", "Automated Follow-ups"],
    img: img7,
    tag: "~60% more leads",
    label: "Liza: AI Sales",
    details: [
      "Qualifies leads automatically via calls",
      "Books demos in real-time calendar sync",
      "Sends personalized follow-up messages",
      "Integrates with HubSpot, Salesforce, etc.",
    ],
  },
  {
    id: 4,
    title: "Support Agent",
    desc: "Resolve customer issues in real time across multiple languages, ensuring fast, consistent support that never pauses or compromises quality.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Technical Support", "Billing Inquiries", "Product Guidance"],
    img: img6,
    tag: "~80% faster call resolution",
    label: "Liza: AI Support",
    details: [
      "Understands product-related issues instantly",
      "Handles refunds, billing, and troubleshooting",
      "Multi-language support 24/7",
      "Reduces support wait time dramatically",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const TransformYourBusiness = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-3 leading-tight">
          Transform Your Business with{" "}
          <span className="text-blue-600">AI Employees</span>
        </h2>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl px-2 sm:px-0">
          Our AI team members handle the essential jobs while your human team
          focuses on what matters most — growth, care, and innovation.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-24 max-w-7xl mx-auto">
        {aiEmployees.map((emp, index) => (
          <div
            key={emp.id}
            className={`flex flex-col md:flex-row items-start gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* LEFT SIDE (Text + Explore) */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col p-4 sm:p-6 md:p-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 text-sm sm:text-base font-medium px-4 py-2 rounded-full mb-4 w-fit">
                <FaArrowTrendUp className="w-2 h-2 sm:w-5 sm:h-5 flex-shrink-0 text-blue-900" />
                <span>{emp.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 leading-snug">
                {emp.title}
              </h3>

              <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl text-justify leading-relaxed">
                {emp.desc}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 w-full justify-center sm:justify-start">
                {emp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-gray-700 text-xs sm:text-sm whitespace-nowrap"
                  >
                    {emp.icon} {skill}
                  </span>
                ))}
              </div>

            <motion.button
  onClick={(e) => {
    e.stopPropagation();
    setActiveCard(activeCard === emp.id ? null : emp.id);
  }}
  whileHover={{
    scale: 1.08,
    boxShadow: "0px 0px 25px rgba(59,130,246,0.5)",
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 250 }}
  className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full font-medium text-sm sm:text-base shadow-md w-fit"
>
  {activeCard === emp.id ? "Hide" : "Explore"}
  <motion.div
    animate={{ rotate: [0, 10, -10, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0"
  >
    <FaArrowRight className="text-blue-600 text-sm sm:text-base md:text-base" />
  </motion.div>
</motion.button>


              {/* Expanded Details ONLY LEFT SIDE */}
              <AnimatePresence>
                {activeCard === emp.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-5"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">
                      More about {emp.title}
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1">
                      {emp.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* RIGHT SIDE IMAGE (completely independent) */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative flex-shrink-0">
              <motion.img
                src={emp.img}
                alt={emp.title}
                className="w-100 h-auto object-cover"
                animate={{
                  scale: [1, 1.03, 1],
                  y: [0, -10, 0], // natural floating animation
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0.5,
                  filter: "brightness(1.05)",
                }}
              />

              {/* Floating Label */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [1, 0.9, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/80 text-white text-xs sm:text-sm px-3 py-2.5 rounded-full shadow-lg max-w-[45%] text-center truncate w-60"
              >
                {emp.label}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TransformYourBusiness;
