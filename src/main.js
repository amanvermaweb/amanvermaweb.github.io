const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav > div:nth-child(2) a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("nav-active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("nav-active");
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach((section) => observer.observe(section));
