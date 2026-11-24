import Image from "next/image";
import type { Project } from "@/content/portfolio";
import { ProjectDetails } from "./ProjectDetails";

export function ProjectCard({
  project,
  archive = false,
}: {
  project: Project;
  archive?: boolean;
}) {
  const screenshot = (
    <Image
      src={`/assets/${project.image}`}
      alt=""
      width={1100}
      height={682}
    />
  );
  const details = <ProjectDetails project={project} />;
  return (
    <article
      id={`card-${project.id}`}
      data-category={project.category}
      className={
        archive
          ? "archive-entry catalog-card"
          : "feature-card relative flex min-w-0 flex-col"
      }
    >
      {archive ? (
        <>
          <div
            className={`project-screenshot catalog-cover catalog-cover-${project.id}`}
          >
            {screenshot}
          </div>
          <div className="catalog-caption">
            <p className="catalog-meta">
              <span>{project.field}</span>
              <span>{project.year}</span>
            </p>
            <h2>{project.name}</h2>
            <p className="catalog-overview">{project.overview}</p>
            {details}
          </div>
        </>
      ) : (
        <>
          <div className="project-screenshot feature-art">{screenshot}</div>
          <div className="feature-caption">
            <div className="feature-text">
              <p className="meta project-field">{project.field}</p>
              <h3>{project.name}</h3>
            </div>
            {details}
            <p className="project-overview">{project.overview}</p>
          </div>
        </>
      )}
      <noscript>
        <a
          className={archive ? "catalog-source" : "source-fallback"}
          href={project.source}
        >
          Project source
        </a>
      </noscript>
    </article>
  );
}
