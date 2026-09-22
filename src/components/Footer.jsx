function Footer() {
  const currentYear =
    new Date().getFullYear();

  const navigation = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href:
        "https://github.com/bhupender2412",
    },
    {
      label: "LinkedIn",
      href:
        "https://www.linkedin.com/in/bhupender-singh-01b80a370",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 px-5 sm:px-6 lg:px-8">
      {/* Background glow */}

      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Main footer */}

        <div className="grid gap-10 py-12 md:grid-cols-[1.15fr_0.85fr_0.85fr] lg:py-14">

          {/* Brand */}

          <div className="max-w-md">
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] font-black text-cyan-300 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.11]">
                B
              </div>

              <span className="text-xl font-black tracking-tight text-white">
                Bhupender
                <span className="text-cyan-400">
                  .
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Full Stack Developer
              focused on building
              practical, reliable
              and scalable web
              applications using
              modern JavaScript
              technologies.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-semibold text-slate-400">
                Open to software
                development
                opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Navigation
            </p>

            <div className="flex flex-col items-start gap-3">
              {navigation.map(
                (item) => (
                  <a
                    key={
                      item.label
                    }
                    href={
                      item.href
                    }
                    className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />

                    {
                      item.label
                    }
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Connect */}

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Connect
            </p>

            <div className="flex flex-col items-start gap-3">
              {socialLinks.map(
                (item) => (
                  <a
                    key={
                      item.label
                    }
                    href={
                      item.href
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
                  >
                    {
                      item.label
                    }

                    <span className="text-slate-700 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400">
                      ↗
                    </span>
                  </a>
                ),
              )}

              <a
                href="mailto:bhupendersingh0801@gmail.com"
                className="group flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
              >
                Email

                <span className="text-slate-700 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400">
                  ↗
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm font-bold text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col gap-4 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear}{" "}
              Bhupender Singh.
              Built with React &
              Tailwind CSS.
            </p>

            <a
              href="#home"
              className="group flex w-fit items-center gap-2 font-semibold text-slate-500 transition hover:text-cyan-300"
            >
              Back to top

              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;