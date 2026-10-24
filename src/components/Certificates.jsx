import { Award } from "lucide-react";

const certificates = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "LinkedIn Learning",
    category: "Artificial Intelligence",
    description:
      "Learned foundational concepts of generative AI, its practical applications, and how AI tools can support productivity and problem-solving.",
    skills: ["Generative AI", "AI Tools", "Prompt Engineering"],
  },
  {
    title: "Introduction to SQL",
    issuer: "Cognitive Class (IBM)",
    category: "Database Management",
    description:
      "Developed foundational knowledge of SQL and relational database concepts for querying, retrieving, and managing structured data.",
    skills: ["SQL", "Database Queries", "Databases"],
  },
  {
    title: "JavaScript Course",
    issuer: "GeeksforGeeks",
    category: "Web Development",
    description:
      "Strengthened JavaScript fundamentals used to build interactive web applications and work with modern frontend technologies.",
    skills: ["JavaScript", "ES6+", "Web Development"],
  },
  {
    title: "NCC – A Certificate",
    issuer: "National Cadet Corps",
    category: "Leadership & Discipline",
    description:
      "Recognizes participation in NCC and reflects a foundation in discipline, teamwork, responsibility, and leadership.",
    skills: ["Discipline", "Teamwork", "Leadership"],
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative isolate overflow-hidden bg-[#080d19] px-5 py-16 text-white sm:px-8 sm:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-blue-600/[0.08] blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-cyan-500/[0.07] blur-[110px]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Section heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:text-sm">
            Learning & Achievements
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Certifications and achievements reflecting my commitment to
            continuous learning and professional development.
          </p>
        </div>

        {/* Compact certificate cards */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title}
              className="group relative overflow-hidden rounded-xl border border-blue-400/15 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-blue-500/[0.04]"
            >
              {/* Blue-cyan card glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.08] blur-2xl transition duration-300 group-hover:bg-cyan-400/15" />

              <div className="relative">
                {/* Icon and number */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/25 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-300 transition group-hover:border-cyan-300/40 group-hover:text-cyan-300">
                    <Award size={22} />
                  </div>

                  <span className="rounded-full border border-blue-400/15 bg-blue-500/[0.05] px-2.5 py-1 text-xs font-medium text-blue-300/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Category */}
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                  {certificate.category}
                </p>

                {/* Certificate title */}
                <h3 className="text-lg font-bold leading-snug text-white transition group-hover:text-cyan-100">
                  {certificate.title}
                </h3>

                {/* Issuing organization */}
                <p className="mt-2 text-sm font-medium text-gray-300">
                  {certificate.issuer}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-blue-400/15 bg-blue-500/[0.06] px-2.5 py-1 text-[11px] text-gray-300 transition group-hover:border-cyan-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-500/40 via-cyan-400/20 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
