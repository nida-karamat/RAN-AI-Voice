
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Start48HourSetup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("48-Hour Setup Submitted:", formData);
    onClose();
    // Yahan aap backend API ko call kar sakti ho
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-opacity-50 z-50 flex justify-center items-center p-4 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-w-lg relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>

          {/* Header */}
          <div className="text-center px-8 pt-8 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Start Your 48-Hour Setup 🚀
            </h2>
            <p className="text-sm text-gray-600">
              Fill in your company details and we’ll set up your AI system in{" "}
              <span className="text-blue-600 font-semibold">48 hours</span>.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-4">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Project Details
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                placeholder="Briefly describe your project..."
                rows={3}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
            >
              Start Setup Now
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Start48HourSetup;

