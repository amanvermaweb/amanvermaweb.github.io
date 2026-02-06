import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="section flex items-center justify-center flex-col gap-10">
      <h2 className="section-title">About Me</h2>
      <div className="container-page grid grid-cols-1 md:grid-cols-[1fr,1.2fr] gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/me.png"
            alt="Aman Verma"
            className="rounded-full h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 object-cover shadow-lg"
            width={320}
            height={320}
            sizes="(min-width: 768px) 320px, 80vw"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mt-2 md:mt-0">
            Hello, I&apos;m Aman! 👋
          </h3>
          <p className="section-body">
            My name is Aman Verma, a 16 year old from Lucknow, India, who is
            passionate about building websites and apps. I&apos;ve been coding for
            over three years, starting with the basics and now working on
            full-stack projects that emphasize clean code and responsive design.
            I&apos;m constantly learning new technologies to stay ahead and improve
            the quality of my work.
          </p>
          <p className="section-body">
            I&apos;m motivated by creating real-world solutions and collaborating
            with others to build functional, user-friendly applications. My
            current focus is on developing my skills in React, backend
            technologies, and modern web development practices. I&apos;m eager to
            take on freelancing opportunities and continue growing as a
            developer through hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
