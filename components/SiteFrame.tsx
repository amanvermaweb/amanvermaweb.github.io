import Link from "next/link";
import type { ReactNode } from "react";
import { profile } from "@/content/portfolio";
import { Icon } from "./Icon";

function Brand({ href }: { href: string }) {
  return (
    <Link className="brand" href={href} aria-label={`${profile.name} home`}>
      <Icon name="mark" />
      <span>{profile.name}</span>
    </Link>
  );
}

export function SiteFrame({
  children,
  archive = false,
}: {
  children: ReactNode;
  archive?: boolean;
}) {
  const home = archive ? "/" : "#top";
  const homeSection = archive ? "/" : "";
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="wrap header-inner flex items-center justify-between">
          <Brand href={home} />
          <nav aria-label="Main navigation">
            <Link aria-current={archive ? "page" : undefined} href="/projects/">
              Projects
            </Link>
            <Link href={`${homeSection}#about`}>About</Link>
            <Link href={`${homeSection}#timeline`}>Timeline</Link>
            <a className="contact-nav" href="#contact">
              <Icon name="mail" />
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main id="main">{children}</main>
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact-inner">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">
              Say <em>hello.</em>
            </h2>
            <p>{profile.contactIntro}</p>
          </div>
          <div className="contact-card">
            <span className="contact-envelope" aria-hidden="true" />
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="footer-social flex flex-wrap items-center">
              <a href={profile.github}>GitHub</a>
              <a href={profile.linkedin}>LinkedIn</a>
              <a href={profile.cv}>Résumé</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="wrap footer flex items-center justify-between">
        <Brand href={home} />
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
