import Link from 'next/link';
import { homeHighlights, coreProjects, differentiators, processSteps, site } from '@/lib/siteData';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Integrated Engineering and Material Solutions</div>
            <h1>We Help You Get Your Project Done</h1>
            <p className="hero-sub">One partner for design, materials, production and delivery.</p>
            <p className="hero-text">
              Pampas is positioned for overseas buyers who want fewer suppliers and smoother execution. We support building,
              solar and industrial projects with design support, sourcing coordination, production and delivery.
            </p>
            <div className="button-row">
              <Link href="/contact" className="btn btn-light">Start Your Project</Link>
              <Link href="/custom-solutions" className="btn btn-outline">Talk to an Engineer</Link>
            </div>
            <div className="chip-row">
              {homeHighlights.map((item) => <span key={item} className="chip">{item}</span>)}
            </div>
          </div>
          <div className="hero-card">
            <div className="metric-card">
              <div className="metric-label">Core message</div>
              <div className="metric-title">Clients are not just looking for products. They are looking for a partner who can get the project done.</div>
            </div>
            <div className="mini-grid">
              <div className="mini-card"><strong>Building</strong><span>windows, doors, decorative and structural materials</span></div>
              <div className="mini-card"><strong>Solar</strong><span>frames, mounting systems, structural support</span></div>
              <div className="mini-card"><strong>Industrial</strong><span>CNC parts, machinery structures, fabricated components</span></div>
              <div className="mini-card"><strong>Regions</strong><span>{site.regions.join(' · ')}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Three Core Project Types</div>
            <h2>Projects We Support</h2>
            <p>This structure makes the site different from most suppliers. Instead of starting from products, it starts from project goals and buyer responsibilities.</p>
          </div>
          <div className="card-grid three">
            {coreProjects.map((item) => (
              <div key={item.title} className="card">
                <div className="emoji">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Why Pampas Stands Out</div>
            <h2>What Makes Us Different</h2>
            <p>The website is built around a stronger commercial position: one partner that can coordinate design support, supply and execution across multiple categories.</p>
          </div>
          <div className="card-grid two">
            {differentiators.map((item) => <div key={item} className="card feature-card">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div>
            <div className="eyebrow">How We Work</div>
            <h2>Simple, Clear and Easy to Trust</h2>
            <p className="hero-text">A clean workflow lowers risk for buyers and makes Pampas easier to work with than fragmented sourcing models.</p>
          </div>
          <div className="steps">
            {processSteps.map(([no, title, text]) => (
              <div key={no} className="step-card">
                <div className="step-no">{no}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box">
          <h2>Ready to Simplify Your Next Project?</h2>
          <p>Send us your drawings, BOQ, specifications or requirement list. We will help plan and supply what your project needs.</p>
          <div className="button-row center">
            <Link href="/contact" className="btn btn-light">Get a Quote</Link>
            <a href={site.linkedin} target="_blank" className="btn btn-outline">View LinkedIn</a>
          </div>
        </div>
      </section>
    </>
  );
}
