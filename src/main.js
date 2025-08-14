const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav > div:nth-child(2) a");
const form = document.querySelector("form");
const message = document.getElementById("form-message");

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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = await fetch(form.action, { method: "POST", body: data });
  if (res.ok) {
    message.classList.remove("hidden");
    form.reset();
  }
});
