"use client";

import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";

export default function JahidTTSVideoDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWord, setCurrentWord] = useState(-1);
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
  const modalRef = useRef(null);
  const utterRef = useRef(null);
  const ffmpegRef = useRef(null);

  const text = `Jahid says: Business valuation is the process of determining the monetary worth of a business by analyzing its assets, liabilities, earnings, and future prospects. It's used for sales, mergers, attracting investors, taxation, and legal settlements. Common methods include comparing to similar companies, earnings/cash flow, or asset value.`;

  const words = text.split(" ");
  const imageUrl =
    "https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-1/481473175_2412502389116579_907440671072497812_n.jpg";

  // Client-side FFmpeg dynamic import
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@ffmpeg/ffmpeg").then((FFmpegPkg) => {
        ffmpegRef.current = FFmpegPkg.createFFmpeg({ log: true });
        setFfmpegLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    return () => window.speechSynthesis.cancel();
  }, []);

  const handleStart = () => {
    setIsOpen(true);
    setCurrentWord(-1);

    const utterance = new SpeechSynthesisUtterance(text);
    utterRef.current = utterance;
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
      highlightWords();
    };
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const highlightWords = () => {
    let i = 0;
    const interval = 300;
    const timer = setInterval(() => {
      setCurrentWord(i);
      i++;
      if (i >= words.length) clearInterval(timer);
    }, interval);
  };

  const getEmoji = (word) => {
    const emojis = ["💡", "🔥", "📈", "✨", "🎯"];
    if (word.length > 5 && Math.random() > 0.6) return emojis[Math.floor(Math.random() * emojis.length)];
    return "";
  };

  const handleDownloadAudio = async () => {
    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const chunks = [];
    const recorder = new MediaRecorder(audioStream);

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/mp3" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "jahid-tts.mp3";
      a.click();
    };

    recorder.start();

    const utter = new SpeechSynthesisUtterance(text);
    utter.onend = () => recorder.stop();
    window.speechSynthesis.speak(utter);
  };

  const handleDownloadVideo = async () => {
    if (!ffmpegLoaded) return alert("FFmpeg is still loading…");

    const ffmpeg = ffmpegRef.current;

    if (!ffmpeg.isLoaded()) await ffmpeg.load();

    if (!modalRef.current) return;
    const canvas = await html2canvas(modalRef.current, { scale: 2 });
    const blob = await new Promise((res) => canvas.toBlob(res, "image/png"));
    ffmpeg.FS("writeFile", "frame.png", await (await fetch(blob)).arrayBuffer());

    await ffmpeg.run(
      "-loop",
      "1",
      "-i",
      "frame.png",
      "-t",
      "5",
      "-vf",
      "scale=640:480",
      "-c:v",
      "libx264",
      "-pix_fmt",
      "yuv420p",
      "output.mp4"
    );

    const data = ffmpeg.FS("readFile", "output.mp4");
    const url = URL.createObjectURL(new Blob([data.buffer], { type: "video/mp4" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "jahid-video.mp4";
    a.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <button
        onClick={handleStart}
        className="mb-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
      >
        Start Jahid Reading
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/70"></div>

          <div
            ref={modalRef}
            className="relative w-full max-w-md p-6 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-xl overflow-hidden"
          >
            <img
              src={imageUrl}
              alt="Jahid"
              className="absolute inset-0 w-full h-full object-cover brightness-60"
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Jahid Explains Business Valuation</h2>
              <p className="text-white text-sm leading-relaxed">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className={i === currentWord ? "text-yellow-400 font-bold scale-110 transition-transform inline-block" : ""}
                  >
                    {word} {i === currentWord ? getEmoji(word) : ""}{" "}
                  </span>
                ))}
              </p>
              {isSpeaking && <div className="mt-4 text-white font-semibold">💬 Jahid is talking...</div>}
            </div>
          </div>

          <div className="flex mt-4 space-x-2 z-50">
            <button
              onClick={handleDownloadAudio}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Download Audio
            </button>
            <button
              onClick={handleDownloadVideo}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
            >
              Download Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



//first success
// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function TTSHighlightModal() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [currentWord, setCurrentWord] = useState(-1);
//   const utterRef = useRef(null);

//   const text = `Business valuation is the process of determining the monetary worth of a business by analyzing its assets, liabilities, earnings, and future prospects, and it is used for various purposes such as sales, mergers, attracting investors, taxation, and legal settlements. There are several common methods for performing a valuation, including comparing the business to similar companies, looking at earnings or cash flow, or assessing the value of its assets.`;

//   const words = text.split(" ");

//   const imageUrl =
//     "https://scontent.fcgp38-1.fna.fbcdn.net/v/t39.30808-1/481473175_2412502389116579_907440671072497812_n.jpg?stp=c0.0.864.864a_dst-jpg_s160x160_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=X0duF8lSg9oQ7kNvwHkUSsS&_nc_oc=AdkAwtRpMP1jo-i2XIZHMCUo_LoiMITluHANigVgZjOcVfp_jntd4E16m1q34RsP62M&_nc_zt=24&_nc_ht=scontent.fcgp38-1.fna&_nc_gid=LWNebm3W78bH7wcOTfavYw&oh=00_AffF1sE_i2IXOs1U1dU2J6g0U1f1yEFz5kOI0q4BOKgIiQ&oe=68E9AA60";

//   useEffect(() => {
//     return () => window.speechSynthesis.cancel();
//   }, []);

//   const handleStart = () => {
//     setIsOpen(true);
//     setCurrentWord(-1);

//     setTimeout(() => {
//       if (utterRef.current) window.speechSynthesis.cancel();

//       const utterance = new SpeechSynthesisUtterance(text);
//       utterRef.current = utterance;
//       utterance.rate = 1;
//       utterance.pitch = 1;

//       utterance.onstart = () => {
//         setIsSpeaking(true);
//         highlightWords();
//       };
//       utterance.onend = () => {
//         setIsSpeaking(false);
//         setCurrentWord(-1);
//       };
//       utterance.onerror = () => {
//         setIsSpeaking(false);
//         setCurrentWord(-1);
//       };

//       window.speechSynthesis.speak(utterance);
//     }, 300);
//   };

//   // Highlight words sequentially (approximate timing)
//   const highlightWords = () => {
//     const interval = 300; // milliseconds per word (adjust for speed)
//     let index = 0;

//     const timer = setInterval(() => {
//       setCurrentWord(index);
//       index++;
//       if (index >= words.length) clearInterval(timer);
//     }, interval);
//   };

//   // Random emoji popup on highlight
//   const getEmoji = (word) => {
//     const emojis = ["💡", "🔥", "📈", "✨", "🎯"];
//     if (word.length > 5 && Math.random() > 0.6) return emojis[Math.floor(Math.random() * emojis.length)];
//     return "";
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900">
//       {/* Start Button */}
//       <button
//         onClick={handleStart}
//         className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl"
//       >
//         Rodro Click
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center">
//           {/* Background blur + gradient */}
//           <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

//           {/* Glass card */}
//           <div className="relative w-full max-w-md mx-4 p-6 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20">
//             {/* Rodro Image */}
//             <div className="absolute inset-0 overflow-hidden rounded-3xl">
//               <img
//                 src={imageUrl}
//                 alt="Rodro"
//                 className="w-full h-full object-cover brightness-60"
//               />
//             </div>

//             {/* Text Overlay */}
//             <div className="relative z-10 flex flex-col items-center text-center">
//               <h2 className="text-3xl font-extrabold text-white drop-shadow-lg mb-4 animate-pulse">
//                 Rodro Business Valuation
//               </h2>

//               <p className="text-white text-sm leading-relaxed backdrop-blur-md bg-white/10 rounded-2xl p-5 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-transparent">
//                 {words.map((word, i) => (
//                   <span
//                     key={i}
//                     className={`transition-all duration-200 ${
//                       i === currentWord
//                         ? "text-yellow-400 font-bold scale-110 relative"
//                         : ""
//                     }`}
//                   >
//                     {word} {i === currentWord ? getEmoji(word) : ""}{" "}
//                   </span>
//                 ))}
//               </p>

//               {/* Speaking Indicator */}
//               {isSpeaking && (
//                 <div className="mt-6 flex items-center space-x-2">
//                   <span className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></span>
//                   <span className="text-white font-semibold">💬 Rodro is talking...</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       <style>
//         {`
//           @keyframes bounce {
//             0%, 80%, 100% { transform: translateY(0); }
//             40% { transform: translateY(-8px); }
//           }
//           .animate-bounce { animation: bounce 1s infinite; }
//         `}
//       </style>
//     </div>
//   );
// }
