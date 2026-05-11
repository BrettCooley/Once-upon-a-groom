const burger = document.querySelector(".burger")
const nav_bar = document.querySelector(".navigation_buttons")

burger.addEventListener ("click", function() {
    nav_bar.classList.toggle("active")

});


const galleries = document.querySelectorAll(".gallery_photos");

galleries.forEach((gallery) => {

    const arrow = gallery.querySelector(".arrow_icon");
    const beforePhoto = gallery.querySelector(".gallery_photo:nth-child(1)");
    const afterPhoto = gallery.querySelector(".gallery_photo:nth-child(2)");

    let showingAfter = false;

    function swapPhotos() {

        showingAfter = !showingAfter;

        if (showingAfter) {
            beforePhoto.classList.remove("active");
            afterPhoto.classList.add("active");
            arrow.style.transform = "rotate(180deg)";
        } else {
            afterPhoto.classList.remove("active");
            beforePhoto.classList.add("active");
            arrow.style.transform = "rotate(0deg)";
        }

    }

    arrow.addEventListener("click", swapPhotos);

    beforePhoto.addEventListener("click", swapPhotos);

    afterPhoto.addEventListener("click", swapPhotos);

});