import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../../../content/posts";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Duck Developer`,
    description: post.excerpt || post.content.slice(0, 140),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="section">
      <div className="container max-w-3xl">
        <Link href="/blog" className="text-sm text-subtle hover:text-primary">← Back to blog</Link>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="mt-2 text-sm text-subtle">{new Date(post.date).toDateString()}</div>
        <div className="mt-6 max-w-none whitespace-pre-wrap text-base-color">{post.content}</div>
      </div>
    </article>
  );
}
