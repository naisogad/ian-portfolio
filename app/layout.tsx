import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ian Dagos — Web Developer",
  description:
    "Ian Dagos is a web developer focused on responsive applications, intuitive interfaces, and practical digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
