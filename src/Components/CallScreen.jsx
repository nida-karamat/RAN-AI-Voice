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
import callimg from "../assets/Images/callimg.jpg";
import callimg1 from "../assets/Images/callimg1.jpg";
const CallScreen = ({ onClose, caller: callerProp }) => {
  const [callState, setCallState] = useState("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef(null);
  const clientRef = useRef(null);
 
  const caller =
    callerProp || {
      name: "Amara Khan",
      org: "Acme Corporation",
      avatar: avatarImg,
    };

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

  const startCall = async () => {
    try {
      setCallState("connecting");
      const { accessToken } = await createRetellWebCall();
      if (!accessToken) throw new Error("No accessToken returned from backend");

      const client = new RetellWebClient();
      clientRef.current = client;

      await client.startCall({ accessToken });
      setCallState("connected");

      client.on("call_started", () => setCallState("connected"));
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
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleHold = () => {
    setIsOnHold(!isOnHold);
    setCallState(!isOnHold ? "onhold" : "connected");
  };
  const transfer = () => {
    const target = window.prompt("Enter transfer target (extension or number):");
    if (target) alert(`Transfer request sent to ${target}`);
  };

  return (
    <div
      className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-2xl shadow-lg relative overflow-hidden flex flex-col"
      style={{ height: "88vh" }}
    >
      <header className="flex flex-wrap items-center justify-between px-4 sm:px-8 py-3 border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="h-7 sm:h-9" />
        </div>
        <div className="flex flex-wrap justify-end gap-2 sm:gap-3 relative">
          <h1 className="px-3 sm:px-4 py-1.5 rounded-md text-gray-700 text-xs sm:text-sm font-medium ">
            Demo Call
          </h1>
          <button className="px-3 sm:px-4 py-1.5 rounded-md bg-blue-600 text-white text-xs sm:text-sm font-medium ">
            Custom AI Calling
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 absolute -top-8 -right-6"
          >
            <X size={22} />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 flex-1 overflow-hidden">
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
            <div className="space-y-1.5 flex-shrink-0">
              <div className="flex flex-wrap justify-center gap-1.5">
                {[
                  { label: "Hours", value: two(hours) },
                  { label: "Minutes", value: two(minutes) },
                  { label: "Seconds", value: two(seconds) },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 w-12 h-12 sm:w-14 sm:h-14 rounded-md flex flex-col items-center justify-center"
                  >
                    <span className="text-sm font-semibold">
                      {item.value}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-1">
                <img
                  src={callimg1}
                  alt="Call Waveform"
                  className="w-full h-14 sm:h-16 object-contain"
                />
              </div>
            </div>

            <div className="space-y-3 pb-2 flex-1 flex flex-col justify-between min-h-0">
              <div className="flex flex-wrap justify-center gap-1.5">
                <button
                  onClick={transfer}
                  className="flex flex-col items-center justify-center px-2 py-1.5 bg-white border border-gray-300 rounded-lg text-[10px] font-medium hover:bg-blue-100"
                >
                  <BiTransfer className="h-5 w-5 text-white bg-blue-700 rounded-full p-0.5 mb-1" />
                  Transfer
                </button>

                <button
                  onClick={toggleHold}
                  className={`flex flex-col items-center justify-center px-2 py-1.5 rounded-lg text-[10px] font-medium ${
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
                  className={`flex flex-col items-center justify-center px-2 py-1.5 rounded-lg text-[10px] font-medium ${
                    isMuted
                      ? "bg-gray-800 text-white"
                      : "bg-white border border-gray-300 hover:shadow-md"
                  }`}
                >
                  <BsMicMuteFill className="h-5 w-5 text-white bg-blue-700 rounded-full p-0.5 mb-1" />
                  {isMuted ? "Unmute" : "Mute"}
                </button>

                <button
                  onClick={hangUp}
                  className="flex flex-col items-center justify-center px-2 py-1.5 bg-red-600 text-white rounded-lg text-[10px] font-medium hover:bg-red-700"
                >
                  <LiaPhoneAltSolid className="h-5 w-5 mb-1" />
                  Hang Up
                </button>
              </div>

              <div className="flex justify-center gap-2 pt-1">
                {callState === "idle" && (
                  <button
                    onClick={startCall}
                    className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                  >
                    Start Call
                  </button>
                )}
                {callState !== "idle" && callState !== "ended" && (
                  <button
                    onClick={hangUp}
                    className="px-4 py-1.5 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                  >
                    End Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 w-full h-full  pr-1">
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

          <div className="mt-6 text-center lg:text-left pb-4">
            <h5 className="text-md font-medium text-gray-700">
              Sentiment Analysis
            </h5>
            <div className="mt-3 text-2xl sm:text-3xl font-semibold text-blue-600">
              +12%
            </div>
            <div className="mt-4 text-gray-400 text-sm">Engagement Trends</div>
            <div className="mt-4">
              <img
                src={callimg}
                alt="Engagement Trends"
                className="w-full h-24 sm:h-14 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallScreen;
