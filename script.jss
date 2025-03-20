window.addEventListener("scroll", function() {
    let image = document.querySelector(".scroll-image");
    let scrollPosition = window.scrollY;
    image.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
