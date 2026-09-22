import {
  useEffect,
  useRef,
} from "react";

function Experience() {
  const sectionRef =
    useRef(null);

  const experiences = [
    {
      period:
        "Jun 2025 - Aug 2025",

      type:
        "Internship / Summer School",

      title:
        "Full Stack Web Development Summer School",

      organization:
        "IIT Jammu",

      description:
        "Completed an intensive full stack web development program focused on frontend development, JavaScript fundamentals, React and modern web development concepts.",

      points: [
        "Worked with HTML, CSS and JavaScript fundamentals",
        "Built responsive frontend projects using modern CSS",
        "Developed React-based applications and reusable components",
        "Worked with DOM manipulation and browser APIs",
        "Built practical mini projects including a weather extension and React To-Do application",
      ],

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "MongoDB",
        "Node.js",
      ],
    },

    {
      period:
        "6-Month Training",

      type:
        "Professional Training",

      title:
        "MERN Stack Development Training",

      organization:
        "Isekai Tech",

      description:
        "Hands-on MERN stack training focused on building complete web applications and strengthening practical frontend and backend development skills.",

      points: [
        "Built frontend projects using JavaScript and React",
        "Worked with Node.js, Express and MongoDB",
        "Implemented authentication and CRUD functionality",
        "Developed full stack projects including Job Portal and E-Commerce applications",
        "Practiced debugging, API integration and application development workflows",
      ],

      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JavaScript",
      ],
    },

    {
      period:
        "28-Day Training",

      type:
        "Academic Training",

      title:
        "Python Development Training",

      organization:
        "Academic Training",

      description:
        "Completed practical Python development training and built a Blood Bank Management System as the primary training project.",

      points: [
        "Strengthened Python programming fundamentals",
        "Worked with functions, conditions and data handling",
        "Built a Blood Bank Management System",
        "Practiced structured problem solving and application development",
      ],

      technologies: [
        "Python",
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
          threshold: 0.1,

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
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <div
          data-reveal
          className="reveal mb-14 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
              Experience &
              Training
            </p>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Learning through
            structured training
            and real project
            development.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My experience comes
            from internships,
            technical training
            and project-based
            development where I
            worked with modern web
            technologies and built
            practical applications.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop timeline */}

          <div className="absolute bottom-4 left-[15px] top-4 hidden w-px bg-gradient-to-b from-cyan-400/40 via-slate-700 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map(
              (
                experience,
                index,
              ) => (
                <article
                  key={`${experience.title}-${index}`}
                  data-reveal
                  className="reveal relative md:pl-14"
                  style={{
                    transitionDelay:
                      `${
                        80 +
                        index * 90
                      }ms`,
                  }}
                >
                  {/* Timeline marker */}

                  <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.08)] md:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-900/75 sm:p-8">

                    {/* Hover glow */}

                    <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-cyan-400/[0.035] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.065]" />

                    <div className="relative">

                      {/* Header */}

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                        <div>
                          <p className="text-sm font-bold text-cyan-400">
                            {
                              experience.period
                            }
                          </p>

                          <h3 className="mt-3 text-xl font-black leading-snug text-white sm:text-2xl">
                            {
                              experience.title
                            }
                          </h3>

                          <p className="mt-2 font-semibold text-slate-300">
                            {
                              experience.organization
                            }
                          </p>
                        </div>

                        <span className="w-fit shrink-0 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-300">
                          {
                            experience.type
                          }
                        </span>
                      </div>

                      <div className="my-6 h-px bg-slate-800" />

                      {/* Description */}

                      <p className="max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
                        {
                          experience.description
                        }
                      </p>

                      {/* Responsibilities */}

                      <div className="mt-7">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                          Key Learning
                        </p>

                        <div className="grid gap-3 lg:grid-cols-2">
                          {experience.points.map(
                            (
                              point,
                            ) => (
                              <div
                                key={
                                  point
                                }
                                className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                              >
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                                <span>
                                  {
                                    point
                                  }
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Technologies */}

                      <div className="mt-7 flex flex-wrap gap-2">
                        {experience.technologies.map(
                          (
                            technology,
                          ) => (
                            <span
                              key={
                                technology
                              }
                              className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-cyan-400/25 hover:text-cyan-300"
                            >
                              {
                                technology
                              }
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;