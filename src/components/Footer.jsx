function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white"
          >
            Bhupender
            <span className="text-cyan-400">.</span>
          </a>

          <p className="mt-2 text-sm text-slate-500">
            Full Stack Developer building practical web applications.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          <a
            href="#about"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Contact
          </a>

          <a
            href="https://github.com/bhupender2412"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhupender-singh-01b80a370"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6">
        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Bhupender Singh. All rights reserved.</p>

          <a href="#home" className="w-fit transition hover:text-cyan-400">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
