const menubtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});


//first content loader code for the user .....
document.addEventListener("DOMContentLoaded", function() {
  const navBtns = document.querySelectorAll('.slider-navigation .nav-btn');

  [0].classList.add('active');

  navBtns.forEach(function(btn, index) {
    btn.addEventListener('click', function() {
  
      navBtns.forEach(function(btn) {
        btn.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });
});

// Disable right-clicking on the entire document
document.addEventListener('contextmenu', function(event) {
  // Prevent the default right-click behavior
  event.preventDefault();
});
