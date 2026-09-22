import {
  useRef,
} from "react";

function Hero() {
  const heroRef =
    useRef(null);

  const cardRef =
    useRef(null);

  const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
  ];

  // --------------------------------------------------
  // Lightweight pointer / tilt effect
  // --------------------------------------------------

  const handlePointerMove = (
    event,
  ) => {
    const hero =
      heroRef.current;

    const card =
      cardRef.current;

    if (
      !hero ||
      !card ||
      window.innerWidth <
        1024
    ) {
      return;
    }

    const rect =
      hero.getBoundingClientRect();

    const mouseX =
      event.clientX -
      rect.left;

    const mouseY =
      event.clientY -
      rect.top;

    hero.style.setProperty(
      "--mouse-x",
      `${mouseX}px`,
    );

    hero.style.setProperty(
      "--mouse-y",
      `${mouseY}px`,
    );

    const cardRect =
      card.getBoundingClientRect();

    const x =
      event.clientX -
      cardRect.left;

    const y =
      event.clientY -
      cardRect.top;

    const rotateY =
      ((x /
        cardRect.width) -
        0.5) *
      6;

    const rotateX =
      ((y /
        cardRect.height) -
        0.5) *
      -6;

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (
      cardRef.current
    ) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onPointerMove={
        handlePointerMove
      }
      onPointerLeave={
        resetTilt
      }
      className="hero-section relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-5 pt-24 sm:px-6 lg:px-8"
    >
      {/* Background grid */}

      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Mouse spotlight */}

      <div className="hero-spotlight pointer-events-none absolute inset-0 hidden lg:block" />

      {/* Floating glow effects */}

      <div className="hero-orb hero-orb-one pointer-events-none absolute" />

      <div className="hero-orb hero-orb-two pointer-events-none absolute" />

      <div className="hero-orb hero-orb-three pointer-events-none absolute" />

      {/* Main content */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-20">
        {/* ------------------------------------------------
            Left content
        ------------------------------------------------ */}

        <div className="min-w-0">
          <div className="hero-reveal hero-delay-1 mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 backdrop-blur">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-semibold text-cyan-200 sm:text-sm">
              Open to Software
              Development
              Opportunities
            </span>
          </div>

          <p className="hero-reveal hero-delay-2 mb-3 text-base font-semibold text-slate-400 sm:text-lg">
            Hi, I&apos;m
          </p>

          <h1 className="hero-reveal hero-delay-3 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            Bhupender

            <span className="hero-name-gradient mt-2 block">
              Singh.
            </span>
          </h1>

          <div className="hero-reveal hero-delay-4 mt-7">
            <h2 className="text-xl font-bold text-slate-200 sm:text-2xl md:text-3xl">
              Full Stack
              Developer
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-sm font-medium text-cyan-300 sm:text-base">
                MERN • TypeScript
                • Backend Systems
              </p>
            </div>
          </div>

          <p className="hero-reveal hero-delay-5 mt-7 max-w-2xl text-[15px] leading-8 text-slate-400 sm:text-lg">
            Computer Science &
            Engineering graduate
            focused on building
            practical, responsive
            and scalable web
            applications across
            frontend, backend,
            databases, APIs and
            real-time systems.
          </p>

          {/* CTA */}

          <div className="hero-reveal hero-delay-6 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="hero-primary-button group"
            >
              View Projects

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-button"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="hero-secondary-button"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}

          <div className="hero-reveal hero-delay-7 mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <a
              href="https://github.com/bhupender2412"
              target="_blank"
              rel="noreferrer"
              className="hero-text-link"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/bhupender-singh-01b80a370"
              target="_blank"
              rel="noreferrer"
              className="hero-text-link"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:bhupendersingh0801@gmail.com"
              className="hero-text-link"
            >
              Email ↗
            </a>
          </div>

          {/* Technology stack */}

          <div className="hero-reveal hero-delay-8 mt-11">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Technologies I work
              with
            </p>

            <div className="flex flex-wrap gap-2.5">
              {technologies.map(
                (
                  tech,
                  index,
                ) => (
                  <span
                    key={
                      tech
                    }
                    className="hero-tech-chip"
                    style={{
                      animationDelay:
                        `${1.05 + index * 0.08}s`,
                    }}
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------
            Developer card
        ------------------------------------------------ */}

        <div className="hero-reveal hero-delay-5 relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-8 rounded-full bg-cyan-500/5 blur-3xl" />

          <div
            ref={cardRef}
            className="developer-card relative transition-transform duration-200 ease-out"
          >
            {/* Glow border */}

            <div className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-cyan-400/40 via-blue-500/10 to-purple-500/30 opacity-70 blur-[1px]" />

            <div className="relative overflow-hidden rounded-[25px] border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur-xl">

              {/* Window top */}

              <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.025] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="font-mono text-[11px] text-slate-500">
                  developer.js
                </span>
              </div>

              {/* Code */}

              <div className="overflow-x-auto p-5 sm:p-7">
                <div className="min-w-[300px] space-y-3 font-mono text-[13px] leading-7 sm:text-sm">
                  <CodeLine>
                    <span className="text-purple-400">
                      const
                    </span>{" "}
                    <span className="text-cyan-300">
                      developer
                    </span>{" "}
                    <span className="text-slate-500">
                      =
                    </span>{" "}
                    <span className="text-yellow-300">
                      {"{"}
                    </span>
                  </CodeLine>

                  <CodeLine indent>
                    <CodeKey>
                      name:
                    </CodeKey>{" "}
                    <CodeString>
                      "Bhupender
                      Singh"
                    </CodeString>
                    ,
                  </CodeLine>

                  <CodeLine indent>
                    <CodeKey>
                      role:
                    </CodeKey>{" "}
                    <CodeString>
                      "Full Stack
                      Developer"
                    </CodeString>
                    ,
                  </CodeLine>

                  <CodeLine indent>
                    <CodeKey>
                      education:
                    </CodeKey>{" "}
                    <CodeString>
                      "B.Tech CSE
                      Graduate"
                    </CodeString>
                    ,
                  </CodeLine>

                  <CodeLine indent>
                    <CodeKey>
                      stack:
                    </CodeKey>{" "}
                    <span className="text-slate-300">
                      ["React",
                      "Node.js",
                      "MongoDB"]
                    </span>
                    ,
                  </CodeLine>

                  <CodeLine indent>
                    <CodeKey>
                      focus:
                    </CodeKey>{" "}
                    <CodeString>
                      "Building useful
                      products"
                    </CodeString>
                    ,
                  </CodeLine>

                  <CodeLine indent>
                    <CodeKey>
                      learning:
                    </CodeKey>{" "}
                    <span className="text-orange-300">
                      true
                    </span>
                    ,
                  </CodeLine>

                  <CodeLine>
                    <span className="text-yellow-300">
                      {"}"}
                    </span>
                    ;
                  </CodeLine>
                </div>
              </div>

              {/* Status */}

              <div className="mx-5 mb-5 flex flex-col gap-3 rounded-xl border border-white/[0.06] bg-slate-950/60 px-4 py-3 sm:mx-7 sm:mb-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

                  <span className="text-xs text-slate-500">
                    Current focus
                  </span>
                </div>

                <span className="text-xs font-semibold text-cyan-300">
                  Full Stack &
                  Backend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hero-scroll-indicator absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:text-cyan-300 md:flex"
      >
        Scroll

        <span className="flex h-8 w-5 justify-center rounded-full border border-slate-700 p-1">
          <span className="hero-scroll-dot h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </span>
      </a>
    </section>
  );
}

function CodeLine({
  indent = false,
  children,
}) {
  return (
    <p
      className={
        indent
          ? "pl-5 sm:pl-7"
          : ""
      }
    >
      {children}
    </p>
  );
}

function CodeKey({
  children,
}) {
  return (
    <span className="text-blue-300">
      {children}
    </span>
  );
}

function CodeString({
  children,
}) {
  return (
    <span className="text-emerald-300">
      {children}
    </span>
  );
}

export default Hero;