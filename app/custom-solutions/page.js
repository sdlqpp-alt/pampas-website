import { processSteps } from '@/lib/siteData';

export const metadata = { title: 'Custom Solutions' };

const rows = [
  ['Project scope', 'Building projects, solar projects, industrial deep-processing and related engineering supply'],
  ['Support range', 'Design support, raw material sourcing, finished products and coordinated delivery'],
  ['Typical inputs', 'Drawings, BOQ, specifications, sample parts, sketches or requirement lists'],
  ['Typical outputs', 'Project-ready material packages, fabricated components and coordinated product supply'],
  ['Buyer benefit', 'Less supplier management, simpler communication and smoother execution'],
];

export default function SolutionsPage() {
  return (
    <section className="section page-top">
      <div className="container split top-align">
        <div>
          <div className="section-head narrow left">
            <div className="eyebrow">Solutions</div>
            <h1>Not Just a Supplier - A Partner That Helps Finish the Job</h1>
            <p>This page explains the strongest part of the Pampas positioning: helping buyers coordinate the whole project workflow instead of only buying one item at a time.</p>
          </div>
          <div className="info-table">
            {rows.map(([label, value]) => (
              <div className="info-row" key={label}>
                <div className="info-label">{label}</div>
                <div className="info-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="solution-panel">
          <div className="eyebrow">Workflow</div>
          <h2>How Pampas helps reduce complexity</h2>
          <div className="steps compact">
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
      </div>
    </section>
  );
}
