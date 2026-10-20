import { useEffect, useState } from 'react'
import { profile, thesis, manuscripts, projects, timeline, skills, certificates, events, certificateFolder } from './data.js'

function LabLinked({ text }) {
  const key = 'GeoScape Analytics Lab'
  const parts = text.split(key)
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <a href={profile.lab} target="_blank" rel="noreferrer">{key}</a>}
        </span>
      ))}
    </>
  )
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) {}
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Authors({ text }) {
  const parts = text.split('Mehdi, M.')
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <b>Mehdi, M.</b>}
        </span>
      ))}
    </>
  )
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="top">
        <div className="wrap top-inner">
          <nav aria-label="Sections">
            <a href="#research">Research</a>
            <a href="#writing">Manuscripts</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a className="nav-cv" href={profile.cv} download>CV</a>
          </nav>
          <button className="theme" type="button" onClick={() => setTheme(next)} aria-label={`Switch to ${next} mode`} title={`Switch to ${next} mode`}>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" /></svg>
            )}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap">
          <div className="hero-text">
            <h1>{profile.name}</h1>
            <p className="role">{profile.title}</p>
            <p className="lede"><LabLinked text={profile.intro} /></p>
            <p className="seeking">{profile.seeking}</p>
            <div className="actions">
              <a className="btn primary" href={profile.cv} download>Download CV</a>
              <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
            </div>
          </div>
          <img className="portrait" src={profile.photo} alt="Portrait of Muhammad Mehdi" width="220" height="220" />
        </section>

        <section id="research" className="wrap section">
          <h2>Research</h2>
          <h3 className="thesis-title">{thesis.title}</h3>
          <p className="meta">{thesis.role}. {thesis.status}.</p>
          {thesis.paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </section>

        <section id="writing" className="wrap section">
          <h2>Manuscripts</h2>
          <p className="note">Nothing is published yet. These are submitted manuscripts and book chapters.</p>
          <ul className="plain">
            {manuscripts.map((m) => (
              <li key={m.title} className="entry">
                <p className="entry-title">{m.title}</p>
                <p className="meta"><Authors text={m.authors} /></p>
                <p className="status">{m.status}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="wrap section">
          <h2>Projects</h2>
          <ul className="plain">
            {projects.map((p) => (
              <li key={p.name} className="entry">
                <p className="entry-title">{p.name}</p>
                <p className="meta">{p.role}</p>
                <p>{p.text}</p>
                <a href={p.link} target="_blank" rel="noreferrer">{p.linkText}</a>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="wrap section">
          <h2>Experience and education</h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.what}>
                <span className="when">{t.when}</span>
                <div>
                  <p className="entry-title">{t.what}</p>
                  {t.detail && <p>{t.detail}</p>}
                  {t.bullets && (
                    <ul className="bullets">
                      {t.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}
                  {t.link && <a href={t.link} target="_blank" rel="noreferrer">{t.linkText}</a>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap section">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="wrap section two">
          <div>
            <h2>Certificates</h2>
            <ul className="plain small">
              {certificates.map((c) => (
                <li key={c.name}>
                  <span className="when">{c.when}</span>
                  <span>
                    {c.name}, {c.by}
                    {c.link && <> (<a href={c.link} target="_blank" rel="noreferrer">verify</a>)</>}
                  </span>
                </li>
              ))}
            </ul>
            <p className="small"><a href={certificateFolder} target="_blank" rel="noreferrer">See scanned copies of all certificates</a></p>
          </div>
          <div>
            <h2>Awards, events and fieldwork</h2>
            <ul className="plain small">
              {events.map((e) => (
                <li key={e.name}>
                  <span className="when">{e.when}</span>
                  <span>{e.name}, {e.by}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>Contact</h2>
          <p>I am happy to hear about Master’s positions, collaborations and data questions on the Upper Indus.</p>
          <p className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.cv} download>Download CV (PDF)</a>
          </p>
        </section>
      </main>

      <footer className="wrap foot">
        <p>© {new Date().getFullYear()} Muhammad Mehdi, Lahore, Pakistan</p>
      </footer>
    </>
  )
}
