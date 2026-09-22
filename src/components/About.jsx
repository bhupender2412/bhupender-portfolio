import {
  useEffect,
  useRef,
} from "react";

function About() {
  const sectionRef =
    useRef(null);

  const highlights = [
    {
      number: "01",
      title:
        "Full Stack Development",
      description:
        "Building complete web applications using React, Node.js, Express and MongoDB.",
    },
    {
      number: "02",
      title:
        "Backend & APIs",
      description:
        "Working with REST APIs, authentication, databases, queues and real-time application features.",
    },
    {
      number: "03",
      title:
        "Problem Solving",
      description:
        "Turning technical problems into practical software solutions through debugging and hands-on development.",
    },
  ];

  const stats = [
    {
      value: "6+",
      label:
        "Major Projects",
    },
    {
      value: "MERN",
      label:
        "Primary Stack",
    },
    {
      value: "2026",
      label:
        "CSE Graduate",
    },
  ];

  // --------------------------------------------------
  // Reveal elements when About enters the viewport
  // --------------------------------------------------

  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const elements =
      section.querySelectorAll(
        "[data-reveal]",
      );

    if (
      !(
        "IntersectionObserver" in
        window
      )
    ) {
      elements.forEach(
        (element) =>
          element.classList.add(
            "is-visible",
          ),
      );

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach(
            (entry) => {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "is-visible",
                );

                observer.unobserve(
                  entry.target,
                );
              }
            },
          );
        },
        {
          threshold: 0.14,
          rootMargin:
            "0px 0px -60px 0px",
        },
      );

    elements.forEach(
      (element) =>
        observer.observe(
          element,
        ),
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-slate-900 px-5 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-blue-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* --------------------------------------------
            Section heading
        --------------------------------------------- */}

        <div
          data-reveal
          className="reveal mb-14 max-w-3xl lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
              About Me
            </p>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building practical
            products through
            real development
            experience.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I enjoy working across
            the complete application
            lifecycle — from
            responsive interfaces
            and backend APIs to
            databases, deployment
            and production debugging.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">

          {/* ------------------------------------------
              Main content
          ------------------------------------------- */}

          <div className="min-w-0">

            <div
              data-reveal
              className="reveal"
              style={{
                transitionDelay:
                  "80ms",
              }}
            >
              <p className="text-base leading-8 text-slate-400 sm:text-lg">
                I&apos;m{" "}
                <span className="font-semibold text-slate-200">
                  Bhupender Singh
                </span>
                , a Computer Science
                & Engineering
                graduate focused on
                full stack and
                backend development.
                I enjoy building
                applications that
                combine clean user
                experiences with
                reliable backend
                systems.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                My primary
                development stack is
                MERN, and I&apos;ve
                worked with JWT
                authentication,
                role-based access
                control, REST APIs,
                MongoDB, Redis,
                BullMQ, Socket.IO,
                Cloudinary and
                production
                deployments.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                Projects including{" "}
                <span className="font-medium text-cyan-300">
                  JobPortal
                </span>
                ,{" "}
                <span className="font-medium text-cyan-300">
                  LogPulse
                </span>
                ,{" "}
                <span className="font-medium text-cyan-300">
                  LearnFlow
                </span>
                ,{" "}
                <span className="font-medium text-cyan-300">
                  QueueIt
                </span>{" "}
                and{" "}
                <span className="font-medium text-cyan-300">
                  BookHaven
                </span>{" "}
                have helped me
                strengthen my
                understanding of
                frontend development,
                backend architecture,
                real-time systems,
                authentication,
                databases and
                deployment.
              </p>

              <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
                I&apos;m currently
                looking for software
                development
                opportunities where
                I can contribute to
                real products,
                continue improving my
                engineering skills
                and grow as a
                developer.
              </p>
            </div>

            {/* ----------------------------------------
                Highlight cards
            ----------------------------------------- */}

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map(
                (
                  item,
                  index,
                ) => (
                  <article
                    key={
                      item.title
                    }
                    data-reveal
                    className="reveal group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-950/80"
                    style={{
                      transitionDelay:
                        `${
                          140 +
                          index *
                            80
                        }ms`,
                    }}
                  >
                    <div className="absolute right-4 top-3 text-4xl font-black text-white/[0.025] transition group-hover:text-cyan-400/[0.06]">
                      {
                        item.number
                      }
                    </div>

                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] text-xs font-black text-cyan-300">
                      {
                        item.number
                      }
                    </div>

                    <h3 className="font-bold text-white">
                      {
                        item.title
                      }
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {
                        item.description
                      }
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>

          {/* ------------------------------------------
              Right overview panel
          ------------------------------------------- */}

          <aside
            data-reveal
            className="reveal h-fit lg:sticky lg:top-28"
            style={{
              transitionDelay:
                "160ms",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-7">

              {/* Subtle top glow */}

              <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-48 -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-2xl" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                      Developer Profile
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      Quick Overview
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] font-black text-cyan-300">
                    BS
                  </div>
                </div>

                {/* Stats */}

                <div className="mb-8 grid grid-cols-3 gap-3">
                  {stats.map(
                    (
                      stat,
                      index,
                    ) => (
                      <div
                        key={
                          stat.label
                        }
                        className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-4 text-center transition duration-300 hover:border-cyan-400/30"
                        style={{
                          transitionDelay:
                            `${
                              220 +
                              index *
                                60
                            }ms`,
                        }}
                      >
                        <p className="text-lg font-black text-cyan-300 sm:text-xl">
                          {
                            stat.value
                          }
                        </p>

                        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                          {
                            stat.label
                          }
                        </p>
                      </div>
                    ),
                  )}
                </div>

                {/* Details */}

                <div className="space-y-0">
                  <OverviewItem
                    label="Current Focus"
                    value="Full Stack & Backend Development"
                  />

                  <OverviewItem
                    label="Primary Stack"
                    value="MongoDB · Express · React · Node.js"
                  />

                  <OverviewItem
                    label="Additional Tech"
                    value="TypeScript · Redis · BullMQ · Socket.IO"
                  />

                  <OverviewItem
                    label="Education"
                    value="B.Tech in Computer Science & Engineering"
                    secondary="Completed 2026 · CGPA 8.01"
                  />

                  <OverviewItem
                    label="Experience"
                    value="Projects, internships & technical training"
                  />

                  <OverviewItem
                    label="Career Goal"
                    value="Software Developer / Full Stack Developer"
                    last
                  />
                </div>

                {/* CTA */}

                <a
                  href="#contact"
                  className="mt-7 flex min-h-11 w-full items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-3 text-sm font-bold text-cyan-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.11]"
                >
                  Let&apos;s Connect
                  <span className="ml-2">
                    →
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function OverviewItem({
  label,
  value,
  secondary,
  last = false,
}) {
  return (
    <div
      className={`py-5 ${
        last
          ? ""
          : "border-b border-slate-800"
      }`}
    >
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>

      <p className="text-sm font-semibold leading-6 text-slate-200">
        {value}
      </p>

      {secondary && (
        <p className="mt-1 text-xs text-slate-500">
          {secondary}
        </p>
      )}
    </div>
  );
}

export default About;