import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("moeqyvwk");

  return (
    <section id="contact" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s connect and build something meaningful.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m open to software development opportunities, internships,
            and full stack development roles. Feel free to reach out if
            you&apos;d like to discuss an opportunity or project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              The best way to reach me is through email, LinkedIn, or GitHub.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <a
                  href="mailto:bhupendersingh0801@gmail.com"
                  className="break-all text-sm font-medium text-slate-200 transition hover:text-cyan-400"
                >
                  bhupendersingh0801@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  GitHub
                </p>

                <a
                  href="https://github.com/bhupender2412"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-sm font-medium text-slate-200 transition hover:text-cyan-400"
                >
                  github.com/bhupender2412
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/bhupender-singh-01b80a370"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-sm font-medium text-slate-200 transition hover:text-cyan-400"
                >
                  linkedin.com/in/bhupender-singh-01b80a370
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </p>

                <p className="text-sm font-medium text-slate-200">
                  Himachal Pradesh, India
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>

                <p className="text-sm font-medium text-slate-300">
                  Open to software development opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Send a Message
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Have an opportunity or want to discuss a project? Send me a
              message and I&apos;ll get back to you.
            </p>

            {state.succeeded ? (
              <div className="mt-8 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-400/10 text-green-400">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">
                      Message sent successfully!
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Thanks for reaching out. I&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    />

                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                    />

                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Job opportunity / Project discussion"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  />

                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                  ></textarea>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-400"
                  />
                </div>

                {/* General Formspree error */}
                {state.errors && (
                  <ValidationError
                    errors={state.errors}
                    className="rounded-lg border border-red-400/20 bg-red-400/5 p-3 text-sm text-red-400"
                  />
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

