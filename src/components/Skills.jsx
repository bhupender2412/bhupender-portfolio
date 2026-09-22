import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import {
  skillGroups,
} from "../data/skills";

function Skills() {
  const sectionRef =
    useRef(null);

  const totalTechnologies =
    useMemo(() => {
      const uniqueSkills =
        new Set();

      skillGroups.forEach(
        (group) => {
          group.skills.forEach(
            (skill) => {
              uniqueSkills.add(
                skill,
              );
            },
          );
        },
      );

      return uniqueSkills.size;
    }, []);

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
          threshold: 0.12,

          rootMargin:
            "0px 0px -60px 0px",
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
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-36 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-blue-500/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* --------------------------------------------------
            Section heading
        -------------------------------------------------- */}

        <div
          data-reveal
          className="reveal mb-14 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
              Technical Skills
            </p>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I use to
            build full stack
            applications.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My main focus is the
            MERN stack, supported by
            technologies for
            authentication,
            real-time systems,
            queues, databases,
            deployment and
            production workflows.
          </p>
        </div>

        {/* --------------------------------------------------
            Small summary
        -------------------------------------------------- */}

        <div
          data-reveal
          className="reveal mb-8 grid gap-3 sm:grid-cols-3"
          style={{
            transitionDelay:
              "80ms",
          }}
        >
          <SkillStat
            value={
              skillGroups.length
            }
            label="Skill Areas"
          />

          <SkillStat
            value={`${totalTechnologies}+`}
            label="Technologies"
          />

          <SkillStat
            value="MERN"
            label="Core Stack"
          />
        </div>

        {/* --------------------------------------------------
            Skill cards
        -------------------------------------------------- */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(
            (
              group,
              groupIndex,
            ) => (
              <article
                key={
                  group.title
                }
                data-reveal
                className="reveal group relative min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-cyan-950/10"
                style={{
                  transitionDelay:
                    `${
                      120 +
                      groupIndex *
                        65
                    }ms`,
                }}
              >
                {/* Hover glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/[0.045] blur-2xl transition duration-500 group-hover:bg-cyan-400/[0.08]" />

                <div className="relative">

                  {/* Card heading */}

                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-2 text-[11px] font-black tracking-wide text-cyan-300 transition duration-300 group-hover:border-cyan-400/35 group-hover:bg-cyan-400/[0.1]">
                        {
                          group.shortLabel
                        }
                      </div>

                      <div>
                        <h3 className="font-bold text-white sm:text-lg">
                          {
                            group.title
                          }
                        </h3>

                        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                          {
                            group.skills
                              .length
                          }{" "}
                          technologies
                        </p>
                      </div>
                    </div>

                    <span className="text-3xl font-black text-white/[0.025] transition duration-300 group-hover:text-cyan-400/[0.06]">
                      {String(
                        groupIndex +
                          1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>
                  </div>

                  {/* Description */}

                  <p className="mb-6 text-sm leading-6 text-slate-500">
                    {
                      group.description
                    }
                  </p>

                  {/* Skills */}

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map(
                      (
                        skill,
                        skillIndex,
                      ) => (
                        <span
                          key={
                            skill
                          }
                          className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs font-medium text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.055] hover:text-cyan-300 sm:text-sm"
                          style={{
                            transitionDelay:
                              `${
                                skillIndex *
                                15
                              }ms`,
                          }}
                        >
                          {
                            skill
                          }
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        {/* --------------------------------------------------
            Current focus
        -------------------------------------------------- */}

        <div
          data-reveal
          className="reveal mt-10 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.055] via-slate-900/60 to-blue-500/[0.04] p-6"
          style={{
            transitionDelay:
              "260ms",
          }}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07]">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              </div>

              <div>
                <p className="font-bold text-white">
                  Currently
                  improving
                </p>

                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">
                  Backend
                  architecture,
                  TypeScript,
                  scalable APIs,
                  production
                  deployment and
                  reliable full
                  stack application
                  development.
                </p>
              </div>
            </div>

            <span className="w-fit shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-cyan-300">
              Always Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillStat({
  value,
  label,
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-4">
      <p className="text-xl font-black text-cyan-300 sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default Skills;