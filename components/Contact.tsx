import { siteConfig } from "../site.config";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a className="card p-6 hover:border-primary/60" href={siteConfig.links.whatsapp}>
            <div className="text-sm text-white/60">WhatsApp</div>
            <div className="mt-1 text-xl font-semibold">Chat on WhatsApp</div>
            <p className="mt-2 text-white/80">Fastest response. Click to open chat.</p>
          </a>
          <a className="card p-6 hover:border-primary/60" href={`mailto:${siteConfig.contact.email}`}>
            <div className="text-sm text-white/60">Email</div>
            <div className="mt-1 text-xl font-semibold">{siteConfig.contact.email}</div>
            <p className="mt-2 text-white/80">We usually reply within 24 hours.</p>
          </a>
          <a className="card p-6 hover:border-primary/60" href={siteConfig.links.calendar}>
            <div className="text-sm text-white/60">Call</div>
            <div className="mt-1 text-xl font-semibold">Book a call</div>
            <p className="mt-2 text-white/80">Schedule a quick intro meeting.</p>
          </a>
        </div>
      </div>
    </section>
  );
}
