import { productGroups } from '@/lib/siteData';

export const metadata = { title: 'Products and Supply Scope' };

export default function ProductsPage() {
  return (
    <section className="section page-top">
      <div className="container">
        <div className="section-head narrow">
          <div className="eyebrow">Products</div>
          <h1>Product Categories Built Around Project Needs</h1>
          <p>Instead of a narrow factory catalog, the products page shows how Pampas can support wider project procurement across building, solar and industrial requirements.</p>
        </div>
        <div className="card-grid two">
          {productGroups.map((item) => (
            <div key={item.title} className="card large-card">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
