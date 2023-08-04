import headerFixed from "./modules/headerFixed";
import mobileMenu from "./modules/mobileMenu";
import initSwiper from "./modules/swiper";
import initAnimation from "./modules/animationElements";
import "../main.css";
document.addEventListener("DOMContentLoaded", () => {
  //   backToTop();
  headerFixed();
  mobileMenu();
  initSwiper();
  initAnimation();
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
