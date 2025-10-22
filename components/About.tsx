import { siteConfig } from "../site.config";

export default function About() {
  return (
    <section id="about" className="section min-h-screen flex items-center">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="md:w-1/3">
            <div className="p-4 flex items-center justify-center">
              <img src="/images/1632818881503.png" alt="Duckling avatar" className="h-100 w-100" />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-4 text-muted">
              <p>
                We are {siteConfig.brandName}, also known as "{siteConfig.mascot}". We design and build AI-powered systems and reliable, scalable backends.
              </p>
              <p>
                From prototypes to production, we handle architecture, APIs, data pipelines, and cloud infrastructure with a strong focus on reliability and developer experience.
              </p>
            </div>
            <div className="mt-6">
              <a href={siteConfig.links.github} className="text-primary hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
