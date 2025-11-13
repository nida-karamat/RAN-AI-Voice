import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

import liza1 from "../assets/Images/liza/liza1.jpg";

const BookaDemo = ({ onClose }) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    businessName: "",
    industry: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.industry) newErrors.industry = "Please select an industry";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", formData);
    setShowThankYou(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/10 backdrop-blur-sm transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal card with styled scrollbar */}
        <motion.div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative mt-10 sm:mt-16 
                     max-h-[90vh] overflow-y-auto pr-3 
                     scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d1d5db transparent",
          }}
          initial={{ y: -50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {showThankYou ? (
            <div className="px-6 sm:px-10 py-16 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
              <p className="text-gray-600 leading-relaxed">
                Our team will get in touch with you shortly to set up your AI employee.
              </p>
            </div>
          ) : (
            <>
              {/* Profile Image */}
              <div className="flex justify-center pt-8 pb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center ring-4 ring-blue-100">
                  <img
                    src={liza1}
                    alt="AI Employee"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Header */}
              <div className="text-center px-6 sm:px-10 pb-6">
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

              {/* Form Fields */}
              <div className="px-6 sm:px-10 pb-10 space-y-4">
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
                    className={`w-full px-4 py-3 bg-gray-50 border ${
                      errors.firstName ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:outline-none focus:ring-2 ${
                      errors.firstName ? "focus:ring-red-500" : "focus:ring-blue-500"
                    } transition-all text-gray-900`}
                    placeholder="Emma"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
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
                    className={`w-full px-4 py-3 bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:outline-none focus:ring-2 ${
                      errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
                    } transition-all text-gray-900`}
                    placeholder="emmajohnson@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:outline-none focus:ring-2 ${
                      errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
                    } transition-all text-gray-900`}
                    placeholder="+92"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border ${
                      errors.businessName ? "border-red-500" : "border-gray-200"
                    } rounded-lg focus:outline-none focus:ring-2 ${
                      errors.businessName ? "focus:ring-red-500" : "focus:ring-blue-500"
                    } transition-all text-gray-900`}
                    placeholder="yourcompany"
                  />
                  {errors.businessName && (
                    <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
                  )}
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry
                  </label>
                  <div className="relative">
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border ${
                        errors.industry ? "border-red-500" : "border-gray-200"
                      } rounded-lg focus:outline-none focus:ring-2 ${
                        errors.industry ? "focus:ring-red-500" : "focus:ring-blue-500"
                      } transition-all text-gray-900 appearance-none cursor-pointer`}
                    >
                      <option value=""></option>
                      <option value="technology">Business & Services</option>
                      <option value="healthcare">Healthcare </option>
                      <option value="finance">Finance & Banking</option>
                      <option value="retail">Education</option>
                      <option value="E-commerce">E-commerce & Retail</option>
                      <option value="E-commerce">Real Estate & Construction</option>
                      <option value="E-commerce">Travel & Hospitality</option>
                    
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl mt-6"
                >
                  Get In Touch
                </motion.button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


export default BookaDemo;
