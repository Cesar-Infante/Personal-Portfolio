// commenting out until find solution to make links color white on dark mode.
const toggle = document.getElementById('toggle');
let body = document.querySelector('body');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let nameTitle = document.querySelector('h1');
let navLink1 = document.querySelector('#Link1');
let navLink2 = document.querySelector('#Link2');
let navLink3 = document.querySelector('#Link3');
let navLink4 = document.querySelector('#Link4');

toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');
    footer.classList.toggle('active');
    nameTitle.classList.toggle('active');
    navLink1.classList.toggle('active');
    navLink2.classList.toggle('active');
    navLink3.classList.toggle('active');
    navLink4.classList.toggle('active');
});



function reveal() {
    let revealCards = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < revealCards.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = revealCards[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        revealCards[i].classList.add("active");
      } else {
        revealCards[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


