import {
  useEffect,
  useRef,
} from "react";

function Education() {
  const sectionRef =
    useRef(null);

  const education = [
    {
      index: "01",

      degree:
        "B.Tech in Computer Science & Engineering",

      institution:
        "Himachal Pradesh Technical University",

      college:
        "TRAMIET",

      location:
        "Himachal Pradesh",

      period:
        "Completed 2026",

      score:
        "CGPA 8.01",

      description:
        "Completed my B.Tech in Computer Science & Engineering with a focus on software development, computer science fundamentals and practical full stack application development.",

      highlights: [
        "Computer Science fundamentals",
        "Software Development",
        "Full Stack Projects",
        "Web Technologies",
      ],
    },

    {
      index: "02",

      degree:
        "Diploma in Engineering",

      institution:
        "Government Polytechnic Sundernagar",

      college:
        "HPTSB",

      location:
        "Sundernagar, Himachal Pradesh",

      period:
        "Completed 2023",

      score:
        "75%",

      description:
        "Built a strong foundation in programming, computer science concepts and practical technical problem solving before continuing into B.Tech.",

      highlights: [
        "Programming Fundamentals",
        "Computer Science Basics",
        "Technical Problem Solving",
        "Practical Training",
      ],
    },
  ];

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
      id="education"
      className="relative overflow-hidden bg-slate-900 px-5 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Decorative glow */}

      <div className="pointer-events-none absolute -right-32 top-28 h-80 w-80 rounded-full bg-blue-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <div
          data-reveal
          className="reveal mb-14 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
              Education
            </p>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Academic foundation
            behind my software
            development journey.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My education in
            Computer Science &
            Engineering provided the
            theoretical foundation,
            while projects,
            internships and
            technical training
            helped me apply those
            concepts to real
            applications.
          </p>
        </div>

        {/* Education cards */}

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map(
            (
              item,
              index,
            ) => (
              <article
                key={
                  item.degree
                }
                data-reveal
                className="reveal group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-950/80 sm:p-7"
                style={{
                  transitionDelay:
                    `${
                      80 +
                      index * 100
                    }ms`,
                }}
              >
                {/* Large background number */}

                <span className="pointer-events-none absolute right-5 top-3 text-7xl font-black text-white/[0.02] transition duration-300 group-hover:text-cyan-400/[0.045]">
                  {
                    item.index
                  }
                </span>

                <div className="relative">

                  {/* Top */}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-cyan-400">
                        {
                          item.period
                        }
                      </p>

                      <h3 className="mt-3 max-w-xl text-xl font-black leading-snug text-white sm:text-2xl">
                        {
                          item.degree
                        }
                      </h3>
                    </div>

                    <span className="shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-2 text-xs font-black text-cyan-300 sm:text-sm">
                      {
                        item.score
                      }
                    </span>
                  </div>

                  {/* Institution */}

                  <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                    <p className="font-semibold text-slate-200">
                      {
                        item.institution
                      }
                    </p>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span>
                        {
                          item.college
                        }
                      </span>

                      <span>
                        {
                          item.location
                        }
                      </span>
                    </div>
                  </div>

                  {/* Description */}

                  <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                    {
                      item.description
                    }
                  </p>

                  {/* Highlights */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.highlights.map(
                      (
                        highlight,
                      ) => (
                        <span
                          key={
                            highlight
                          }
                          className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-cyan-400/25 hover:text-cyan-300"
                        >
                          {
                            highlight
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

        {/* Additional note */}

        <div
          data-reveal
          className="reveal mt-8 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.045] via-slate-950/40 to-blue-500/[0.035] p-6"
          style={{
            transitionDelay:
              "220ms",
          }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] font-black text-cyan-300">
              +
            </div>

            <div>
              <p className="font-bold text-white">
                Beyond academics
              </p>

              <p className="mt-1 max-w-4xl text-sm leading-7 text-slate-400">
                Alongside my
                academic studies, I
                strengthened my
                development skills
                through full stack
                projects,
                internships,
                technical training
                and hands-on work
                with modern web
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;