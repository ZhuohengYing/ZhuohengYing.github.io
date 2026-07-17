const root = document.documentElement;
const themeButton = document.querySelector('.theme-button');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');

const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
  root.dataset.theme = 'dark';
}

function updateThemeLabel() {
  const isDark = root.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
}

updateThemeLabel();

themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeLabel();
});

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

year.textContent = new Date().getFullYear();
