import Image from "next/image";
import { ArrowLink } from "./components/ArrowLink";
import { ContactSection } from "./components/ContactSection";
import { ExperienceEntry } from "./components/ExperienceEntry";
import { Header } from "./components/Header";
import { SectionIntro } from "./components/SectionIntro";
import { WorkSection } from "./components/WorkSection";
import { experience, featuredTech, projects, techGroups } from "./data/portfolio";

export default function Home() {
  return (
    <div id="top" className="site-frame">
      <Header />

      <main>
        <section className="editorial-container hero-section" aria-labelledby="hero-heading">
          <div className="hero-topline">
            <p className="hero-status"><span aria-hidden="true" />Web Developer</p>
            <p>Portfolio / 2026</p>
          </div>

          <div className="hero-stage">
            <div className="hero-portrait-stage">
              <p className="hero-greeting">Hi, I&apos;m Ian.</p>

              <div className="hero-portrait" aria-label="Portrait of Ian Dagos">
                <Image
                  src="/images/hero/ianblue0.jpg"
                  alt="Ian Dagos"
                  fill
                  priority
                  sizes="(max-width: 800px) 92vw, 52vw"
                />
              </div>
            </div>

            <div className="hero-role-block">
              <p className="eyebrow">Web developer</p>
              <h1 id="hero-heading" className="hero-heading">
                Building thoughtful <em>digital experiences.</em>
              </h1>
              <p className="hero-description">
                I create responsive websites, web applications, and practical digital products.
              </p>
              <div className="hero-actions">
                <ArrowLink href="#work" variant="solid">View projects</ArrowLink>
                <ArrowLink href="#about" variant="text">About me</ArrowLink>
              </div>
            </div>

            <nav className="hero-quick-links" aria-label="Hero links">
              <a href="https://github.com/naisogad" target="_blank" rel="noopener noreferrer">
                Github<span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/ian-dagos/" target="_blank" rel="noopener noreferrer">
                LinkedIn<span aria-hidden="true">↗</span>
              </a>
              <a href="https://m.me/ian.dagos" target="_blank" rel="noopener noreferrer">
                Messenger<span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>

          <div className="hero-scroll-cue" aria-hidden="true">
            <span className="hero-scroll-line" />
            <span className="hero-scroll-dot" />
            <span>Scroll to explore</span>
          </div>
        </section>

        <section id="about" className="editorial-container section-block about-section" aria-labelledby="about-heading">
          <div className="section-ghost-word" aria-hidden="true">ABOUT</div>
          <SectionIntro
            index="01"
            eyebrow="About"
            title="A web developer with a computer science foundation and a practical way of working."
            titleId="about-heading"
          />

          <div className="about-detail-grid">
            <div className="about-journey">
              <p className="about-sub-label">My journey</p>
              <div className="about-journey-copy">
                <p>
                  I&apos;m a Computer Science graduate and web developer focused on building practical
                  websites and applications. My work includes Gunita, custom wedding websites, and a
                  point-of-sale mobile application.
                </p>
                <p>
                  I enjoy working through the full shape of a project—from understanding the requirement
                  to implementation and client-facing delivery. AI-assisted tools are part of my workflow,
                  supporting the work rather than defining it.
                </p>
              </div>

              <div className="about-expertise">
                <p className="about-sub-label">Expertise</p>
                <ul className="about-expertise-list">
                  {["Web Development", "Custom Websites", "Web Applications", "Software Engineering", "Client-Facing Delivery", "AI-Assisted Workflow"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="about-education">
              <p className="about-sub-label">Education &amp; background</p>
              <article className="about-info-card">
                <div className="about-info-card-top">
                  <span className="about-info-icon" aria-hidden="true">✦</span>
                  <span>2017</span>
                </div>
                <h3>Bachelor of Science in Computer Science</h3>
                <p>AMA Computer College Lucena</p>
                <small>Computer Science graduate</small>
              </article>
            </div>
          </div>
        </section>

        <section id="tech-stack" className="editorial-container section-block tech-section" aria-labelledby="tech-heading">
          <div className="tech-ghost-word" aria-hidden="true">TECH STACK</div>
          <SectionIntro
            index="02"
            eyebrow="Tech stack"
            title="The tools behind the work."
            description="A practical stack for building complete websites, applications, and systems from frontend to delivery."
            titleId="tech-heading"
          />

          <p className="sr-only">Selected tools: {featuredTech.map((technology) => technology.name).join(", ")}</p>
          <div className="tech-marquee" aria-hidden="true">
            <div className="tech-marquee-track">
              {[...featuredTech, ...featuredTech].map((technology, index) => (
                <span className="tech-marquee-item" key={`${technology.name}-${index}`}>
                  <span className="tech-mark">{technology.mark}</span>
                  {technology.name}
                </span>
              ))}
            </div>
          </div>

          <div className="tech-list">
            {techGroups.map((group) => (
              <article className="tech-card" key={group.label}>
                <div className="tech-card-heading">
                  <h3>{group.label}</h3>
                  <span>{String(group.items.length).padStart(2, "0")}</span>
                </div>
                <ul className="tech-pills">
                  {group.items.map((item) => (
                    <li className="tech-pill" key={item.name}>
                      <span className="tech-mark">{item.mark}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <WorkSection projects={projects} />

        <section id="experience" className="editorial-container section-block experience-section" aria-labelledby="experience-heading">
          <div className="experience-panel">
            <div className="experience-panel-ghost" aria-hidden="true">EXPERIENCE</div>
            <div className="experience-panel-topline">
              <p className="experience-panel-kicker"><span aria-hidden="true" />Career</p>
              <p className="experience-panel-count">Two confirmed roles</p>
            </div>
            <div className="experience-panel-intro">
              <h2 id="experience-heading">Where I&apos;ve worked and what I&apos;ve built.</h2>
              <p>Independent product work and teaching, from project requirements through implementation and delivery.</p>
            </div>

            <div className="experience-list">
              {experience.map((entry, index) => <ExperienceEntry key={entry.id} entry={entry} index={index} />)}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <footer className="editorial-container site-footer">
        <span>Ian Dagos</span>
        <span>Web Developer</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
