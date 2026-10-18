document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-inner')) closeMenu();
});

window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();

if ('IntersectionObserver' in window) {
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sections = sectionLinks.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of sectionLinks) {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
