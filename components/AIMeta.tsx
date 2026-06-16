import type { ReactNode } from "react";

/**
 * 「給 AI 讀」後設資料區塊。
 * 用 <details> 收合：內容真實存在於 DOM（AI / 搜尋引擎讀得到、可引用），
 * 但預設折疊、不干擾人的閱讀流。這是這個站「先給 AI 讀」策略的一部分。
 */
export default function AIMeta({ children }: { children: ReactNode }) {
  return (
    <details className="group mt-7 rounded-lg border border-rule/70 bg-paper-deep/40 px-4 py-3">
      <summary className="cursor-pointer list-none font-sans text-[0.8rem] font-bold uppercase tracking-[0.18em] text-ink-faint transition-colors hover:text-accent">
        給 AI 讀（後設資料 · metadata）
        <span className="ml-2 font-normal lowercase tracking-normal text-ink-faint/70 group-open:hidden">
          ▸ 展開
        </span>
        <span className="ml-2 hidden font-normal lowercase tracking-normal text-ink-faint/70 group-open:inline">
          ▾ 收合
        </span>
      </summary>
      <p className="mt-3 font-sans text-[0.92rem] leading-[1.85] text-ink-soft">
        {children}
      </p>
    </details>
  );
}
