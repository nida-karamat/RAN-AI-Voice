import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book } from "lucide-react";

const BookaDemo = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal container */}
        <motion.div
          className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-full max-w-lg relative mt-10 sm:mt-16 max-h-[90vh] overflow-y-auto"
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 left-120 ml-auto mr-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center px-6 sm:px-10 pt-4 pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Hire Your AI Employee Today
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Enter your details and choose{" "}
              <span className="text-blue-600 font-medium">Lisa</span>,{" "}
              <span className="text-blue-600 font-medium">Diego</span>, or
              another AI employee to get started immediately.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="px-6 sm:px-10 pb-10 space-y-4"
          >
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900"
                placeholder="Enter your first name"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900"
                placeholder="Enter your last name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl mt-6"
            >
              Get In Touch
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookaDemo;
