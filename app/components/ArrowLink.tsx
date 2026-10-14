import Link from "next/link";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "text";
};

export function ArrowLink({ children, href, variant = "text" }: ArrowLinkProps) {
  return (
    <Link className={`arrow-link arrow-link-${variant}`} href={href}>
      <span>{children}</span>
      <span className="arrow-link-icon" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
