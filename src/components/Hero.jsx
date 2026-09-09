function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 py-16 lg:grid-cols-2">
        {/* Left side */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400"></span>

            <span className="text-sm font-medium text-cyan-300">
              Open to Software Development Opportunities
            </span>
          </div>

          <p className="mb-3 text-lg font-medium text-slate-400">Hi, I'm</p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bhupender
            <span className="block text-cyan-400">Singh.</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Computer Science graduate focused on building practical, responsive
            and scalable web applications using modern JavaScript technologies,
            with hands-on experience across frontend, backend, databases and
            real-time systems.
          </p>

          {/* Buttons */}
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

          {/* Tech stack */}
          <div className="mt-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
              Technologies I work with
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "TypeScript",
              ].map((tech) => (
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

        {/* Right side */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"></div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl">
            {/* Window header */}
            <div className="mb-6 flex items-center gap-2 border-b border-white/10 pb-5">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>

              <span className="ml-3 text-xs text-slate-500">developer.js</span>
            </div>

            {/* Fake code */}
            <div className="space-y-3 font-mono text-sm leading-7 sm:text-base">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-slate-500">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </p>

              <p className="pl-6">
                <span className="text-blue-300">name:</span>{" "}
                <span className="text-green-300">"Bhupender Singh"</span>,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">role:</span>{" "}
                <span className="text-green-300">"Full Stack Developer"</span>,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">stack:</span>{" "}
                <span className="text-slate-300">
                  ["React", "Node.js", "MongoDB"]
                </span>
                ,
              </p>

              <p className="pl-6">
                <span className="text-blue-300">focus:</span>{" "}
                <span className="text-green-300">
                  "Building useful products"
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
            <div className="mt-8 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>

                <span className="text-xs text-slate-400">
                  Currently building
                </span>
              </div>

              <span className="text-xs font-medium text-cyan-400">
                Full Stack Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
