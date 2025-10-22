import { siteConfig } from "../site.config";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="card p-4 flex items-center justify-center">
              <img src="/duckling.svg" alt="Duckling avatar" className="h-40 w-40" />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-4 text-white/80">
              <p>
                We are {siteConfig.brandName}, also known as "{siteConfig.mascot}". We design and build AI-powered systems and reliable, scalable backends.
              </p>
              <p>
                From prototypes to production, we handle architecture, APIs, data pipelines, and cloud infrastructure with a strong focus on reliability and developer experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
