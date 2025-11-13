import { motion } from "framer-motion";
import "./App.css";

// SECTION ANIMATIONS
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

// SENTENCE / TEXT ANIMATIONS
const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09, // delay between lines
    },
  },
};

const textDrop = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // slight bounce
    },
  },
};

const textFloat = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// PROJECT DATA
const projects = [
  {
    tag: "Project 01 – FHIR & EHR DATA",
    title: "FHIR-Based Patient Viewer",
    desc: "Streamlit application that renders FHIR patient resources, timelines, and clinical summaries using HL7 FHIR standards.",
    highlights: [
      "Mapped ICD-10, SNOMED CT, and LOINC concepts to FHIR resources.",
      "Implemented validation checks against FHIR JSON schemas.",
      "Enhanced understanding of interoperability and clinical coding.",
    ],
    cta: {
      label: "Open live application",
      href: "https://fhir-patient-viewer-quecxutpmmplutrz24frpl.streamlit.app/",
    },
  },
  {
    tag: "Project 02 – HEALTH ANALYTICS",
    title: "Tableau Health Analytics Dashboard",
    desc: "Interactive Tableau dashboards using clinical and survey datasets to explore healthcare expenditure and chronic disease patterns.",
    highlights: [
      "Designed KPI tiles, filter panels, drill-down views, and regional breakdowns.",
      "Focused on diabetes, hypertension, and multi-morbidity patterns.",
      "Optimised layouts for clinical leaders and non-technical stakeholders.",
    ],
    cta: {
      label: "Tableau link (coming soon)",
      href: "#projects",
    },
  },
  {
    tag: "Project 03 – PREDICTIVE MODELLING",
    title: "Health Risk Classification Model",
    desc: "Deep learning models that estimate health-related risk from survey and clinical variables, benchmarked against logistic regression.",
    highlights: [
      "Experimented with multiple neural-network architectures.",
      "Evaluated performance using accuracy and confusion matrices.",
      "Documented findings in a reproducible notebook and written report.",
    ],
    cta: {
      label: "GitHub repository (coming soon)",
      href: "#projects",
    },
  },
];

function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <span className="nav-logo">JIGNESHKUMAR PATEL</span>
          <span className="nav-tagline">
            Health Informatics · Clinical Pharmacy · Data &amp; AI
          </span>
        </div>
        <nav className="nav-links">
          <a href="#hero">Portfolio</a>
          <a href="#toc">Contents</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <motion.section
        id="hero"
        className="section section-hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-left">
          <motion.p
            className="hero-eyebrow"
            variants={textFloat}
            initial="hidden"
            animate="visible"
          >
            PROFESSIONAL PORTFOLIO · HEALTH INFORMATICS · AI · DATA
          </motion.p>

          <motion.div
            className="hero-title-block"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-title" variants={textDrop}>
              <span>MY</span>
              <span>PORTFOLIO</span>
            </motion.div>

            <motion.p className="hero-subtitle" variants={textFloat}>
              Graduate student in Health Informatics with a foundation in
              clinical pharmacy. I work at the intersection of FHIR, EHR data,
              predictive modelling, and visual analytics to support informed
              clinical and organisational decisions.
            </motion.p>
          </motion.div>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="/docs/JIGNESH_CV.pdf"
              download
            >
              Download Resume
            </a>
            <a className="btn btn-ghost" href="#projects">
              View Project Portfolio
            </a>
          </div>
        </div>

        <motion.div
          className="hero-right"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
          transition={{ duration: 0.9, delay: 0.15 }}
          whileHover={{ scale: 1.03, rotate: 1.2 }}
        >
          <div className="hero-photo-frame photo-float-long">
            <img
              src="/images/profile-hero.png"
              alt="Jigneshkumar Patel"
              className="hero-photo"
            />
          </div>
        </motion.div>

        <div className="hero-monogram">J</div>
      </motion.section>

      {/* TABLE OF CONTENTS */}
      <motion.section
        id="toc"
        className="section section-toc"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">PORTFOLIO OVERVIEW</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            TABLE OF CONTENTS
          </motion.h2>
          <motion.p className="body-text" variants={textFloat}>
            A structured overview of the main sections in this portfolio,
            including summary, education, competencies, experience, and project
            work.
          </motion.p>
        </motion.div>

        <div className="toc-layout">
          <div className="toc-photo-frame photo-float">
            <img
              src="/images/profile-intro.png"
              alt="Professional portrait"
              className="toc-photo"
            />
          </div>

          <div className="toc-buttons">
            <a href="#intro" className="toc-pill">
              Professional Summary
            </a>
            <a href="#about" className="toc-pill">
              Career Narrative
            </a>
            <a href="#education" className="toc-pill">
              Education
            </a>
            <a href="#skills" className="toc-pill">
              Core Competencies
            </a>
            <a href="#experience" className="toc-pill">
              Professional Experience
            </a>
            <a href="#projects" className="toc-pill">
              Selected Projects
            </a>
            <a href="#gallery" className="toc-pill">
              Project Overview
            </a>
            <a href="#contact" className="toc-pill">
              Contact &amp; Next Steps
            </a>
          </div>
        </div>
      </motion.section>

      {/* INTRO */}
      <motion.section
        id="intro"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeRight}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">PROFESSIONAL SUMMARY</div>

        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            SUMMARY PROFILE.
          </motion.h2>
        </motion.div>

        <div className="two-col">
          <motion.p
            className="body-text"
            variants={textFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            I am a Health Informatics graduate student with a background in
            clinical pharmacy. I am interested in transforming complex
            healthcare data into clear, actionable insights through dashboards,
            predictive models, and standards-based solutions. My work spans FHIR
            APIs, EHR data structures, SQL, Python, and Tableau, with a strong
            focus on quality, safety, and patient-centred outcomes.
          </motion.p>

          <div className="mini-card">
            <div className="mini-chip">Profile Snapshot</div>
            <ul className="mini-list">
              <li>MS Health Informatics · University of North Texas</li>
              <li>Clinical pharmacist experience in hospital settings</li>
              <li>Strong interest in analytics, AI, and health IT solutions</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">CAREER NARRATIVE</div>

        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            CLINICAL PHARMACY TO HEALTH INFORMATICS.
          </motion.h2>
        </motion.div>

        <div className="two-col two-col-reverse">
          <motion.div
            className="card"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.p className="body-text" variants={textFloat}>
              My clinical training in pharmacy provides a strong understanding
              of medication management, safety, and multidisciplinary
              collaboration. This clinical perspective helps me appreciate how
              technology must align with real-world workflows and patient needs.
            </motion.p>
            <motion.p className="body-text" variants={textFloat}>
              Through health informatics, I am building skills in data
              modelling, standards, analytics, and AI. I am particularly
              interested in solutions that combine FHIR, analytics, and
              user-centred design—such as patient viewers, KPI dashboards, and
              explainable risk-prediction tools that clinicians can trust and
              use.
            </motion.p>
          </motion.div>

          <div className="card card-highlight">
            <div className="mini-chip">Key Focus Areas</div>
            <ul className="mini-list">
              <li>FHIR / HL7 and clinical data standards</li>
              <li>Dashboards and KPI design for clinical teams</li>
              <li>Predictive modelling and deep learning</li>
              <li>Healthcare quality, safety, and utilisation analytics</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">EDUCATION</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            FORMAL EDUCATION.
          </motion.h2>
        </motion.div>

        <div className="edu-grid">
          <div className="card">
            <div className="edu-degree">
              Master of Science in Health Informatics
            </div>
            <div className="edu-meta">University of North Texas · USA</div>
            <p className="edu-body">
              Coursework in clinical data standards, health information systems,
              data analytics, database design, and AI in healthcare, with
              emphasis on applied projects and decision support.
            </p>
          </div>
          <div className="card">
            <div className="edu-degree">Bachelor of Pharmacy</div>
            <div className="edu-meta">
              Gujarat Technological University · India
            </div>
            <p className="edu-body">
              Comprehensive foundation in pharmacotherapy, medication safety,
              clinical pharmacy, and patient counselling, combined with
              experience in hospital pharmacy practice.
            </p>
          </div>
        </div>

        {/* CERTIFICATIONS STRIP */}
        <div className="cert-strip">
          <div className="pill-heading">Selected Certifications</div>
          <div className="cert-buttons-row">
            <a
              className="btn btn-chip btn-chip-live"
              href="/docs/SQL_Certificate.pdf"
              target="_blank"
              rel="noreferrer"
            >
              SQL Certification
            </a>
            <a
              className="btn btn-chip btn-chip-live"
              href="/docs/duke_university_Human_factors_in_AI.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Human Factors in AI · Duke
            </a>
            <a
              className="btn btn-chip btn-chip-live"
              href="/docs/stanford_introduction_to_clinical_data_certificate.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Intro to Clinical Data · Stanford
            </a>
          </div>
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">CORE COMPETENCIES</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            TECHNICAL AND PROFESSIONAL SKILLS.
          </motion.h2>
        </motion.div>

        <div className="skills-grid">
          <div className="card">
            <div className="pill-heading">Technical</div>
            <ul className="mini-list">
              <li>Python, SQL, FHIR, EHR data models, and ETL pipelines</li>
              <li>Predictive modelling and neural networks</li>
              <li>Tableau dashboards and data visualisation</li>
            </ul>
          </div>
          <div className="card">
            <div className="pill-heading">Analytical</div>
            <ul className="mini-list">
              <li>Problem framing and hypothesis-driven analysis</li>
              <li>KPI design, evaluation metrics, and experiment planning</li>
              <li>Clinical workflow analysis and optimisation</li>
            </ul>
          </div>
          <div className="card">
            <div className="pill-heading">Professional</div>
            <ul className="mini-list">
              <li>Collaboration with clinicians, data teams, and IT staff</li>
              <li>Stakeholder engagement and training support</li>
              <li>Clear communication to technical and non-technical audiences</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">PROFESSIONAL EXPERIENCE</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            EXPERIENCE SUMMARY.
          </motion.h2>
        </motion.div>

        <div className="experience-grid">
          <div className="card">
            <div className="pill-heading">Clinical / Pharmacy</div>
            <p className="body-text">
              Experience in medication management, patient counselling, and
              collaboration with multidisciplinary teams in hospital
              environments, with a strong focus on safety and patient outcomes.
            </p>
          </div>
          <div className="card">
            <div className="pill-heading">Data &amp; Analytics Projects</div>
            <p className="body-text">
              Developed models and dashboards using FHIR and health data to
              explore utilisation, risk, and outcomes across clinical
              populations, always linked to meaningful use cases.
            </p>
          </div>
          <div className="card">
            <div className="pill-heading">Academic &amp; Research Work</div>
            <p className="body-text">
              Participated in projects involving clinical datasets,
              AI-supported diagnostics, and health informatics research,
              accompanied by written reports, presentations, and stakeholder
              discussions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* SELECTED PROJECTS */}
      <motion.section
        id="projects"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">PROJECT PORTFOLIO</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            SELECTED PROJECTS.
          </motion.h2>
          <motion.p className="body-text body-muted" variants={textFloat}>
            A selection of projects at the intersection of clinical context,
            data engineering, and analytics, highlighting interoperability,
            dashboards, and predictive models.
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="card project-card card-pop"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotate: 0.5,
                transition: { type: "spring", stiffness: 230, damping: 18 },
              }}
            >
              <div className="project-tag">{p.tag}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <ul className="mini-list">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <a
                className={`btn btn-chip ${
                  p.cta.href.startsWith("http")
                    ? "btn-chip-live"
                    : "btn-chip-muted"
                }`}
                href={p.cta.href}
                target={p.cta.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
              >
                {p.cta.label}
              </a>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* PROJECT GALLERY */}
      <motion.section
        id="gallery"
        className="section section-gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">PROJECT OVERVIEW</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            VISUAL SUMMARY OF PROJECTS.
          </motion.h2>
        </motion.div>

        <div className="gallery-layout">
          <div className="gallery-photo-frame photo-float-long">
            <img
              src="/images/profile-project.png"
              alt="Project-focused portrait"
              className="gallery-photo"
            />
          </div>

          <div className="gallery-cards">
            {projects.map((p) => (
              <div key={p.title} className="card gallery-card">
                <div className="pill-heading">{p.tag}</div>
                <h3 className="gallery-title">{p.title}</h3>
                <p className="gallery-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">CONTACT</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            CONNECT WITH ME.
          </motion.h2>
        </motion.div>

        <div className="two-col">
          <motion.div
            className="card"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.p className="body-text" variants={textFloat}>
              I welcome opportunities to discuss health informatics, healthcare
              analytics, AI in clinical workflows, and related roles. If you
              are exploring positions in health data, informatics, or
              data-driven quality initiatives, I would be pleased to connect.
            </motion.p>
            <ul className="mini-list contact-list">
              <li>
                Email:{" "}
                <a href="mailto:jsp221122@gmail.com">
                  jsp221122@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/jigneshkumar-patel-54bab335b"
                  target="_blank"
                  rel="noreferrer"
                >
                  /in/jigneshkumar-patel-54bab335b
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/Jigs15"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Jigs15
                </a>
              </li>
            </ul>
          </motion.div>

          <div className="card card-highlight">
            <div className="pill-heading">Roles of Interest</div>
            <p className="body-text">
              Health Informatics, Healthcare Data Analyst, Clinical Data
              Scientist, Medical AI initiatives, and roles that connect
              clinicians, data teams, and product or operations groups.
            </p>
          </div>
        </div>
      </motion.section>

      {/* THANK YOU */}
      <motion.section
        id="thanks"
        className="section section-thanks"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">CLOSING</div>
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2 className="section-title" variants={textDrop}>
            THANK YOU FOR REVIEWING THIS PORTFOLIO.
          </motion.h2>
          <motion.p className="body-text body-muted" variants={textFloat}>
            Thank you for taking the time to review my work and background. I
            look forward to potential conversations about how my skills and
            experience can contribute to your team and organisation.
          </motion.p>
        </motion.div>

        <div className="thanks-layout">
          <div className="thanks-text">
            <a className="btn btn-primary" href="mailto:jsp221122@gmail.com">
              Contact Me
            </a>
          </div>
          <div className="thanks-photo-frame photo-float">
            <img
              src="/images/profile-thank_you.png"
              alt="Professional portrait"
              className="thanks-photo"
            />
          </div>
        </div>

        <footer className="footer">
          © {new Date().getFullYear()} Jigneshkumar Patel · Health Informatics
          Portfolio
        </footer>
      </motion.section>
    </div>
  );
}

export default App;
