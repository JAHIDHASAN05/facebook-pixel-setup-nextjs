"use client";

import { useState, useEffect, useRef } from "react";

export default function TextToSpeechModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utterRef = useRef(null);

  const text = `Hello rodro jahid create me , tumi naki english parona tai pore sunai dekhis ami tor moto getai na . Business valuation is the process of determining the monetary worth of a business by analyzing its assets, liabilities, earnings, and future prospects, and it is used for various purposes such as sales, mergers, attracting investors, taxation, and legal settlements. There are several common methods for performing a valuation, including comparing the business to similar companies, looking at earnings or cash flow, or assessing the value of its assets.`;

  const imageUrl =
    "https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-1/481473175_2412502389116579_907440671072497812_n.jpg?stp=c0.0.864.864a_dst-jpg_s160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=X0duF8lSg9oQ7kNvwHkUSsS&_nc_oc=AdkAwtRpMP1jo-i2XIZHMCUo_LoiMITluHANigVgZjOcVfp_jntd4E16m1q34RsP62M&_nc_zt=24&_nc_ht=scontent.fcgp38-1.fna&_nc_gid=LWNebm3W78bH7wcOTfavYw&oh=00_AffF1sE_i2IXOs1U1dU2J6g0U1f1yEFz5kOI0q4BOKgIiQ&oe=68E9AA60";

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleStart = () => {
    setIsOpen(true);

    // start speech after modal animation
    setTimeout(() => {
      if (utterRef.current) window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterRef.current = utterance;

      utterance.rate = 1;
      utterance.pitch = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }, 300);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Start Button */}
      <button
        onClick={handleStart}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
      >
        Rodro Click
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-4"
            style={{ height: "450px" }}
          >
            {/* Background Image */}
            <img
              src={imageUrl}
              alt="Rodro"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />

            {/* Text Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-6 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">
                Rodro Business Valuation
              </h2>

              <p className="text-white text-sm leading-relaxed backdrop-blur-md bg-white/10 rounded-xl p-4 shadow-md">
                {text}
              </p>

              {/* Speaking Indicator */}
              {isSpeaking && (
                <div className="mt-4 flex items-center space-x-2 animate-pulse">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-white font-medium">Now speaking...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}








// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function TextToSpeechModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const utterRef = useRef(null);

//   const text = `Rodro tor lagi: Business valuation is the process of determining the monetary worth of a business by analyzing its assets, liabilities, earnings, and future prospects, and it is used for various purposes such as sales, mergers, attracting investors, taxation, and legal settlements. There are several common methods for performing a valuation, including comparing the business to similar companies, looking at earnings or cash flow, or assessing the value of its assets.`;

//   // cleanup on unmount
//   useEffect(() => {
//     return () => {
//       window.speechSynthesis.cancel();
//     };
//   }, []);

//   // close on ESC
//   useEffect(() => {
//     function onKey(e) {
//       if (e.key === "Escape") {
//         stopAndClose();
//       }
//     }
//     if (isOpen) window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [isOpen]);

//   const startSpeaking = () => {
//     // don't start another if already speaking
//     if (isSpeaking) return;

//     // cancel anything existing (safety)
//     window.speechSynthesis.cancel();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterRef.current = utterance;

//     utterance.rate = 1;
//     utterance.pitch = 1;

//     utterance.onstart = () => {
//       setIsSpeaking(true);
//     };

//     utterance.onend = () => {
//       setIsSpeaking(false);
//       utterRef.current = null;
//       // auto-close modal when done (remove this line if you want it to stay open)
//       setTimeout(() => setIsOpen(false), 300);
//     };

//     utterance.onerror = () => {
//       setIsSpeaking(false);
//       utterRef.current = null;
//     };

//     // speak after a tiny delay so modal animation can start
//     setTimeout(() => window.speechSynthesis.speak(utterance), 350);
//   };

//   const handleStart = () => {
//     // open modal and start speaking
//     setIsOpen(true);
//     startSpeaking();
//   };

//   const stopAndClose = () => {
//     window.speechSynthesis.cancel();
//     setIsSpeaking(false);
//     utterRef.current = null;
//     setIsOpen(false);
//   };

//   return (
//     <div  className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
//       {/* Start Button */}
//       <button
//         onClick={handleStart}
//         className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
//         aria-haspopup="dialog"
//         aria-expanded={isOpen}
//       >
//         Rodro Click
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         // overlay
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
//           onMouseDown={(e) => {
//             // close only when clicking the overlay (not the modal content)
//             if (e.target === e.currentTarget) stopAndClose();
//           }}
//         >
//           {/* modal card */}
//           <div
//             role="dialog"
//             aria-modal="true"
//             className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 mx-3 relative transform transition-all duration-300 ease-out
//                        opacity-0 scale-95 animate-modal-in"
//             // to ensure animation plays, we use a simple tailwind-friendly trick below with an inline style fallback
//             style={{ animation: "modalIn 250ms ease-out forwards" }}
//           >
//             <style>{`
//               @keyframes modalIn {
//                 from { opacity: 0; transform: translateY(6px) scale(.98); }
//                 to   { opacity: 1; transform: translateY(0) scale(1); }
//               }
//               @keyframes pulseDot {
//                 0% { transform: scale(1); opacity: 1; }
//                 50% { transform: scale(1.35); opacity: 0.6; }
//                 100% { transform: scale(1); opacity: 1; }
//               }
//             `}</style>

//             <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
//               Rodro Business Valuation
//             </h2>

//             <p className="text-gray-700 text-sm leading-relaxed text-justify mb-6">
//               {text}
//             </p>

//             {/* Now speaking badge + close */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <div
//                   className={`w-3 h-3 rounded-full ${isSpeaking ? "bg-green-500" : "bg-gray-300"} `}
//                   style={isSpeaking ? { animation: "pulseDot 900ms infinite" } : {}}
//                   aria-hidden
//                 />
//                 <span className="text-sm text-gray-600">
//                   {isSpeaking ? "Now speaking..." : "Ready"}
//                 </span>
//               </div>

//               <button
//                 onClick={stopAndClose}
//                 className="px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
