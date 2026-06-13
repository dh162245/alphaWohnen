const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-overlay");
const openBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-links a");
const revealItems = document.querySelectorAll(".reveal");

function handleScroll() {
  navbar?.classList.toggle("is-scrolled", window.scrollY > 30);
}

function openMenu() {
  menu?.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menu?.classList.remove("is-open");
  document.body.style.overflow = "";
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

handleScroll();
window.addEventListener("scroll", handleScroll);

openBtn?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});