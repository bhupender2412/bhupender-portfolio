import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technical Skills
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technologies I use to build full stack applications.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            My main focus is the MERN stack, along with tools and technologies
            used for authentication, real-time features, APIs, databases and
            application deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <span className="text-sm text-slate-600">
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-300 transition group-hover:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">
                Currently improving
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                Backend architecture, TypeScript, APIs and scalable full stack
                application development.
              </p>
            </div>

            <span className="w-fit rounded-full border border-cyan-400/20 px-4 py-2 text-sm font-medium text-cyan-300">
              Always Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;