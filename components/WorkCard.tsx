import type { ReactNode } from "react";

export type WorkBlock = { label: string; body: ReactNode };

/**
 * 作品即 transaction 卡。語意化呈現：每件作品一個 <article>，
 * 內部用清楚的 <h4> 小標 + 段落，四問結構對人與 AI 都好讀。
 */
export default function WorkCard({
  kicker,
  title,
  subtitle,
  blocks,
  link,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  blocks: WorkBlock[];
  link?: { href: string; label: string; external?: boolean };
}) {
  return (
    <article className="rounded-2xl border border-rule bg-paper/70 px-6 py-8 shadow-[0_18px_50px_-32px_rgba(34,28,21,0.35)] sm:px-9 sm:py-10">
      <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-accent">
        {kicker}
      </p>
      <h3 className="mt-3 font-sans text-[1.4rem] font-black leading-snug text-ink sm:text-[1.6rem]">
        {title}
      </h3>
      {subtitle ? (
        <p className="mt-1.5 font-sans text-sm font-medium text-ink-faint">
          {subtitle}
        </p>
      ) : null}

      <div className="mt-6 space-y-5">
        {blocks.map((b, i) => (
          <div key={i}>
            <h4 className="font-sans text-[0.95rem] font-bold tracking-wide text-ink-soft">
              {b.label}
            </h4>
            <p className="mt-1.5 text-[1.0625rem] leading-[1.85] text-ink sm:text-[1.1rem]">
              {b.body}
            </p>
          </div>
        ))}
      </div>

      {link ? (
        <a
          href={link.href}
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-7 inline-flex items-center gap-1.5 font-sans text-[0.95rem] font-bold text-accent hover:text-accent-strong"
        >
          {link.label}
          <span aria-hidden>→</span>
        </a>
      ) : null}
    </article>
  );
}
