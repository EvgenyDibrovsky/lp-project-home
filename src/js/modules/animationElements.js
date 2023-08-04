export default function initAnimation() {
  function onEntry(entries) {
    entries.forEach((entry) => {
      const target = entry.target;
      if (entry.isIntersecting) {
        if (target.classList.contains("init-animate-1")) {
          target.classList.add("animate-animate-1");
        } else if (target.classList.contains("init-animate-2")) {
          target.classList.add("animate-animate-2");
        } else if (target.classList.contains("init-animate-3")) {
          target.classList.add("animate-animate-3");
        } else if (target.classList.contains("init-animate-4")) {
          target.classList.add("animate-animate-4");
        } else if (target.classList.contains("init-animate-5")) {
          target.classList.add("animate-animate-5");
        } else if (target.classList.contains("init-reverse-animation")) {
          target.classList.add("animate-reverse-animation");
        }

        target.style.opacity = "1"; // Установка opacity на 1 при видимости элемента
      }
    });
  }

  const observer = new IntersectionObserver(onEntry, {
    threshold: 0.1,
    rootMargin: "0px 0px -5% 0px",
  });

  const elements = Array.from(
    document.querySelectorAll(
      ".init-animate-1, .init-animate-2, .init-animate-3, .init-animate-4, .init-animate-5, .init-reverse-animation"
    )
  );

  elements.forEach((element) => {
    element.style.opacity = "0"; // Установка начальной прозрачности на 0
    observer.observe(element);
  });
}
