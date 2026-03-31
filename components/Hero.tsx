"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Software Engineer",
    "Backend Engineer (Laravel, CodeIgniter, Zend)",
    "Scalable System Builder",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-[#050505]">

      {/* MULTI COLOR BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] bottom-[-150px] right-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] top-[30%] left-[60%]" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* NAME */}
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
            Bhalgami Mohit
          </span>
        </motion.h1>

        {/* ROLE — FIXED (NO FLICKER, NO CUT, NO REMOUNT) */}
        <div className="text-xl md:text-2xl text-gray-300 mb-6 min-h-[40px] flex items-center justify-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            {roles[index]}
          </motion.div>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-2xl text-gray-400 mb-10 text-lg"
        >
          Designing and building high-performance web applications with clean architecture, modern technologies, and scalable backend systems.
        </motion.p>

        {/* BUTTONS (UNCHANGED - RESTORED EXACTLY) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="#contact"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg shadow-purple-500/30 hover:scale-110 transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  );
}