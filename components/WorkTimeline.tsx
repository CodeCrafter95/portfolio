"use client";

import {
  SiLaravel,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiMysql,
  SiReact,
  SiPhp,
  SiCodeigniter,
  SiZend,
  SiTwilio,
  SiWordpress,
} from "react-icons/si";

import { FaOpencart } from "react-icons/fa";
import React from "react";

const timeline = [
  {
    company: "Dots Innovation Pvt Ltd",
    role: "Junior Developer",
    projects: [
      {
        name: "Arvind University Project",
        desc: "Built a session management system for university operations with multi-role workflow handling. Designed scheduling logic and backend architecture for smooth coordination between students, faculty, and admin modules.",
        tech: [
          { icon: SiCodeigniter, color: "#EF4223" },
          { icon: SiJavascript, color: "#F7DF1E" },
          { icon: SiBootstrap, color: "#7952B3" },
          { icon: SiJquery, color: "#0769AD" },
          { icon: SiMysql, color: "#4479A1" },
        ],
      },
      {
        name: "CMS & E-commerce Work",
        desc: "Worked on CMS platforms including WordPress and OpenCart customization. Handled backend modifications, theme-level updates, and e-commerce feature enhancements for better performance and usability.",
        tech: [
          { icon: SiPhp, color: "#777BB4" },
          { icon: SiWordpress, color: "#21759B" },
          { icon: FaOpencart, color: "#2AC5F4" },
          { icon: SiMysql, color: "#4479A1" },
        ],
      },
    ],
  },

  {
    company: "Qodic Technosoft",
    role: "Software Developer",
    projects: [
      {
        name: "CHR Capacity Hub",
        desc: "Developed a capacity-driven healthcare system where user-defined capacity determines session eligibility and allocation.",
        tech: [
          { icon: SiLaravel, color: "#FF2D20" },
          { icon: SiBootstrap, color: "#7952B3" },
          { icon: SiJavascript, color: "#F7DF1E" },
          { icon: SiMysql, color: "#4479A1" },
        ],
      },

      {
        name: "Candidate Assessment System",
        desc: "Built a candidate evaluation and scheduling platform featuring a modern, component-driven React interface. Integrated with a Laravel backend for managing candidate data, assessments, and interview scheduling.",
        tech: [
          { icon: SiLaravel, color: "#FF2D20" },
          { icon: SiReact, color: "#61DAFB" },
          { icon: SiMysql, color: "#4479A1" },
        ],
      },
    ],
  },

  {
    company: "Treesha Infotech",
    role: "Sr. Software Engineer",
    projects: [
      {
        name: "Coaching Right Now",
        desc: "This platform is designed for managing sessions efficiently, similar to Calendly. It includes a complete booking system with built-in availability and scheduling logic. It also integrates with Gmail and Outlook calendars, allowing coaches to automatically sync their events directly with their personal calendars.",
        tech: [
          { icon: SiCodeigniter, color: "#EF4223" },
          { icon: SiJavascript, color: "#F7DF1E" },
          { icon: SiBootstrap, color: "#7952B3" },
          { icon: SiJquery, color: "#0769AD" },
          { icon: SiMysql, color: "#4479A1" },
        ],
      },

      {
        name: "Destination Real Estate",
        desc: "Built an automated lead extraction system that processes emails and scrapes structured data from real estate platforms like Zillow, StreetEasy, and Craigslist. Integrated Twilio for automated communication and inquiry handling",
        tech: [
          { icon: SiPhp, color: "#777BB4" },
          { icon: SiZend, color: "#68B604" },
          { icon: SiTwilio, color: "#F22F46" },
          { icon: SiMysql, color: "#4479A1" },
        ],
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-24 relative text-white overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#050505]" />
      <div className="absolute top-[-200px] left-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full -translate-x-1/2" />
      <div className="absolute bottom-[-150px] right-0 w-[450px] h-[450px] bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Projects &{" "}
          <span className="text-purple-500">Technical Contributions</span>
        </h2>

        {timeline.map((item, index) => (
          <div
            key={index}

            /* 🔥 MAIN CHANGE: FULL ROW GLASS CONTAINER */
            className="relative w-full rounded-2xl p-6 md:p-8 
                       bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                       hover:border-purple-500/30 transition"
          >

            {/* INNER FLEX LAYOUT */}
            <div className="flex items-center">

              {/* LEFT */}
              <div className="w-[35%] pr-8 text-right">
                <h3 className="text-2xl font-bold">
                  {item.company}
                </h3>
                <p className="text-purple-400 text-sm mt-1">
                  {item.role}
                </p>
              </div>

              {/* CENTER */}
              <div className="w-[10%] flex items-center justify-center relative">
                <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500"></div>
                <div className="absolute w-3 h-3 bg-blue-500 rotate-45"></div>
              </div>

              {/* RIGHT */}
              <div className="w-[55%] space-y-5">

                {item.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-white/10 hover:border-purple-500/40 transition"
                  >
                    <h4 className="font-semibold mb-2">
                      {proj.name}
                    </h4>

                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-3 text-xl">
                      {proj.tech.map((t, i) => {
                        const Icon = t.icon;
                        return (
                          <Icon key={i} style={{ color: t.color }} />
                        );
                      })}
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}