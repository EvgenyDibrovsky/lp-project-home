export default function backToTop() {
  (function () {
    'use strict';

    var backToTopBtn = document.querySelector('#backToTop');

    window.addEventListener('scroll', function () {
      var scrolledAmount = window.pageYOffset;
      var clientHeight = document.documentElement.clientHeight;

      backToTopBtn.classList.toggle('back_to_top-show', scrolledAmount > clientHeight);
    });

    backToTopBtn.addEventListener('click', function (event) {
      event.preventDefault(); // prevents default action (href="#")
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  })();
}
