import Image from "next/image";
import SharedIconLink from "../SharedIconLink";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SafeTAP",
    description:
      "SafeTAP is a working RFID-based bus tracking and attendance prototype integrating both hardware and software systems. It allows users to track bus locations in real-time and mark attendance using RFID cards, providing a seamless and efficient solution for transportation management.",
    image: "/safetap-preview.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Hardware(ESP32, RFID card reader, etc.)"],
    live: "https://safe-tap-nine.vercel.app/",
    github: "https://www.github.com/amanvermaweb/safe-tap/",
  },
  {
    title: "TruthLens",
    description:
      "TruthLens is an AI-powered claim verification engine that analyzes statements using multi-source evidence and structured reasoning. It retrieves relevant information, evaluates source credibility, and generates explainable verdicts instead of black-box outputs.",
    image: "/truthlens-preview.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "APIs"],
    live: "https://truthlens-ruddy.vercel.app/",
    github: "https://www.github.com/amanvermaweb/truthlens/",
  },
  {
    title: "GitInsight",
    description:
      "GitInsight is a web application that provides insights into Github profile data, helping developers understand their coding habits and contributions, making it easy for users to navigate and explore their Github data.",
    image: "/gitinsight-preview.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "APIs"],
    live: "https://gitinsight-opal.vercel.app/",
    github: "https://www.github.com/amanvermaweb/gitinsight/",
  },
  {
    title: "LexiconAI",
    description:
      "LexiconAI is an AI-powered web app similar to ChatGPT, with multiple language models via APIs for Q&A, content creation, coding assistance, and more.",
    image: "/lexicon-ai-preview.png",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "APIs"],
    live: "https://lexicon-ai-three.vercel.app/",
    github: "https://www.github.com/amanvermaweb/lexiconai/",
  },
  {
    title: "Coding Notes",
    description:
      "Built a public documentation website using MkDocs. Contains organized notes on all my programming skills. Features categorized sections, easy navigation, and search for learners.",
    image: "/coding-notes-preview.png",
    tags: ["MkDocs", "Markdown"],
    live: "https://amanvermaweb.github.io/coding-notes/",
    github: "https://www.github.com/amanvermaweb/coding-notes/",
  },
  {
    title: "Spotify Website Clone",
    description:
      "Developed a Spotify website clone project featuring a sleek and intuitive music player interface utilizing HTML, CSS, and JavaScript.",
    image: "/spotify-website-clone-preview.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://amanvermaweb.github.io/Spotify-Clone/",
    github: "https://www.github.com/amanvermaweb/Spotify-Clone/",
  },
];

const ProjectCard = ({ project }) => {
  const liveHref = project.live || "#";

  return (
    <div className="bg-surface p-4 flex flex-col gap-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 h-full">
      <Image
        src={project.image}
        alt={`${project.title} Preview`}
        className="w-full aspect-video object-cover rounded-md"
        width={1200}
        height={675}
        sizes="(min-width: 768px) 35vw, 90vw"
      />
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="text-muted min-h-24 line-clamp-3">
        {project.description}
      </p>
      <div className="mt-auto flex flex-col gap-4">
        <div className="flex gap-2 tag-row">
          {project.tags.map((tag) => (
            <p
              key={tag}
              className="bg-chip text-chip-text px-1.5 rounded-full text-sm tag-pill"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-4">
          <SharedIconLink
            href={liveHref}
            label="View Project"
            className="outline bg-chip text-chip-text p-2 px-3 flex-1/2 rounded-lg hover:scale-105 hover:bg-chip-hover transition-transform duration-300 w-full"
            iconNode={<ExternalLink size={16} className="text-current" />}
          />
          <SharedIconLink
            href={project.github}
            label="Github"
            className="outline bg-chip text-chip-text p-2 px-3 flex-1/2 rounded-lg hover:scale-105 hover:bg-chip-hover transition-transform duration-300 w-full"
            iconNode={<Github size={16} className="text-current" />}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section flex items-center flex-col gap-10">
      <h2 className="section-title">My Projects</h2>
      <div className="container-page grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
