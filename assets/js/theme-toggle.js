// Enkel JS for tema-brytar
function setTheme(mode) {
  if (mode === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else if (mode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'system');
  }
  updateActiveButton(mode);
  // Send ei tilpassa hending når temaet blir endra
  document.dispatchEvent(new CustomEvent('themeChanged'));
}
function updateActiveButton(mode) {
  document.getElementById('theme-light').classList.remove('active');
  document.getElementById('theme-dark').classList.remove('active');
  document.getElementById('theme-system').classList.remove('active');
  if (mode === 'light') {
    document.getElementById('theme-light').classList.add('active');
  } else if (mode === 'dark') {
    document.getElementById('theme-dark').classList.add('active');
  } else {
    document.getElementById('theme-system').classList.add('active');
  }
}
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function applyTheme() {
  var theme = localStorage.getItem('theme') || 'system';
  if (theme === 'system') {
    // For system-tema, sett data-theme basert på system-innstillingar
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    updateActiveButton('system');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
    updateActiveButton(theme);
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('theme-light').onclick = function() { setTheme('light'); };
  document.getElementById('theme-dark').onclick = function() { setTheme('dark'); };
  document.getElementById('theme-system').onclick = function() { setTheme('system'); };
  applyTheme();
  // Send ut themeChanged-hending ved oppstart for å oppdatera Prism og Mermaid
  document.dispatchEvent(new CustomEvent('themeChanged'));
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    if ((localStorage.getItem('theme') || 'system') === 'system') {
      applyTheme();
    }
  });
});
