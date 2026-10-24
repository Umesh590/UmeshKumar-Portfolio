import { ArrowRight, Download, Mail, Sparkles, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const technologies = ["React.js", "Node.js", "Express.js", "MongoDB"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#080d19] px-6 pb-20 pt-32 text-white sm:px-8 lg:pt-28"
    >
      {/* Background glow and subtle grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Introduction: first on mobile */}
        <div className="order-1 min-w-0">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={16} />
            <span>MERN Stack Developer</span>
          </div>

          <p className="mb-3 text-lg text-gray-400">Hello, I'm</p>

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
            Umesh
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text pb-2 text-transparent">
              Kumar<span className="text-cyan-400">.</span>
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold text-gray-200 sm:text-2xl">
            Turning ideas into
            <span className="text-cyan-400"> web experiences.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build responsive and user-friendly web applications using
            React.js, Node.js, Express.js, and MongoDB. I enjoy solving problems
            and creating useful digital experiences with clean, maintainable
            code.
          </p>

          {/* Technology badges */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/UmeshKumar_MERN_Resume.pdf"
              download="UmeshKumar_MERN_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300"
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-sm text-gray-500">Let's connect</span>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=umeshjha7890%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Umesh"
              title="Email me"
              onClick={(e) => {
                if (/Android/i.test(navigator.userAgent)) {
                  e.preventDefault();
                  window.location.href = "mailto:umeshjha7890@gmail.com";
                }
              }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <Mail size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/umesh-kumar111/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/umesh590"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-gray-400 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Circular photo: after introduction on mobile */}
        <div className="order-2 flex justify-center pt-4 lg:justify-end lg:pt-0">
          <div className="relative w-64 sm:w-80 lg:w-[350px]">
            {/* Circular glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/40 via-cyan-400/20 to-indigo-500/30 blur-2xl" />

            {/* Circular frame and image */}
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-cyan-500 bg-gray-900 p-1 shadow-2xl shadow-blue-500/20">
              <img
                src="/umesh-photo.jpeg"
                alt="Umesh Kumar, MERN Stack Developer"
                className="h-full w-full rounded-full object-cover object-center transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating developer badge */}
            <div className="absolute -bottom-4 -left-3 flex max-w-[calc(100%+1rem)] items-center gap-3 rounded-2xl border border-white/10 bg-[#101827]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:-left-6 sm:px-4">
              <div className="shrink-0 rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                <Code2 size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  Full Stack Developer
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  React · Node · MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
