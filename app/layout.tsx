import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../site.config";

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — Building AI-powered systems & scalable web backends.`,
  description: siteConfig.tagline,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    title: siteConfig.brandName,
    description: siteConfig.tagline,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.brandName,
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/duckling.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased flex flex-col">
        <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-secondary/40">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/duckling.svg" alt="Duckling" className="h-8 w-8" />
              <span className="font-semibold">{siteConfig.brandName}</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/" className="hover:text-primary">Home</a>
              <a href="/about" className="hover:text-primary">About</a>
              <a href="/skills" className="hover:text-primary">Skills</a>
              <a href="/projects" className="hover:text-primary">Projects</a>
              <a href="/contact" className="hover:text-primary">Contact</a>
              <a href="/blog" className="hover:text-primary">Blog</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 bg-secondary/40">
          <div className="container py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/duckling.svg" alt="Duckling" className="h-6 w-6" />
              <span>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={siteConfig.links.github} className="hover:text-primary">GitHub</a>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">Email</a>
              <a href={siteConfig.links.whatsapp} className="hover:text-primary">WhatsApp</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
