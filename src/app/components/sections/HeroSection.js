import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container-page flex flex-col items-center justify-center gap-4 md:gap-3 text-center">
        <h1
          id="title"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold"
        >
          Aman Verma
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
          Class 10th Student | Aspiring Web Developer | Coding with Curiosity
          and Passion
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl">
          Passionate about creating beautiful, functional web experiences that
          make a difference. I blend creativity with code to build digital
          solutions that users love and businesses need.
        </p>
        <div className="flex gap-6 mt-4">
          <Link
            className="bg-button text-button-text p-2.5 rounded-xl cursor-pointer hover:scale-105 focus:scale-105 active:scale-95 transition-transform duration-300"
            href="/resume.pdf"
            download="Aman_Verma_Resume.pdf"
          >
            Download Resume/CV
          </Link>
          <Link
            href="#contact"
            className="hover:scale-105 focus:scale-105 transition-transform duration-300"
          >
            <span className="p-2.5 rounded-xl bg-surface-2 outline cursor-pointer inline-block">
              Contact Me
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
