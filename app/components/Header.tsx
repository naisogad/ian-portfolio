"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header editorial-container">
      <Link className="wordmark flex" href="#top" aria-label="Ian Dagos home" onClick={closeMenu}>
        <Image src="/images/hero/icon.png" alt="" width={20} height={20} className="object-none" />
        Ian Dagos<span className="wordmark-dot">.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>

      <a className="header-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>

      <div className="mobile-menu">
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-icon" aria-hidden="true"><span /><span /></span>
        </button>
        {menuOpen ? (
          <div className="mobile-menu-panel">
            <nav id="mobile-navigation" aria-label="Mobile navigation">
              {navigation.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>)}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
