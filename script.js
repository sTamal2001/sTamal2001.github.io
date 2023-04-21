// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navebar = document.querySelector(".navebar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navebar.classList.toggle("active");
};

// Scrool section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navebar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and naveabr when click navebar link (scrool)
  menuIcon.classList.remove("bx-x");
  navebar.classList.remove("active");
};

// Scroll Revael
ScrollReveal({ reset: true, distance: "15px", duration: 2000, delay: 200 });
ScrollReveal().reveal(".home-c,.heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .service-c, .protfolio-b, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-c h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-c p, .about-c", { origin: "right" });

// Typed JS
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
