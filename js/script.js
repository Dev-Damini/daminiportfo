// Typing effect
const text = "Hi, I'm Damini";
let i = 0;
const target = document.getElementById("typing");

function type() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}
type();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      r.classList.add("active");
    }
  });
});

// Hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});