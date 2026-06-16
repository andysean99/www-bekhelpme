import type { ReactNode } from "react";

/** 見證引言。語意化 <figure>/<blockquote>/<figcaption>。 */
export default function Quote({
  children,
  who,
}: {
  children: ReactNode;
  who: string;
}) {
  return (
    <figure className="border-l-2 border-accent/30 pl-5">
      <blockquote className="text-[1rem] leading-[1.8] text-ink-soft sm:text-[1.05rem]">
        {children}
      </blockquote>
      <figcaption className="mt-2 font-sans text-[0.85rem] font-medium text-ink-faint">
        — {who}
      </figcaption>
    </figure>
  );
}
