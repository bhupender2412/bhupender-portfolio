function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Himachal Pradesh Technical University",
      location: "Himachal Pradesh",
      period: "2023 - 2026",
      score: "CGPA: 8.01",
      description:
        "Focused on computer science fundamentals, software development and full stack web development through academic work and practical projects.",
    },
    {
      degree: "Diploma in Engineering",
      institution: "Government Polytechnic Sundernagar",
      location: "Sundernagar, Himachal Pradesh",
      period: "Completed 2023",
      score: "75%",
      description:
        "Built a foundation in programming, computer science concepts and practical technical problem solving.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Academic background that supports my development journey.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            My academic journey has helped me build a foundation in computer
            science while practical projects and training strengthened my
            software development skills.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-3xl border border-slate-800 bg-slate-950/60 p-7 transition hover:border-cyan-400/30"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-3 text-sm font-medium text-cyan-400">
                    {item.period}
                  </p>

                  <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                    {item.degree}
                  </h3>

                  <p className="mt-3 font-medium text-slate-300">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.location}
                  </p>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300">
                  {item.score}
                </span>
              </div>

              <div className="my-6 h-px bg-slate-800"></div>

              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
          <p className="text-sm leading-7 text-slate-400">
            Alongside academics, I continue to strengthen my development skills
            through full stack projects, technical training and consistent
            hands-on practice.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;