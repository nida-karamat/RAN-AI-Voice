// "use client";
// import React from "react";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { FaArrowRight } from "react-icons/fa6";

// export default function ExploreModal({ emp, onClose }) {
//   if (!emp) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
//       <div className="absolute inset-0 " onClick={onClose}></div>
      
//       <div className="relative bg-white rounded-xl p-6 max-w-xl w-full">
//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//           {emp.label || "Liza – AI Receptionist"}
//         </h2>
//         <p className="text-sm text-gray-500 mb-1">AI Receptionist</p>

//         {/* Description */}
//         <p className="text-gray-700 mb-4">
//           {emp.desc}
//         </p>

//         {/* Stats badge */}
//         <div className="bg-blue-50 text-blue-900 text-sm font-medium px-3 py-1 rounded-full w-fit mb-6">
//           {emp.tag}
//         </div>

//         {/* Skills */}
//         <div className="space-y-2 mb-6">
//           {emp.skills.map((skill, idx) => (
//             <div key={idx} className="flex items-center gap-2">
//               <IoMdCheckmarkCircleOutline className="text-blue-600 w-4 h-4" />
//               <span className="text-gray-700">{skill}</span>
//             </div>
//           ))}
//         </div>

//         {/* Key Capabilities */}
//         <div>
//           <h3 className="font-medium text-gray-900 mb-3">Key Capabilities</h3>
//           <ul className="space-y-2">
//             {emp.details.map((detail, idx) => (
//               <li key={idx} className="text-sm text-gray-700">• {detail}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3 mt-8">
//           <button className="flex-1 bg-blue-600 text-white rounded-full py-2 px-4 text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
//             Try Liza
//             <FaArrowRight className="w-3 h-3" />
//           </button>
//           <button className="flex-1 border border-blue-200 text-blue-600 rounded-full py-2 px-4 text-sm font-medium hover:bg-blue-50 transition-colors">
//             Schedule Demo
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }