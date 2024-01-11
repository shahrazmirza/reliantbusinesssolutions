// 'use client'
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import { FaWhatsapp } from "react-icons/fa";

// const Whatsapp = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <Link
//       href="https://wa.me/+61403320350"
//       target="_blank"
//       className={`fixed md:w-14 md:h-14 w-12 h-12 text-center flex items-center justify-center bottom-7 md: right-7 bg-sky-700 text-white p-0 rounded-full transition-opacity ${
//         isVisible ? 'opacity-80' : 'opacity-80'
//       }`}
//       >
//         <FaWhatsapp className='md:w-6 md:h-6'/>
//       </Link>
//     </div>
//   )
// }

// export default Whatsapp

