"use client";

import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link a");
    let observer;

    const createObserver = () => {
      const thresholdValue = window.innerWidth <= 768 ? 0.1 : 0.4;
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter((entry) => entry.isIntersecting);
          if (visibleEntries.length === 0) return;

          const mostVisible = visibleEntries.reduce((best, current) => {
            if (!best) return current;
            return current.intersectionRatio > best.intersectionRatio ? current : best;
          }, null);

          if (!mostVisible) return;

          const activeHref = `#${mostVisible.target.id}`;
          navLinks.forEach((link) => {
            link.classList.toggle("nav-active", link.getAttribute("href") === activeHref);
          });
        },
        { threshold: thresholdValue }
      );

      sections.forEach((section) => observer.observe(section));
    };

    createObserver();
    window.addEventListener("resize", createObserver);

    return () => {
      window.removeEventListener("resize", createObserver);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <nav
      className="text-sm md:text-base gap-8 flex items-center justify-between p-4 px-10 h-[10vh] w-[80vw] m-auto fixed left-0 right-0 bg-nav-bg backdrop-blur-md outline rounded-4xl mt-4 z-10"
    >
      <div className="hidden md:block text-2xl font-bold"><p>Aman Verma</p></div>
      <div
        className="nav-link md:flex space-x-4 grid grid-cols-3 gap-3 text-muted"
      >
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact"> Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
