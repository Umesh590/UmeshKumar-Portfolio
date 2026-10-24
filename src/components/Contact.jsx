import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const EMAIL = "umeshjha7890@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const openGmail = (subject, body) => {
    const url = new URL("https://mail.google.com/mail/");
    url.searchParams.set("view", "cm");
    url.searchParams.set("fs", "1");
    url.searchParams.set("to", EMAIL);
    url.searchParams.set("su", subject);
    url.searchParams.set("body", body);

    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const subject = `Portfolio enquiry from ${form.name}`;
    const body = `Hello Umesh,

${form.message}

From: ${form.name}
Reply to: ${form.email}`;

    openGmail(subject, body);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 px-6 py-24 text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Let's connect
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-400">
            Looking for a MERN Stack Developer or have an exciting project? I
            would love to hear from you. Let's build something great together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-5">
            {/* Email card */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-gray-900/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-gray-900 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-gray-950">
                <Mail size={25} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold">Email Me</h3>
                <p className="mt-1 break-all text-sm text-gray-400">{EMAIL}</p>
              </div>

              <ArrowUpRight
                className="shrink-0 text-gray-500 transition group-hover:text-cyan-400"
                size={20}
              />
            </a>

            {/* Phone card */}
            <a
              href="tel:+917983145053"
              aria-label="Call Umesh Kumar at +91 7983145053"
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-gray-900/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-gray-900 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 p-4 text-blue-300 transition group-hover:text-cyan-300">
                <Phone size={25} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-bold">Phone</h3>
                <p className="mt-1 text-sm text-gray-400 transition group-hover:text-cyan-300">
                  +91 7983145053
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="shrink-0 text-gray-500 transition group-hover:text-cyan-400"
              />
            </a>

            {/* Location card */}
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-gray-900/80 p-5 transition duration-300 hover:border-cyan-400/30">
              <div className="rounded-xl bg-blue-400/10 p-4 text-blue-400">
                <MapPin size={25} />
              </div>

              <div>
                <h3 className="font-bold">Location</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Agra, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/10 bg-gray-900/80 p-6">
              <h3 className="mb-4 font-bold">Connect with me</h3>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/umesh590"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  <FaGithub size={19} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/umesh-kumar111/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-400"
                >
                  <FaLinkedin size={19} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Contact form */}
          <div className="rounded-3xl border border-white/10 bg-gray-900/80 p-6 shadow-2xl shadow-blue-950/20 sm:p-8">
            <div className="mb-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Send size={23} />
              </div>

              <h3 className="text-2xl font-bold">Send Me a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about the opportunity or project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-y rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  required
                />
              </div>

              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 font-bold text-gray-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Mail size={19} />
                Contact Me via Gmail
                <ArrowUpRight
                  size={19}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
