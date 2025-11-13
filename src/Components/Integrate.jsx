"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
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
    icon: <Mail className="w-5 h-5 text-blue-500" />,
    title: "Communication",
    description:
      "Integrate with Slack, Microsoft Teams, and others to unify collaboration, simplify updates, and keep your team connected everywhere.",
  },
  {
    icon: <Calendar className="w-5 h-5 text-blue-500" />,
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
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const total = rect.height + windowH;
      const seen = windowH - rect.top;
      const prog = Math.min(Math.max(seen / total, 0), 1);
      setScrollProgress(prog);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // layout tuning values
  const cardHeight = 160;
  const headerVisible = 96; // how much of each card stays visible when collapsed (keeps content readable)
  const expandedStep = cardHeight + 20;
  const collapsedStep = headerVisible; // collapse so header + some body remains visible

  // per-card sequential progress
  const N = cardsData.length;
  const perCardWindow = 1 / N;
  const localProgress = cardsData.map((_, i) => {
    const start = i * perCardWindow * 0.95;
    const raw = (scrollProgress - start) / (perCardWindow * 1.05);
    return Math.min(Math.max(raw, 0), 1);
  });

  const steps = localProgress.map((lp) => Math.round(expandedStep * (1 - lp) + collapsedStep * lp));
  const tops = steps.reduce((acc, s, i) => {
    if (i === 0) acc.push(0);
    else acc.push(acc[i - 1] + steps[i - 1]);
    return acc;
  }, []);

  const containerHeight = cardHeight + steps.slice(1).reduce((s, v) => s + v, 0);

  return (
    <section ref={containerRef} className="w-full bg-white py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left */}
        <div className="pt-8">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
          >
            Integrate Instantly With
            <br />
            Your <span className="text-blue-600">Tools</span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg mb-8 max-w-md"
          >
            Connect with your favorite tools. Scroll to preview integrations. As you scroll, the cards will overlap one-by-one.
          </motion.p>
        </div>

        {/* Right - stacked cards */}
        <div className="relative">
          <div className="relative" style={{ height: containerHeight }}>
            {cardsData.map((card, idx) => {
              const top = tops[idx] ?? idx * expandedStep;
              const z = N - idx;

              return (
                <motion.div
                  key={idx}
                  className="absolute left-0 w-full sm:w-[520px]"
                  animate={{ top }}
                  initial={false}
                  style={{ zIndex: hoverIdx === idx ? 999 : z }}
                  onMouseEnter={() => setHoverIdx(idx)}
                  onMouseLeave={() => setHoverIdx(null)}
                  onFocus={() => setHoverIdx(idx)}
                  onBlur={() => setHoverIdx(null)}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 28 }}
                  tabIndex={0}
                >
                  <div className="bg-blue-50 border border-blue-200 shadow-xl p-6 rounded-2xl">
                    <div className="bg-white rounded-xl p-3 w-fit mb-4 shadow-sm inline-block">{card.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}