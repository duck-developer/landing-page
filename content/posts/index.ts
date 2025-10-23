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
    content: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
