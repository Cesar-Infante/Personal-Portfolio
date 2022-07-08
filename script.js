// commenting out until find solution to make links color white on dark mode.
const toggle = document.getElementById('toggle');
var body = document.querySelector('body');
var header = document.querySelector('header');
var footer = document.querySelector('footer');
var nameTitle = document.querySelector('h1');
var navLink1 = document.querySelector('#Link1');
var navLink2 = document.querySelector('#Link2');
var navLink3 = document.querySelector('#Link3');
var navLink4 = document.querySelector('#Link4');

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


