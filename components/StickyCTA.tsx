"use client";

import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

/**
 * Sticky bottom CTA — appears after the hero, hides near the footer CTA.
 * Pure-CSS slide/fade (no animation library), so it can never block render.
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setShow(y > 760 && y < max - 700);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper/85 backdrop-blur-md"
      style={{
        transform: show ? "translateY(0)" : "translateY(100%)",
        opacity: show ? 1 : 0,
        transition:
          "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <span className="hidden font-sans text-sm text-ink-soft sm:block">
          把公司的判斷，<span className="font-bold text-ink">編譯進 AI</span>
        </span>
        <CTAButton
          href="https://cal.com/bektsai/30min"
          external
          className="w-full px-6 py-3 sm:w-auto"
        >
          免費預約一場對齊對話
        </CTAButton>
      </div>
    </div>
  );
}
