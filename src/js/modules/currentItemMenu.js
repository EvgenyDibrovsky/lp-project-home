function assignMenuClass(link) {
  const headerMenuLinks = document.querySelectorAll('.header-menu a');
  const footerMenuLinks = document.querySelectorAll('.footer-menu a');

  headerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-mrnu-header'));
  footerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-mrnu-footer'));

  if (link.closest('.header-menu')) {
    link.classList.add('current-mrnu-header');
    const matchingFooterLink = document.querySelector(
      `.footer-menu a[href="${link.getAttribute('href')}"]`
    );
    if (matchingFooterLink) {
      matchingFooterLink.classList.add('current-mrnu-footer');
    }
  } else if (link.closest('.footer-menu')) {
    link.classList.add('current-mrnu-footer');
    const matchingHeaderLink = document.querySelector(
      `.header-menu a[href="${link.getAttribute('href')}"]`
    );
    if (matchingHeaderLink) {
      matchingHeaderLink.classList.add('current-mrnu-header');
    }
  }
}

function setActiveLinkByUrl() {
  const currentUrl = window.location.pathname;
  const currentHash = window.location.hash;

  const allLinks = document.querySelectorAll('a');
  let anchorLinkFound = false;

  allLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref && linkHref === currentHash) {
      assignMenuClass(link);
      anchorLinkFound = true;
    }
  });

  if (!anchorLinkFound) {
    allLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (!linkHref) return;
      const normalizedLinkHref = linkHref.startsWith('./') ? linkHref.slice(1) : linkHref;
      if (normalizedLinkHref === currentUrl) {
        assignMenuClass(link);
      }
    });
  }
}

export default function currentItemMenu() {
  var headerMenuLinks = document.querySelectorAll('.header-menu a');
  var footerMenuLinks = document.querySelectorAll('.footer-menu a');

  headerMenuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      headerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-menu-header'));
      footerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-menu-footer'));

      e.currentTarget.classList.add('current-menu-header');

      const matchingFooterLink = document.querySelector(
        `.footer-menu a[href="${e.currentTarget.getAttribute('href')}"]`
      );
      if (matchingFooterLink) {
        matchingFooterLink.classList.add('current-menu-footer');
      }
    });
  });

  footerMenuLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      headerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-menu-header'));
      footerMenuLinks.forEach(innerLink => innerLink.classList.remove('current-menu-footer'));

      e.currentTarget.classList.add('current-menu-footer');

      const matchingHeaderLink = document.querySelector(
        `.header-menu a[href="${e.currentTarget.getAttribute('href')}"]`
      );
      if (matchingHeaderLink) {
        matchingHeaderLink.classList.add('current-menu-header');
      }
    });
  });
  setActiveLinkByUrl();
}
