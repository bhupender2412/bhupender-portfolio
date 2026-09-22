import {
  useEffect,
  useRef,
} from "react";

import {
  projects,
} from "../data/projects";

function Projects() {
  const sectionRef =
    useRef(null);

  const featuredProjects =
    projects.filter(
      (project) =>
        project.featured,
    );

  const otherProjects =
    projects.filter(
      (project) =>
        !project.featured,
    );

  // --------------------------------------------------
  // Scroll reveal
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
        (element) => {
          element.classList.add(
            "is-visible",
          );
        },
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
          threshold: 0.08,
          rootMargin:
            "0px 0px -70px 0px",
        },
      );

    elements.forEach(
      (element) => {
        observer.observe(
          element,
        );
      },
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden bg-slate-900 px-5 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background effects */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-blue-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* --------------------------------------------------
            Heading
        -------------------------------------------------- */}

        <div
          data-reveal
          className="reveal mb-14 max-w-3xl lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
              Featured Work
            </p>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Projects where I
            turned ideas into
            working applications.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            These projects reflect
            my experience across
            frontend development,
            backend architecture,
            authentication,
            databases, real-time
            systems, infrastructure
            and production
            deployment.
          </p>
        </div>

        {/* --------------------------------------------------
            Project summary
        -------------------------------------------------- */}

        <div
          data-reveal
          className="reveal mb-8 grid gap-3 sm:grid-cols-3"
          style={{
            transitionDelay:
              "80ms",
          }}
        >
          <ProjectStat
            value={
              featuredProjects.length
            }
            label="Featured Projects"
          />

          <ProjectStat
            value="Full Stack"
            label="Primary Focus"
          />

          <ProjectStat
            value="Live"
            label="Deployed Projects"
          />
        </div>

        {/* --------------------------------------------------
            Featured projects
        -------------------------------------------------- */}

        <div className="space-y-7 lg:space-y-8">
          {featuredProjects.map(
            (
              project,
              index,
            ) => (
              <FeaturedProject
                key={
                  project.id
                }
                project={
                  project
                }
                index={
                  index
                }
              />
            ),
          )}
        </div>

        {/* --------------------------------------------------
            Other projects
        -------------------------------------------------- */}

        {otherProjects.length >
          0 && (
          <div className="mt-20">
            <div
              data-reveal
              className="reveal mb-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                More Projects
              </p>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Other applications
                I&apos;ve built.
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map(
                (
                  project,
                  index,
                ) => (
                  <SmallProject
                    key={
                      project.id
                    }
                    project={
                      project
                    }
                    index={
                      index
                    }
                  />
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// --------------------------------------------------
// Featured Project
// --------------------------------------------------

function FeaturedProject({
  project,
  index,
}) {
  const isReversed =
    index % 2 !== 0;

  const handlePointerMove = (
    event,
  ) => {
    if (
      window.innerWidth <
      1024
    ) {
      return;
    }

    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    const rotateY =
      ((x / rect.width) -
        0.5) *
      2.2;

    const rotateX =
      ((y / rect.height) -
        0.5) *
      -2.2;

    card.style.setProperty(
      "--project-rx",
      `${rotateX}deg`,
    );

    card.style.setProperty(
      "--project-ry",
      `${rotateY}deg`,
    );
  };

  const resetTilt = (
    event,
  ) => {
    const card =
      event.currentTarget;

    card.style.setProperty(
      "--project-rx",
      "0deg",
    );

    card.style.setProperty(
      "--project-ry",
      "0deg",
    );
  };

  return (
    <article
      data-reveal
      onPointerMove={
        handlePointerMove
      }
      onPointerLeave={
        resetTilt
      }
      className="reveal group relative"
      style={{
        transitionDelay:
          `${100 + index * 60}ms`,
        "--project-rx":
          "0deg",
        "--project-ry":
          "0deg",
      }}
    >
      {/* Outer glow */}

      <div className="pointer-events-none absolute -inset-px rounded-[26px] bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/10 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

      <div
        className="relative overflow-hidden rounded-[25px] border border-slate-800 bg-slate-950/75 shadow-xl shadow-black/10 transition duration-300 group-hover:border-cyan-400/25 group-hover:shadow-2xl group-hover:shadow-black/20"
        style={{
          transform:
            "perspective(1400px) rotateX(var(--project-rx)) rotateY(var(--project-ry))",
          transformStyle:
            "preserve-3d",
        }}
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

          {/* --------------------------------------------
              Preview
          --------------------------------------------- */}

          <div
            className={`flex min-w-0 flex-col bg-slate-950 ${
              isReversed
                ? "lg:order-2 lg:border-l lg:border-slate-800"
                : "lg:border-r lg:border-slate-800"
            }`}
          >
            {project.image && (
              <a
                href={
                  project.demo ||
                  project.github
                }
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden border-b border-slate-800 bg-slate-900"
              >
                {/* Browser bar */}

                <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.05] bg-slate-950/90 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />

                  <span className="ml-3 truncate text-[10px] text-slate-600">
                    {
                      project.demo
                    }
                  </span>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={
                      project.image
                    }
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-[1.035] sm:h-72 lg:h-64 xl:h-72"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-40" />
                </div>
              </a>
            )}

            {/* Project identity */}

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    PROJECT /
                    {" "}
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.17em] text-slate-500">
                    {
                      project.category
                    }
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300">
                  Live
                </span>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                  {
                    project.title
                  }
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies
                    .slice(
                      0,
                      4,
                    )
                    .map(
                      (
                        tech,
                      ) => (
                        <span
                          key={
                            tech
                          }
                          className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-400"
                        >
                          {
                            tech
                          }
                        </span>
                      ),
                    )}
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------
              Project details
          --------------------------------------------- */}

          <div
            className={`flex min-w-0 flex-col p-6 sm:p-8 ${
              isReversed
                ? "lg:order-1"
                : ""
            }`}
          >
            <div>
              <p className="text-base leading-8 text-slate-400">
                {
                  project.description
                }
              </p>

              {/* Features */}

              <div className="mt-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-5 bg-cyan-400" />

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Key Features
                  </p>
                </div>

                <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {project.features.map(
                    (
                      feature,
                      featureIndex,
                    ) => (
                      <div
                        key={
                          feature
                        }
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />

                        <span>
                          {
                            feature
                          }
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Technologies */}

              <div className="mt-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-5 bg-cyan-400" />

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Tech Stack
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(
                    (tech) => (
                      <span
                        key={
                          tech
                        }
                        className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-400 transition duration-200 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                      >
                        {
                          tech
                        }
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Links */}

            <div className="mt-auto flex flex-col gap-3 pt-9 sm:flex-row sm:flex-wrap">
              {project.demo && (
                <a
                  href={
                    project.demo
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="group/button flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-500/20"
                >
                  Live Demo

                  <span className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              )}

              {project.github && (
                <a
                  href={
                    project.github
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-5 py-3 text-sm font-bold text-slate-300 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  GitHub

                  <span>
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// --------------------------------------------------
// Smaller project card
// --------------------------------------------------

function SmallProject({
  project,
  index,
}) {
  return (
    <article
      data-reveal
      className="reveal group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
      style={{
        transitionDelay:
          `${index * 70}ms`,
      }}
    >
      {project.image && (
        <div className="overflow-hidden border-b border-slate-800">
          <img
            src={
              project.image
            }
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
          {
            project.category
          }
        </p>

        <h3 className="text-xl font-black text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {
            project.description
          }
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map(
            (tech) => (
              <span
                key={
                  tech
                }
                className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-400"
              >
                {tech}
              </span>
            ),
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-7">
          {project.demo && (
            <a
              href={
                project.demo
              }
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Live Demo ↗
            </a>
          )}

          {project.github && (
            <a
              href={
                project.github
              }
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// --------------------------------------------------
// Summary stat
// --------------------------------------------------

function ProjectStat({
  value,
  label,
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/40 px-5 py-4">
      <p className="text-xl font-black text-cyan-300 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default Projects;