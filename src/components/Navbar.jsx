import {
  useEffect,
  useState,
} from "react";

function Navbar() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  const [
    activeSection,
    setActiveSection,
  ] = useState("home");

  const [
    scrolled,
    setScrolled,
  ] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
      id: "home",
    },
    {
      name: "About",
      href: "#about",
      id: "about",
    },
    {
      name: "Skills",
      href: "#skills",
      id: "skills",
    },
    {
      name: "Projects",
      href: "#projects",
      id: "projects",
    },
    {
      name: "Experience",
      href: "#experience",
      id: "experience",
    },
    {
      name: "Education",
      href: "#education",
      id: "education",
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // --------------------------------------------------
  // Navbar scroll state
  // --------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 20,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  // --------------------------------------------------
  // Active section observer
  // --------------------------------------------------

  useEffect(() => {
    const sections =
      navLinks
        .map((link) =>
          document.getElementById(
            link.id,
          ),
        )
        .filter(Boolean);

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio,
              );

          if (visible[0]) {
            setActiveSection(
              visible[0].target.id,
            );
          }
        },
        {
          rootMargin:
            "-30% 0px -55% 0px",
          threshold: [
            0,
            0.2,
            0.5,
            1,
          ],
        },
      );

    sections.forEach(
      (section) =>
        observer.observe(
          section,
        ),
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  // --------------------------------------------------
  // Close mobile menu on resize / Escape
  // --------------------------------------------------

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >=
        1024
      ) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (
      event,
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/85 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-b border-transparent bg-slate-950/40 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}

        <a
          href="#home"
          onClick={closeMenu}
          className="group relative flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-black text-cyan-300 transition duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/15">
            B
          </div>

          <span className="text-lg font-black tracking-tight text-white sm:text-xl">
            Bhupender
            <span className="text-cyan-400">
              .
            </span>
          </span>
        </a>

        {/* Desktop navigation */}

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(
            (link) => {
              const isActive =
                activeSection ===
                link.id;

              return (
                <a
                  key={link.id}
                  href={
                    link.href
                  }
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {
                    link.name
                  }

                  <span
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-cyan-400 transition-all duration-300 ${
                      isActive
                        ? "w-5"
                        : "w-0"
                    }`}
                  />
                </a>
              );
            },
          )}
        </div>

        {/* Desktop actions */}

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://github.com/bhupender2412"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700/80 bg-white/[0.02] px-4 py-2.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-500/20"
          >
            View Resume
          </a>
        </div>

        {/* Mobile toggle */}

        <button
          type="button"
          onClick={() =>
            setMenuOpen(
              (current) =>
                !current,
            )
          }
          aria-label="Toggle navigation menu"
          aria-expanded={
            menuOpen
          }
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/80 text-xl text-white transition duration-300 hover:border-cyan-400/50 hover:text-cyan-300 lg:hidden"
        >
          <span
            className={`transition duration-300 ${
              menuOpen
                ? "rotate-90"
                : ""
            }`}
          >
            {menuOpen
              ? "×"
              : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-white/10 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[680px] border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map(
              (link) => {
                const isActive =
                  activeSection ===
                  link.id;

                return (
                  <a
                    key={
                      link.id
                    }
                    href={
                      link.href
                    }
                    onClick={
                      closeMenu
                    }
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-300"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {
                      link.name
                    }
                  </a>
                );
              },
            )}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-800 pt-5">
            <a
              href="https://github.com/bhupender2412"
              target="_blank"
              rel="noreferrer"
              onClick={
                closeMenu
              }
              className="rounded-xl border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={
                closeMenu
              }
              className="rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;