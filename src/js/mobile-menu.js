function mobileMenu() {
  const mobileNavigation = document.getElementById("mobile-navigation");
  if (!mobileNavigation) return;

  const menuBtn = document.getElementById("menu-toggle");
  if (!menuBtn) return;

  const closeBtn = document.getElementById("close-menu");
  if (!closeBtn) return;

  const menuItems = document.querySelectorAll("#mobile-navigation ul li a");

  const handleMenuClick = () => {
    mobileNavigation.classList.toggle("translate-y-full");
    menuBtn.classList.toggle("rotate-180");
    document.body.classList.toggle("overflow-hidden");
    document.documentElement.classList.toggle("overflow-hidden"); // Добавленная строка
    updateAriaAttr();
  };

  const handleMenuItemClick = () => {
    mobileNavigation.classList.add("translate-y-full");
    menuBtn.classList.remove("rotate-180");
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden"); // Добавленная строка
    updateAriaAttr();
  };

  menuBtn.addEventListener("click", handleMenuClick);
  closeBtn.addEventListener("click", handleMenuItemClick);

  Array.from(menuItems).forEach((menuItem) => {
    menuItem.addEventListener("click", handleMenuItemClick);
  });

  function updateAriaAttr() {
    const expanded =
      menuBtn.getAttribute("aria-expanded") === "true" ? "false" : "true";
    menuBtn.setAttribute("aria-expanded", expanded);
  }
}

mobileMenu();
