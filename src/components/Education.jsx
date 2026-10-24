import { GraduationCap, School, BookOpen } from "lucide-react";

const educationDetails = [
  {
    icon: GraduationCap,
    degree: "B.Tech in Computer Science Engineering",
    institution: "RBS Engineering Technical Campus, Agra",
    duration: "2022 – 2026",
    score: "7.8 CGPA",
    description:
      "Studied computer science fundamentals, programming, web development, and software engineering.",
  },
  {
    icon: School,
    degree: "Class 12 – PCM",
    institution: "Bhartiya Bal Vidya Mandir Sr. Sec. School",
    duration: "2022",
    score: "88.4%",
    description:
      "Completed senior secondary education under the CBSE Board with Physics, Chemistry, and Mathematics.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
            My academic journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="text-blue-400">Education</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            My educational background and academic achievements.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {educationDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-gray-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  {/* Icon */}
                  <div className="h-fit w-fit rounded-xl bg-blue-500/10 p-4 text-blue-400 transition group-hover:bg-blue-500/20">
                    <Icon size={30} />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-lg font-bold sm:text-xl">
                          {item.degree}
                        </h3>

                        <p className="mt-2 text-gray-300">{item.institution}</p>
                      </div>

                      <span className="w-fit shrink-0 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-400">
                        {item.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2">
                      <BookOpen size={18} className="text-blue-400" />

                      <span className="text-sm font-semibold text-blue-400">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
