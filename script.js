// Theme toggle with localStorage
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Apply saved theme + initialize AOS
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
  }
  AOS.init();
});
