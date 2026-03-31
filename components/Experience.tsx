import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      company: "Treesha Infotech",
      role: "Sr. Software Engineer",
      duration: "Dec 2021 - Present",
      logo: "/treesha.png",
    },
    {
      company: "Qodic Technosoft",
      role: "Software Developer",
      duration: "Jan 2019 - Jan 2021",
      logo: "/qodic-new.png",
    },
    {
      company: "Dots Innovation Pvt Ltd",
      role: "Junior Developer",
      duration: "Jan 2018 - Jan 2019",
      logo: "/dots.png",
    },
    {
      company: "Silverwing Technologies",
      role: "Internship",
      duration: "6 Months",
      logo: "/silverwing.png",
    },
  ];

  return (
    <section className="py-14 bg-[#0a0a0a] text-white">

      <div className="grid grid-cols-12">
        <div className="col-span-2" />

        <div className="col-span-8">

          {/* TITLE */}
          <h2 className="text-5xl font-bold text-center mb-20">
            Experience{" "}
            <span className="text-purple-400">
               Journey
            </span>
          </h2>

          {/* TIMELINE WRAPPER */}
          <div className="relative">

            {/* 🔥 ONE CONTINUOUS LINE (DO NOT MOVE INSIDE LOOP) */}
            <div className="absolute left-[160px] top-0 bottom-0 w-[2px] bg-purple-500/50" />

            <div className="space-y-10">

              {experiences.map((exp, index) => (
                <div key={index} className="flex items-center min-h-[70px]">

                  {/* YEAR */}
                  <div className="w-[140px] text-right pr-4 text-sm text-gray-400 whitespace-nowrap">
                    {exp.duration}
                  </div>

                  {/* DOT (CENTERED ON SAME LINE X POSITION) */}
                  <div className="w-[40px] flex justify-center relative">

                    <div className="w-3.5 h-3.5 rounded-full bg-purple-500 shadow-md z-10" />

                  </div>

                  {/* COMPANY */}
                  <div className="ml-6 flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-3 w-[520px]">

                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={34}
                        height={34}
                        className="object-contain"
                      />
                    </div>

                    <div className="leading-tight">
                      <h3 className="text-sm font-semibold">
                        {exp.company}
                      </h3>
                      <p className="text-xs text-purple-300">
                        {exp.role}
                      </p>
                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        <div className="col-span-2" />
      </div>

    </section>
  );
}