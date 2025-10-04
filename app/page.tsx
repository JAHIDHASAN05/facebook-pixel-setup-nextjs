/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

// Pixel wrapper
 const fbq = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq(...args);
  }
};

 const trackEvent = (event: string, params?: Record<string, any>) => {
  console.log({event}, {params});
  fbq("track", event, params);

};

// Product type
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
};

// Sample products
const products: Product[] = [
  {
    id: "p1",
    name: "Headphone",
    description: "Comprehensive screening for cardiovascular health.",
    price: 89.99,
    image:"data:image/jpeg;base64,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",
  },
  {
    id: "p2",
    name: "Macbook pro",
    description: "Full diabetic evaluation and consultation.",
    price: 69.99,
    image:"data:image/jpeg;base64,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",
  },
  {
    id: "p3",
    name: "Ipad",
    description: "Routine blood test for overall wellness monitoring.",
    price: 49.99,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyLkS5HxQfAfPf14DYrA4SWgFnvzFBQD2JA&s",
  },
];

export default function EcommerceDemo() {
  const [cart, setCart] = useState<Product[]>([]);
  const [checkout, setCheckout] = useState(false);
  const [purchased, setPurchased] = useState(false);

  // Add product to cart and fire Meta Pixel event
  const handleAddToCart = (product: Product) => {
    const existing = cart.find((p) => p.id === product.id);
    const quantity = existing ? existing.quantity! + 1 : 1;

    const updatedCart = existing
      ? cart.map((p) =>
          p.id === product.id ? { ...p, quantity } : p
        )
      : [...cart, { ...product, quantity: 1 }];

    setCart(updatedCart);

    // Fire AddToCart for this specific product
    trackEvent("AddToCart", {
      content_name: product.name,
      content_ids: [product.id],
     
      currency: "USD",
      quantity,
      value: product.price * quantity,
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter((p) => p.id !== productId));
  };

  const handleCheckout = () => {
    setCheckout(true);
    trackEvent("InitiateCheckout", {
      currency: "USD",
      value: cart.reduce((acc, p) => acc + (p.price * (p.quantity || 1)), 0),
      num_items: cart.reduce((acc, p) => acc + (p.quantity || 1), 0),
      contents: cart.map((p) => ({ id: p.id, quantity: p.quantity || 1 })),
    });
  };

  const handlePurchase = () => {
    setPurchased(true);
    trackEvent("Purchase", {
      currency: "USD",
      value: cart.reduce((acc, p) => acc + (p.price * (p.quantity || 1)), 0),
      contents: cart.map((p) => ({ id: p.id, quantity: p.quantity || 1 })),
    });
    setCart([]);
  };

  const total = cart.reduce((acc, p) => acc + (p.price * (p.quantity || 1)), 0);

  return (
<div className="min-h-screen bg-gray-50 font-sans flex flex-col lg:flex-row gap-8 p-6">
  {/* Products Section */}
  <div className="flex-2 flex flex-col gap-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover"
          />
          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-3 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Cart Section */}
  <div className="flex-1 bg-white shadow-2xl rounded-3xl p-6 flex flex-col sticky top-6 max-h-[calc(100vh-48px)]">
    <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-5 flex justify-between items-center">
      🛒 Your Cart
      {cart.length > 0 && (
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {cart.reduce((acc, p) => acc + (p.quantity || 1), 0)}
        </span>
      )}
    </h2>

    <div className="flex-1 overflow-y-auto">
      {cart.length === 0 && !purchased && (
        <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
      )}

      {cart.length > 0 && !checkout && (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-3">
              <div>
                <span className="text-gray-800 font-medium">{item.name}</span>
                {item.quantity && item.quantity > 1 && (
                  <span className="text-gray-400 ml-2 text-sm">x{item.quantity}</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-600 font-semibold">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {checkout && !purchased && (
        <div className="flex flex-col justify-center items-center mt-5 space-y-5 text-center">
          <p className="text-gray-700">
            Review your details and complete your purchase
          </p>
          <p className="text-gray-800 font-medium">
            pixel should show initialCheckout: <span>${total.toFixed(2)}</span>
          </p>
          <button
            onClick={handlePurchase}
            className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition font-semibold"
          >
            Complete Purchase
          </button>
        </div>
      )}

      {purchased && (
        <div className="flex flex-col justify-center items-center mt-5 text-center text-green-600 space-y-3">
          <div className="text-5xl">✅</div>
          <h3 className="text-xl font-semibold text-gray-900">Purchase Successful!</h3>
          <p className="text-gray-600">Thank you for your order.</p>
        </div>
      )}
    </div>

    <div className="mt-6 text-xs text-gray-400 text-center">
      <p>Use the <strong>Meta Pixel Helper</strong> to see events firing:</p>
      <p>PageView → AddToCart → InitiateCheckout → Purchase</p>
    </div>

    {cart.length > 0 && !checkout && (
      <div className="mt-5 pt-5 border-t">
        <p className="text-lg font-bold text-gray-900 flex justify-between">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="w-full mt-4 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition font-semibold"
        >
          Proceed to Checkout
        </button>
      </div>
    )}
  </div>
</div>

  );
}








// "use client";

// import { trackEvent } from "@/components/PageViewTracker";
// import { useState } from "react";

// type Product = {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// };

// const products: Product[] = [
//   {
//     id: "p1",
//     name: "Heart Health Checkup",
//     description: "Comprehensive screening for cardiovascular health.",
//     price: 89.99,
//     image: "https://images.unsplash.com/photo-1588776814546-ec89bf51f9a5?w=400",
//   },
//   {
//     id: "p2",
//     name: "Diabetes Care Package",
//     description: "Full diabetic evaluation and consultation.",
//     price: 69.99,
//     image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400",
//   },
//   {
//     id: "p3",
//     name: "Wellness Blood Test",
//     description: "Routine blood test for overall wellness monitoring.",
//     price: 49.99,
//     image: "https://images.unsplash.com/photo-1579154203451-0e7db072f0c4?w=400",
//   },
// ];

// export default function EcommerceDemo() {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [checkout, setCheckout] = useState(false);
//   const [purchased, setPurchased] = useState(false);

//   const handleAddToCart = (product: Product) => {
//     if (cart.some((item) => item.id === product.id)) return;
//     setCart([...cart, product]);
//     trackEvent("AddToCart", {
//       content_name: product.name,
//       content_ids: [product.id],
//       value: product.price,
//       currency: "USD",
//     });
//   };

//   const handleCheckout = () => {
//     setCheckout(true);
//     trackEvent("InitiateCheckout", {
//       value: cart.reduce((acc, p) => acc + p.price, 0),
//       num_items: cart.length,
//       currency: "USD",
//     });
//   };

//   const handlePurchase = () => {
//     setPurchased(true);
//     trackEvent("Purchase", {
//       value: cart.reduce((acc, p) => acc + p.price, 0),
//       contents: cart.map((p) => ({ id: p.id, quantity: 1 })),
//       currency: "USD",
//     });
//     setCart([]);
//   };

//   const total = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row gap-6 p-6 font-sans">
//       {/* Left: Products */}
//       <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 space-y-2">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {product.name}
//               </h2>
//               <p className="text-sm text-gray-500">{product.description}</p>
//               <p className="text-lg font-bold text-blue-600">${product.price}</p>
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right: Cart */}
//       <div className="lg:w-1/3 w-full bg-white shadow-xl rounded-2xl p-6 flex flex-col">
//         <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3 mb-4">
//           🛒 Your Cart
//         </h2>

//         {cart.length === 0 && !purchased && (
//           <p className="text-gray-500 text-center">Your cart is empty.</p>
//         )}

//         {cart.length > 0 && !checkout && (
//           <ul className="space-y-3 flex-1 overflow-y-auto">
//             {cart.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center border-b pb-2"
//               >
//                 <span className="text-gray-700">{item.name}</span>
//                 <span className="text-blue-600 font-medium">
//                   ${item.price.toFixed(2)}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         )}

//         {cart.length > 0 && !checkout && (
//           <div className="mt-auto pt-4 border-t">
//             <p className="text-lg font-semibold text-gray-800 flex justify-between">
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </p>
//             <button
//               onClick={handleCheckout}
//               className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         )}

//         {checkout && !purchased && (
//           <div className="flex flex-col justify-center items-center flex-1 space-y-4">
//             <p className="text-gray-700 text-center">
//               Review your details and complete your purchase
//             </p>
//             <button
//               onClick={handlePurchase}
//               className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
//             >
//               Complete Purchase
//             </button>
//           </div>
//         )}

//         {purchased && (
//           <div className="flex flex-col justify-center items-center flex-1 text-center space-y-3 text-green-600">
//             <div className="text-4xl">✅</div>
//             <h3 className="text-xl font-semibold">Purchase Successful!</h3>
//             <p className="text-gray-600">Thank you for your order.</p>
//           </div>
//         )}

//         <div className="mt-6 text-xs text-gray-400 text-center">
//           <p>
//             Use the <strong>Meta Pixel Helper</strong> to see events firing:
//           </p>
//           <p>PageView → AddToCart → InitiateCheckout → Purchase</p>
//         </div>
//       </div>
//     </div>
//   );
// }









// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { fbq, trackEvent } from "@/components/PageViewTracker";
// import { useState } from "react";


// export default function PurchaseFlowDemo() {
//   const [cart, setCart] = useState<string[]>([]);
//   const [checkoutStarted, setCheckoutStarted] = useState(false);
//   const [purchased, setPurchased] = useState(false);

//   const handleAddToCart = () => {
//     setCart(["Health Check Package"]);
//     trackEvent("AddToCart", {
//       content_name: "Health Check Package",
//       value: 49.99,
//       currency: "USD",
//     });
//   };

//   const handleCheckout = () => {
//     setCheckoutStarted(true);
//     trackEvent("InitiateCheckout", {
//       num_items: cart.length,
//       value: 49.99,
//       currency: "USD",
//     });
//   };

//   const handlePurchase = () => {
//     setPurchased(true);
//     trackEvent("Purchase", {
//       value: 49.99,
//       currency: "USD",
//       contents: [{ id: "health_pkg_001", quantity: 1 }],
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10 text-gray-900">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center space-y-6">
//         <h1 className="text-2xl font-semibold text-blue-600">
//           🏥 Health Check Package
//         </h1>
//         <p className="text-gray-600">Complete health screening for adults.</p>
//         <p className="text-lg font-bold">$49.99</p>

//         {!cart.length && (
//           <button
//             onClick={handleAddToCart}
//             className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//           >
//             Add to Cart
//           </button>
//         )}

//         {cart.length > 0 && !checkoutStarted && (
//           <button
//             onClick={handleCheckout}
//             className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
//           >
//             Proceed to Checkout
//           </button>
//         )}

//         {checkoutStarted && !purchased && (
//           <button
//             onClick={handlePurchase}
//             className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//           >
//             Complete Purchase
//           </button>
//         )}

//         {purchased && (
//           <div className="text-green-600 font-semibold">
//             ✅ Purchase Successful!
//           </div>
//         )}
//       </div>

//       <div className="mt-8 text-sm text-gray-500 text-center">
//         <p>Open Meta Pixel Helper to verify:</p>
//         <ul className="list-disc list-inside text-left">
//           <li>AddToCart fires when adding item</li>
//           <li>InitiateCheckout fires on checkout</li>
//           <li>Purchase fires on completion</li>
//         </ul>
//       </div>
//     </div>
//   );
// }












// import PurchaseButton from "@/components/EventButton";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//     this is home page
//    <PurchaseButton/>
//     </div>
//   );
// }
