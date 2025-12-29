// Typing Animation
const text = "Hi, I'm Damini";
let index = 0;
const speed = 120;
const target = document.getElementById("typing");

function typeEffect() {
  if(index < text.length){
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();

// Scroll Reveal
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for(let i=0; i<reveals.length; i++){
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;
    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    }
  }
});