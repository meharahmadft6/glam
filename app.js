const moon = document.querySelector("#moon");
const body = document.querySelector("body");

// Ensure the dark mode toggle works
moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
