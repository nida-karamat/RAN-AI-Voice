import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Mail, Calendar } from "lucide-react";
import { BsBagPlus } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";

const cardsData = [
  { icon: <BarChart3 className="w-6 h-6 text-white" />, title: "Analytics & BI", description: "Sync with Google Analytics, Tableau, and more to analyze performance, uncover insights, and drive smarter business decisions." },
  { icon: <Mail className="w-6 h-6 text-white" />, title: "Communication", description: "Integrate with Slack, Microsoft Teams, and others to unify collaboration, simplify updates, and keep your team connected everywhere." },
  { icon: <Calendar className="w-6 h-6 text-white" />, title: "Scheduling Tools", description: "Connect with Calendly, Acuity, and more to automate bookings, reduce manual work, and keep schedules running seamlessly." },
  { icon: <BsBagPlus className="w-6 h-6 text-white" />, title: "Healthcare Systems", description: "Link with Epic, Cerner, and others to securely manage patient data, improve workflows, and deliver better healthcare experiences." },
  { icon: <FaPhoneAlt className="w-6 h-6 text-white" />, title: "Phone Systems", description: "Integrate with Twilio, RingCentral, and more to manage calls, ensure reliability, and scale communication without extra effort." },
  { icon: <TbDatabase className="w-6 h-6 text-white" />, title: "CRM Systems", description: "Connect with HubSpot, Salesforce, and others to centralize customer data, track leads, and streamline your entire sales process." },
];

const headingVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
  visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 0.7, ease: "easeOut" } },
  hover: {
    scale: 1.1,
    y: -10,
    rotateZ: 2,
    boxShadow: "0px 20px 40px rgba(35,38,58,0.3)",
    transition: { type: "spring", stiffness: 250, damping: 18 },
  },
};

export default function Integrate() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-start">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight"
        >
          Integrate Instantly With Your <br />
          <span className="gradient-text text-blue-600">Tools</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {cardsData.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover="hover"
              className="p-5 rounded-2xl bg-blue-50 border border-blue-300 flex flex-col gap-3 cursor-pointer transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="p-3 rounded-xl w-fit"
                  style={{ background: "linear-gradient(145deg, #121ABD, #7A6EE4)", boxShadow: "0px 0px 20px rgba(122, 110, 228, 0.4)" }}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}