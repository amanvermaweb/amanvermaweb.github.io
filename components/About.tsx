import Image from "next/image";
import { profile } from "@/content/portfolio";

export function About() {
  const { about } = profile;
  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className="wrap about-inner">
        <div className="about-copy">
          <h2 id="about-title">
            About <em>me.</em>
          </h2>
          <p className="about-lead">{about.lead}</p>
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="about-photo">
          <Image
            className="h-auto w-full"
            src={`/assets/${about.photo}`}
            alt={about.photoAlt}
            width={1395}
            height={1600}
          />
        </div>
        <div className="about-toolkit">
          <h3>My toolkit</h3>
          <div className="toolkit-groups">
            {about.toolkit.map((group) => (
              <div className="toolkit-group" key={group.category}>
                <h4>{group.category}</h4>
                <ul className="flex list-none flex-wrap">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
