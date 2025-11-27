
import React, { useState, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { GrPhone } from "react-icons/gr";
import { RiCalendarCheckLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdOutlineHeadset } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { IoBagAddOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

// Agent images
import liza1 from "../assets/Images/liza/liza1.jpg";
import liza2 from "../assets/Images/liza/liza2.jpg";
import liza3 from "../assets/Images/liza/liza3.jpg";
import liza4 from "../assets/Images/slider/liza3.jpg";
import diego1 from "../assets/Images/diego/diego1.jpg";
import diego2 from "../assets/Images/diego/diego2.jpg";
import diego3 from "../assets/Images/diego/diego3.jpg";
import diego33 from "../assets/Images/slider/diego3.jpg";
import diego4 from "../assets/Images/slider/diego4.jpg";
import ethan1 from "../assets/Images/ethan/ethan1.jpg";
import ethan2 from "../assets/Images/ethan/ethan2.jpg";
import ethan3 from "../assets/Images/ethan/ethan3.jpg";
import ethan4 from "../assets/Images/ethan/ethan4.jpg";
import amina1 from "../assets/Images/amina/anima1.jpg";
import amina2 from "../assets/Images/amina/anima2.jpg";
import amina3 from "../assets/Images/amina/anima3.jpg";
import amina33 from "../assets/Images/amina/amina33.jpg";
import amina4 from "../assets/Images/amina/anima4.jpg";
import ethanVideo1 from "../assets/Videos/ethanVideo1.mov";
import ethanVideo2 from "../assets/Videos/ethanVideo2.mp4";
import ethanVideo4 from "../assets/Videos/ethanVideo4.mp4";
import diego11 from "../assets/Images/slider/diego1.jpg";
import diego22 from "../assets/Images/slider/diego3.jpg";
// import diego33 from "../assets/Images/diego/diego33.jpg";
import diegoVideo1 from "../assets/Videos/diegoVideo1.mp4"
import diegoVideo2 from "../assets/Videos/diegoVideo2.mp4"
import diegoVideo4 from "../assets/Videos/diegoVideo4.mp4"
import lizaVideo2 from "../assets/Videos/lizaVideo2.mp4"
import lizaVideo3 from "../assets/Videos/lizaVideo3.mp4"
import lizaVideo4 from "../assets/Videos/lizaVideo4.mp4"
import aminaVideo1 from "../assets/Videos/amina1.mov";
import aminaVideo4 from "../assets/Videos/aminaVideo4.mp4"
import aminaVideo2 from "../assets/Videos/aminaVideo2.mp4"
import aminaVideo3 from "../assets/Videos/aminaVideo3.mp4"
import lizaVideo1 from "../assets/Videos/liza1.mov";
import diegoVideo3 from "../assets/Videos/diegoVideo3.mov"

export default function AIAgentCards({
  popupId,
  onClose,  
  roleScopedThumbnails = false,
}) {
  const [activeTab, setActiveTab] = useState("description");
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);
  const [currentPopupId, setCurrentPopupId] = useState(popupId);

  useEffect(() => {
    setCurrentPopupId(popupId); 
  }, [popupId]);

  useEffect(() => {
    const handleAgentPopup = (e) => setCurrentPopupId(e.detail);
    window.addEventListener("openAgentPopup", handleAgentPopup);
    return () => window.removeEventListener("openAgentPopup", handleAgentPopup);
  }, []);

  // 🧠 12 agents data (unique titles + realistic descriptions)
  const agents = [
    {
      id: 1,
      name: "Liza",
      title: "AI Receptionist",
      subtitle: "Customer Care Assistant",
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",
      languages: ["English"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Missed call reduction", value: "45%" },
        { label: "Response time improvement", value: "35%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, and dependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer record management",
      ],
      image: liza1,
      video: lizaVideo1,
      images:[liza1,liza2,liza3,liza4],
      tag: "~40% fewer missed calls",
    },
    {
      id: 2,
      name: "Liza",
      title: "Legal Assistant",
      subtitle: "Legal Support Agent",
      desc: "Analytical, precise, and trustworthy — Ethan is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. She helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["Arabic ,English"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Monitoring",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire" },
        {
          label: "Personality",
          value:
            "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality",
        },
      ],
      compliance: [
        "GDPR and CCPA compliant",
        "Legal data retention standards",
        "End-to-end encryption",
        "Role-based access control",
      ],
      image: liza2,
      video: lizaVideo2,
      images:[liza1,liza2,liza4,liza3],
      tag: "Quick support",
    },
    {
      id: 3,
       name: "Liza",
       
      title: "Sales Development Representative",
      video: lizaVideo3,
      desc: "Confident, persuasive, and goal-driven — Ethan is your AI sales representative fluent in Spanish, English. He connects with prospects naturally, qualifies leads, and schedules meetings that keep your pipeline growing across English-speaking markets.",
      languages: ["English"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
        
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
      image: liza4,
      images:[liza1,liza2,liza4,liza3],
      tag: "Automated scheduling",
    },
   
    {
      id: 4,
      name: "Liza",
      title: "Care Nurse",
      subtitle: "Healthcare Assistant (Arabic Speaker)",
     
      desc: "Compassionate, reliable, and precise — Amina is your AI healthcare assistant fluent in Arabic and English. She manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Arabic,English"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],
    
      image: liza3,
      images:[liza1,liza2,liza4,liza3],
      video:lizaVideo4,
      tag: "Better engagement",
    },

    {
      id: 5,
      name: "Diego",
      title: "AI Receptionist",
      subtitle: "Customer Care Assistant",
      image: diego11,
      video: diegoVideo1,
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",
      images:[diego1,diego4,diego2,diego3],

      languages: ["Spanish", "English"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Missed call reduction", value: "45%" },
        { label: "Response time improvement", value: "35%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, and dependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer record management",
      ],
    },
    {
      id: 6,
      name: "Diego",
     title: " Legal Assistant",
      subtitle: "IT Support Agent(American Speaker)",
      image: diego4,
      video: diegoVideo2,
      images:[diego1,diego4,diego2,diego3],
      desc: "Analytical, precise, and trustworthy — Ethan is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. She helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["Arabic ,English"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Monitoring",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire" },
        {
          label: "Personality",
          value:
            "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality",
        },
      ],
      compliance: [
        "GDPR and CCPA compliant",
        "Legal data retention standards",
        "End-to-end encryption",
        "Role-based access control",
      ],
    },
    {
      id: 7,
      name: "Diego",
      title: "Sales Development Representative",
      image: diego22,
      video: diegoVideo3,
      images:[diego1,diego4,diego2,diego3],
      subtitle: "Sales Representative (Spanish Speaker)",
      desc: "Confident, persuasive, and goal-driven — Ethan is your AI sales representative fluent in Spanish, English. He connects with prospects naturally, qualifies leads, and schedules meetings that keep your pipeline growing across English-speaking markets.",
      languages: ["English"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
        
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
    },
    {
      id: 8,
      name: "Diego",
      images:[diego1,diego4,diego2,diego3],
      title: "Care Nurse",
      subtitle: "Healthcare Assistant (Arabic Speaker)",
      image: diego3,
      video: diegoVideo4,
      desc: "Compassionate, reliable, and precise — Amina is your AI healthcare assistant fluent in Arabic and English. She manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Arabic,English"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],
    },
    {
      id: 9,
      name: "Ethan",
      title: "AI Receptionist",
      subtitle: "Customer Care Assistant",
      image: ethan1,
      video: ethanVideo1,
      images:[ethan1,ethan2,ethan3,ethan4],
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",

      languages: ["Arabic", "English"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Reduces missed calls", value: "45%" },
        { label: "Response time improvement", value: "35%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, anddependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer data management",
      ],
    },
   
     {
      id: 10,
      name: "Ethan",
      title: "Legal Assistant",
      subtitle: "Legal Support Agent",
     image: ethan2,
     images:[ethan1,ethan2,ethan3,ethan4],
      desc: "Analytical, precise, and trustworthy — Ethan is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. She helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["English"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Maintenance",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance:[
        { label: "Outfit", value: "Professional business attire" },
        { label: "Personality", value: "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality" },
      ],
        compliance: [
          "GDPR and CCPA compliant",
          "Legal data retention standards",
          "End-to-end encryption",
          "Role-based access control",
        ],
    },
     {
      id: 11,
      name: "Ethan",
      title: "Sales Development Representative",
      subtitle: "Sales Agent (Spanish Speaker)",
      image: ethan3,
      video: ethanVideo2,
      images:[ethan1,ethan2,ethan3,ethan4],
      desc: "Confident, persuasive, and goal-driven — Ethan is your AI sales representative fluent in Spanish, English. He connects with prospects naturally, qualifies leads, and schedules meetings that keep your pipeline growing across English-speaking markets.",
      languages: ["Spanish, English"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
        
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
    },
   
    {
      id: 12,
      name: "Ethan",
      title: "Care Nurse",
      subtitle: "Healthcare Assistant (Arabic Speaker)",
      image: ethan4,
      video: ethanVideo4,
      images:[ethan1,ethan2,ethan3,ethan4],
      desc: "Compassionate, reliable, and precise — Amina is your AI healthcare assistant fluent in Arabic and English. She manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Arabic,English"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],
    
    },
    {
      id: 13,
      name: "Amina",
      title: " AI Receptionist",
      subtitle: "Customer Care Assistant",
      image: amina1,
      video: aminaVideo1,
      images:[amina1,amina2,amina3,amina4],
      desc: "A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.",
      languages: ["English", "Arabic"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Call Routing",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Inquiry Handling",
        },
        {
          icon: (
            <FiUsers className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Coordination",
        },
      ],
      performance: [
        { label: "Reduces missed calls", value: "45%" },
        { label: "Response time improvement", value: "95%" },
      ],
      appearance:
        "Smart office attire with professional headset. Polite, confident, anddependable — always maintaining a warm, professional tone.",
      compliance: [
        "Enterprise-grade data privacy",
        "Secure call handling",
        "Customer data management",
      ],
    },
    
    {
      id: 14,
      name: "Amina",
      images:[amina1,amina2,amina3,amina4],
      title: "Legal Assistant",
      subtitle: "Legal Support Agent",
      image: amina2,
      video: aminaVideo2,
      desc: "Analytical, precise, and trustworthy — Ethan is your AI legal assistant designed to support law firms, in-house counsels, and compliance teams. She helps draft documents, organize case files, and manage client communication efficiently while maintaining the highest confidentiality standards.",
      languages: ["Arabic ,English"],
      keyTasks: [
        {
          icon: (
            <MdOutlineHeadset className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Document Drafting",
        },
        {
          icon: (
            <FaCalendarCheck className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case File Organization",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Legal Research",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Client Scheduling",
        },
        {
          icon: (
            <LuMessageSquare className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Confidentiality Monitoring",
        },
        {
          icon: (
            <SlScreenDesktop className="w-6 h-6 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Case Summaries",
        },
      ],
      performance: [
        { label: "Reduces document preparation time", value: "50%" },
        { label: "Improves legal research efficiency", value: "40%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire" },
        {
          label: "Personality",
          value:
            "Intelligent, composed, and detail-oriented — communicates with clarity, professionalism, and confidentiality",
        },
      ],
      compliance: [
        "GDPR and CCPA compliant",
        "Legal data retention standards",
        "End-to-end encryption",
        "Role-based access control",
      ],
    },
    {
      id: 15,
      name: "Amina",
      title: "Sales Development Representative",
      subtitle: "Sales Agent (English Speaker)",
      image: amina33,
      images:[amina1,amina2,amina3,amina4],
      video: aminaVideo3,
      desc: "Confident, persuasive, and naturally engaging — liza is your AI sales representative built to connect with prospects, qualify leads, and book meetings with authenticity and precision. She blends charm with strategic communication, making every outreach feel personal and impactful.",
      languages: ["Arabic,English"],
      keyTasks: [
        {
          icon: (
            <GrPhone className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Lead Qualification",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Demo Scheduling",
        },
        {
          icon: (
            <FiDatabase className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "  CRM Integration",
        },
        {
          icon: (
            <RiCalendarCheckLine className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Campaign Engagement",
        },
      ],
      performance: [
        { label: "Improves outreach conversion", value: "43" },
        { label: "Shortens lead response time", value: "33%" },
      ],
      appearance: [
        { label: "Outfit", value: "Professional business attire with headset" },
        {
          label: "Personality",
          value:
            "Confident, persuasive, and goal-driven — maintains natural conversations while expertly guiding prospects through the sales process",
        },
      ],
      compliance: [
        "GDPR compliant",
        "TCPA compliant",
        "Enterprise-grade data privacy",
      ],
    },
    {
      id: 16,
      name: "Amina",
      title: "Care Nurse",
      subtitle: "Healthcare Assistant (Arabic Speaker)",
      image: amina4,
      video: aminaVideo4,
      images:[amina1,amina2,amina3,amina4],
      desc: "Compassionate, reliable, and precise — Amina is your AI healthcare assistant fluent in Arabic and English. She manages patient communication, appointment coordination, and medication reminders with empathy and professionalism, ensuring every interaction feels human and caring.",
      languages: ["Arabic,English"],
      keyTasks: [
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Appointments Scheduling",
        },
        {
          icon: (
            <FaRegBell className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Medication Reminders",
        },
        {
          icon: (
            <LuMessageSquare className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Patient Inquiries",
        },
        {
          icon: (
            <TbWorld className="w-7 h-7 text-blue-600 bg-blue-100 p-1 rounded-lg" />
          ),
          label: "Multilingual Support",
        },
      ],
      performance: [
        { label: "Improves patient adherence rates", value: "40%" },
        { label: "Reduces missed appointments", value: "35%" },
      ],
      appearance: [
        { label: "Outfit", value: "Medical scrubs with a headset" },
        {
          label: "Personality",
          value:
            "Calm, empathetic, and trustworthy — communicates with warmth and reassurance, ensuring patients feel supported and understood",
        },
      ],
      compliance: [
        "HIPAA compliant",
        "Global healthcare data privacy standards",
        "Secure patient information handling",
      ],
    },

    // Continue same pattern for remaining 8 agents (5–12)
  ];

  const roleThumbnailMap = agents.reduce((acc, agentItem) => {
    const roleKey = (agentItem.title || "").trim().toLowerCase();
    if (!roleKey) return acc;

    const thumbnailImage =
      agentItem.image ||
      agentItem.img ||
      (Array.isArray(agentItem.images) ? agentItem.images[0] : null);

    if (!thumbnailImage) return acc;

    if (!acc[roleKey]) {
      acc[roleKey] = [];
    }

    acc[roleKey].push({
      id: agentItem.id,
      image: thumbnailImage,
      name: agentItem.name,
      title: agentItem.title,
    });

    return acc;
  }, {});

  const handleRoleThumbnailClick = (targetId) => {
    if (typeof targetId !== "number" || targetId === currentPopupId) {
      return;
    }

    setCurrentPopupId(targetId);
    window.dispatchEvent(new CustomEvent("openAgentPopup", { detail: targetId }));
  };

  const agent = agents.find((a) => a.id === currentPopupId);

  if (!agent) {
    return (
      <div className="p-10 text-center text-gray-500">Agent not found.</div>
    );
  }

  // When a circle thumbnail (within the same employee card) is clicked,
  // cycle within the corresponding 4-agent block for that person.
  const handleImageClick = (_agentId, index) => {
    const groupStartId = Math.floor((agent.id - 1) / 4) * 4 + 1;
    const targetId = groupStartId + index;

    if (typeof targetId === "number") {
      setCurrentPopupId(targetId);
      window.dispatchEvent(
        new CustomEvent("openAgentPopup", { detail: targetId })
      );
    }
  };

  const roleKey = (agent.title || "").trim().toLowerCase();
  const roleThumbnails =
    roleScopedThumbnails && roleKey ? roleThumbnailMap[roleKey] || [] : [];

  const thumbnailItems = roleScopedThumbnails
    ? roleThumbnails.slice(0, 4).map((thumb) => ({
        key: thumb.id,
        image: thumb.image,
        alt: `${thumb.name} - ${thumb.title}`,
        handleClick: () => handleRoleThumbnailClick(thumb.id),
      }))
    : Array.isArray(agent.images)
    ? agent.images.slice(0, 4).map((imgSrc, index) => ({
        key: `${agent.id}-${index}`,
        image: imgSrc,
        alt: `${agent.name} option ${index + 1}`,
        handleClick: () => handleImageClick(agent.id, index),
      }))
    : [];
  return (
    <div
      className="
      relative
      bg-white rounded-2xl shadow-lg p-4 md:p-5 max-w-4xl w-full mx-auto mt-40
      overflow-hidden
      max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent
      md:overflow-visible md:max-h-none
      transition-all duration-300
    "
    >
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 p-2 z-50 transition-all duration-300"
          aria-label="Close popup"
        >
          <IoMdClose className="w-6 h-6" />
        </button>
      )}

      {/* ✅ Changed flex order for mobile */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-center items-center overflow-hidden rounded-xl bg-gray-50 order-2 md:order-1 relative">

  {agent.video ? (
    <>
      <video
        ref={videoRef}
        src={agent.video}
        autoPlay
        muted={isVideoMuted}
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen"
        className="w-full h-full object-contain md:object-cover object-center"
      />
      <button
        onClick={() => {
          const v = videoRef.current;
          if (v) {
            const next = !isVideoMuted;
            v.muted = next;
            setIsVideoMuted(next);
            if (v.paused) v.play().catch(() => {});
          }
        }}
        className="absolute bottom-3 left-3 z-50 px-3 py-1.5 text-xs rounded-full bg-black/60 text-white hover:bg-black/80 transition"
      >
        {isVideoMuted ? "Unmute" : "Mute"}
      </button>
    </>
  ) : (
    <img
      src={agent.img || agent.image}
      alt={agent.title}
      className="w-full h-full object-contain md:object-cover object-center transition-transform duration-500 ease-in-out hover:scale-[1.03]"
    />
  )}

  {/* ✅ Final Version — Full width, no cut-off, perfect spacing */}
{thumbnailItems.length > 0 && (
  <div className="absolute bottom-3 left-1/2-translate-x-1/2 flex gap-6 space-x-[-6px] sm:space-x-[-8px] z-30">
    {thumbnailItems.map((thumb) => (
      <img
        key={thumb.key}
        src={thumb.image}
        alt={thumb.alt}
        onClick={thumb.handleClick}
        className="
          w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 
          rounded-full overflow-hidden border-2 border-white 
          shadow-md object-cover object-top cursor-pointer 
          hover:scale-110 hover:shadow-blue-300/60 
          transition-transform duration-300 ease-out mt-2
        "
        style={{
          objectPosition: "top",
        }}
      />
    ))}
  </div>
)}




        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-between order-1 md:order-2">
          <div>
            <h2
              className="
    text-base sm:text-lg md:text-xl lg:text-2xl
    font-bold text-gray-900 text-left
    mt-2 sm:mt-4 md:mt-6 lg:mt-5
  "
            >
              {agent.name} - {agent.title}
            </h2>

            <p className="text-gray-600 text-xs mt-2">{agent.subtitle}</p>

            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-3.5 h-3.5" />
              ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-5 mt-4 border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab("description")}
                className={`pb-2 text-xs font-medium transition-colors ${
                  activeTab === "description"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`pb-2 text-xs font-medium transition-colors ${
                  activeTab === "details"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                Details
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-1 space-y-4 min-h-[250px] text-xs transition-all duration-300">
            {activeTab === "description" ? (
              <>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  {agent.desc}
                </p>

                <div>
                  <h4 className="font-medium text-gray-900">Languages</h4>
                  <p className="mt-1 text-gray-600">
                    {Array.isArray(agent.languages)
                      ? agent.languages.join(", ")
                      : agent.languages}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Key Tasks</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {agent.keyTasks.map((task, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-2 py-1 rounded-lg text-gray-800 font-medium hover:text-blue-600"
                      >
                        <div>{typeof task === "object" ? task.icon : null}</div>
                        <span>
                          {typeof task === "object" ? task.label : task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-3">
                {/* <div>
                  <h4 className="font-medium text-gray-900">
                    Appearance & Personality
                  </h4>

                  {typeof agent.appearance === "string" ? (
                    // ✅ simple paragraph case
                    <p className="mt-1 text-gray-500">{agent.appearance}</p>
                  ) : Array.isArray(agent.appearance) ? (
                    // ✅ if it's an array of label-value pairs
                    <ul className="mt-1 space-y-2 text-gray-500">
                      {agent.appearance.map((item, i) => (
                        <li key={i}>
                          <span className="font-medium text-gray-900">
                            {item.label}:
                          </span>{" "}
                          <span className="font-medium text-gray-500 text-md">
                            {item.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : ( */}
                    
                    {/* <ul className="mt-1 space-y-1 text-gray-500">
                      {Object.entries(agent.appearance).map(
                        ([label, value], i) => (
                          <li key={i}>
                            <span className="font-medium text-gray-900">
                              {label}:
                            </span>{" "}
                            {value}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div> */}

                <div>
                  <h4 className="font-medium text-gray-900">Compliance</h4>
                  <ul className="mt-1 space-y-1 list-disc list-inside text-gray-500">
                    {Array.isArray(agent.compliance) ? (
                      agent.compliance.map((item, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <GoDotFill className="w-3 h-3" />
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="flex items-center gap-1">
                        <GoDotFill className="w-3 h-3" />
                        {agent.compliance}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg px-2 py-2 mt-7 py-5">
                  <h4 className="font-medium text-gray-900">
                    Performance Impact
                  </h4>
                  <div className="space-y-1 mt-1 ">
                    {Array.isArray(agent.performance) ? (
                      agent.performance.map((perf, i) => (
                        <div
                          key={i}
                          className="flex justify-between text-gray-500"
                        >
                          <span>{perf.label}</span>
                          <span className="text-blue-600 font-medium">
                            {perf.value}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-700">{agent.performance}</div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 mt-20">
            <button
              onClick={() => {
                // dispatch a global event so top-level App can open CallScreen
                const caller = {
                  name: agent.name,
                  org: agent.subtitle || "",
                  avatar: agent.image,
                };
                window.dispatchEvent(new CustomEvent("openCallScreen", { detail: caller }));
                // close agent popup (parent) after dispatching
                if (onClose) onClose();
              }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-900 text-white py-2.5 text-xs font-medium rounded-full hover:from-blue-700 hover:to-blue-800"
            >
              Try {agent.name}
            </button>
            <button className="flex-1 border border-blue-400 text-blue-600 py-2.5 rounded-full text-xs font-medium hover:bg-blue-100">
              Schedule Demo with {agent.name}
            </button>
          </div>
        </div>
      </div>

      {/* CallScreen is opened globally by App.jsx via the "openCallScreen" event */}
    </div>
  );
}