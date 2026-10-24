import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 text-white backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold">
          Umesh Kumar
          {/* <span className="text-blue-400">.dev</span> */}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            {/* <FaGithub size={20} /> */}
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            {/* <FaLinkedin size={20} /> */}
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="rounded-lg p-2 hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-1 border-t border-white/10 px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-gray-300 hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg bg-blue-500 px-3 py-2 text-center font-semibold"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
