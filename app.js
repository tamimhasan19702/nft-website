'use stict';

const eleToggleFunc = function(elem) {
  elem.classList.toggle("active");
}

const navbar = document.querySelector(".navbar");
const navbarToggleBtn = document.querySelector(".navbar-toggle-btn");

navbarToggleBtn.addEventListener("click", function(){
  eleToggleFunc(navbar);
});

// wishlist button
const wishlistBtn = document.querySelectorAll("[data-wishlist-btn]");

for(let i = 0; i < wishlistBtn.length; i++){
  wishlistBtn[i].addEventListener("click" , function(){
   eleToggleFunc(this);
  });
}

// go-to top functionality

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
  if(this.window.scrollY  > 800){
    goTopBtn.classList.add("active");
  }else{
    goTopBtn.classList.remove("active");
  }
})