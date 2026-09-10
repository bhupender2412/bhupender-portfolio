function Hero() {
  const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 py-16 lg:grid-cols-2">
        {/* Left content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>

            <span className="text-sm font-medium text-cyan-300">
              Open to Software Development Opportunities
            </span>
          </div>

          <p className="mb-3 text-lg font-medium text-slate-400">
            Hi, I&apos;m
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bhupender
            <span className="block text-cyan-400">Singh.</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Computer Science & Engineering graduate focused on building
            practical, responsive and scalable web applications using modern
            JavaScript technologies, with hands-on experience across frontend,
            backend, databases, APIs and real-time systems.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              View Resume
            </a>

            <a
              href="https://github.com/bhupender2412"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bhupender-singh-01b80a370"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>

          {/* Technology stack */}
          <div className="mt-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"></div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl">
            {/* Window header */}
            <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>

              <span className="ml-3 text-xs text-slate-500">
                developer.js
              </span>
            </div>

            {/* Developer code card */}
            <div className="space-y-3 font-mono text-sm leading-7 sm:text-base">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </p>

              <p className="pl-6">
                <span className="text-blue-300">name:</span>{" "}
                <span className="text-green-300">
                  &quot;Bhupender Singh&quot;
                </span>
                ,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">role:</span>{" "}
                <span className="text-green-300">
                  &quot;Full Stack Developer&quot;
                </span>
                ,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">education:</span>{" "}
                <span className="text-green-300">
                  &quot;B.Tech CSE Graduate&quot;
                </span>
                ,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">stack:</span>{" "}
                <span className="text-slate-300">
                  [&quot;React&quot;, &quot;Node.js&quot;, &quot;MongoDB&quot;]
                </span>
                ,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">focus:</span>{" "}
                <span className="text-green-300">
                  &quot;Building useful products&quot;
                </span>
                ,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">learning:</span>{" "}
                <span className="text-orange-300">true</span>,
              </p>

              <p>
                <span className="text-yellow-300">{"}"}</span>;
              </p>
            </div>

            {/* Bottom status */}
            <div className="mt-8 flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>

                <span className="text-xs text-slate-400">
                  Currently focused on
                </span>
              </div>

              <span className="text-xs font-medium text-cyan-400">
                Full Stack & Backend Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;