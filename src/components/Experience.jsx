function Experience() {
  const experiences = [
    {
      period: "Jun 2025 - Aug 2025",
      title: "Full Stack Web Development Summer School",
      organization: "IIT Jammu",
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
      period: "6-Month Training",
      title: "MERN Stack Development Training",
      organization: "Isekai Tech",
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
      period: "28-Day Training",
      title: "Python Development Training",
      organization: "Academic Training",
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

  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Experience & Training
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Learning through structured training and real project development.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            My experience comes from technical training, internships and
            project-based development where I worked with modern web
            technologies and built practical applications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-800 md:block"></div>

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.title}-${index}`}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 md:flex">
                  <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-2 text-sm font-medium text-cyan-400">
                        {experience.period}
                      </p>

                      <h3 className="text-xl font-bold text-white sm:text-2xl">
                        {experience.title}
                      </h3>

                      <p className="mt-2 font-medium text-slate-400">
                        {experience.organization}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-400">
                      Training
                    </span>
                  </div>

                  <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-400 sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {experience.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;