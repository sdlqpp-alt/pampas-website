import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/siteData';

export const metadata = { title: 'Contact Pampas' };

export default function ContactPage() {
  return (
    <section className="section page-top">
      <div className="container split top-align">
        <div>
          <div className="section-head narrow left">
            <div className="eyebrow">Contact</div>
            <h1>Get a Project Quote in 24 Hours</h1>
            <p>Send your drawings, BOQ, material list or requirement summary. The contact structure is intentionally short and conversion-focused.</p>
          </div>
          <div className="contact-cards">
            <div className="card"><strong>Email</strong><p>{site.email}</p></div>
            <div className="card"><strong>WhatsApp</strong><p>{site.whatsapp}</p></div>
            <div className="card"><strong>LinkedIn</strong><p>Pampas International Trade</p></div>
            <div className="card"><strong>Website</strong><p>pampasgrp.com</p></div>
          </div>
        </div>
        <div className="form-panel">
          <h2>Start Your Project</h2>
          <p>Use temporary contact values now, then replace them with the final official details before launch.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
