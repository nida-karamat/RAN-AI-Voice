import React, { useEffect, useState, useRef } from "react";
import RetellSDK from "retell-sdk"; // ✅ Import Retell SDK
import avatarImg from "../assets/Images/liza/liza1.jpg";
import logoImg from "../assets/Images/logo.jpg"; // Assuming logo image is available
import { X } from "lucide-react"; // for cross button
import { LiaPhoneAltSolid } from "react-icons/lia";
import { BsMicMuteFill } from "react-icons/bs";
import { CgPlayPause } from "react-icons/cg";
import { BiTransfer } from "react-icons/bi";
import callimg from "../assets/Images/callimg.png"; // Assuming call image is available
import callimg2 from "../assets/Images/callimg2.png"; // Assuming call image is available
const CallScreen = ({ callId: initialCallId, caller: initialCaller = null, onClose } = {}) => {
  // UI / call state
  const [callState, setCallState] = useState("idle"); // idle | connecting | connected | onhold | ended
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [caller, setCaller] = useState(
    initialCaller || {
      name: "Amara Khan",
      org: "Acme Corporation",
      avatar: avatarImg,
    }
  );

  useEffect(() => {
    if (initialCaller) setCaller(initialCaller);
  }, [initialCaller]);

  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);

  // ---------- Retell SDK Setup ----------
  const sdkRef = useRef(null);
  const agentId = "agent_24658ccda21d8594690b02ed85"; // Replace with your Retell API key

  useEffect(() => {
    sdkRef.current = new RetellSDK({ apiKey: agentId });
    console.log("RetellSDK initialized:", sdkRef.current);
    console.log("Base URL:", sdkRef.current.baseURL);
    console.log("Available methods:", Object.keys(sdkRef.current));
  }, []);

  // ---------- Call Functions ----------
  const startCall = async (callId = initialCallId || "demo-call") => {
    if (!sdkRef.current) return;

    setCallState("connecting");

    try {
      const payload = {
        agent_id: agentId, // your agent ID
        type: "audio", // audio call
        callId, // call identifier
      };

      console.log("Starting call with payload:", payload);

      // FRONTEND call using Retell SDK
      const response = await sdkRef.current.client.webCall(payload);
      console.log("Call started successfully:", response);

      setCallState("connected");
    } catch (err) {
      console.error("Error starting call:", err);
      setCallState("idle");
    }
  };

  const hangUp = async () => {
    try {
      if (sdkRef.current?.client) await sdkRef.current.client.hangup();
    } catch (err) {
      console.error("Error hanging up:", err);
    } finally {
      setCallState("ended");
      setIsMuted(false);
      setIsOnHold(false);
    }
  };

  const toggleMute = async () => {
    try {
      if (!isMuted) await sdkRef.current.client.mute();
      else await sdkRef.current.client.unmute();
      setIsMuted(!isMuted);
    } catch (err) {
      console.error("Error toggling mute:", err);
    }
  };

  const toggleHold = async () => {
    try {
      if (!isOnHold) await sdkRef.current.client.hold();
      else await sdkRef.current.client.resume();
      setIsOnHold(!isOnHold);
      setCallState(!isOnHold ? "onhold" : "connected");
    } catch (err) {
      console.error("Error toggling hold:", err);
    }
  };

  const transfer = async () => {
    const target = window.prompt("Enter transfer target (extension or number):");
    if (target) {
      alert(`Transfer request sent to ${target}`);
    }
  };

  // ---------- Call Timer ----------
  useEffect(() => {
    if (callState === "connected") {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => setElapsed((e) => e + 1), 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (callState === "ended" || callState === "idle") setElapsed(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);

  const two = (n) => String(n).padStart(2, "0");
  const hours = Math.floor(elapsed / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  // ---------- Waveform Component ----------
  // const Waveform = () => (
  //   <svg width="260" height="80" viewBox="0 0 260 80" className="mx-auto">
  //     <path
  //       d="M0 40 Q 30 10 60 40 T 120 40 T 180 40 T 240 40 T 260 40"
  //       stroke="#1e6ed0"
  //       strokeWidth="3"
  //       fill="none"
  //       strokeLinecap="round"
  //     />
  //   </svg>
  // );

  // ---------- JSX ----------
 return (
    <div
      className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-lg relative overflow-y-auto"
      style={{ maxHeight: "90vh" }}
    >
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-8 sm:h-10" />
        </div>
        <div className="flex flex-wrap justify-end gap-2 sm:gap-3">
          <button className="px-3 sm:px-4 py-2 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50">
            Demo Call
          </button>
          <button className="px-3 sm:px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">
            Custom AI Calling
          </button>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X size={22} />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 sm:mt-10">
        {/* Left Section */}
        <div className="lg:col-span-8 flex flex-col items-center text-center">
          <img
            src={caller.avatar}
            alt={caller.name}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover object-top border-4 border-white shadow-md mt-2"
          />

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">{caller.name}</h3>
          <p className="text-sm text-gray-500">{caller.org}</p>

          {/* Timer Boxes */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {[
              { label: "Hours", value: two(hours) },
              { label: "Minutes", value: two(minutes) },
              { label: "Seconds", value: two(seconds) },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 w-20 h-20 sm:w-24 sm:h-24 rounded-md flex flex-col items-center justify-center"
              >
                <span className="text-lg sm:text-xl font-semibold">{item.value}</span>
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Call waveform */}
          <div className="mt-6 w-full">
            <img src={callimg} alt="Call Waveform" className="w-full h-24 sm:h-32 object-contain" />
          </div>

          {/* Action Buttons */}
         <div className="flex flex-wrap justify-center gap-4 mt-4">
  {/* Transfer Button */}
  <button
    onClick={transfer}
    className="flex flex-col items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-blue-100"
  >
    <BiTransfer className="h-6 w-6 text-white bg-blue-700 rounded-full p-1 mb-1" />
    Transfer
  </button>

  {/* Hold/Resume Button */}
  <button
    onClick={toggleHold}
    className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg text-sm font-medium ${
      isOnHold
        ? "bg-yellow-100 text-yellow-900"
        : "bg-white border border-gray-300 hover:shadow-md"
    }`}
  >
    <CgPlayPause className="h-7 w-7 text-white bg-blue-700 rounded-full px-1 mb-1" />
    {isOnHold ? "Resume" : "Hold"}
  </button>

  {/* Mute/Unmute Button */}
  <button
    onClick={toggleMute}
    className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg text-sm font-medium ${
      isMuted ? "bg-gray-800 text-white" : "bg-white border border-gray-300 hover:shadow-md"
    }`}
  >
    <BsMicMuteFill className="h-6 w-6 text-white bg-blue-700 rounded-full p-1 mb-1" />
    {isMuted ? "Unmute" : "Mute"}
  </button>

  {/* Hang Up Button */}
  <button
    onClick={hangUp}
    className="flex flex-col items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
  >
    <LiaPhoneAltSolid className="h-5 w-5 mb-1" />
    Hang Up
  </button>
</div>

          {/* Call Start/End */}
          <div className="mt-6">
            {callState === "idle" && (
              <button
                onClick={() => startCall()}
                className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Start Call
              </button>
            )}
            {callState !== "idle" && callState !== "ended" && (
              <button
                onClick={hangUp}
                className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                End Now
              </button>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-4 w-full">
          <h4 className="text-lg font-semibold text-gray-800 text-center lg:text-left">
            Customer Insights
          </h4>

          <div className="mt-4 space-y-4">
            {[
              { label: "Pricing", value: "75%" },
              { label: "Integration", value: "50%" },
              { label: "Support", value: "25%" },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div
                    style={{ width: item.value }}
                    className="h-2 bg-blue-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center lg:text-left">
            <h5 className="text-md font-medium text-gray-700">Sentiment Analysis</h5>
            <div className="mt-3 text-2xl sm:text-3xl font-semibold text-blue-600">+12%</div>
            <div className="mt-4 text-gray-400 text-sm">Engagement Trends</div>
            <div className="mt-4">
              <img
                src={callimg2}
                alt="Engagement Trends"
                className="w-full h-24 sm:h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallScreen;
