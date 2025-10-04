/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// lib/fpixel.ts

export const fbq = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq(...args);
  }
};

export const event = (name: string, options = {}) => {
  fbq("track", name, options);
};

// For tracking custom events (not standard Pixel ones)
export const customEvent = (name: string, options = {}) => {
  fbq("trackCustom", name, options);
};


export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    fbq("track", "PageView");
  }, [pathname]);

  return null;
}
