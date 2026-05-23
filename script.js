const burger = document.querySelector(".burger")
const nav_bar = document.querySelector(".navigation_buttons")

burger.addEventListener ("click", function() {
    nav_bar.classList.toggle("active")

});

const carousels = document.querySelectorAll(".gallery_photos");

carousels.forEach((carousel) => {
  const progressBar = carousel.nextElementSibling.querySelector(".progress_bar");

  carousel.addEventListener("scroll", () => {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const scrollPercent = carousel.scrollLeft / maxScroll;

    progressBar.style.transform = `translateX(${scrollPercent * 100}%)`;
  });
});

        