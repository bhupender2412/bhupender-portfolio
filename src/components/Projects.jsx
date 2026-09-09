import { projects } from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured Work
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projects where I turned ideas into working applications.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            These projects reflect my experience across frontend development,
            backend APIs, databases, authentication, real-time systems and
            application deployment.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 transition hover:border-cyan-400/30"
            >
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                {/* Project preview */}
                <div className="flex flex-col border-b border-slate-800 bg-slate-950 lg:border-b-0 lg:border-r">
                  {project.image && (
                    <div className="overflow-hidden border-b border-slate-800 bg-slate-900">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] sm:h-72 lg:h-64"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col justify-between p-8">
                    <div>
                      <span className="text-sm font-medium text-cyan-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-4 text-sm uppercase tracking-widest text-slate-500">
                        {project.category}
                      </p>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-3xl font-bold text-white">
                        {project.title}
                      </h3>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project information */}
                <div className="flex flex-col p-8">
                  <p className="max-w-3xl text-base leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Key features */}
                  <div className="mt-7">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Key Features
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>

                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* All technologies */}
                  <div className="mt-8">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project links */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                More Projects
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Other applications I&apos;ve built
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 transition hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  {/* Optional image for other projects */}
                  {project.image && (
                    <div className="overflow-hidden border-b border-slate-800">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        className="h-44 w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                        {project.category}
                      </p>

                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-900 px-2.5 py-1.5 text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-4 pt-7">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                        >
                          Live Demo ↗
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-slate-400 transition hover:text-white"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;