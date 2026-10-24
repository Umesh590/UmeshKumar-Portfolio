import { useState } from "react";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "umeshjha7890@gmail.com";

const openEmail = (subject = "", body = "") => {
  const isAndroid = /Android/i.test(navigator.userAgent);

  // Android: open the configured email app, such as Gmail.
  if (isAndroid) {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);

    const query = params.toString();
    window.location.href = `mailto:${EMAIL}${query ? `?${query}` : ""}`;
    return;
  }

  // Laptop and other devices: open Gmail web compose.
  const url = new URL("https://mail.google.com/mail/");
  url.searchParams.set("view", "cm");
  url.searchParams.set("fs", "1");
  url.searchParams.set("to", EMAIL);
  if (subject) url.searchParams.set("su", subject);
  if (body) url.searchParams.set("body", body);

  window.open(url.toString(), "_blank", "noopener,noreferrer");
};

function EmailLink({ subject = "", body = "", children }) {
  return (
    <a
      href={`mailto:${EMAIL}`}
      onClick={(e) => {
        e.preventDefault();
        openEmail(subject, body);
      }}
      aria-label="Email Umesh"
      className="text-sm text-cyan-400 transition hover:text-cyan-300"
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    const subject = `Portfolio enquiry from ${name}`;
    const body = `Hello Umesh,

${message}

From: ${name}
Reply to: ${email}`;

    openEmail(subject, body);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 px-4 py-12 text-white sm:px-6 sm:py-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-48 w-48 rounded-full bg-blue-600/10 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-[90px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-7 text-center sm:mb-9">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
            Let's connect
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Looking for a MERN Stack Developer or have an exciting project?
            Let's build something great together.
          </p>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-2 lg:gap-5">
          {/* Contact details */}
          <div className="space-y-3">
            {/* Email card */}
            <div className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-gray-900/80 p-3 transition hover:border-cyan-400/50">
              <div className="shrink-0 rounded-lg bg-cyan-400/10 p-2.5 text-cyan-400">
                <Mail size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold">Email Me</h3>
                <p className="mt-1 break-all text-xs text-gray-400 sm:text-sm">
                  {EMAIL}
                </p>
              </div>

              <EmailLink>
                <span className="flex items-center gap-1">
                  Email <ArrowUpRight size={15} />
                </span>
              </EmailLink>
            </div>

            {/* Phone card */}
            <a
              href="tel:+917983145053"
              aria-label="Call Umesh Kumar"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-gray-900/80 p-3 transition hover:border-blue-400/50"
            >
              <div className="shrink-0 rounded-lg bg-blue-400/10 p-2.5 text-blue-300">
                <Phone size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold">Phone</h3>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  +91 7983145053
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="text-gray-500 transition group-hover:text-cyan-400"
              />
            </a>

            {/* Location card */}
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-gray-900/80 p-3">
              <div className="shrink-0 rounded-lg bg-blue-400/10 p-2.5 text-blue-400">
                <MapPin size={20} />
              </div>

              <div>
                <h3 className="text-sm font-semibold">Location</h3>
                <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                  Agra, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-xl border border-white/10 bg-gray-900/80 p-3">
              <h3 className="mb-2 text-sm font-semibold">Connect with me</h3>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://github.com/umesh590"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white sm:text-sm"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/umesh-kumar111/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-300 transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-400 sm:text-sm"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-white/10 bg-gray-900/80 p-4 shadow-xl shadow-blue-950/20 sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <Send size={18} />
              </div>

              <h3 className="text-lg font-bold">Send Me a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-sm font-medium text-gray-300"
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
                  className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1 block text-sm font-medium text-gray-300"
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
                  className="w-full rounded-lg border border-white/10 bg-gray-950 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full resize-y rounded-lg border border-white/10 bg-gray-950 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
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
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-3 text-sm font-bold text-gray-950 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Mail size={17} />
                Contact Me via Email
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
