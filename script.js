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



/*
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


// IIFE
(() => {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("KhoGgtZIZC_WbZDOZ");
})();


/* This is grabbing the forms input fields and making sure the value are not null, if they are null they will get an error message 
to try again. if the fields arent null, the emailjs will send the form with serviceID, templateID, and the forms content,
it will then confirm if the message was sent or if there was an error in the process.*/
window.onload = () => {
  document.getElementById("form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const question = document.getElementById("option").value;
      // console.log(question)
      const from_name = document.getElementById("from_name").value;
      // console.log(from_name)
      const to_name = document.getElementById("contactEmail").value;
      // console.log(to_name)
      const message = document.getElementById("message").value;
      // console.log(message)

      if (this.from_name.value === "" || this.to_name.value === "" || this.message.value === "") {
        inputEmpty();
        return;
      }

      btn.value = "Sending...";

      const serviceID = "default_service";
      const templateID = "template_aqb48l6";

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = "Send Email";
          swal("Wooo!", "Your message has been sent :)", "success");
        }, (err) => {
          btn.value = "Send Email";
          swal({
            title: "Oops!",
            text: "Something went wrong :(",
            icon: "error",
            button: "Try Again"
          });
        });
    });
};

/* If the user doesn't fill out the form, they will get a sweet alert message telling them to try again */
function inputEmpty() {
  swal({
    title: "Oops!",
    text: "You forgot a field :( please complete the whole form.",
    icon: "error",
    button: "Try Again"
  });
}




