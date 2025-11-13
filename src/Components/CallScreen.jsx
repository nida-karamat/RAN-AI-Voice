import React, { useEffect, useRef, useState } from "react";

import { X } from "lucide-react";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { BsMicMuteFill } from "react-icons/bs";
import { CgPlayPause } from "react-icons/cg";
import { BiTransfer } from "react-icons/bi";

import { RetellWebClient } from "retell-client-js-sdk";
import { createRetellWebCall } from "../Services/api.js";

import avatarImg from "../assets/Images/liza/liza1.jpg";
import logoImg from "../assets/Images/logo.jpg";
import callimg from "../assets/Images/callimg.png";
import callimg2 from "../assets/Images/callimg2.png";



const CallScreen = ({ onClose }) => {
  const [callState, setCallState] = useState("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);
  const clientRef = useRef(null);

  const [caller] = useState({
    name: "Amara Khan",
    org: "Acme Corporation",
    avatar: avatarImg,
  });

  // Timer for connected calls
  useEffect(() => {
    if (callState === "connected") {
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

  // Start Call
  const startCall = async () => {
    try {
      setCallState("connecting");
      const { accessToken } = await createRetellWebCall();

      if (!accessToken) throw new Error("No accessToken returned from backend");

      const client = new RetellWebClient();
      clientRef.current = client;

      await client.startCall({ accessToken });
      setCallState("connected");

      client.on("call_started", () => {
        console.log("Call started");
        setCallState("connected");
      });

      client.on("call_ended", () => {
        console.log("Call ended");
        setCallState("ended");
      });

      client.on("error", (error) => {
        console.error("Retell error:", error);
        setCallState("idle");
      });
    } catch (err) {
      console.error("Error starting call:", err);
      setCallState("idle");
    }
  };

  // End Call
  const hangUp = async () => {
    try {
      clientRef.current?.stopCall();
    } catch (err) {
      console.error("Error stopping call:", err);
    } finally {
      setCallState("ended");
    }
  };

  // Mute / Unmute
  const toggleMute = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = isMuted;
      setIsMuted(!isMuted);
    } catch (err) {
      console.error("Error toggling mute:", err);
    }
  };

  const toggleHold = () => {
    setIsOnHold(!isOnHold);
    setCallState(!isOnHold ? "onhold" : "connected");
  };

  const transfer = async () => {
    const target = window.prompt("Enter transfer target (extension or number):");
    if (target) alert(`Transfer request sent to ${target}`);
  };

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
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-md mt-2"
          />

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-4">{caller.name}</h3>
          <p className="text-sm text-gray-500">{caller.org}</p>

          {/* Timer */}
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

          <div className="mt-6 w-full">
            <img src={callimg} alt="Call Waveform" className="w-full h-24 sm:h-32 object-contain" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              onClick={transfer}
              className="flex flex-col items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-blue-100"
            >
              <BiTransfer className="h-6 w-6 text-white bg-blue-700 rounded-full p-1 mb-1" />
              Transfer
            </button>

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

            <button
              onClick={toggleMute}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-lg text-sm font-medium ${
                isMuted
                  ? "bg-gray-800 text-white"
                  : "bg-white border border-gray-300 hover:shadow-md"
              }`}
            >
              <BsMicMuteFill className="h-6 w-6 text-white bg-blue-700 rounded-full p-1 mb-1" />
              {isMuted ? "Unmute" : "Mute"}
            </button>

            <button
              onClick={hangUp}
              className="flex flex-col items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700"
            >
              <LiaPhoneAltSolid className="h-5 w-5 mb-1" />
              Hang Up
            </button>
          </div>

          <div className="mt-6">
            {callState === "idle" && (
              <button
                onClick={startCall}
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
                  <div style={{ width: item.value }} className="h-2 bg-blue-600 rounded-full" />
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
