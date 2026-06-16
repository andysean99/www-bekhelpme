import type { ReactNode } from "react";

export default function CTAButton({
  href = "#enroll",
  children,
  variant = "solid",
  className = "",
  external = false,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-sans text-[0.95rem] font-bold tracking-wide transition-colors duration-200 sm:text-base";
  const styles =
    variant === "solid"
      ? "bg-accent text-paper shadow-[0_12px_34px_-14px_rgba(168,67,30,0.7)] hover:bg-accent-strong"
      : "border border-accent/40 text-accent hover:bg-accent/5";
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a href={href} {...externalProps} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
