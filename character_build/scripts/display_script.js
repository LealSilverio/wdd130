// Sticky nav bar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.console = window.console || function(t) {};

if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}