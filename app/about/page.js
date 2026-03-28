import { site } from '@/lib/siteData';

export const metadata = { title: 'About Pampas' };

const points = [
  'Positioned around project execution, not only product sales.',
  'Suitable for overseas buyers who want fewer suppliers and faster coordination.',
  'Capable of covering building-related products beyond basic aluminum items.',
  'Also relevant for solar systems and industrial deep-processing projects.',
  'Focused on client trust in the United States, South America and Australia.',
];

export default function AboutPage() {
  return (
    <section className="section page-top">
      <div className="container split top-align">
        <div>
          <div className="section-head narrow left">
            <div className="eyebrow">About</div>
            <h1>Built for Clients Who Need Projects Coordinated, Not Just Products Quoted</h1>
            <p>Weifang Pampas International Trading Co., Ltd. is presented as a practical engineering and material solutions provider. The website positioning is intentionally different from a typical factory-style site: it emphasizes design support, coordinated sourcing, production and delivery.</p>
          </div>
          <div className="region-box">
            <strong>Focus regions:</strong> {site.regions.join(' · ')}
          </div>
        </div>
        <div className="card-grid one">
          {points.map((point) => <div key={point} className="card feature-card">{point}</div>)}
        </div>
      </div>
    </section>
  );
}
