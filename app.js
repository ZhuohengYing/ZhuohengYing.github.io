const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const year = document.querySelector('#year');
const config = window.SITE_CONFIG || {};

function inferGithubUrl() {
  if (config.github) return config.github;
  const host = window.location.hostname;
  if (host.endsWith('.github.io')) {
    const username = host.split('.')[0];
    return `https://github.com/${username}`;
  }
  return '';
}

function bindOptionalLink(name, value) {
  document.querySelectorAll(`[data-link="${name}"]`).forEach((link) => {
    if (!value) {
      link.hidden = true;
      return;
    }
    link.href = value;
    link.hidden = false;
  });
}

bindOptionalLink('github', inferGithubUrl());
bindOptionalLink('scholar', config.scholar || '');
bindOptionalLink('linkedin', config.linkedin || '');

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (storedTheme === 'dark' || (!storedTheme && prefersDark)) root.dataset.theme = 'dark';

function updateThemeLabel() {
  const dark = root.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
}
updateThemeLabel();

themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('theme', next);
  updateThemeLabel();
});

menuButton.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navMenu.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

year.textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-menu a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));
