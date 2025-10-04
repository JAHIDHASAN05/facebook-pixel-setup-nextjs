"use client";
import Script from "next/script";

export default function FacebookPixel() {
  const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;

  return (
    <>
      {/* Facebook Pixel Script */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
    
      />

      {/* NoScript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}











// 'use client'
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import Image from 'next/image';
// import Script from 'next/script';
// import React from 'react';

// const FacebookPixel = () => {
//   return (
//     <>
//       {/* <Script
//         strategy="afterInteractive"
//         id="facebook-pixel"
//         dangerouslySetInnerHTML={{
//           __html: `
//     !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID);
// fbq('track', 'PageView');
//   `
//         }}
//       />
//       <noscript>
//         <Image
//           height={1}
//           width={1}
//           style={{ display: 'none' }}
//           alt="facebook-pixel"
//           src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
//         />
//       </noscript> */}
// {/* 
//       <Script strategy='afterInteractive' id='facebook-pixel' dangerouslySetInnerHTML={{
//         __html: `
//   !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', 1470926304144065);
// fbq('track', 'PageView');`
//       }}>

//       </Script>
//       <noscript><Image height="1" width="1" alt='facebook pixel' style={{ display: 'none' }}
//         src={`https://www.facebook.com/tr?id=1470926304144065&ev=PageView&noscript=1`}
//       /></noscript> */}

// <Script
//   strategy="afterInteractive"
//   id="facebook-pixel"
//   dangerouslySetInnerHTML={{
//     __html: `
//       !function(f,b,e,v,n,t,s)
//       {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//       n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//       if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//       n.queue=[];t=b.createElement(e);t.async=!0;
//       t.src=v;s=b.getElementsByTagName(e)[0];
//       s.parentNode.insertBefore(t,s)}(window, document,'script',
//       'https://connect.facebook.net/en_US/fbevents.js');
      
//       fbq('init', '${process.env.NEXT_PUBLIC_PIXEL_ID}', {}, {eventID: 'TEST71395'});
//       fbq('track', 'PageView');
//     `,
//   }}
// />



//     </>
//   );
// };

// export default FacebookPixel;
