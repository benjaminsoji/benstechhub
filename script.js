// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Toggle theme
themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light');
  const currentTheme = body.classList.contains('light') ? 'light' : '';
  localStorage.setItem('theme', currentTheme);
});

// Modal logic
function openModal() {
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// AOS Initialization
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
