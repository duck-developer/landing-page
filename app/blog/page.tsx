import Link from "next/link";
import { posts } from "../../content/posts";

export const metadata = {
  title: "Blog — Duck Developer",
  description: "Notes on AI, backends, and building reliable systems.",
};

export default function BlogIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Blog</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="card p-6 hover:border-primary/60 transition-colors"
            >
              <div className="text-sm text-subtle">{new Date(p.date).toDateString()}</div>
              <div className="mt-1 text-xl font-semibold">{p.title}</div>
              {p.excerpt && <p className="mt-2 text-muted">{p.excerpt}</p>}
              <div className="mt-4 text-primary">Read →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
