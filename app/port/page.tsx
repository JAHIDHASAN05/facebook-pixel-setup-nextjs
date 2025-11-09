"use client";

import Image from "next/image";

const features = [
  {
    title: "Clean, Maintainable Code",
    desc: "Readable, scalable, and efficient code—built to last.",
    icon: "/icons/code.gif",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "Quick turnarounds, consistent results—no missed deadlines.",
    icon: "/icons/speed.gif",
  },
  {
    title: "Problem-Solving Mindset",
    desc: "I don’t just write code—I solve real business challenges.",
    icon: "/icons/brain.gif",
  },
  {
    title: "Easy to Collaborate With",
    desc: "Clear communication, transparency, and zero drama.",
    icon: "/icons/handshake.gif",
  },
  {
    title: "High-Quality Standards",
    desc: "Performance, testing, and scalability come first.",
    icon: "/icons/quality.gif",
  },
  {
    title: "Performance & Scalability Focused",
    desc: "I build systems that run fast and scale smoothly as your product grows.",
    icon: "/icons/performance.gif",
  },
];
export default function WhyWorkWithMe() {
  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Why You’ll Love Working with Me</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        I build reliable, scalable, and user-focused solutions that make products actually work.
      </p>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                unoptimized
              />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
