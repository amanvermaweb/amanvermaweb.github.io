import type { Metadata } from "next";
import Image from "next/image";
import { ProjectCollection } from "@/components/ProjectCollection";
import { SiteFrame } from "@/components/SiteFrame";
import { profile, projects } from "@/content/portfolio";

const title = `Project archive · ${profile.name}`;
const description =
  "Explore Aman Verma’s web applications, hardware prototypes, and learning tools.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function ArchivePage() {
  const years = [...new Set(projects.map((project) => project.year))]
    .sort((a, b) => a - b)
    .slice(-3);
  return (
    <SiteFrame archive>
      <div className="catalog wrap">
        <section className="catalog-mast" aria-labelledby="catalog-title">
          <h1 id="catalog-title">
            Project{" "}
            <em>
              archive<span>.</span>
            </em>
          </h1>
          <p>
            Web applications, hardware prototypes, and the smaller builds I
            learned from.
          </p>
          <div className="catalog-folios" aria-hidden="true">
            {years.map((year, index) => {
              const project = projects.find((project) => project.year === year);
              if (!project) return null;
              return (
                <div
                  key={year}
                  className={`catalog-folder folder-depth-${index}`}
                >
                  <div className="catalog-sheet">
                    <span className="catalog-tab">{year}</span>
                    <div className="catalog-proof">
                      <Image
                        src={`/assets/${project.image}`}
                        alt=""
                        width={960}
                        height={540}
                      />
                    </div>
                    <span className="catalog-filing">{project.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <ProjectCollection projects={projects} />
      </div>
    </SiteFrame>
  );
}
