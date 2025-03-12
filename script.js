document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Stellar Studios!");

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector("nav ul");

    if (mobileMenu && navList) {
        mobileMenu.addEventListener("click", function () {
            navList.classList.toggle("active");
        });
    }
});
