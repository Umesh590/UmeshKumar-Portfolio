import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Unified Mentor",
    location: "Agra, India",
    duration: "June 2025 – August 2025",
    type: "Internship",
    responsibilities: [
      "Implemented JWT-based authentication with role-based session handling to help secure user access.",
      "Improved component rendering performance through optimized state management, memoization, and code refactoring.",
      "Developed product listing, product details, and category filtering features for a web application.",
    ],
    technologies: ["React.js", "JavaScript", "JWT", "State Management"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
            My professional journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Work <span className="text-blue-400">Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            My internship experience, technical contributions, and professional
            growth as a developer.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative">
          {experience.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-white/10 bg-gray-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 sm:p-8"
            >
              {/* Role and Company */}
              <div className="flex flex-col gap-5 sm:flex-row">
                <div className="h-fit w-fit rounded-xl bg-blue-500/10 p-4 text-blue-400 transition group-hover:bg-blue-500/20">
                  <BriefcaseBusiness size={30} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {item.role}
                      </h3>

                      <p className="mt-2 text-lg font-medium text-blue-400">
                        {item.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-400">
                      {item.type}
                    </span>
                  </div>

                  {/* Duration and Location */}
                  <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400 sm:flex-row sm:flex-wrap sm:gap-5">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} className="text-blue-400" />
                      <span>{item.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-blue-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mt-7">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Key Responsibilities
                    </h4>

                    <ul className="space-y-4">
                      {item.responsibilities.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start gap-3 text-sm leading-7 text-gray-400"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-1 shrink-0 text-blue-400"
                          />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Technologies & Skills
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/10 bg-gray-800 px-3 py-2 text-xs font-medium text-gray-300 transition hover:border-blue-400/40 hover:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
