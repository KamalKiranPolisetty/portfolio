import {
  CSSProperties,
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Check,
  Download,
  Github,
  Mail,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";
import { projects } from "./data/projects";
import { experiences } from "./data/experience";
import { skillCategories } from "./data/skills";
import { education } from "./data/education";
import { certifications } from "./data/certifications";

type Route = "/" | "/work" | "/about" | "/contact" | "/404";
type Theme = "light" | "dark";
type ContactField = "name" | "email" | "subject" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;

const profile = {
  name: "Kamal Kiran Polisetty",
  email: "kamalkiranpolisetty@gmail.com",
  github: "https://github.com/kamalkiranpolisetty",
  linkedin: "https://www.linkedin.com/in/kamalkiranpolisetty",
  resume: "/kkp.pdf",
};

const routes: Array<{ label: string; path: Route }> = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const pageVariants = {
  initial: { opacity: 0, y: 72, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -48,
    filter: "blur(6px)",
    transition: { duration: 0.32, ease: [0.4, 0, 1, 1] },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function normalizePath(pathname: string): Route {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  return routes.some((route) => route.path === cleanPath)
    ? (cleanPath as Route)
    : "/404";
}

function useRoute() {
  const [route, setRoute] = useState<Route>(() =>
    normalizePath(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (nextRoute: Route) => {
    if (nextRoute === route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.history.pushState({}, "", nextRoute);
    setRoute(nextRoute);
  };

  return { route, navigate };
}

function RouteLink({
  to,
  navigate,
  children,
  className = "",
  onClick,
}: {
  to: Route;
  navigate: (route: Route) => void;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}

function Header({
  route,
  navigate,
  theme,
  toggleTheme,
}: {
  route: Route;
  navigate: (route: Route) => void;
  theme: Theme;
  toggleTheme: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [route]);

  return (
    <header className="site-header">
      <RouteLink to="/" navigate={navigate} className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark" aria-label="Kamal Kiran logo" />
        <span className="brand-copy">
          <strong>Kamal Kiran</strong>
          <small>Full Stack / AI Engineer</small>
        </span>
      </RouteLink>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {routes.map((item) => (
          <RouteLink
            key={item.path}
            to={item.path}
            navigate={navigate}
            className={route === item.path ? "nav-link active" : "nav-link"}
          >
            {item.label}
          </RouteLink>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <RouteLink to="/contact" navigate={navigate} className="availability">
          <span />
          Available for work
        </RouteLink>
        <button
          className="icon-button menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            aria-label="Mobile navigation"
          >
            {routes.map((item, index) => (
              <RouteLink
                key={item.path}
                to={item.path}
                navigate={navigate}
                onClick={() => setMenuOpen(false)}
                className={route === item.path ? "mobile-link active" : "mobile-link"}
              >
                <span>0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={22} />
              </RouteLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function CursorGlow() {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  const smoothX = useSpring(cursorX, { stiffness: 90, damping: 26, mass: 0.9 });
  const smoothY = useSpring(cursorY, { stiffness: 90, damping: 26, mass: 0.9 });

  useEffect(() => {
    let primed = false;
    const move = (event: MouseEvent) => {
      const x = event.clientX - 140;
      const y = event.clientY - 140;
      if (!primed) {
        primed = true;
        smoothX.jump(x);
        smoothY.jump(y);
      }
      cursorX.set(x);
      cursorY.set(y);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY, smoothX, smoothY]);

  return (
    <motion.div
      className="cursor-glow"
      style={{ x: smoothX, y: smoothY }}
      aria-hidden="true"
    />
  );
}

function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="page-intro">
      <motion.p variants={reveal} initial="hidden" animate="visible" className="eyebrow">
        {eyebrow}
      </motion.p>
      <motion.h1
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.08 }}
      >
        {title}
      </motion.h1>
      <motion.p
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
        className="page-description"
      >
        {description}
      </motion.p>
    </section>
  );
}

function ProjectVisual({
  index,
  title,
  image,
}: {
  index: number;
  title: string;
  image?: string;
}) {
  return (
    <div
      className={`project-visual visual-${index % 4}${image ? " has-image" : ""}`}
      aria-hidden="true"
    >
      {image && <img className="visual-photo" src={image} alt="" />}
      {image && <div className="visual-photo-overlay" />}
      <div className="visual-grid" />
      <motion.div
        className="visual-orbit orbit-one"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="visual-orbit orbit-two"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="code-window"
        animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span />
        <span />
        <span />
        <strong>{title.split(" ")[0]}</strong>
      </motion.div>
      <div className="visual-index">0{index + 1}</div>
    </div>
  );
}

function HomePage({ navigate }: { navigate: (route: Route) => void }) {
  return (
    <motion.main
      className="page home-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="hero">
        <div className="hero-copy">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            <Sparkles size={15} />
            Engineer, builder, relentless problem solver
          </motion.div>
          <div className="mobile-profile">
            <img src="/kamal-portrait.jpeg" alt="Kamal Kiran Polisetty" />
            <div>
              <strong>Kamal Kiran Polisetty</strong>
              <span>Full Stack / AI Engineer</span>
            </div>
          </div>
          <h1>
            <span>I build systems</span>
            <span className="outline-text">that feel simple.</span>
          </h1>
          <p>
            Full-stack engineer shaping scalable products across web, AI, and
            cloud. Complex underneath. Clear where it matters.
          </p>
          <div className="hero-actions">
            <RouteLink to="/work" navigate={navigate} className="button button-primary">
              <span>Explore<span className="btn-extra"> selected work</span></span>
              <ArrowDownRight size={18} />
            </RouteLink>
            <a
              href={profile.resume}
              download="Kamal_Kiran_Polisetty_Resume.pdf"
              className="button button-ghost"
              aria-label="Download resume"
            >
              <span className="btn-extra">Download resume</span>
              <span className="btn-mobile">Resume</span>
              <Download size={18} />
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <motion.div
            className="id-card"
            animate={{ rotate: [-1.5, 1.2, -1.5], y: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="id-card-clip" />
            <div className="id-card-header">
              <span className="id-card-brand" aria-label="KonfigAI" />
              <div className="id-card-meta">
                <span>KonfigAI</span>
                <span>2026 · NO. 001</span>
              </div>
            </div>
            <div className="id-card-photo">
              <img src="/kamal-portrait.jpeg" alt="Kamal Kiran Polisetty" />
            </div>
            <div className="id-card-info">
              <strong>Kamal Kiran Polisetty</strong>
              <span>Full Stack / AI Engineer</span>
            </div>
            <div className="id-card-barcode">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
              <span>KP-FSE-2026</span>
            </div>
          </motion.div>
        </div>

        <div className="hero-meta">
          <span>Scroll to discover</span>
          <ArrowDownRight size={16} />
        </div>
      </section>

      <section className="ticker" aria-label="Core capabilities">
        <motion.div
          className="ticker-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...Array(2)].flatMap((_, set) =>
            ["Product engineering", "Full stack", "AI systems", "Cloud", "Automation"].map(
              (item) => (
                <span key={`${set}-${item}`}>
                  {item}
                  <i>✦</i>
                </span>
              ),
            ),
          )}
        </motion.div>
      </section>

      <section className="home-work section-shell">
        <motion.div
          className="section-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div>
            <p className="eyebrow">Selected work / 2024-2026</p>
            <h2>Built for real-world friction.</h2>
          </div>
          <RouteLink to="/work" navigate={navigate} className="text-link">
            View all work <ArrowRight size={18} />
          </RouteLink>
        </motion.div>

        <div className="featured-grid">
          {projects.slice(0, 3).map((project, index) => (
            <motion.article
              key={project.id}
              className="featured-project"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <ProjectVisual index={index} title={project.title} image={project.image} />
              <div className="project-summary">
                <span>0{index + 1}</span>
                <div>
                  <p>{project.category === "mobile" ? "Mobile product" : "Digital product"}</p>
                  <h3>{project.title}</h3>
                </div>
                <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="statement section-shell">
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I move between product thinking and engineering detail to build
          software that is <em>useful, resilient, and clear.</em>
        </motion.p>
        <RouteLink to="/about" navigate={navigate} className="circle-link">
          My story
          <ArrowUpRight size={20} />
        </RouteLink>
      </section>
    </motion.main>
  );
}

function HorizontalProjects() {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section
      ref={target}
      className="horizontal-projects"
      style={{ "--project-count": projects.length } as CSSProperties}
    >
      <div className="horizontal-sticky">
        <div className="horizontal-topline">
          <span>Scroll vertically</span>
          <div className="horizontal-line">
            <motion.span style={{ scaleX: scrollYProgress }} />
          </div>
          <span>Move sideways</span>
        </div>
        <motion.div className="project-track" style={{ x }}>
          {projects.map((project, index) => (
            <article className="project-panel" key={project.id}>
              <ProjectVisual index={index} title={project.title} image={project.image} />
              <div className="project-panel-copy">
                <div className="panel-meta">
                  <span>0{index + 1}</span>
                  <span>{project.status?.replace("-", " ")}</span>
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                {project.githubLink && (
                  <a
                    className="button button-ghost"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository <Github size={17} />
                  </a>
                )}
              </div>
            </article>
          ))}
          <article className="project-panel final-panel">
            <p className="eyebrow">More experiments live on GitHub</p>
            <h2>Keep exploring.</h2>
            <a href={profile.github} target="_blank" rel="noreferrer" className="button button-primary">
              Visit GitHub <ArrowUpRight size={18} />
            </a>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

function WorkPage({ navigate }: { navigate: (route: Route) => void }) {
  return (
    <motion.main
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageIntro
        eyebrow="Work / Selected projects"
        title={
          <>
            Seven builds.
            <br />
            <span className="outline-text">One curious engineer.</span>
          </>
        }
        description="A cross-section of real-time products, AI workflows, data systems, and developer tools. Scroll down and the work moves sideways."
      />
      <HorizontalProjects />
      <section className="work-cta section-shell">
        <p>Have a difficult product problem?</p>
        <RouteLink to="/contact" navigate={navigate}>
          Let&apos;s solve it <ArrowUpRight />
        </RouteLink>
      </section>
    </motion.main>
  );
}

function AboutPage({ navigate }: { navigate: (route: Route) => void }) {
  const selectedSkills = skillCategories.map((category) => ({
    ...category,
    skills: category.skills.slice(0, 6),
  }));

  return (
    <motion.main
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageIntro
        eyebrow="About / The human behind the commits"
        title={
          <>
            I connect the dots
            <br />
            <span className="outline-text">from idea to production.</span>
          </>
        }
        description="I am a full-stack engineer with a master's in computer science and a bias toward shipping. My work spans product interfaces, secure backend systems, AI workflows, and cloud infrastructure."
      />

      <section className="about-principles section-shell">
        <motion.div
          className="principle-intro"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="eyebrow">How I work</p>
          <h2>Start with the user. Sweat the system. Remove the noise.</h2>
        </motion.div>
        <div className="principle-list">
          {[
            ["01", "Think in systems", "I design the flow, data, failure states, and handoff before polishing the surface."],
            ["02", "Make it measurable", "Performance, reliability, and business impact belong in the same conversation."],
            ["03", "Keep learning", "AI, infrastructure, and product patterns change fast. Curiosity is part of the job."],
          ].map(([number, title, copy]) => (
            <motion.article
              key={number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="experience section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Where I have made an impact.</h2>
          </div>
          <a
            href={profile.resume}
            download="Kamal_Kiran_Polisetty_Resume.pdf"
            className="text-link"
          >
            Download resume <Download size={18} />
          </a>
        </div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-70px" }}
            >
              <span className="experience-number">0{index + 1}</span>
              <div className="experience-role">
                <h3>{experience.title}</h3>
                <p>{experience.company}</p>
              </div>
              <div className="experience-date">
                <span>{experience.date}</span>
                <span>{experience.location}</span>
              </div>
              <ul>
                {experience.description.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="skills-section section-shell">
        <p className="eyebrow">Toolkit / Built through practice</p>
        <div className="skills-grid">
          {selectedSkills.map((category) => (
            <motion.article
              key={category.name}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{category.name}</h3>
              <div>
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="education-section section-shell">
        <p className="eyebrow">Education</p>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.id}>
              <span>{item.startDate} - {item.endDate}</span>
              <h3>{item.title}</h3>
              <p>{item.company} · Grade {item.gpa}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="credentials section-shell">
        <p className="eyebrow">Recent credentials</p>
        <div className="credentials-grid">
          {certifications.map((item) => (
            <article key={item.id}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <div className="credential-meta">
                <p>{item.platform}</p>
                {item.credentialUrl && (
                  <a href={item.credentialUrl} target="_blank" rel="noreferrer">
                    View credential <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta section-shell">
        <h2>Good work starts with a useful conversation.</h2>
        <RouteLink to="/contact" navigate={navigate} className="button button-primary">
          Start one <ArrowRight size={18} />
        </RouteLink>
      </section>
    </motion.main>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});

  const validate = (data: FormData) => {
    const nextErrors: ContactErrors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) nextErrors.name = "Tell me what name I should use when I reply.";
    if (!email) {
      nextErrors.email = "Add an email address so I know where to respond.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "That email looks incomplete. Please check it once more.";
    }
    if (!subject) nextErrors.subject = "Give your idea a short working title.";
    if (!message) {
      nextErrors.message = "Share the goal, the challenge, or where you need help.";
    } else if (message.length < 20) {
      nextErrors.message = "A little more context will help me give you a useful reply.";
    }

    return nextErrors;
  };

  const clearError = (field: ContactField) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors = validate(data);

    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      setErrors(nextErrors);
      const firstInvalid = event.currentTarget.querySelector<HTMLElement>(
        `[name="${Object.keys(nextErrors)[0]}"]`,
      );
      firstInvalid?.focus();
      return;
    }

    setErrors({});
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(
      `Hi Kamal,\n\n${String(data.get("message") || "")}\n\nFrom: ${String(data.get("name") || "")}\nEmail: ${String(data.get("email") || "")}`,
    );
    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <motion.main
      className="page contact-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contact / Open to the right challenge</p>
          <h1>
            Let&apos;s make
            <br />
            <span className="outline-text">something matter.</span>
          </h1>
          <p>
            Tell me what you are building, what is stuck, or where you want to
            go next. I read every message.
          </p>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.65 }}
        >
          <div className="form-row">
            <label className={errors.name ? "field-error" : ""}>
              Your name
              <input
                name="name"
                type="text"
                placeholder="Jane Smith"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                onChange={() => clearError("name")}
              />
              {errors.name && (
                <span className="validation-message" id="name-error">
                  <AlertCircle size={14} /> {errors.name}
                </span>
              )}
            </label>
            <label className={errors.email ? "field-error" : ""}>
              Email address
              <input
                name="email"
                type="email"
                placeholder="jane@company.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={() => clearError("email")}
              />
              {errors.email && (
                <span className="validation-message" id="email-error">
                  <AlertCircle size={14} /> {errors.email}
                </span>
              )}
            </label>
          </div>
          <label className={errors.subject ? "field-error" : ""}>
            What are you working on?
            <input
              name="subject"
              type="text"
              placeholder="A product, platform, or ambitious idea"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              onChange={() => clearError("subject")}
            />
            {errors.subject && (
              <span className="validation-message" id="subject-error">
                <AlertCircle size={14} /> {errors.subject}
              </span>
            )}
          </label>
          <label className={errors.message ? "field-error" : ""}>
            Give me the useful context
            <textarea
              name="message"
              rows={7}
              placeholder="The problem, the goal, and where I can help..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              onChange={() => clearError("message")}
            />
            {errors.message && (
              <span className="validation-message" id="message-error">
                <AlertCircle size={14} /> {errors.message}
              </span>
            )}
          </label>
          <button className="button button-primary" type="submit">
            {sent ? <Check size={18} /> : <ArrowUpRight size={18} />}
            {sent ? "Opening your email app" : "Send project brief"}
          </button>
          <small>No forms disappearing into a CRM. This opens your email app.</small>
        </motion.form>
      </section>
    </motion.main>
  );
}

function Footer({ navigate }: { navigate: (route: Route) => void }) {
  return (
    <footer className="footer">
      <div className="footer-identity">
        <RouteLink to="/" navigate={navigate} className="footer-name">
          Kamal Kiran Polisetty
        </RouteLink>
        <p>Engineering digital products with clarity.</p>
      </div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}

function NotFoundPage({ navigate }: { navigate: (route: Route) => void }) {
  return (
    <motion.main
      className="page not-found-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="not-found-inner section-shell">
        <motion.p className="eyebrow" variants={reveal} initial="hidden" animate="visible">
          Error · 404
        </motion.p>
        <motion.h1
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.08 }}
        >
          <span>Page not</span>
          <span className="outline-text">found.</span>
        </motion.h1>
        <motion.p
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          This URL doesn't exist or was moved somewhere else.
        </motion.p>
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.22 }}
          className="not-found-actions"
        >
          <button className="button button-primary" onClick={() => navigate("/")}>
            Go home <ArrowRight size={18} />
          </button>
          <button className="button button-ghost" onClick={() => navigate("/work")}>
            View work <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </motion.main>
  );
}

function App() {
  const { route, navigate } = useRoute();
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    return saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
    const faviconHref = theme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
    document.querySelectorAll<HTMLLinkElement>(
      'link[rel="icon"], link[rel="apple-touch-icon"]'
    ).forEach((link) => {
      link.href = faviconHref;
    });
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const titles: Record<Route, string> = {
      "/": "Kamal Kiran Polisetty",
      "/work": "Work · Kamal Kiran Polisetty",
      "/about": "About · Kamal Kiran Polisetty",
      "/contact": "Contact · Kamal Kiran Polisetty",
      "/404": "404 · Kamal Kiran Polisetty",
    };
    document.title = titles[route] ?? "Kamal Kiran Polisetty";
  }, [route]);

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <CursorGlow />
      <Header
        route={route}
        navigate={navigate}
        theme={theme}
        toggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
      />
      <AnimatePresence mode="wait">
        {route === "/" && <HomePage key="home" navigate={navigate} />}
        {route === "/work" && <WorkPage key="work" navigate={navigate} />}
        {route === "/about" && <AboutPage key="about" navigate={navigate} />}
        {route === "/contact" && <ContactPage key="contact" />}
        {route === "/404" && <NotFoundPage key="404" navigate={navigate} />}
      </AnimatePresence>
      {route !== "/404" && <Footer navigate={navigate} />}
    </div>
  );
}

export default App;
