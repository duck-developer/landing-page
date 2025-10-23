import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../site.config";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

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
    icon: "/images/duckling.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased flex flex-col">
        <header className="sticky top-0 z-50 backdrop-blur border-b border-base bg-veil">
          <div className="container flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <span className="font-semibold">{siteConfig.brandName}</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/" className="hover:text-primary">
                Home
              </a>
              <a href="/about" className="hover:text-primary">
                About
              </a>
              <a href="/skills" className="hover:text-primary">
                Skills
              </a>
              <a href="/projects" className="hover:text-primary">
                Projects
              </a>
              <a href="/contact" className="hover:text-primary">
                Contact
              </a>
              <a href="/blog" className="hover:text-primary">
                Blog
              </a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
