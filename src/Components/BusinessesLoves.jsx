"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Zap, Globe } from "lucide-react";
import { MdOutlineInsights } from "react-icons/md";
import { GoPencil } from "react-icons/go";

const features = [
  {
    id: 1,
    icon: <MessageCircle className="text-blue-600 w-6 h-6" />,
    title: "Human-like Conversations",
    desc: "Human-like, contextual responses that build real customer connections.",
  },
  {
    id: 2,
    icon: <MdOutlineInsights className="text-blue-600 w-6 h-6" />,
    title: "Performance Insights",
    desc: "Real-time insights that optimize customer interactions and drive growth.",
  },
  {
    id: 3,
    icon: <Zap className="text-blue-600 w-6 h-6" />,
    title: "Instant Scalability",
    desc: "Scalable conversations at once without losing quality or speed.",
  },
  {
    id: 4,
    icon: <Globe className="text-blue-600 w-6 h-6" />,
    title: "Always Available",
    desc: "Always-on support delivering instant help across every time zone.",
  },
];

const BusinessesLove = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 mt-10  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Why Businesses Love Our{" "}
              <span className="text-indigo-600">AI Employees</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-start"
          >
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our AI team members handle the work of ten people with unmatched
              speed, accuracy, and consistency—without breaks, delays, or errors.
            </p>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative bg-blue-50 border border-blue-200 rounded-2xl p-6 flex flex-col items-start text-left shadow-md overflow-hidden transition-all duration-300"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={
                hovered === index
                  ? { rotateX: -8, rotateY: 8, scale: 1.06 }
                  : { rotateX: 0, rotateY: 0, scale: 1 }
              }
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Icon */}
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-gray-900 font-semibold mb-2 text-base sm:text-lg">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative z-10">
                {item.desc}
              </p>

              {/* 3D Glow Background Circle */}
              <motion.div
                animate={{
                  scale: hovered === index ? [1, 1.1, 1] : 1,
                  opacity: hovered === index ? 0.3 : 0.15,
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-[-40px] right-[-40px] w-40 h-40 bg-blue-200 rounded-full blur-2xl"
              />

              {/* Number */}
              <div  className="absolute bottom-[-30px] right-[-30px] w-32 h-32 bg-blue-200 rounded-full opacity-80"></div>
              <motion.span
                className="absolute bottom-6 right-6 text-white font-bold text-4xl select-none"
                animate={
                  hovered === index
                    ? { scale: 1.2, opacity: 0.8, rotate: 8 }
                    : { scale: 1, opacity: 0.4, rotate: 0 }
                }
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {index + 1}
              </motion.span>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessesLove;
