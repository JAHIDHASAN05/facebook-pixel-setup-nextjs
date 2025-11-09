import { redirect } from "next/navigation";

export default function OldPage() {

  redirect("/rodro-english-parena");

}


// "use client";

// import { useState, useEffect } from "react";

// export default function TextToSpeechModal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const text = `Rodro tor lagi: Business valuation is the process of determining the monetary worth of a business by analyzing its assets, liabilities, earnings, and future prospects, and it is used for various purposes such as sales, mergers, attracting investors, taxation, and legal settlements. There are several common methods for performing a valuation, including comparing the business to similar companies, looking at earnings or cash flow, or assessing the value of its assets.`;

//   useEffect(() => {
//     return () => {
//       window.speechSynthesis.cancel();
//     };
//   }, []);

//   const handleStart = () => {
//     setIsOpen(true);
//     setTimeout(() => {
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.rate = 1;
//       utterance.pitch = 1;
//       window.speechSynthesis.speak(utterance);
//     }, 400);
//   };

// //   const handleClose = () => {
// //     window.speechSynthesis.cancel();
// //     setIsOpen(false);
// //   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       {/* Start Button */}
//       <button
//         onClick={handleStart}
//         className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
//       >
//        Rodro Click 
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 mx-3 relative">
//             <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
//             Rodro  Business Valuation
//             </h2>
         

//             <div className="flex justify-center">
//               <button
//                 // onClick={handleClose}
//                 className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition"
//               >
//                 <svg
//                 width="20"
//                 className="animate-spin"
//                 height="21"
//                 viewBox="0 0 20 21"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g id="elements">
//                   <path
//                     id="Icon"
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M10.75 1.5C10.75 1.08579 10.4142 0.75 10 0.75C9.58579 0.75 9.25 1.08579 9.25 1.5V4.5C9.25 4.91421 9.58579 5.25 10 5.25C10.4142 5.25 10.75 4.91421 10.75 4.5V1.5ZM10.75 16.5C10.75 16.0858 10.4142 15.75 10 15.75C9.58579 15.75 9.25 16.0858 9.25 16.5V19.5C9.25 19.9142 9.58579 20.25 10 20.25C10.4142 20.25 10.75 19.9142 10.75 19.5V16.5ZM15.25 10.5C15.25 10.0858 15.5858 9.75 16 9.75H19C19.4142 9.75 19.75 10.0858 19.75 10.5C19.75 10.9142 19.4142 11.25 19 11.25H16C15.5858 11.25 15.25 10.9142 15.25 10.5ZM1 9.75C0.585786 9.75 0.25 10.0858 0.25 10.5C0.25 10.9142 0.585786 11.25 1 11.25H4C4.41421 11.25 4.75 10.9142 4.75 10.5C4.75 10.0858 4.41421 9.75 4 9.75H1ZM16.8938 3.60639C17.1867 3.89928 17.1867 4.37416 16.8938 4.66705L14.7725 6.78837C14.4796 7.08126 14.0048 7.08126 13.7119 6.78837C13.419 6.49548 13.419 6.0206 13.7119 5.72771L15.8332 3.60639C16.1261 3.3135 16.6009 3.3135 16.8938 3.60639ZM6.28739 15.2725C6.58029 14.9796 6.58029 14.5048 6.28739 14.2119C5.9945 13.919 5.51963 13.919 5.22673 14.2119L3.10541 16.3332C2.81252 16.6261 2.81252 17.1009 3.10541 17.3938C3.39831 17.6867 3.87318 17.6867 4.16607 17.3938L6.28739 15.2725ZM13.7119 14.2119C14.0048 13.919 14.4796 13.919 14.7725 14.2119L16.8938 16.3332C17.1867 16.6261 17.1867 17.1009 16.8938 17.3938C16.6009 17.6867 16.1261 17.6867 15.8332 17.3938L13.7119 15.2725C13.419 14.9796 13.419 14.5048 13.7119 14.2119ZM4.16607 3.60639C3.87318 3.3135 3.39831 3.3135 3.10541 3.60639C2.81252 3.89928 2.81252 4.37416 3.10541 4.66705L5.22673 6.78837C5.51963 7.08126 5.9945 7.08126 6.28739 6.78837C6.58029 6.49548 6.58029 6.0206 6.28739 5.72771L4.16607 3.60639Z"
//                     fill="white"
//                   />
//                 </g>
//               </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
