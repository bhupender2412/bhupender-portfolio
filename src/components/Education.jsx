function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Himachal Pradesh Technical University",
      college: "TRAMIET",
      location: "Himachal Pradesh",
      period: "Completed 2026",
      score: "CGPA: 8.01",
      description:
        "Completed my B.Tech in Computer Science & Engineering with a focus on software development, computer science fundamentals and practical full stack application development.",
    },
    {
      degree: "Diploma in Engineering",
      institution: "Government Polytechnic Sundernagar",
      college: "HPTSB",
      location: "Sundernagar, Himachal Pradesh",
      period: "Completed 2023",
      score: "75%",
      description:
        "Built a strong foundation in programming, computer science concepts and practical technical problem solving before continuing into B.Tech.",
    },
  ];

  return (
    <section id="education" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Academic foundation behind my software development journey.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            My education in Computer Science & Engineering provided the
            theoretical foundation, while projects, internships and technical
            training helped me apply those concepts to real applications.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-3xl border border-slate-800 bg-slate-950/60 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
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
                    {item.college}
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

        {/* Additional note */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/50 p-6">
          <p className="text-sm leading-7 text-slate-400">
            Alongside my academic studies, I strengthened my development skills
            through full stack projects, internships, technical training and
            hands-on work with modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;