// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickySet()};


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickySet() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    setTimeout(function() {
      navbar.classList.add("sticky1");
    }, 1);
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky1");
  }
}

var sticky = 60;

window.onload = function() {
// Get the navbar
navbar = document.getElementById("nav");
header = document.getElementById("header");
}

function hamBar(x) {
  var links = document.getElementById("mobile-links");
  x.classList.toggle("change");
  links.classList.toggle("visible");
  setTimeout(function() {
    links.classList.toggle("penis");
  }, 1);
}