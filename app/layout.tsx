import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { profile } from "@/content/portfolio";
import "./globals.css";

const title = `${profile.name} · Full-stack developer`;
const description =
  "Aman Verma is a 17-year-old full-stack developer in Lucknow, India. Explore his projects and how his work has evolved.";
export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/assets/mark.svg" },
  openGraph: { type: "website", title, description },
};
export const viewport: Viewport = { themeColor: "#171816" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="preload"
          href="/assets/geist.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/instrument-serif-italic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <noscript>
          <style>{".project-open,.filters{display:none!important}"}</style>
        </noscript>
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
