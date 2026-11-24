"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function LocalTime({ zone }: { zone: string }) {
  const [time, setTime] = useState("UTC+05:30");
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    function update() {
      if (!document.hidden) setTime(`${formatter.format(Date.now())} IST`);
    }
    update();
    const timer = window.setInterval(update, 15000);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, [zone]);
  return <span className="local-time">{time}</span>;
}

export function Poster({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const poster = ref.current;
    if (!poster) return;
    const motion = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    function reset() {
      cancelAnimationFrame(frame);
      for (const key of ["--portrait-x", "--sun-x", "--sun-y"])
        poster?.style.removeProperty(key);
    }
    function move(event: PointerEvent) {
      if (!motion.matches || !poster) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = poster.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        poster.style.setProperty("--portrait-x", `${x * 10}px`);
        poster.style.setProperty("--sun-x", `${x * -14}px`);
        poster.style.setProperty("--sun-y", `${y * -9}px`);
      });
    }
    poster.addEventListener("pointermove", move, { passive: true });
    poster.addEventListener("pointerleave", reset);
    motion.addEventListener("change", reset);
    return () => {
      reset();
      poster.removeEventListener("pointermove", move);
      poster.removeEventListener("pointerleave", reset);
      motion.removeEventListener("change", reset);
    };
  }, []);
  return (
    <div className="wrap poster" ref={ref}>
      {children}
    </div>
  );
}

export function Milestones({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("arrived");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.3 },
    );
    for (const item of ref.current?.children ?? []) observer.observe(item);
    return () => observer.disconnect();
  }, []);
  return (
    <ol className="milestones" ref={ref}>
      {children}
    </ol>
  );
}
