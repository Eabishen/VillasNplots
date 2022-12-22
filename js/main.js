$(document).on("click", ".toggle", () => {
    $(".element").toggleClass("shown2");
    $(".icon1").toggleClass("is-hidden");
    $(".icon2").toggleClass("shown");
});

let month = document.getElementById("month");
let year = document.getElementById("year");
let monthPrice = document.querySelectorAll("#monthprice");
let yearPrice = document.querySelectorAll("#yearprice");

year.onclick = () => {
    year.classList.add("actives");
    month.classList.remove("actives");

    monthPrice.forEach((mo) => {
        mo.style.display = "none";
    });
    yearPrice.forEach((yr) => {
        yr.style.display = "block";
    });
};

month.onclick = () => {
    year.classList.remove("actives");
    month.classList.add("actives");

    monthPrice.forEach((mo) => {
        mo.style.display = "block";
    });
    yearPrice.forEach((yr) => {
        yr.style.display = "none";
    });
};

// Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
