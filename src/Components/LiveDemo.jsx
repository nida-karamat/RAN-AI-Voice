import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BookaDemo from "./BookaDemo";
const LiveDemo = ({ onClose }) => {
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-3xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl shadow-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 text-2xl font-bold"
        >
          ✕
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
          Welcome to the Live Demo 🚀
        </h1>
        <p className="text-blue-100 text-lg mb-8 text-center">
          Experience how Ran AI can transform your workflow in real-time.  
          Interact with the demo below and explore the features.
        </p>

        {/* Demo Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {/* Book Demo Form */}
          <button
            onClick={() => setShowDemoForm(true)}
            className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-100 transition"
          >
            Book a Demo
          </button>

          {/* External Link (YouTube Updated) */}
          <a
            href="https://www.youtube.com/watch?v=RN2ps4327G0"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition"
          >
            Watch Live Demo Video
          </a>
        </div>

        {/* Interactive Placeholder */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl backdrop-blur-md">
          <p className="text-blue-100 mb-4">
            🔧 This is your live demo area. Add forms, charts, voice assistants, or
            any interactive elements here.
          </p>
          <p className="text-sm text-blue-200">
            Example: Embed a chatbot, show real-time AI responses, or let users test
            voice features.
          </p>
        </div>
      </motion.div>

      {/* ✅ DemoForm Modal (opens on button click) */}
      <AnimatePresence>
        {showDemoForm && (
          <BookaDemo onClose={() => setShowDemoForm(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiveDemo;
