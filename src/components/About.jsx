function About() {
  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "Building complete web applications with React, Node.js, Express and MongoDB.",
    },
    {
      title: "Backend & APIs",
      description:
        "Working with REST APIs, authentication, databases and real-time application features.",
    },
    {
      title: "Problem Solving",
      description:
        "Focused on understanding problems clearly and turning them into practical software solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Building practical web applications and continuously improving
            as a developer.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left content */}
          <div>
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              I'm Bhupender Singh, a Computer Science & Engineering graduate
              with a strong interest in full stack web development. I enjoy
              building applications that combine clean user interfaces with
              reliable backend systems.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              My primary development stack is MERN, and I have worked on
              projects involving authentication, role-based access, real-time
              communication, course management, job platforms, logging systems,
              queues and developer-focused tools.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              I focus on learning by building real projects, debugging problems
              and understanding how different parts of an application work
              together from frontend to deployment.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <h3 className="mb-3 font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-7">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Overview
            </h3>

            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-5">
                <p className="mb-1 text-sm text-slate-500">
                  Current Focus
                </p>

                <p className="font-medium text-slate-200">
                  Full Stack Web Development
                </p>
              </div>

              <div className="border-b border-slate-800 pb-5">
                <p className="mb-1 text-sm text-slate-500">
                  Primary Stack
                </p>

                <p className="font-medium text-slate-200">
                  MongoDB · Express · React · Node.js
                </p>
              </div>

              <div className="border-b border-slate-800 pb-5">
                <p className="mb-1 text-sm text-slate-500">
                  Degree
                </p>

                <p className="font-medium text-slate-200">
                  B.Tech in Computer Science & Engineering
                </p>
              </div>

              <div className="border-b border-slate-800 pb-5">
                <p className="mb-1 text-sm text-slate-500">
                  Experience
                </p>

                <p className="font-medium text-slate-200">
                  Projects, internships & hands-on development
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm text-slate-500">
                  Career Goal
                </p>

                <p className="font-medium text-slate-200">
                  Software Developer / Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;