export const profile = {
  name: "Aman Verma",
  firstName: "Aman",
  lastName: "Verma",
  role: "Student Developer & Builder",
  location: "Lucknow, India",
  timezone: "Asia/Kolkata",
  introduction:
    "I’m a 17-year-old developer in Class XI. I build for the web, from tools that check claims to hardware that tracks school buses.",
  portrait: "aman.webp",
  about: {
    lead: "I started building websites at 12, driven by curiosity about how the internet works. That curiosity eventually led me to full-stack development, artificial intelligence, and building products from scratch.",
    paragraphs: [
      "Today, I'm a Class XI student based in Lucknow, balancing academics with my interest in technology. My experiences range from developing web applications to participating in innovation programmes and hackathons.",
      "I enjoy turning ideas into working products, learning through experimentation, and understanding how technology can solve everyday problems.",
    ],
    photo: "workbench.webp",
    photoAlt:
      "A laptop open to a code editor, with a breadboard and jumper wires across the worktable.",
    toolkit: [
      {
        category: "Frontend",
        items: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "TypeScript",
        ],
      },
      {
        category: "Backend & Database",
        items: ["Node.js", "Express.js", "MongoDB", "Python"],
      },
      { category: "Tools & Workflow", items: ["Git", "GitHub", "Figma"] },
      {
        category: "Hardware & Prototyping",
        items: ["Arduino", "RFID", "ESP32"],
      },
    ],
  },
  email: "amanverma.codes@gmail.com",
  github: "https://github.com/amanvermaweb",
  linkedin: "https://www.linkedin.com/in/aman-verma-dev/",
  cv: "https://docs.google.com/document/d/1x_0quHj8o0oePuPkMZGTatxdbtDdOmJeWSXOZYnnZDU/edit?usp=sharing",
  timelineIntro:
    "The projects I want to build tend to decide what I learn next.",
  contactIntro:
    "For a project, a hackathon team, or a conversation about the work.",
};

export const selected = ["safetap", "truthlens", "gitinsight"];
export const categories = {
  all: "All projects",
  apps: "Applications",
  hardware: "Hardware",
  learning: "Learning tools",
};

// Years refer to the project repositories. A team contribution is credited in its description.
export type Category = keyof typeof categories;
export interface Project {
  id: string;
  name: string;
  year: number;
  category: Exclude<Category, "all">;
  field: string;
  overview: string;
  description: string;
  stack: string[];
  image: string;
  alt: string;
  demo: string | null;
  source: string;
}
export const projects: Project[] = [
  {
    id: "safetap",
    name: "SafeTAP",
    year: 2026,
    category: "hardware",
    field: "Connected hardware",
    overview: "RFID attendance and live tracking for school buses. Built at a program at IIT Delhi.",
    description:
      "A school bus prototype that connects the physical ride to a web dashboard. RFID cards record attendance, an ESP32 handles the hardware side, and a map lets people follow the bus. Built at a program at IIT Delhi.",
    stack: ["Next.js", "TypeScript", "Node.js", "ESP32", "RFID"],
    image: "safetap.webp",
    alt: "SafeTAP dashboard with bus routes on a map",
    demo: "https://safe-tap-nine.vercel.app/",
    source: "https://github.com/amanvermaweb/safe-tap",
  },
  {
    id: "truthlens",
    name: "TruthLens",
    year: 2026,
    category: "apps",
    field: "AI & research",
    overview: "A claim checker that shows the evidence behind a verdict.",
    description:
      "Enter a claim and TruthLens looks for evidence across multiple sources. It evaluates those sources and returns a verdict with an explanation you can examine.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "APIs"],
    image: "truthlens.webp",
    alt: "TruthLens claim verification interface",
    demo: "https://truthlens-ruddy.vercel.app/",
    source: "https://github.com/amanvermaweb/truthlens",
  },
  {
    id: "gitinsight",
    name: "GitInsight",
    year: 2026,
    category: "apps",
    field: "Developer tool",
    overview:
      "A closer look at a developer’s work through their GitHub profile.",
    description:
      "GitInsight turns public GitHub activity into a readable profile. It uses API data to help developers explore their repositories, contributions, and coding habits.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API"],
    image: "gitinsight.webp",
    alt: "GitInsight profile lookup screen",
    demo: "https://gitinsight-opal.vercel.app/",
    source: "https://github.com/amanvermaweb/gitinsight",
  },
  // {
  //   id: "journal",
  //   name: "The Explorer’s Journal of Science",
  //   year: 2026,
  //   category: "apps",
  //   field: "Science publication",
  //   overview: "A home on the web for a student-led science publication.",
  //   description:
  //     "A publication site for a student-led science journal, with contact and newsletter endpoints backed by a Postgres database.",
  //   stack: ["Next.js", "React", "Tailwind CSS", "Neon Postgres"],
  //   image: "journal.webp",
  //   alt: "The Explorer’s Journal of Science website",
  //   demo: "https://explorers-journal-of-science.vercel.app/",
  //   source: "https://github.com/amanvermaweb/explorers-journal-of-science",
  // },
  {
    id: "dyne",
    name: "Dyne",
    year: 2026,
    category: "apps",
    field: "Team hackathon build",
    overview: "Swipe through restaurants and save places to try.",
    description:
      "Built with a four-person team for the Alameda Hackathon. I worked on the frontend for discovering restaurants, skipping a suggestion, and saving a place for later.",
    stack: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    image: "dyne.webp",
    alt: "Dyne restaurant discovery interface",
    demo: "https://dyne-frontend.vercel.app/",
    source: "https://github.com/amanvermaweb/dyne",
  },
  {
    id: "moonlink",
    name: "MoonLink",
    year: 2025,
    category: "apps",
    field: "Network interface",
    overview:
      "A frontend for exploring a mesh network and its connected nodes.",
    description:
      "A team project for the Solaris Hackathon. The interface brings network topology, connected nodes, and priority messages into one view.",
    stack: ["HTML", "JavaScript", "CSS"],
    image: "moonlink.webp",
    alt: "MoonLink mesh network interface",
    demo: "https://amanvermaweb.github.io/MoonLink-frontend/",
    source: "https://github.com/amanvermaweb/MoonLink-frontend",
  },
  {
    id: "lexiconai",
    name: "LexiconAI",
    year: 2025,
    category: "apps",
    field: "AI application",
    overview: "A chat workspace with a choice of language models.",
    description:
      "One interface for working with different language models through their APIs. The chat supports questions, writing tasks, and coding help.",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "APIs"],
    image: "lexiconai.webp",
    alt: "LexiconAI chat application with its model selector",
    demo: "https://lexicon-ai-three.vercel.app/",
    source: "https://github.com/amanvermaweb/LexiconAI",
  },
  {
    id: "focus",
    name: "Focus Timer",
    year: 2025,
    category: "learning",
    field: "Productivity tool",
    overview: "A configurable Pomodoro timer for focused study sessions.",
    description:
      "A browser-based timer built for Hack Club’s Summer of Making. Choose a session length, start a focus block, and pause or reset it when you need to.",
    stack: ["HTML", "JavaScript", "Tailwind CSS"],
    image: "focus.webp",
    alt: "Focus Timer study interface",
    demo: "https://amanvermaweb.github.io/focus-app/",
    source: "https://github.com/amanvermaweb/focus-app",
  },
  {
    id: "coding-notes",
    name: "Coding Notes",
    year: 2025,
    category: "learning",
    field: "Documentation",
    overview: "My programming notes, organized into a searchable reference.",
    description:
      "A public notebook built with MkDocs. Markdown files become searchable topic pages so I can revisit what I’ve learned and share it with other learners.",
    stack: ["MkDocs", "Markdown"],
    image: "coding-notes.webp",
    alt: "Coding Notes documentation with its topic navigation",
    demo: "https://amanvermaweb.github.io/coding-notes/",
    source: "https://github.com/amanvermaweb/coding-notes",
  },
  {
    id: "spotify",
    name: "Spotify Website Clone",
    year: 2024,
    category: "apps",
    field: "Frontend study",
    overview: "An early music player built with HTML, CSS, and JavaScript.",
    description:
      "A hands-on frontend study of a familiar music interface. I recreated the playlist layout and player controls with browser-native technologies.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "spotify.webp",
    alt: "Spotify clone with playlists and playback controls",
    demo: null,
    source: "https://github.com/amanvermaweb/Spotify-Clone",
  },
];

const byId = new Map(projects.map((project) => [project.id, project]));
if (byId.size !== projects.length)
  throw new Error("Each project needs a unique ID.");
export const featured = selected.map((id) => {
  const project = byId.get(id);
  if (!project) throw new Error(`Unknown featured project: ${id}`);
  return project;
});

export const timeline = [
  {
    when: "Age 12",
    title: "My first web pages",
    detail:
      "HTML and CSS were my starting point. I learned by putting a page together and seeing what changed in the browser.",
  },
  {
    when: "2024",
    title: "A music player in the browser",
    detail:
      "Recreating Spotify’s interface gave me a familiar design to work from while learning JavaScript and playback controls.",
    project: "spotify",
  },
  {
    when: "2025",
    title: "From notes to applications",
    detail:
      "I published my coding notes, connected multiple language models in LexiconAI, and worked on MoonLink with a hackathon team.",
    project: "lexiconai",
  },
  {
    when: "2026",
    title: "Connecting software to hardware",
    detail:
      "After building TruthLens and GitInsight, I built SafeTAP, after getting selected in a program at IIT Delhi.",
    project: "safetap",
  },
];
