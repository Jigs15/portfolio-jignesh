import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const dropIn = {
  hidden: { opacity: 0, y: -80 },
  visible: { opacity: 1, y: 0 },
};

const jumpIn = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 18 },
  },
};

const wrapIn = {
  hidden: { opacity: 0, rotate: -6, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

function App() {
  return (
    <div className="bg-gradient-to-b from-[#050608] via-[#090914] to-[#020106] text-[#fdf3dd] min-h-screen scroll-smooth">
      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-30 bg-gradient-to-b from-black/90 to-black/40 backdrop-blur border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 text-xs md:text-sm">
          <span className="tracking-[0.25em] font-semibold uppercase">
            JIGNESHKUMAR PATEL
          </span>
          <div className="hidden md:flex gap-4 text-[0.8rem]">
            <a href="#portfolio" className="hover:text-[#ffdd99]">
              Portfolio
            </a>
            <a href="#toc" className="hover:text-[#ffdd99]">
              Contents
            </a>
            <a href="#projects" className="hover:text-[#ffdd99]">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#ffdd99]">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* 1. PORTFOLIO COVER – CENTERED HEADLINE + LARGE PHOTO */}
      <section
        id="portfolio"
        className="min-h-[100vh] flex items-center px-6 py-12"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.4fr,1.6fr] gap-16 items-center">
          {/* Left: centered PORT / FOLIO text */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-[#d0c7b5] mb-4">
              Creative Presentation
            </p>

            <div className="inline-block">
              <div className="leading-[0.9]">
                <h1 className="block text-[3rem] sm:text-[3.5rem] md:text-[4.6rem] font-extrabold text-[#f5e1bf]">
                  PORT
                </h1>
                <h1 className="block text-[3rem] sm:text-[3.5rem] md:text-[4.6rem] font-extrabold text-[#f5e1bf] mt-1">
                  FOLIO
                </h1>
              </div>

              {/* pill BELOW text */}
              <div className="mt-5 inline-flex">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-[#f5e1bf33] blur-md" />
                  <div className="relative border border-[#f5e1bf66] rounded-full px-6 py-2 text-[0.65rem] tracking-[0.3em] uppercase text-[#f5e1bfcc] bg-black/40">
                    HEALTH INFORMATICS · AI · DATA
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm md:text-base text-[#eaddc7]/90 max-w-md">
              MS Health Informatics · Clinical Pharmacy background · focused on
              FHIR, EHR data, predictive models, and visual storytelling for
              healthcare.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs md:text-sm">
              <a
                href="/docs/JIGNESH_CV.pdf"
                download
                className="px-5 py-2 rounded-full bg-[#f5e1bf] text-black font-semibold tracking-wide hover:bg-white transition shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                Download Resume
              </a>

              <a
                href="#credentials"
                className="px-5 py-2 rounded-full border border-[#f5e1bf99] text-[#f5e1bf] hover:bg-[#f5e1bf22] tracking-wide transition"
              >
                View Certificates
              </a>
            </div>
          </motion.div>

          {/* Right: larger responsive PHOTO */}
          <motion.div
            variants={wrapIn}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end h-full"
          >
            {/* glow */}
            <div className="absolute inset-0 flex justify-end items-center pointer-events-none">
              <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-[32vw] lg:h-[72vh] max-w-[480px] max-h-[560px] rounded-[3.2rem] bg-gradient-to-br from-[#f5e1bf33] via-[#f5e1bf11] to-transparent blur-3xl translate-x-4 translate-y-2" />
            </div>

            {/* image card */}
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-[32vw] lg:h-[72vh] max-w-[480px] max-h-[560px] rounded-[3.2rem] overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.9)] border border-white/5 bg-black/40">
              <img
                src="/images/profile-hero.png"
                alt="Jigneshkumar Patel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-xs">
                <p className="uppercase tracking-[0.22em] text-[#f5e1bfcc]">
                  Jigneshkumar Patel
                </p>
                <p className="text-[0.7rem] text-[#eaddc7bb]">
                  Health Informatics · Data & AI
                </p>
              </div>
            </div>

            {/* big J in back */}
            <div className="absolute -left-12 -top-10 text-[8rem] font-extrabold text-[#f5e1bf0f] tracking-[0.2em] select-none">
              J
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TABLE OF CONTENTS */}
      <motion.section
        id="toc"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20 border-y border-white/8"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-[#d0c7b5] mb-3">
              Creative Presentation
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-none">
              TABLE OF
              <br />
              CONTENTS
            </h2>
            <p className="mt-5 text-sm text-[#eaddc7]/80 max-w-md md:max-w-sm mx-auto md:mx-0">
              A slide-style walkthrough of my story: introduction, education,
              skills, experience, projects, and how to connect.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
            {[
              ["#introduction", "Introduction"],
              ["#about", "About me"],
              ["#education", "Education"],
              ["#skills", "Personal skill"],
              ["#experience", "Experience"],
              ["#credentials", "Resume & certificates"],
              ["#projects", "Project portfolio"],
              ["#project1", "First project"],
              ["#project2", "Second project"],
              ["#project3", "Third project"],
              ["#contact", "Contact"],
              ["#thankyou", "Thank you"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="border border-[#f2d7aa]/70 rounded-full px-4 py-2 text-center hover:bg-[#f2d7aa] hover:text-black transition"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. INTRODUCTION */}
      <motion.section
        id="introduction"
        className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-[3fr,2fr] gap-10 items-center"
      >
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#d0c7b5] mb-3 text-center md:text-left">
            Introduction
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            INTRODUCTION
          </h2>
          <p className="text-sm md:text-base text-[#eaddc7]/85 leading-relaxed">
            I&apos;m Jigneshkumar Patel, a Health Informatics graduate student
            with a clinical pharmacy background. I love combining clinical
            knowledge with data to create tools that feel intuitive for
            healthcare professionals.
          </p>
        </motion.div>

        <motion.div
          variants={dropIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="absolute -top-6 w-44 h-44 rounded-full bg-[#ffdd9955] blur-3xl" />
          <div className="relative w-64 h-84 sm:w-72 sm:h-96 rounded-[2.4rem] overflow-hidden shadow-[0_24px_55px_rgba(0,0,0,0.85)] border border-white/5 bg-black/40">
            <img
              src="/images/profile-intro.png"
              alt="Jignesh introduction"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* 4. ABOUT ME */}
      <motion.section
        id="about"
        variants={wrapIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20 border-y border-white/8"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#1b130b] via-[#090909] to-[#11151c] px-6 md:px-10 py-10">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#ffdd9977] blur-3xl opacity-40" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center md:text-left">
            ABOUT ME
          </h2>
          <p className="text-sm md:text-base text-[#fdf3dd]/90 max-w-3xl leading-relaxed">
            With a foundation in pharmacy and graduate training in health
            informatics, I navigate both clinical and technical domains.
            I&apos;m comfortable working with FHIR, EHR data models, SQL,
            Python, and visualization tools like Tableau to build solutions that
            support clinicians, analysts, and leaders.
          </p>
        </div>
      </motion.section>

      {/* 5. EDUCATION */}
      <motion.section
        id="education"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-24"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          EDUCATION
        </h2>
        <div className="grid md:grid-cols-[2fr,3fr] gap-10">
          <div className="space-y-6 text-sm md:text-base">
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-[#ffdd99]" />
              <div>
                <p className="font-semibold">MS Health Informatics</p>
                <p className="text-xs uppercase tracking-wide text-[#d0c7b5]">
                  University of North Texas
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-[#ffdd99]" />
              <div>
                <p className="font-semibold">Bachelor of Pharmacy</p>
                <p className="text-xs uppercase tracking-wide text-[#d0c7b5]">
                  Gujarat Technological University
                </p>
              </div>
            </div>
          </div>
          <div className="text-xs md:text-sm text-[#eaddc7]/80 space-y-3">
            <p>
              Coursework: clinical data standards, health information systems,
              data analytics, database design, AI in healthcare, and research
              methods.
            </p>
            <p>
              I enjoy bridging the gap between clinical reasoning and technical
              implementation, especially in projects involving FHIR, EHRs, and
              predictive modeling.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 6. PERSONAL SKILLS */}
      <motion.section
        id="skills"
        variants={jumpIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          PERSONAL SKILLS
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base">
          {[
            {
              title: "Technical",
              body: "Python, SQL, FHIR, EHR data models, predictive modeling, Tableau dashboards, ETL pipelines.",
            },
            {
              title: "Analytical",
              body: "Problem solving, data storytelling, KPI design, clinical workflow analysis, and experiment design.",
            },
            {
              title: "Professional",
              body: "Cross-functional communication, stakeholder collaboration, mentoring peers, clear presentations.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl border border-[#f2d7aa]/35 bg-gradient-to-br from-[#f2d7aa1a] via-[#00000040] to-[#111111] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.7)]"
            >
              <h3 className="font-semibold mb-2 text-[#ffdd99]">
                {item.title}
              </h3>
              <p className="text-[#eaddc7]/85">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 7. WORK EXPERIENCE */}
      <motion.section
        id="experience"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20 border-y border-white/8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          WORK EXPERIENCE
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm md:text-base text-[#eaddc7]/85">
          <div>
            <p className="font-semibold">Clinical / Pharmacy</p>
            <p className="mt-1">
              Exposure to medication management, patient counseling, and
              collaboration with healthcare teams.
            </p>
          </div>
          <div>
            <p className="font-semibold">Data & Analytics</p>
            <p className="mt-1">
              Built models and dashboards using EHR and health datasets to
              explore risk, utilization, and outcomes.
            </p>
          </div>
          <div>
            <p className="font-semibold">Academic & Research</p>
            <p className="mt-1">
              Projects involving clinical datasets, AI-assisted diagnostics, and
              health informatics research questions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 8. RESUME & CERTIFICATES */}
      <motion.section
        id="credentials"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          RESUME & CERTIFICATES
        </h2>

        <div className="grid md:grid-cols-[2fr,3fr] gap-10 items-start">
          {/* Resume card */}
          <div className="rounded-2xl border border-[#f2d7aa66] bg-gradient-to-br from-[#f2d7aa1a] via-[#00000040] to-[#111111] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.7)]">
            <p className="text-xs tracking-[0.25em] uppercase text-[#d0c7b5] mb-2">
              Resume
            </p>
            <p className="font-semibold text-sm md:text-base mb-2">
              Curriculum Vitae – Jigneshkumar Patel
            </p>
            <p className="text-xs md:text-sm text-[#eaddc7]/85 mb-4">
              Detailed overview of my education, experience, technical skills,
              and projects in health informatics and clinical practice.
            </p>
            <a
              href="/docs/JIGNESH_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5e1bf] text-black text-xs md:text-sm font-semibold tracking-wide hover:bg-white transition"
            >
              Download Resume
              <span className="text-[0.7rem]">⬇</span>
            </a>
          </div>

          {/* Certificates grid */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-[#d0c7b5] mb-3">
              Certificates
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs md:text-sm">
              <a
                href="/docs/duke_university_Human_factors_in_AI.pdf"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[#f2d7aa55] bg-[#050608]/60 px-4 py-3 hover:bg-[#f2d7aa12] hover:border-[#ffdd99] transition"
              >
                <p className="font-semibold mb-1">Human Factors in AI</p>
                <p className="text-[0.7rem] text-[#eaddc7b3]">
                  Duke University · View credential
                </p>
              </a>

              <a
                href="/docs/stanford_introduction_to_clinical_data_certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[#f2d7aa55] bg-[#050608]/60 px-4 py-3 hover:bg-[#f2d7aa12] hover:border-[#ffdd99] transition"
              >
                <p className="font-semibold mb-1">
                  Intro to Clinical Data
                </p>
                <p className="text-[0.7rem] text-[#eaddc7b3]">
                  Stanford University · View credential
                </p>
              </a>

              <a
                href="/docs/SQL_Certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-[#f2d7aa55] bg-[#050608]/60 px-4 py-3 hover:bg-[#f2d7aa12] hover:border-[#ffdd99] transition"
              >
                <p className="font-semibold mb-1">SQL Certification</p>
                <p className="text-[0.7rem] text-[#eaddc7b3]">
                  Data querying & analysis · View credential
                </p>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. PROJECT PORTFOLIO */}
      <motion.section
        id="projects"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-24"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          PROJECT PORTFOLIO
        </h2>
        <div className="grid md:grid-cols-[3fr,2fr] gap-10 items-center">
          <div>
            <p className="text-sm md:text-base text-[#eaddc7]/85 text-center md:text-left">
              Work at the intersection of{" "}
              <span className="font-semibold">FHIR, EHR data, dashboards,</span>{" "}
              and <span className="font-semibold">predictive modeling.</span>{" "}
              Click a card to jump to its slide.
            </p>

            <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs md:text-sm">
              {[
                {
                  href: "#project1",
                  label: "Project 01",
                  title: "FHIR-Based EHR Integration",
                  body: "Mapping clinical data into HL7 FHIR resources for interoperability.",
                },
                {
                  href: "#project2",
                  label: "Project 02",
                  title: "Tableau Health Dashboard",
                  body: "Interactive views of health expenditure and chronic disease trends.",
                },
                {
                  href: "#project3",
                  label: "Project 03",
                  title: "Health Risk Classifier",
                  body: "Deep learning model predicting patient risk scores from clinical features.",
                },
              ].map((card) => (
                <motion.a
                  key={card.label}
                  href={card.href}
                  whileHover={{ y: -6, rotate: -1.5 }}
                  className="group rounded-2xl border border-[#f2d7aa]/40 bg-gradient-to-br from-[#f2d7aa1a] via-[#f2d7aa08] to-transparent px-4 py-4 hover:border-[#ffdd99] hover:shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[#d0c7b5] mb-2">
                    {card.label}
                  </p>
                  <p className="font-semibold">{card.title}</p>
                  <p className="mt-1 text-[#eaddc7]/80">{card.body}</p>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            variants={jumpIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="absolute -inset-6 rounded-[2.6rem] bg-gradient-to-br from-[#ffdd9944] via-transparent to-transparent blur-3xl" />
            <div className="relative w-72 h-84 sm:w-80 sm:h-96 rounded-[2.4rem] overflow-hidden shadow-[0_22px_55px_rgba(0,0,0,0.9)] border border-white/5 bg-black/40">
              <img
                src="/images/profile-project.png"
                alt="Jignesh working"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 10. FIRST PROJECT */}
      <motion.section
        id="project1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          FIRST PROJECT – FHIR-BASED EHR DATA INTEGRATION
        </h2>
        <p className="text-sm md:text-base text-[#eaddc7]/85 mb-3 text-center md:text-left">
          Designed pipelines to map clinical data into HL7 FHIR resources,
          enabling structured exchange of patient, encounter, and observation
          data between systems.
        </p>
        <p className="text-sm md:text-base text-[#eaddc7]/80 text-center md:text-left">
          Focus areas: coding ICD-10, SNOMED CT, and LOINC concepts, cleaning
          EHR data, and validating resource schemas. This project strengthened
          my understanding of interoperability and clinical coding.
        </p>
        <div className="mt-3 text-center md:text-left">
          <a
            href="https://github.com/Jigs15/fhir-ehr-integration" // replace with your real link
            target="_blank"
            rel="noreferrer"
            className="inline-block text-xs md:text-sm text-[#ffdd99] underline"
          >
            View FHIR Integration Project
          </a>
        </div>
      </motion.section>

      {/* 11. SECOND PROJECT */}
      <motion.section
        id="project2"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20 border-y border-white/8"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          SECOND PROJECT – TABLEAU HEALTH DASHBOARD
        </h2>
        <p className="text-sm md:text-base text-[#eaddc7]/85 mb-3 text-center md:text-left">
          Built interactive Tableau dashboards using MEPS / clinical datasets to
          visualize national health expenditure, chronic disease patterns, and
          demographic trends.
        </p>
        <p className="text-sm md:text-base text-[#eaddc7]/80 mb-2 text-center md:text-left">
          Features include KPI tiles, filters, drill-down views, and region-wise
          summaries. The goal is to make data intuitive for non-technical
          stakeholders.
        </p>
        <div className="text-center md:text-left">
          <a
            href="https://public.tableau.com/views/YOUR_DASHBOARD_LINK" // replace with real Tableau URL
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-2 text-xs md:text-sm text-[#ffdd99] underline"
          >
            View Tableau Dashboard
          </a>
        </div>
      </motion.section>

      {/* 12. THIRD PROJECT */}
      <motion.section
        id="project3"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
          THIRD PROJECT – PREDICTIVE HEALTH RISK MODEL
        </h2>
        <p className="text-sm md:text-base text-[#eaddc7]/85 mb-3 text-center md:text-left">
          Developed a deep learning model to classify patient risk levels using
          structured clinical features. Tuned hyperparameters, applied
          regularization, and compared performance with baseline models.
        </p>
        <p className="text-sm md:text-base text-[#eaddc7]/80 text-center md:text-left">
          Evaluated the model using accuracy, precision, recall, and F1-score,
          and visualized results with confusion matrices and ROC curves to
          support clinical decision-making.
        </p>
        <div className="mt-3 text-center md:text-left">
          <a
            href="https://github.com/Jigs15/health-risk-classifier" // replace with your real link
            target="_blank"
            rel="noreferrer"
            className="inline-block text-xs md:text-sm text-[#ffdd99] underline"
          >
            View Predictive Model Notebook
          </a>
        </div>
      </motion.section>

      {/* 13. CONTACT */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">CONTACT</h2>
        <p className="text-sm md:text-base text-[#eaddc7]/85 mb-4">
          Let&apos;s connect about health informatics, data projects, or
          collaboration opportunities.
        </p>
        <div className="space-y-1 text-sm md:text-base">
          <p>
            Email:{" "}
            <a
              href="mailto:jsp221122@gmail.com"
              className="text-[#ffdd99] underline"
            >
              jsp221122@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/jigneshkumar-patel-54bab335b"
              target="_blank"
              rel="noreferrer"
              className="text-[#ffdd99] underline"
            >
              View LinkedIn Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/Jigs15"
              target="_blank"
              rel="noreferrer"
              className="text-[#ffdd99] underline"
            >
              View GitHub
            </a>
          </p>
        </div>
      </motion.section>

      {/* 14. THANK YOU */}
      <section
        id="thankyou"
        className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10"
      >
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#d0c7b5] mb-3">
            Creative Presentation
          </p>
          <h2 className="text-[3rem] md:text-[4rem] font-extrabold leading-none mb-4">
            THANK YOU
          </h2>
          <p className="text-sm md:text-base text-[#eaddc7]/85 max-w-md">
            Thanks for viewing my portfolio. Feel free to reach out if you&apos;d
            like to collaborate or discuss opportunities in health informatics
            and data science.
          </p>
        </motion.div>

        <motion.div
          variants={wrapIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.8rem] bg-gradient-to-tr from-[#ffdd9944] via-transparent to-transparent blur-3xl" />
            <div className="relative w-72 h-88 sm:w-80 sm:h-96 rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/5 bg-black/40">
              <img
                src="/images/profile-thank_you.png"
                alt="Jignesh smiling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
