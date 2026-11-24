"use client";
import { useSyncExternalStore } from "react";
import { categories, type Category, type Project } from "@/content/portfolio";
import { ProjectCard } from "./ProjectCard";

function readCategory(): Category {
  const value = new URLSearchParams(window.location.search).get("category");
  return value && Object.hasOwn(categories, value)
    ? (value as Category)
    : "all";
}
function subscribe(update: () => void) {
  window.addEventListener("popstate", update);
  window.addEventListener("pageshow", update);
  window.addEventListener("categorychange", update);
  return () => {
    window.removeEventListener("popstate", update);
    window.removeEventListener("pageshow", update);
    window.removeEventListener("categorychange", update);
  };
}
function selectCategory(category: string) {
  const url = new URL(window.location.href);
  if (category === "all") url.searchParams.delete("category");
  else url.searchParams.set("category", category);
  window.history.replaceState(null, "", url);
  window.dispatchEvent(new Event("categorychange"));
}

export function ProjectCollection({ projects }: { projects: Project[] }) {
  const category = useSyncExternalStore(
    subscribe,
    readCategory,
    () => "all" as const,
  );
  const visible =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);
  return (
    <section className="catalog-collection" aria-label="Project collection">
      <aside className="catalog-index">
        <div className="catalog-index-inner">
          <p className="archive-count" aria-live="polite" aria-atomic="true">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
          <fieldset
            className="filters catalog-filters"
            aria-label="Filter projects"
          >
            {Object.entries(categories).map(([value, label]) => (
              <button
                key={value}
                type="button"
                data-filter={value}
                aria-pressed={value === category}
                onClick={() => selectCategory(value)}
              >
                <span>{label}</span>
                <span className="catalog-filter-count" aria-hidden="true">
                  {value === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === value).length}
                </span>
              </button>
            ))}
          </fieldset>
        </div>
      </aside>
      <div id="project-grid" className="catalog-grid">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} archive />
        ))}
      </div>
    </section>
  );
}
