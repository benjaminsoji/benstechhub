// === Theme Toggle ===
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('light', 'dark');
  body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

themeToggle?.addEventListener('click', () => {
  const newTheme = body.classList.contains('light') ? 'dark' : 'light';
  body.classList.remove('light', 'dark');
  body.classList.add(newTheme);
  themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
});

// === Modal Logic ===
function openModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal) modal.classList.add('hidden');
}

// === AOS Initialization ===
document.addEventListener('DOMContentLoaded', () => {
  AOS?.init({
    duration: 800,
    once: true,
  });
});
