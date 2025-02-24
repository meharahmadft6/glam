const moon = document.querySelector("#moon");
const body = document.body;

// Apply animation function
function animateIcon() {
  moon.style.opacity = "0"; // Fade out
  moon.style.transform = "scale(0.8)"; // Shrink slightly

  setTimeout(() => {
    moon.style.opacity = "1"; // Fade in
    moon.style.transform = "scale(1)"; // Reset to normal size
  }, 300); // Delay matches transition time
}

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  moon.src = "./img/sun.png";
} else {
  body.classList.remove("dark");
  moon.src = "./img/moon.png";
}

// Toggle dark mode on click with animation
moon.addEventListener("click", () => {
  animateIcon(); // Call animation function
  setTimeout(() => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      moon.src = "./img/moon.png";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      moon.src = "./img/sun.png";
      localStorage.setItem("theme", "dark");
    }
  }, 150); // Small delay to sync with animation
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
