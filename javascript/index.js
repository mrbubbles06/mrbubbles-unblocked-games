// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyset()};


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyset() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onload = function() {
// Get the navbar
navbar = document.getElementById("nav");
header = document.getElementById("header");

// Get the offset position of the navbar
sticky = navbar.offsetTop;
}