export default function About() {
  return (
    <section className="py-14 px-6 bg-[#0f0f0f] text-white">
      
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          About <span className="text-purple-500">Me</span>
        </h2>

        {/* Content Card */}
        <div className="relative bg-white/5 border border-white/10 p-10 rounded-2xl shadow-lg hover:shadow-purple-500/10 transition">

          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.12),transparent_60%)] rounded-2xl" />

          <div className="relative space-y-5 text-gray-300 leading-7">

            <p>
              I’m a <span className="text-white font-semibold">Software Engineer</span> with around 
              <span className="text-white font-semibold"> 7 years of experience</span> building scalable, 
              high-performance web applications that solve real business problems.
            </p>

            <p>
              My expertise is in <span className="text-purple-400">PHP ecosystem</span>, especially 
              <span className="text-white font-semibold"> Laravel, CodeIgniter, and Zend</span>, where I focus on 
              writing clean, maintainable, and performance-oriented code.
            </p>

            <p>
              I enjoy turning complex requirements into simple, efficient systems — whether it’s backend logic, 
              APIs, or full web platforms that deliver smooth user experiences.
            </p>

            <p>
              Beyond coding, I believe in continuous improvement — learning new technologies, refining architecture, 
              and building systems that are ready for the future.
            </p>

            {/* Highlight strip */}
            <div className="mt-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-sm text-purple-200">
              💡 Focus: Clean architecture • Scalable backend systems • Performance optimization
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}