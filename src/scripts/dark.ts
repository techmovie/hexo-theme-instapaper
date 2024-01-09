const modeSwitcher = document.querySelector('.mode-switch .iconfont');
const highlightThemeLink = document.querySelector('LINK[light-src*=https]');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const lightCss = highlightThemeLink?.getAttribute('light-src') as string;
const darkCss = highlightThemeLink?.getAttribute('dark-src') as string;

if (currentTheme === 'dark') {
  highlightThemeLink?.setAttribute('href', '');
  document.body.classList.toggle('dark-mode');
  highlightThemeLink?.setAttribute('href', darkCss as string);
} else {
  document.body.classList.toggle('light-mode');
  highlightThemeLink?.setAttribute('href', lightCss as string);
}
modeSwitcher?.addEventListener('click', (e) => {
  e.stopPropagation();
  let theme = '';
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle('light-mode');
    theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  } else {
    document.body.classList.toggle('dark-mode');
    theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  }
  highlightThemeLink?.setAttribute('href', theme === 'dark' ? darkCss : lightCss);
  localStorage.setItem('theme', theme);
});
