"use client";

import React from "react";
import { siteConfig } from "../site.config";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setTaglineIndex((i) => (i + 1) % (siteConfig.taglines?.length || 1));
        setVisible(true);
      }, 200); // time to fade out before switching
    }, 3000);

    return () => {
      clearInterval(id);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gradient">{siteConfig.brandName}</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted">
            {siteConfig.heroCopy || siteConfig.tagline}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-lg text-subtle">
            <img
              src="/images/duckling.png"
              alt="Duck"
              className="h-40 w-40 duck-float"
            />
            <span
              className={`transition-all duration-300 ease-out inline-block ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              {siteConfig.taglines?.[taglineIndex] || siteConfig.tagline}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={siteConfig.links.whatsapp} className="btn btn-primary">
              Contact on WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="btn btn-accent"
            >
              Email us
            </a>
          </div>
          <div className="mt-6 text-sm text-subtle">
            Based in Indonesia · Available for remote work
          </div>
        </div>
        <div className="relative">
          <div className="card p-6 md:p-10">
            <div className="grid grid-cols-3 gap-4">
              {siteConfig.highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-lg bg-surface-2 border border-base p-4 text-center"
                >
                  <div className="text-3xl">{h.icon}</div>
                  <div className="mt-2 text-sm font-medium">{h.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
