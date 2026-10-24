import { Code2, GraduationCap, Rocket } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building responsive interfaces and REST APIs using the MERN stack.",
    },
    {
      icon: Rocket,
      title: "Practical Projects",
      description:
        "Developing web applications focused on useful features and user experience.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Strengthening my development skills through hands-on projects and practice.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#080d19] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
          {/* About text */}
          <div className="min-w-0">
            <h3 className="mb-4 text-xl font-bold leading-snug sm:mb-5 sm:text-2xl">
              Turning ideas into web applications
            </h3>

            <p className="break-words text-left text-sm leading-7 text-gray-400 sm:text-base sm:leading-7">
              I'm <span className="font-semibold text-white">Umesh Kumar</span>,
              a Computer Science Engineering graduate from AKTU passionate about
              technology, problem-solving, and creating meaningful digital
              experiences.
              <br />I enjoy exploring new technologies and transforming ideas
              into modern, responsive, and user-friendly web applications. With
              skills in React.js, JavaScript, Node.js, Express.js, and MongoDB,
              I'm continuously learning, refining my abilities, and working
              toward becoming a well-rounded full-stack developer.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid min-w-0 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-w-0 gap-3 rounded-xl border border-white/10 bg-gray-950/80 p-4 transition duration-300 hover:border-blue-400/40 sm:gap-4 sm:p-5"
                >
                  <div className="h-fit shrink-0 rounded-xl border border-blue-400/15 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 p-2.5 text-blue-300 sm:p-3">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="break-words text-sm font-semibold sm:text-base">
                      {item.title}
                    </h4>

                    <p className="mt-2 break-words text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
