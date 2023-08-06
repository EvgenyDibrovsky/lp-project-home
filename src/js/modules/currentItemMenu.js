function setActiveLinkByUrl() {
  const currentUrl = window.location.pathname;
  const normalizedUrl = currentUrl.endsWith('index.html')
    ? currentUrl.replace('index.html', '')
    : currentUrl;

  const allLinks = document.querySelectorAll('a');

  allLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref) {
      const normalizedLinkHref = linkHref.endsWith('index.html')
        ? linkHref.replace('index.html', '')
        : linkHref;

      if (
        normalizedLinkHref === normalizedUrl ||
        (normalizedLinkHref === './' && normalizedUrl === '/')
      ) {
        if (link.closest('.header-menu')) {
          link.classList.add('current-mrnu-header');
        } else if (link.closest('.footer-menu')) {
          link.classList.add('current-mrnu-footer');
        }
      }
    }
  });
}
export default function currentItemMenu() {
  var headerMenuLinks = document.querySelectorAll('.header-menu a');
  var footerMenuLinks = document.querySelectorAll('.footer-menu a');

  // Функция обработчика для меню header
  headerMenuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Удалить класс active у всех ссылок
      headerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-mrnu-header'));
      footerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-mrnu-footer'));

      // Добавить класс для текущей ссылки в header
      e.currentTarget.classList.add('current-mrnu-header');

      // Найти соответствующую ссылку в footer и добавить ей класс
      const matchingFooterLink = document.querySelector(
        `.footer-menu a[href="${e.currentTarget.getAttribute('href')}"]`
      );
      if (matchingFooterLink) {
        matchingFooterLink.classList.add('current-mrnu-footer');
      }
    });
  });

  // Функция обработчика для меню footer
  footerMenuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Удалить класс active у всех ссылок
      headerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-mrnu-header'));
      footerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-mrnu-footer'));

      // Добавить класс для текущей ссылки в footer
      e.currentTarget.classList.add('current-mrnu-footer');

      // Найти соответствующую ссылку в header и добавить ей класс
      const matchingHeaderLink = document.querySelector(
        `.header-menu a[href="${e.currentTarget.getAttribute('href')}"]`
      );
      if (matchingHeaderLink) {
        matchingHeaderLink.classList.add('current-mrnu-header');
      }
    });
  });
  setActiveLinkByUrl();
}
