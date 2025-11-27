import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { BsMicMuteFill } from "react-icons/bs";
import { CgPlayPause } from "react-icons/cg";
import { BiTransfer } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { RetellWebClient } from "retell-client-js-sdk";
import { createRetellWebCall } from "../Services/api.js";

import avatarImg from "../assets/Images/liza/liza1.jpg";
import logoImg from "../assets/Images/logo.jpg";
import callimg1 from "../assets/Images/callimg1.jpg";

const CallScreen = ({ onClose, caller: callerProp }) => {
  const [callState, setCallState] = useState("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);
  const clientRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    company_email: "",
    phone: "",
    industry: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const caller = callerProp || {
    name: "Amara Khan",
    org: "Acme Corporation",
    avatar: avatarImg,
  };

  useEffect(() => {
    if (callState === "active") {
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else {
      clearInterval(timerRef.current);
      if (callState === "ended" || callState === "idle") setElapsed(0);
    }
    return () => clearInterval(timerRef.current);
  }, [callState]);

  const two = (n) => String(n).padStart(2, "0");
  const hours = Math.floor(elapsed / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  const startCall = async () => {
    try {
      setCallState("connecting");

      const { accessToken } = await createRetellWebCall({
        name: formData.name,
        company_email: formData.company_email,
        phone: formData.phone,
        industry: formData.industry,
      });

      if (!accessToken) throw new Error("No accessToken returned from backend");

      const client = new RetellWebClient();
      clientRef.current = client;

      await client.startCall({ accessToken });
      setCallState("active");

      client.on("call_started", () => setCallState("active"));
      client.on("call_ended", () => setCallState("ended"));
      client.on("error", () => setCallState("idle"));
    } catch (err) {
      console.error("Error starting call:", err);
      setCallState("idle");
    }
  };

  const hangUp = async () => {
    try {
      clientRef.current?.stopCall?.();
    } catch (err) {
      console.error("Error stopping call:", err);
    } finally {
      setCallState("ended");
      setFormSubmitted(false);
      setElapsed(0);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [errors, setErrors] = useState({
    company_email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { company_email: "", phone: "" };

    const freeDomains = ["gmail.com", "yahoo.com", "hotmail.com"];
    const email = formData.company_email.trim();
    const domain = email.split("@")[1]?.toLowerCase();

    if (!email || freeDomains.includes(domain)) {
      newErrors.company_email = "Please enter a valid company email";
      valid = false;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!formData.phone.match(phoneRegex)) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setFormSubmitted(true);
    }
  };

  return (
    <div
      className="
        max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-lg relative
        flex flex-col h-[88vh]
        overflow-hidden lg:overflow-hidden
        overflow-y-auto
      "
    >
      <header className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-3 border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-7 sm:h-9" />
        </div>
        <div className="flex flex-wrap justify-end gap-2 sm:gap-3 relative">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 absolute -top-8 -right-6"
          >
            <X size={22} />
          </button>
        </div>
      </header>

      <div
        className="
          grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 flex-1
          overflow-hidden lg:overflow-hidden
          overflow-y-auto
        "
      >
        {/* LEFT SECTION */}
        <div className="lg:col-span-8 flex flex-col items-center text-center h-full min-h-0 pb-4">
          <img
            src={caller.avatar}
            alt={caller.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-4 border-white shadow-md mt-2"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">
            {caller.name}
          </h3>
          <p className="text-sm text-gray-500">{caller.org}</p>

          <div className="mt-2 w-full flex-1 flex flex-col gap-2 min-h-0">
            <div className="space-y-1.5 flex-shrink-0 mt-4">
              <div className="flex flex-wrap justify-center gap-1.5">
                {[
                  { label: "Hours", value: two(hours) },
                  { label: "Minutes", value: two(minutes) },
                  { label: "Seconds", value: two(seconds) },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 w-12 h-12 sm:w-14 sm:h-14 rounded-md flex flex-col items-center justify-center"
                  >
                    <span className="text-sm font-semibold">{item.value}</span>
                    <span className="text-[10px] text-gray-800">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-1 mt-3 sm:mt-10">
                <img
                  src={callimg1}
                  alt="Call Waveform"
                  className="w-full h-14 sm:h-26 object-contain"
                />
              </div>
            </div>
            <div className="space-y-3 pb-2 flex-1 flex flex-col justify-between min-h-0"></div>
          </div>
        </div>

        {/* RIGHT SECTION – MOBILE UI */}
        <div
          className="
    lg:col-span-4
    w-full
    flex justify-center items-start
    overflow-y-auto lg:overflow-visible
    h-auto lg:h-full
    pt-4 lg:pt-0
  "
        >
          <div
            className="
      w-[330px] max-w-full
      bg-white rounded-[30px]
      border-4 border-blue-500
      overflow-y-auto
      flex flex-col relative
      shadow-lg shadow-blue-800
      max-h-[90vh]
      p-4
    "
          >
            {/* TOP BAR */}
            <div className="h-5 flex items-center justify-center px-6 py-3 text-xs text-gray-900">
              <motion.span
                className="flex items-center gap-2 bg-gray-100 text-gray-700 text-sm px-3 py-0.5 rounded-full border border-gray-400"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                AI Voice Agents for Business
              </motion.span>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 mt-4 ">
              {!formSubmitted && (
                <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Company Email
                    </label>
                    <input
                      type="email"
                      name="company_email"
                      value={formData.company_email}
                      onChange={handleInputChange}
                      placeholder="Enter your company email"
                      required
                      className={`px-3 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ${
                        errors.company_email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.company_email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.company_email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                      className={`px-3 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="">Select your industry</option>
                      <option value="Business & Services">
                        Business & Services
                      </option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance & Banking">
                        Finance & Banking
                      </option>
                      <option value="Education">Education</option>
                      <option value="E-commerce & Retail">
                        E-commerce & Retail
                      </option>
                      <option value="Real Estate & Construction">
                        Real Estate & Construction
                      </option>
                      <option value="Travel & Hospitality">
                        Travel & Hospitality
                      </option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-transform"
                  >
                    Submit
                  </button>
                </form>
              )}

              {/* START CALL BUTTON */}
              <AnimatePresence>
                {formSubmitted && callState === "idle" && (
                  <motion.div
                    className="flex flex-col items-center justify-center mt-12 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <motion.button
                      onClick={startCall}
                      className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition-transform text-xl"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95, rotate: -2 }}
                    >
                      Start Call
                    </motion.button>
                    <motion.p
                      className="text-gray-600 text-sm text-center mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      Start the call to experience a demo of approximately 2
                      minutes.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {callState === "connecting" && (
                <div className="flex flex-col items-center justify-center gap-5 mt-16 animate-fadeIn">
                  <div className="w-20 h-20 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-600 font-medium text-lg">
                    Connecting...
                  </p>
                </div>
              )}

              {callState === "active" && (
                <div className="flex flex-col items-center gap-6 mt-12 animate-fadeIn">
                  <motion.button
                    onClick={hangUp}
                    className="w-30 h-30 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white font-bold shadow-xl hover:scale-105 transition-transform text-xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95, rotate: -2 }}
                  >
                    End Call
                  </motion.button>

                  <div className="flex items-end gap-1  h-25">
                    {[...Array(23)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-blue-500 rounded"
                        style={{
                          height: `${Math.floor(Math.random() * 30 + 50)}px`,
                        }}
                        animate={{
                          scaleY: [0.3, 1, 0.3],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallScreen;
