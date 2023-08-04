var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next-ph",
    prevEl: ".swiper-button-prev-ph",
  },
  on: {
    init: updateCounter,
    slideChange: updateCounter,
  },
});

function updateCounter() {
  var current = document.querySelector(".swiper-current");
  var total = document.querySelector(".swiper-total");

  var currentIndex = String(this.realIndex + 1).padStart(2, "0");
  var totalSlides = String(this.slides.length).padStart(2, "0");

  current.textContent = currentIndex;
  total.textContent = totalSlides;
}

// Вызываем функцию для обновления счетчика сразу после инициализации
updateCounter.call(swiper);
