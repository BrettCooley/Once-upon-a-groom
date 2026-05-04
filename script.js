const burger = document.querySelector(".burger")
const nav_bar = document.querySelector(".navigation_buttons")

burger.addEventListener ("click", function() {
    nav_bar.classList.toggle("active")

});
