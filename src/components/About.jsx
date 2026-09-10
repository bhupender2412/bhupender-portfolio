function About() {
  const highlights = [
    {
      title: "Full Stack Development",
      description:
        "Building complete web applications using React, Node.js, Express and MongoDB.",
    },
    {
      title: "Backend & APIs",
      description:
        "Working with REST APIs, authentication, databases, queues and real-time application features.",
    },
    {
      title: "Problem Solving",
      description:
        "Turning technical problems into practical software solutions through debugging and hands-on development.",
    },
  ];

  return (
    <section id="about" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Building practical applications and growing through real
            development experience.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I enjoy working across the complete application lifecycle, from
            designing responsive interfaces to building APIs, integrating
            databases and deploying applications to production.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main content */}
          <div>
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m Bhupender Singh, a Computer Science & Engineering
              graduate with a strong interest in full stack and backend
              development. I enjoy building applications that combine clean
              user interfaces with reliable backend systems.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              My primary development stack is MERN, and I have worked on
              projects involving JWT authentication, role-based access,
              REST APIs, MongoDB, real-time communication, background queues,
              Redis, course management, analytics and developer-focused tools.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              Projects such as LearnFlow, LogPulse and LeetMetric have helped me
              strengthen my understanding of frontend development, backend
              architecture, API integration, databases, deployment and
              production debugging.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m currently looking for software development opportunities
              where I can contribute to real products, improve my engineering
              skills and continue growing as a developer.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-cyan-400/30"
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

          {/* Quick overview */}
          <div className="h-fit rounded-3xl border border-slate-800 bg-slate-950 p-7">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Overview
            </h3>

            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-5">
                <p className="mb-1 text-sm text-slate-500">
                  Current Focus
                </p>

                <p className="font-medium text-slate-200">
                  Full Stack & Backend Development
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
                  Education
                </p>

                <p className="font-medium text-slate-200">
                  B.Tech in Computer Science & Engineering
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Completed · CGPA 8.01
                </p>
              </div>

              <div className="border-b border-slate-800 pb-5">
                <p className="mb-1 text-sm text-slate-500">
                  Development Experience
                </p>

                <p className="font-medium text-slate-200">
                  Projects, internships & technical training
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