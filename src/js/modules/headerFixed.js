export default function headerFixed() {
  let header = document.querySelector("#site-header");
  let initialOffset = window.pageYOffset;

  function siteHeaderAffix() {
    let currentScroll = window.pageYOffset;

    if (currentScroll <= initialOffset) {
      // scrolling upwards
      header.classList.add("relative", "bg-transparent");
      header.classList.remove(
        "fixed",
        "bg-bgHeaderFixed",
        "top-0",
        "left-0",
        "right-0",
        "animate-slide-down"
      );
    } else {
      // scrolling downwards
      header.classList.remove("relative", "bg-transparent");
      header.classList.add(
        "fixed",
        "bg-bgHeaderFixed",
        "top-0",
        "left-0",
        "right-0",
        "animate-slide-down"
      );
    }

    // updates initial scroll position
    initialOffset = currentScroll;
  }

  window.addEventListener("scroll", siteHeaderAffix);
}

document.addEventListener("DOMContentLoaded", function () {
  headerFixed();
});
