const linkedinUrl = 'https://www.linkedin.com/in/tobias-friedrich-31b486191/';
const githubUrl = 'https://github.com/mauerflitzer';
const email = 'tobias.frieder@gmx.de';

const metrics = [
  { value: '7+', label: 'Years shipping software' },
  { value: '400K', label: 'Enterprise users served' },
  { value: 'AI', label: 'LLM and agentic systems' },
  { value: 'Cloud', label: 'Azure and SaaS integration' }
];

const expertise = [
  {
    icon: 'AI',
    title: 'Agentic AI Systems',
    description:
      'Designing end-to-end AI products that connect large language models, agent workflows, and real business processes, with Azure as the platform layer when scale and enterprise integration matter.',
    tags: ['LLM', 'Agents', 'RAG', 'Product AI', 'Azure']
  },
  {
    icon: 'CX',
    title: 'AI Consultancy',
    description:
      'Translating fuzzy AI opportunities into clear product paths, technical tradeoffs, and implementation plans that stakeholders and engineering teams can act on.',
    tags: ['Consulting', 'Discovery', 'Use Cases', 'Roadmaps']
  },
  {
    icon: 'TL',
    title: 'Technical Team Enablement',
    description:
      'Aligning small agile teams, stakeholders, and providers around clear architecture decisions and measurable delivery outcomes.',
    tags: ['Leadership', 'Consulting', 'Delivery', 'Strategy']
  }
];

const projects = [
  {
    title: 'Genie Platform',
    label: 'AI platform | Agentic systems',
    description:
      'Centralized platform to build, run, and scale GenAI solutions across HR IT. Teams create specialized Genies that automate workflows from user-story generation to test-case creation in one secure, reusable environment.',
    tags: ['GenAI', 'Agentic Workflows', 'MCP + A2A', 'Secure by Design'],
    impact: 'Growth | Efficiency | Maturity',
    meter: 88,
    variant: 'featured',
    visual: {
      src: '/genie-platform.png',
      alt: 'Genie Platform overview showing a centralized AI platform for many Genies'
    }
  },
  {
    title: 'Global Skills Platform',
    label: 'Bosch | Cloud platform',
    description:
      'Technical lead for a global cloud-based user skills platform serving 400,000 associates. The work connects SaaS capabilities with Bosch infrastructure to improve learning, skills visibility, and employee growth at enterprise scale.',
    tags: ['Azure', 'SaaS Integration', 'Enterprise UX', 'Platform Scale'],
    impact: 'Enterprise adoption',
    meter: 92,
    variant: 'compact'
  },
  {
    title: 'Generative CV Test Data',
    label: 'Master thesis | AI research',
    description:
      'Created test cases for computer vision algorithms with generative models, using diffusion-based image generation and bounding-box conditioning to improve evaluation coverage.',
    tags: ['Diffusion Models', 'Computer Vision', 'Synthetic Data'],
    impact: 'Testing coverage',
    meter: 82,
    variant: 'side'
  },
  {
    title: 'Autonomous Driving Base Software',
    label: 'Bosch Engineering | Safety systems',
    description:
      'Developed base software functions for autonomous driving, including safety-relevant monitoring, AUTOSAR stack configuration, CI/CT, Jenkins workflows, and automated testing.',
    tags: ['AUTOSAR', 'Safety', 'CI/CT', 'Jenkins'],
    impact: 'Production discipline',
    meter: 86,
    variant: 'compact'
  },
  {
    title: 'Motorsport Telemetry Logger',
    label: 'Yokohama | Embedded systems',
    description:
      'Built software for an integrated data logger that captures CAN-bus vehicle data and exposes live telemetry through a WLAN interface.',
    tags: ['CAN Bus', 'Telemetry', 'Embedded', 'WLAN'],
    impact: 'Field data access',
    meter: 78,
    variant: 'compact'
  },
  {
    title: 'Gesture-Controlled Smart Device',
    label: 'Prototype | Product engineering',
    description:
      'Designed and implemented software for a remotely controllable smart smoke detector with gesture-based interaction patterns.',
    tags: ['IoT', 'Prototyping', 'Interaction Design'],
    impact: 'Human-centered control',
    meter: 72,
    variant: 'compact'
  }
];

const experience = [
  {
    meta: 'May 2023 - Present',
    title: 'Software Development Lead, Bosch',
    description:
      'Leading technical development of a global cloud-based skills platform, coordinating cross-functional teams, improving scalability, and integrating enterprise SaaS capabilities with Bosch infrastructure.'
  },
  {
    meta: 'Oct 2022 - Aug 2023',
    title: 'Master Thesis, Bosch',
    description:
      'Focused on test case creation for computer vision algorithms using generative models, diffusion-based image generation, and a new bounding-box conditioning mechanism.'
  },
  {
    meta: '2017 - 2023',
    title: 'Software Developer, Bosch Engineering GmbH',
    description:
      'Developed autonomous-driving base software, safety-relevant monitoring, AUTOSAR configuration, test automation, and CI/CT pipelines for engineering teams.'
  },
  {
    meta: '2016',
    title: 'Software Developer, Yokohama and Stuttgart',
    description:
      'Delivered embedded prototypes across mobility and connected-device contexts, including a CAN-bus telemetry logger and a gesture-controlled smart smoke detector.'
  }
];

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.86 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M6.94 8.98H3.75v10.4h3.19V8.98ZM5.35 4A1.86 1.86 0 1 0 5.3 7.72 1.86 1.86 0 0 0 5.35 4Zm14.9 9.42c0-3.13-1.67-4.58-3.9-4.58-1.8 0-2.6.99-3.05 1.68V8.98h-3.06c.04.98 0 10.4 0 10.4h3.18v-5.81c0-.31.02-.62.11-.84.23-.62.76-1.26 1.65-1.26 1.17 0 1.64.95 1.64 2.33v5.58h3.18l.25-5.96Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? 'social-links compact' : 'social-links'} aria-label="Social links">
      <a href={githubUrl} rel="noreferrer" target="_blank" aria-label="GitHub profile">
        <GithubIcon />
      </a>
      <a href={linkedinUrl} rel="noreferrer" target="_blank" aria-label="LinkedIn profile">
        <LinkedinIcon />
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tobias Friedrich homepage">
          <span className="brand-mark" aria-hidden="true">
            TF
          </span>
          <span>Keep on Learning</span>
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href={`mailto:${email}`}>Contact</a>
          <SocialLinks compact />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const handleMissingProfileImage = (event) => {
    event.currentTarget.closest('.profile-photo-wrap')?.classList.add('is-missing');
  };

  return (
    <section className="container hero" id="top">
      <div className="hero-copy">
        <span className="eyebrow">AI tech lead | Augsburg to global teams</span>
        <h1 className="hero-title">
          Building practical AI systems <span>for teams that move fast.</span>
        </h1>
        <p className="hero-description">
          I am Tobias Friedrich, a hands-on architect and software development lead with 7+ years of
          experience shipping scalable AI-driven products, cloud platforms, and embedded systems. I
          help teams turn complex technology into reliable products people can actually use.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="#projects">
            View selected work
            <span aria-hidden="true">-&gt;</span>
          </a>
          <a className="button button-secondary" href="/Profile.pdf">
            Download profile PDF
          </a>
        </div>
        <SocialLinks />
      </div>

      <aside className="hero-panel glass-card glow-card" aria-label="Profile summary">
        <div className="avatar-frame">
          <div className="profile-photo-wrap">
            <img
              className="profile-photo"
              src="/profile-picture.png"
              alt="Tobias Friedrich"
              onError={handleMissingProfileImage}
            />
            <div className="profile-photo-fallback" aria-hidden="true">
              Add profile-picture.jpg
            </div>
          </div>
          <div className="panel-meta">
            <div className="chip-list">
              <span className="chip">Large Language Models</span>
              <span className="chip">Consulting</span>
              <span className="chip">Microsoft Azure</span>
            </div>
            <div className="terminal" aria-label="Profile status">
              <div className="terminal-header" aria-hidden="true">
                <span className="terminal-dot" style={{ background: '#ff5f56' }} />
                <span className="terminal-dot" style={{ background: '#ffbd2e' }} />
                <span className="terminal-dot" style={{ background: '#27c93f' }} />
              </div>
              <div className="terminal-body">
                <code>
                  <span className="accent-text">profile.role</span> = "AI Tech Lead"
                  <br />
                  <span className="primary-text">system.location</span> = "Germany | global teams"
                </code>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Metrics() {
  return (
    <section className="container" aria-label="Profile highlights">
      <div className="metric-strip">
        {metrics.map((metric) => (
          <div className="metric glass-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="container section" id="about">
      <div className="section-header">
        <div>
          <span className="eyebrow">Bio and operating style</span>
          <h2>From cloud architecture to agentic AI, I bridge technical depth with team momentum.</h2>
        </div>
        <p>
          My background combines mechatronics engineering, engineering informatics, autonomous
          driving software, and applied AI. That mix lets me speak across product, cloud, embedded,
          data, and leadership contexts without losing sight of the product outcome.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card glass-card">
          <h3>What I bring</h3>
          <ul className="signal-list">
            <li>
              <strong>Role</strong>
              <span>AI Tech Lead</span>
            </li>
            <li>
              <strong>Location</strong>
              <span>Augsburg, Germany</span>
            </li>
            <li>
              <strong>Education</strong>
              <span>M.Sc. Engineering Informatics</span>
            </li>
            <li>
              <strong>Foundation</strong>
              <span>B.Eng. Mechatronics and Robotics</span>
            </li>
          </ul>
        </div>
        <div className="about-card glass-card glow-card">
          <h3>Application intro</h3>
          <p>
            I like roles where the bar is high, the pace is fast, and the team is always learning:
            early platform decisions, AI product direction, cross-functional delivery, and systems
            that need to grow beyond a prototype. I am inspired by the Bay Area mindset of
            shipping often, testing ideas in the real world, and improving quickly while keeping the
            engineering thoughtful, reliable, and understandable.
          </p>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="container section" id="expertise">
      <div className="section-header">
        <div>
          <span className="eyebrow">Core competencies</span>
          <h2>Technical leadership for AI products that have to survive contact with reality.</h2>
        </div>
        <p>
          I focus on the layer where architecture, users, and delivery meet: making AI useful,
          integrated, observable, and trusted by the people who depend on it.
        </p>
      </div>
      <div className="expertise-grid">
        {expertise.map((item) => (
          <article className="expertise-card glass-card" key={item.title}>
            <div className="icon-box" aria-hidden="true">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="chip-list">
              {item.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="container section" id="projects">
      <div className="section-header">
        <div>
          <span className="eyebrow">Highlight projects</span>
          <h2>Selected systems across AI, cloud platforms, automotive software, and embedded data.</h2>
        </div>
        <p>
          The common thread is practical engineering: solve a real problem, integrate with the
          environment around it, and make the result easier for teams or users to act on.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card glass-card ${project.variant}`} key={project.title}>
            <div className="project-topline">
              <span>{project.label}</span>
              <span>{project.impact}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.visual ? (
              <div className="project-visual" aria-label={`${project.title} visual`}>
                {project.visual.src ? (
                  <img src={project.visual.src} alt={project.visual.alt} />
                ) : (
                  <>
                    <span>{project.visual.label}</span>
                    <strong>{project.title}</strong>
                  </>
                )}
              </div>
            ) : null}
            <div className="chip-list">
              {project.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {project.terminal ? (
              <div className="terminal">
                <div className="terminal-header" aria-hidden="true">
                  <span className="terminal-dot" style={{ background: '#ff5f56' }} />
                  <span className="terminal-dot" style={{ background: '#ffbd2e' }} />
                  <span className="terminal-dot" style={{ background: '#27c93f' }} />
                </div>
                <div className="terminal-body">
                  {project.terminal.map(([key, value]) => (
                    <code key={key}>
                      <span className="accent-text">{key}</span> = "{value}"
                      <br />
                    </code>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="impact-meter" aria-label={`${project.impact} signal`}>
              <span>Impact signal</span>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: `${project.meter}%` }} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="container section" id="experience">
      <div className="section-header">
        <div>
          <span className="eyebrow">Experience</span>
          <h2>A compact path through enterprise scale, AI research, and mobility systems.</h2>
        </div>
        <p>
          This is intentionally curated for applications: enough context to understand scope,
          trajectory, and technical range without turning the page into a full resume.
        </p>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card glass-card" key={item.title}>
            <div className="experience-meta">{item.meta}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="container section" id="contact">
      <div className="contact-card glass-card glow-card">
        <div>
          <span className="eyebrow">Contact node online</span>
          <h2>Let us talk about practical AI, platform scale, and teams that ship.</h2>
          <p>
            I am most interested in product-minded engineering environments where AI, cloud, and
            leadership all matter. Reach out for applications, collaborations, or technical
            conversations.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${email}`}>
              Email Tobias
            </a>
            <a className="button button-secondary" href={linkedinUrl} rel="noreferrer" target="_blank">
              LinkedIn profile
            </a>
            <a className="button button-secondary" href={githubUrl} rel="noreferrer" target="_blank">
              GitHub profile
            </a>
            <a className="button button-secondary" href="/Profile.pdf">
              Profile PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <span>(c) {new Date().getFullYear()} Tobias Friedrich. Engineered for intelligence.</span>
        <div className="footer-links">
          <a href={linkedinUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href={githubUrl} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a href={`mailto:${email}`}>Contact</a>
          <a href="/Profile.pdf">Profile PDF</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
