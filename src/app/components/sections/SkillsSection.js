import Image from "next/image";
import ThemeIcon from "../ThemeIcon";

const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    items: [
      { label: "HTML", icon: "/icons/html5.svg" },
      { label: "CSS", icon: "/icons/css.svg" },
      { label: "JavaScript", icon: "/icons/javascript.svg" },
      { label: "React", icon: "/icons/react.svg" },
      { label: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
      { label: "Next.js", icon: "/icons/nextjs.svg" },
    ],
  },
  {
    title: "Backend",
    icon: "⚡",
    items: [
      { label: "Node.js", icon: "/icons/nodejs.svg" },
      {
        label: "Express.js",
        iconLight: "/icons/Express.js_light.svg",
        iconDark: "/icons/Express.js_dark.svg",
      },
      { label: "MongoDB", icon: "/icons/mongodb.svg" },
      { label: "Python", icon: "/icons/python.svg" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    items: [
      { label: "Git", icon: "/icons/git.svg" },
      {
        label: "Github",
        iconLight: "/icons/GitHub_light.svg",
        iconDark: "/icons/GitHub_dark.svg",
      },
      { label: "Figma", icon: "/icons/figma.svg" },
      { label: "VS Code", icon: "/icons/vscode.svg" },
    ],
  },
];

const SkillCard = ({ group }) => {
  const iconSize = 36;

  return (
    <div className="flex h-full flex-col outline items-center p-6 sm:p-7 rounded-3xl hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center w-full gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="text-4xl">{group.icon}</div>
          <h1 className="text-3xl font-bold text-center">{group.title}</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
          {group.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center outline px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-5 gap-3 rounded-lg min-h-24 md:min-h-28"
            >
              {item.iconLight && item.iconDark ? (
                <ThemeIcon
                  lightSrc={item.iconLight}
                  darkSrc={item.iconDark}
                  alt={`${item.label} Logo`}
                  size={iconSize}
                />
              ) : (
                <span
                  className="relative block"
                  style={{ width: iconSize, height: iconSize }}
                >
                  <Image
                    src={item.icon}
                    alt={`${item.label} Logo`}
                    fill
                    sizes={`${iconSize}px`}
                    className="object-contain"
                  />
                </span>
              )}
              <p className="text-center text-[0.7rem] sm:text-sm leading-snug wrap-break-word whitespace-normal max-w-26 sm:max-w-30">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section flex items-center flex-col gap-6 sm:gap-8">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Here are the technologies and tools I use to bring ideas to life.
      </p>
      <div className="container-page max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 mt-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.title} group={group} />
        ))}
      </div>
      <div className="container-page mx-auto text-center outline p-5 sm:p-6 mt-1 sm:mt-2 rounded-3xl">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
          Always learning and exploring new technologies...
        </h3>
        <p className="section-body">Currently learning:- TypeScript</p>
      </div>
    </section>
  );
};

export default SkillsSection;
