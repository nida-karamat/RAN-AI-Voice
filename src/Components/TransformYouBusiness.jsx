import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";

import AIAgentCards from "./AIAgentCards";

import liza1 from "../assets/Images/slider/liza1.jpg";
import liza2 from "../assets/Images/slider/liza2.jpg";
import liza3 from "../assets/Images/slider/liza3.jpg";
import liza4 from "../assets/Images/slider/liza4.jpg";

import diego1 from "../assets/Images/slider/diego1.jpg";
import diego2 from "../assets/Images/slider/diego2.jpg";
import diego3 from "../assets/Images/slider/diego3.jpg";
import diego4 from "../assets/Images/slider/diego4.jpg";

import ethan1 from "../assets/Images/slider/ethan1.jpg";
import ethan2 from "../assets/Images/slider/ethan2.jpg";
import ethan3 from "../assets/Images/slider/ethan3.jpg";
import ethan4 from "../assets/Images/slider/ethan4.jpg";

import amina1 from "../assets/Images/slider/amina1.jpg";
import amina2 from "../assets/Images/slider/amina2.jpg";
import amina3 from "../assets/Images/slider/amina3.jpg";
import amina4 from "../assets/Images/slider/amina4.jpg";

const aiEmployees = [
  {
    id: 1,
    title: "AI Receptionist",
    desc: "Answer every incoming call instantly with a friendly, directing customers with unmatched speed, accuracy, and professionalism—no missed opportunities, ever.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["24/7 Availability", "Call Routing", "Professional Handling"],
    imgs: [liza1, ethan1, amina1, diego1],
    tag: "~40% fewer missed calls",
    label: "AI Receptionist",
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    desc: "Provide multilingual patient support around the clock, delivering sensitive, accurate responses that enhance care without delays or confusion.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Appointment Reminders", "Health Screening", "Prescription Refills"],
    imgs: [amina2, ethan2, liza2, diego2],
    tag: "Boost attendance ~35%",
    label: "Care Nurse",
  },
  {
    id: 3,
    title: "Sales Representative",
    desc: "Engage prospects 24/7 by qualifying leads, booking demos, and following up consistently—driving growth without fatigue or scheduling gaps.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Lead Qualification", "CRM Integration", "Automated Follow-ups"],
    imgs: [liza3, ethan3, amina3, diego3],
    tag: "~60% more leads",
    label: "AI Sales Executive",
  },
  {
    id: 4,
    title: "Legal Assistant",
    desc: "Drafts, reviews, and organizes legal documents with precision and compliance, ensuring accurate, confidential support that meets every legal standard.",
    icon: <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />,
    skills: ["Technical Support", "Billing Inquiries", "Product Guidance"],
    imgs: [amina4, ethan4, liza4, diego4],
    tag: "~80% faster call resolution",
    label: " AI Legal Assistant",
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
  const [modalEmp, setModalEmp] = useState(null);

  const imageToPersonBase = new Map([
    [liza1, 1], [liza2, 1], [liza3, 1], [liza4, 1],
    [diego1, 5], [diego2, 5], [diego3, 5], [diego4, 5],
    [ethan1, 9], [ethan2, 9], [ethan3, 9], [ethan4, 9],
    [amina1, 13], [amina2, 13], [amina3, 13], [amina4, 13],
  ]);

  const defaultRoleOrder = ["receptionist", "sales", "legal", "nurse"];
  const personRoleOrder = new Map([
    [1, ["receptionist", "nurse", "sales", "legal"]],
    [5, ["receptionist", "nurse", "sales", "legal"]],
    [9, ["receptionist", "nurse", "sales", "legal"]],
    [13, ["receptionist", "nurse", "sales", "legal"]],
  ]);

  // ✅ FIXED (Healthcare and Legal swapped to correct positions)
  const sectionTargetRoles = ["receptionist", "legal", "sales", "nurse"];

  const getRoleOffsetForSection = (personBase, sectionIndex) => {
    const roleOrder = personRoleOrder.get(personBase) || defaultRoleOrder;
    const targetRole = sectionTargetRoles[sectionIndex] || roleOrder[0];
    const offset = roleOrder.indexOf(targetRole);
    return offset >= 0 ? offset : 0;
  };

  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }                                                                            }
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
            {/* LEFT SIDE TEXT */}
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

              <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6 w-full justify-start items-center">
                {emp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-gray-700 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  >
                    {emp.icon}
                    <span className="font-medium">{skill}</span>
                  </span>
                ))}
              </div>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  // toggle modal for this employee; default to first image (index 0)
                  const defaultImg = emp.imgs && emp.imgs[0];
                  const personBase = defaultImg ? imageToPersonBase.get(defaultImg) : undefined;
                  const offset =
                    typeof personBase === "number"
                      ? getRoleOffsetForSection(personBase, index)
                      : index;
                  const popupId = typeof personBase === "number" ? personBase + offset : undefined;
                  setModalEmp((prev) =>
                    prev?.emp?.id === emp.id
                      ? null
                      : { emp, imgIndex: 0, popupId }
                  );
                }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 25px rgba(59,130,246,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full font-medium text-sm sm:text-base shadow-md w-fit"
              >
                {modalEmp?.emp?.id === emp.id ? "Close" : "Explore"}
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
            </motion.div>

            {/* ✅ RIGHT SIDE SLIDER (Faster & Smooth One Direction) */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: ["0%", "-100%", "-200%", "-300%"] }} // continuous left movement
                transition={{
                  duration: 16, // faster animation
                  repeat: Infinity,
                  ease: "linear", // smooth constant speed
                }}
                style={{ width: `${emp.imgs.length * 100}%` }}
              >
                {emp.imgs.map((img, i) => (
                  <div
                    key={i}
                    className="group w-full flex-shrink-0 flex items-center justify-center 
                               h-[260px] sm:h-[320px] md:h-[400px] lg:h-[420px] relative"
                  >
                    {/* Make only the image itself clickable (not the surrounding whitespace) */}
                    <img
                      src={img}
                      alt={emp.title}
                      role="button"
                      aria-label={`${emp.title} image ${i + 1}`}
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        const personBase = imageToPersonBase.get(img);
                        const offset =
                          typeof personBase === "number"
                            ? getRoleOffsetForSection(personBase, index)
                            : index;
                        const popupId = typeof personBase === "number" ? personBase + offset : undefined;
                        setModalEmp({ emp, imgIndex: i, popupId });
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          const personBase = imageToPersonBase.get(img);
                        const offset =
                          typeof personBase === "number"
                            ? getRoleOffsetForSection(personBase, index)
                            : index;
                        const popupId = typeof personBase === "number" ? personBase + offset : undefined;
                          setModalEmp({ emp, imgIndex: i, popupId });
                        }
                      }}
                      className="h-full w-auto object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                      style={{ objectPosition: "center" }}
                    />

                    {/* Hover overlay with arrow that appears when user moves mouse over the image area */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out transform group-hover:-translate-y-1">
                        <div className="bg-white/90 rounded-full p-2 shadow-lg flex items-center justify-center">
                          <FaArrowRight className="text-blue-600 w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* <motion.div
                animate={{
                  y: [0, -8, 0],
                  opacity: [1, 0.9, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 
                           bg-black/80 text-white 
                           text-[8px] sm:text-[10px] md:text-xs lg:text-sm 
                           px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 
                           rounded-full shadow-lg text-center 
                           whitespace-normal break-words 
                           max-w-[80%] sm:max-w-[60%] md:max-w-[50%]"
              >
                {emp.label}
              </motion.div> */}
            </div>
          </div>
        ))}

        {/* MODAL SECTION */}
        {modalEmp && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-6 overflow-y-auto">
            <div className="absolute inset-0" onClick={() => setModalEmp(null)}></div>
            <div className="relative w-full max-w-4xl">
              {(() => {
                // If we stored a concrete popupId (image->agent mapping), use it.
                if (typeof modalEmp.popupId === "number") {
                  return (
                    <AIAgentCards
                      popupId={modalEmp.popupId}
                      onClose={() => setModalEmp(null)}
                      roleScopedThumbnails
                    />
                  );
                }

                // Fallback: compute group-based id if popupId not provided
                const groupStartId = ((modalEmp.emp.id - 1) * 4) + 1;
                const idx = typeof modalEmp.imgIndex === "number" ? modalEmp.imgIndex : 0;
                const popupId = groupStartId + idx;
                return (
                  <AIAgentCards
                    popupId={popupId}
                    onClose={() => setModalEmp(null)}
                    roleScopedThumbnails
                  />
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransformYourBusiness;
