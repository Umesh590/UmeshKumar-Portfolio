import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "ShopNest — E-commerce Website",
    description:
      "A full-stack shopping application with product listings, category filtering, user authentication, and admin product management.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Umesh590/ShopNest-Ecom-MERN_Project.git",
    live: "",
    number: "01",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A messaging application featuring real-time communication, user authentication, conversation history, and image sharing.",
    tech: ["React", "Socket.IO", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Umesh590/realtimeChatApp.git",
    live: "",
    number: "02",
  },
  {
    title: "Finance Management App",
    description:
      "A personal finance dashboard for tracking expenses, viewing charts, and managing transactions with a responsive interface.",
    tech: ["React", "Context API", "Tailwind CSS", "Recharts"],
    github: "https://github.com/Umesh590/Finance-Management-App.git",
    live: "",
    number: "03",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
            What I've built
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A selection of projects demonstrating my skills in frontend
            development, backend APIs, databases, and application design.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-2xl border border-white/10 bg-gray-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-extrabold text-blue-400/50">
                  {project.number}
                </span>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-gray-400 transition hover:text-blue-400"
                  >
                    <FaGithub size={21} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="text-gray-400 transition hover:text-blue-400"
                    >
                      <ExternalLink size={21} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold transition group-hover:text-blue-400">
                {project.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-blue-400/10 px-2.5 py-1.5 text-xs font-medium text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400"
              >
                View Source Code <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
