"use client";

import { event } from "./PageViewTracker";


export default function PurchaseButton() {
  const handleClick = () => {
    event("Purchase", {
      value: 49.99,
      currency: "USD",
      content_name: "Health Check Package",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Buy Now
    </button>
  );
}
