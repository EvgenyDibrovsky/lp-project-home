import headerFixed from './modules/headerFixed';
import mobileMenu from './modules/mobileMenu';
import initSwiper from './modules/swiper';
import initAnimation from './modules/animationElements';
import backToTop from './modules/backToTop';
import currentItemMenu from './modules/currentItemMenu';
import '../main.css';
require('fslightbox');

document.addEventListener('DOMContentLoaded', () => {
  headerFixed();
  mobileMenu();
  initSwiper();
  initAnimation();
  backToTop();
  currentItemMenu();
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
