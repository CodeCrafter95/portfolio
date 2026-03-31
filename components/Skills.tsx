"use client";

import {
  FaLaravel,
  FaPhp,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaShoppingCart,
} from "react-icons/fa";

import {
  SiMysql,
  SiJquery,
  SiBootstrap,
  SiCodeigniter,
  SiZend,
  SiWordpress,
  SiJira,
  SiTrello,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "CodeIgniter", icon: <SiCodeigniter className="text-orange-500" /> },
    { name: "Zend", icon: <SiZend className="text-green-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "WordPress", icon: <SiWordpress className="text-blue-600" /> },
    { name: "OpenCart", icon: <FaShoppingCart className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Jira", icon: <SiJira className="text-blue-500" /> },
    { name: "Trello", icon: <SiTrello className="text-blue-400" /> },
  ];

  return (
    <section className="py-14 bg-[#050505] text-white overflow-hidden relative">

      {/* glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.12),transparent_60%)]" />

      {/* heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 relative z-10">
        Skills & <span className="text-purple-500">Technologies</span>
      </h2>

      {/* marquee */}
      <div className="relative overflow-hidden">

        <div className="flex gap-10 w-max animate-marquee">

          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center 
              bg-white/5 border border-white/10 
              px-6 py-6 rounded-2xl 
              min-w-[130px]
              hover:bg-white/10 
              hover:border-purple-500/40
              hover:shadow-[0_0_25px_rgba(147,51,234,0.15)]
              transition duration-300"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              <p className="text-sm text-gray-400 group-hover:text-white transition">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>

      {/* SAFE GLOBAL CSS (NO JSX STYLE ERROR) */}
      <style>{`
        .animate-marquee {
          display: flex;
          animation: marquee 25s linear infinite;
          width: max-content;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}