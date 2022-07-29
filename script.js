const toggle = document.getElementById('toggle');
let body = document.querySelector('body');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let nameTitle = document.querySelector('h1');
let navLink1 = document.querySelector('#Link1');
let navLink2 = document.querySelector('#Link2');
let navLink3 = document.querySelector('#Link3');
let navLink4 = document.querySelector('#Link4');

/* Toggling the class active on the elements. */
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



/**\
 * If the element is within 150px of the bottom of the viewport, add the class 'active' to it,
 * otherwise remove the class 'active' from it.
 */
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
  
/* Adding an event listener to the window object. The event listener is listening for the scroll event.
When the scroll event is triggered, the reveal function is called. */
  window.addEventListener("scroll", reveal);


