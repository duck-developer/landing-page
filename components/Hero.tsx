"use client";

import React from "react";
import { siteConfig } from "../site.config";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = React.useState(0);
  const [debugMsg, setDebugMsg] = React.useState<string | null>(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % (siteConfig.taglines?.length || 1));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const handleDuckClick = async () => {
    setDebugMsg("Debugging mode: enabled 🦆");
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "square";
      o.frequency.setValueAtTime(220, ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.12);
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.26);
    } catch {}
    setTimeout(() => setDebugMsg(null), 2000);
  };

  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-sm text-white/60">
            <img src="/duckling.svg" alt="Duck" className="h-6 w-6 duck-float cursor-pointer" onClick={handleDuckClick} />
            <span>{siteConfig.taglines?.[taglineIndex] || siteConfig.tagline}</span>
          </div>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-gradient">{siteConfig.brandName}</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            {siteConfig.heroCopy || siteConfig.tagline}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-white/75 text-sm">
            {siteConfig.services?.map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" /> {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={siteConfig.links.whatsapp} className="btn btn-primary">
              Contact on WhatsApp
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="btn btn-accent">
              Email us
            </a>
          </div>
          <div className="mt-6 text-sm text-white/60">Based in Indonesia · Available for remote work</div>
        </div>
        <div className="relative">
          <div className="card p-6 md:p-10">
            <div className="grid grid-cols-3 gap-4">
              {siteConfig.highlights.map((h) => (
                <div key={h.title} className="rounded-lg bg-white/[0.03] border border-white/10 p-4 text-center">
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
      {debugMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 card px-4 py-2 text-sm">
          {debugMsg}
        </div>
      )}
    </section>
  );
}
