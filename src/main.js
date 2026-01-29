const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav > div:nth-child(2) a");

let thresholdValue = window.innerWidth <= 768 ? 0.1 : 0.4;
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
  { threshold: thresholdValue}
  
);
sections.forEach((section) => observer.observe(section));
