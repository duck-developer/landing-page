import { siteConfig } from "../site.config";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.projects.map((p) => (
            <a key={p.title} href={p.href} className="card p-6 hover:border-primary/60 transition-colors text-base-color">
              <div className="text-sm text-subtle">{p.type}</div>
              <div className="mt-1 text-xl font-semibold">{p.title}</div>
              <p className="mt-2 text-muted">{p.description}</p>
              <div className="mt-4 text-primary">View →</div>
            </a>
          ))}
        </div>
        {/* <div className="mt-6">
          <a href={siteConfig.links.github} className="text-accent hover:underline">More on GitHub</a>
        </div> */}
      </div>
    </section>
  );
}
