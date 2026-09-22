import {
  useEffect,
  useRef,
} from "react";

import {
  useForm,
  ValidationError,
} from "@formspree/react";

function Contact() {
  const sectionRef =
    useRef(null);

  const [
    state,
    handleSubmit,
  ] = useForm("moeqyvwk");

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
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute -left-32 top-32 h-80 w-80 rounded-full bg-cyan-500/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-blue-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* --------------------------------------------------
            Heading
        -------------------------------------------------- */}

        <div
          data-reveal
          className="reveal mb-14 max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
              Contact
            </p>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s connect and
            build something
            meaningful.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m open to
            software development
            opportunities, full
            stack roles and
            conversations around
            interesting projects.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">

          {/* ------------------------------------------------
              Contact information
          ------------------------------------------------ */}

          <aside
            data-reveal
            className="reveal h-fit"
            style={{
              transitionDelay:
                "80ms",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/55 p-6 shadow-xl shadow-black/10 sm:p-7">

              {/* Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/[0.05] blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                      Get In Touch
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white">
                      Contact Information
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] font-black text-cyan-300">
                    @
                  </div>
                </div>

                <p className="text-sm leading-7 text-slate-400">
                  The best ways to
                  reach me are email,
                  LinkedIn and
                  GitHub.
                </p>

                <div className="mt-8">
                  <ContactItem
                    label="Email"
                    value="bhupendersingh0801@gmail.com"
                    href="mailto:bhupendersingh0801@gmail.com"
                  />

                  <ContactItem
                    label="GitHub"
                    value="github.com/bhupender2412"
                    href="https://github.com/bhupender2412"
                    external
                  />

                  <ContactItem
                    label="LinkedIn"
                    value="linkedin.com/in/bhupender-singh-01b80a370"
                    href="https://www.linkedin.com/in/bhupender-singh-01b80a370"
                    external
                  />

                  <ContactItem
                    label="Location"
                    value="Himachal Pradesh, India"
                    last
                  />
                </div>

                {/* Availability */}

                <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] p-5">
                  <div className="flex items-start gap-3">
                    <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-slate-200">
                        Available for
                        opportunities
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Open to
                        software
                        development
                        and full stack
                        roles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resume */}

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm font-bold text-slate-300 transition duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  View Resume
                  <span>
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </aside>

          {/* ------------------------------------------------
              Contact form
          ------------------------------------------------ */}

          <div
            data-reveal
            className="reveal"
            style={{
              transitionDelay:
                "150ms",
            }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/55 p-6 shadow-xl shadow-black/10 sm:p-8">

              <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-3xl" />

              <div className="relative">
                <div className="flex flex-col gap-3 border-b border-slate-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                      Send a Message
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                      Have something
                      in mind?
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600">
                    Usually responds
                    as soon as
                    possible.
                  </p>
                </div>

                {state.succeeded ? (
                  <SuccessMessage />
                ) : (
                  <form
                    onSubmit={
                      handleSubmit
                    }
                    className="mt-7 space-y-5"
                  >
                    {/* Name + Email */}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        label="Name"
                        htmlFor="name"
                      >
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          minLength="2"
                          autoComplete="name"
                          placeholder="Your name"
                          className="contact-input"
                        />

                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={
                            state.errors
                          }
                          className="mt-2 text-xs text-red-400"
                        />
                      </FormField>

                      <FormField
                        label="Email"
                        htmlFor="email"
                      >
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          autoComplete="email"
                          placeholder="your@email.com"
                          className="contact-input"
                        />

                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={
                            state.errors
                          }
                          className="mt-2 text-xs text-red-400"
                        />
                      </FormField>
                    </div>

                    {/* Subject */}

                    <FormField
                      label="Subject"
                      htmlFor="subject"
                    >
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        required
                        minLength="3"
                        placeholder="Job opportunity / Project discussion"
                        className="contact-input"
                      />

                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={
                          state.errors
                        }
                        className="mt-2 text-xs text-red-400"
                      />
                    </FormField>

                    {/* Message */}

                    <FormField
                      label="Message"
                      htmlFor="message"
                    >
                      <textarea
                        id="message"
                        name="message"
                        required
                        minLength="10"
                        rows="6"
                        placeholder="Tell me about the opportunity or project..."
                        className="contact-input resize-none"
                      />

                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={
                          state.errors
                        }
                        className="mt-2 text-xs text-red-400"
                      />
                    </FormField>

                    {/* Formspree general errors */}

                    {state.errors && (
                      <ValidationError
                        errors={
                          state.errors
                        }
                        className="rounded-xl border border-red-400/15 bg-red-400/[0.04] p-3 text-sm text-red-400"
                      />
                    )}

                    {/* Submit */}

                    <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs leading-5 text-slate-600">
                        Your message
                        is sent
                        securely
                        through
                        Formspree.
                      </p>

                      <button
                        type="submit"
                        disabled={
                          state.submitting
                        }
                        className="group flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
                      >
                        {state.submitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950/30 border-t-slate-950" />

                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// Contact detail
// --------------------------------------------------

function ContactItem({
  label,
  value,
  href,
  external = false,
  last = false,
}) {
  return (
    <div
      className={`py-5 ${
        last
          ? ""
          : "border-b border-slate-800"
      }`}
    >
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
        {label}
      </p>

      {href ? (
        <a
          href={href}
          target={
            external
              ? "_blank"
              : undefined
          }
          rel={
            external
              ? "noreferrer"
              : undefined
          }
          className="group flex min-w-0 items-center justify-between gap-3 text-sm font-semibold text-slate-200 transition hover:text-cyan-300"
        >
          <span className="min-w-0 break-all">
            {value}
          </span>

          <span className="shrink-0 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400">
            ↗
          </span>
        </a>
      ) : (
        <p className="text-sm font-semibold text-slate-200">
          {value}
        </p>
      )}
    </div>
  );
}

// --------------------------------------------------
// Form field wrapper
// --------------------------------------------------

function FormField({
  label,
  htmlFor,
  children,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-slate-300"
      >
        {label}
      </label>

      {children}
    </div>
  );
}

// --------------------------------------------------
// Success state
// --------------------------------------------------

function SuccessMessage() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] font-black text-emerald-400">
          ✓
        </div>

        <div>
          <h4 className="font-bold text-white">
            Message sent
            successfully!
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Thanks for reaching
            out. I&apos;ll get back
            to you as soon as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;