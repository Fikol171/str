const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

window.addEventListener("scroll", () => {
  const btn = document.getElementById("topBtn");

  if (window.scrollY > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

ScrollReveal().reveal(".card", {
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".review", {
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".gallery img", {
  distance: "30px",
  duration: 800,
  origin: "bottom",
  interval: 100,
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
