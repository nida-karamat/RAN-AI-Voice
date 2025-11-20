// "use client";
// import React from "react";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { IoClose } from "react-icons/io5";
// import { FaArrowRight, FaStar } from "react-icons/fa6";

// export default function EmployeeModal({ emp, onClose }) {

//   if (!emp) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
//       <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
//       <div className="relative bg-white rounded-2xl w-full max-w-lg p-8">
//         {/* Close button */}
//         <button 
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//         >
//           <IoClose size={24} />
//         </button>

//         {/* Header */}
//         {/* Header with rating */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-1">
//             Liza – AI Receptionist
//           </h2>
//           <p className="text-gray-600 mb-2">Customer Care Assistant</p>
//           <div className="flex gap-1">
//             {[1,2,3,4,5].map((star) => (
//               <FaStar key={star} className="text-yellow-400 w-4 h-4" />
//             ))}
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-6 border-b border-gray-200 mb-6">
//           <button className="pb-2 text-blue-600 border-b-2 border-blue-600 font-medium">
//             Description
//           </button>
//           <button className="pb-2 text-gray-400 font-medium">
//             Details
//           </button>
//         </div>

//         {/* Description */}
//         <p className="text-gray-700 mb-6">
//           A professional and friendly AI receptionist designed to manage calls, schedule meetings, and provide seamless first-point contact for businesses of all sizes.
//         </p>

//         {/* Languages */}
//         <div className="mb-6">
//           <h4 className="text-sm font-medium text-gray-900 mb-1">Languages</h4>
//           <p className="text-gray-600">English</p>
//         </div>

//         {/* Key Tasks */}
//         <div className="mb-6">
//           <h4 className="text-sm font-medium text-gray-900 mb-3">Key Tasks</h4>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
//               <IoMdCheckmarkCircleOutline className="text-blue-600 w-5 h-5" />
//               <span className="text-gray-700">Call Routing</span>
//             </div>
//             <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
//               <IoMdCheckmarkCircleOutline className="text-blue-600 w-5 h-5" />
//               <span className="text-gray-700">Scheduling</span>
//             </div>
//             <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
//               <IoMdCheckmarkCircleOutline className="text-blue-600 w-5 h-5" />
//               <span className="text-gray-700">Inquiry Handling</span>
//             </div>
//             <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-3">
//               <IoMdCheckmarkCircleOutline className="text-blue-600 w-5 h-5" />
//               <span className="text-gray-700">Coordination</span>
//             </div>
//           </div>
//         </div>

//         {/* Performance Impact */}
//         <div className="mb-8">
//           <h4 className="text-sm font-medium text-gray-900 mb-3">Performance Impact</h4>
//           <div className="space-y-2">
//             <div className="flex justify-between items-center text-sm">
//               <span className="text-gray-600">Reduces missed calls</span>
//               <span className="text-blue-600 font-medium">45%</span>
//             </div>
//             <div className="flex justify-between items-center text-sm">
//               <span className="text-gray-600">Response time improvement</span>
//               <span className="text-blue-600 font-medium">35%</span>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-3">
//           <button className="flex-1 bg-blue-600 text-white rounded-full py-3 text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
//             Try Lisa
//             <FaArrowRight className="w-3 h-3" />
//           </button>
//           <button className="flex-1 border border-blue-100 text-blue-600 rounded-full py-3 text-sm font-medium hover:bg-blue-50 transition-colors">
//             Schedule Demo with Lisa
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
