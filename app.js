'use stict';

const eleToggleFunc = function(elem) {
  elem.classList.toggle("active");
}

const navbar = document.querySelector(".navbar");
const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");

navbarToggleBtn.addEventListener("click", function(){
  eleToggleFunc(navbar);
});