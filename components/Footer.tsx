import { siteConfig } from "../site.config";

export default function Footer() {
  return (
    <footer className="border-t border-base bg-veil">
      <div className="container py-8 text-sm text-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={siteConfig.links.github} className="hover:text-primary">GitHub</a>
          <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">Email</a>
          <a href={siteConfig.links.whatsapp} className="hover:text-primary">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
