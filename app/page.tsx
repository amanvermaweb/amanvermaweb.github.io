import Link from "next/link";
import { About } from "@/components/About";
import { Icon } from "@/components/Icon";
import { ProjectCard } from "@/components/ProjectCard";
import { Portrait } from "@/components/Portrait";
import { LocalTime, Milestones, Poster } from "@/components/HeroMotion";
import { SiteFrame } from "@/components/SiteFrame";
import { featured, profile, projects, timeline } from "@/content/portfolio";

export default function HomePage() {
  return (
    <SiteFrame>
      <section className="hero" aria-labelledby="hero-title">
        <Poster>
          <div className="poster-copy">
            <p className="eyebrow role">{profile.role}</p>
            <h1 id="hero-title">
              <span>{profile.firstName}</span>{" "}
              <em>
                {profile.lastName}
                <b>.</b>
              </em>
            </h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions flex flex-wrap items-center">
              <a className="button" href="#work">
                <Icon name="grid" />
                Explore my work
              </a>
              <a className="github-link" href={profile.github}>
                <Icon name="github" />
                GitHub
              </a>
            </div>
          </div>
          <div className="poster-art">
            <div className="orbit-lines" aria-hidden="true" />
            <Portrait filename={profile.portrait} name={profile.name} />
          </div>
          <div className="poster-location">
            <span>
              <Icon name="pin" />
              {profile.location}
            </span>
            <LocalTime zone={profile.timezone} />
          </div>
        </Poster>
      </section>
      <section
        className="wrap selected section"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-title flex items-baseline justify-between">
          <h2 id="work-title">
            Selected <em>work.</em>
          </h2>
          <Link className="archive-link" href="/projects/">
            <Icon name="list" />
            All projects <span>{projects.length}</span>
          </Link>
        </div>
        <div className="featured-grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <About />
      <section
        className="timeline section"
        id="timeline"
        aria-labelledby="timeline-title"
      >
        <div className="wrap timeline-inner">
          <div className="history-intro">
            <div>
              <p className="eyebrow">Timeline</p>
              <h2 id="timeline-title">
                Along the <em>way.</em>
              </h2>
            </div>
            <div className="history-notes">
              <p>{profile.timelineIntro}</p>
              
            </div>
          </div>
          <Milestones>
            {timeline.map((milestone) => (
              <li key={milestone.when}>
                <span className="when">{milestone.when}</span>
                <div className="milestone-copy">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.detail}</p>
                </div>
              </li>
            ))}
          </Milestones>
        </div>
      </section>
    </SiteFrame>
  );
}
