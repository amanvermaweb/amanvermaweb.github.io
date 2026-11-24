"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/content/portfolio";
import { Icon } from "./Icon";

export function ProjectDetails({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open && !dialog.current?.open) dialog.current?.showModal();
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="project-open"
        aria-label={`View ${project.name}`}
        aria-haspopup="dialog"
        data-project={project.id}
        onClick={() => setOpen(true)}
      >
        <Icon name="plus" />
      </button>
      {open &&
        createPortal(
          <dialog
            ref={dialog}
            className="project-dialog"
            id={`detail-${project.id}`}
            aria-labelledby={`title-${project.id}`}
            onClose={() => {
              setOpen(false);
              trigger.current?.focus({ preventScroll: true });
            }}
            onPointerDown={(event) => {
              if (event.target !== event.currentTarget) return;
              const rect = event.currentTarget.getBoundingClientRect();
              if (
                event.clientX < rect.left ||
                event.clientX > rect.right ||
                event.clientY < rect.top ||
                event.clientY > rect.bottom
              )
                event.currentTarget.close();
            }}
          >
            <div className="dialog-body">
              <div className="dialog-top flex items-center justify-between">
                <span className="meta">
                  {project.field} <span className="divider">/</span>{" "}
                  {project.year}
                </span>
                <button
                  type="button"
                  className="close-dialog"
                  aria-label="Close project"
                  onClick={() => dialog.current?.close()}
                >
                  <Icon name="close" />
                </button>
              </div>
              <h2 id={`title-${project.id}`}>{project.name}</h2>
              <p className="dialog-summary">{project.description}</p>
              <Image
                className="dialog-image"
                src={`/assets/${project.image}`}
                alt={project.alt}
                width={960}
                height={540}
                loading="eager"
              />
              <ul className="stack" aria-label="Technologies">
                {project.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <div className="dialog-links flex flex-wrap items-center">
                {project.demo && (
                  <a className="button" href={project.demo}>
                    Open live project
                  </a>
                )}
                <a href={project.source} className="github-link">
                  <Icon name="github" />
                  Source code
                </a>
              </div>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
}
