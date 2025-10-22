export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "introducing-duck-developer",
    title: "Introducing Duck Developer",
    date: "2025-10-01",
    excerpt: "Who we are and what we build: AI + backends that float.",
    content: `
We build scalable software that just works.

In this post, we share our approach to building AI-driven backends quickly and cleanly — using proven primitives, clear APIs, and strong observability.

Highlights:
- Production-first mindset
- Simple, reliable architectures
- Developer experience that speeds teams up
`,
  },
];
