import { Code2, Database, Globe, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Code2,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "SQL", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
            My toolkit
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-gray-900 p-6 transition hover:-translate-y-1 hover:border-blue-400/50"
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="text-blue-400" size={25} />
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-gray-950 px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
