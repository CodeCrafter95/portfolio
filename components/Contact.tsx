import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 px-6 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.15),transparent_60%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Build Something <span className="text-purple-500">Amazing</span>
        </h2>

        {/* UPDATED TEXT */}
        <p className="text-gray-400 mb-14 text-sm md:text-base">
          Feel free to stay in touch or connect for a tech talk, ideas sharing,
          or just a casual developer chat 🚀
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

          {/* Email */}
          <a
            href="mailto:mohitbhalgami@gmail.com"
            className="group w-full max-w-xs bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition duration-300"
          >
            <div className="flex flex-col items-center gap-3">

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition">
                <FaEnvelope className="text-purple-400 text-xl" />
              </div>

              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-xs text-gray-400">Drop a mail anytime</p>

            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://in.linkedin.com/in/mohit-bhalgami-92674786"
            target="_blank"
            className="group w-full max-w-xs bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.25)] transition duration-300"
          >
            <div className="flex flex-col items-center gap-3">

              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition">
                <FaLinkedin className="text-purple-400 text-xl" />
              </div>

              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-xs text-gray-400">Let’s connect professionally</p>

            </div>
          </a>

        </div>

      </div>
    </section>
  );
}