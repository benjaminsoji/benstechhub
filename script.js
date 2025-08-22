// Sample blog data
const blogPosts = [
  {
    title: "Modular CSS: Why It Matters",
    category: "css",
    excerpt: "Learn how breaking your styles into reusable modules can future-proof your site.",
    link: "#"
  },
  {
    title: "Neon UI: Designing with Glow",
    category: "design",
    excerpt: "Explore how neon-inspired design can elevate your brand.",
    link: "#"
  },
  {
    title: "Behind the Scenes: Ben’s Tech Hub",
    category: "workflow",
    excerpt: "A look at the architecture, tools, and mindset behind this glowing space.",
    link: "#"
  },
  // Add more posts as needed
];

let currentPage = 1;
const postsPerPage = 2;

const grid = document.getElementById("blogGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageIndicator = document.getElementById("pageIndicator");

// Refactored to get a single filtered list.
// The filtering logic is now in one place.
function getFilteredPosts() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  return blogPosts.filter(post => {
    const matchesCategory = category === "all" || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(search) || post.excerpt.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });
}

function renderPosts() {
  const filteredPosts = getFilteredPosts();
  const start = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(start, start + postsPerPage);

  // Generate and insert the HTML
  grid.innerHTML = paginatedPosts.map(post => `
    <article class="blog-post" data-aos="fade-up">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a href="${post.link}" class="read-more">Read More →</a>
    </article>
  `).join("");

  pageIndicator.textContent = `Page ${currentPage}`;
  updatePaginationButtons(filteredPosts.length);
}

// New function to handle button states for better UX
function updatePaginationButtons(totalPosts) {
  const maxPage = Math.ceil(totalPosts / postsPerPage);

  if (currentPage === 1) {
    prevPageBtn.disabled = true;
    prevPageBtn.style.opacity = 0.5; // Visual cue
  } else {
    prevPageBtn.disabled = false;
    prevPageBtn.style.opacity = 1;
  }

  if (currentPage === maxPage || totalPosts === 0) {
    nextPageBtn.disabled = true;
    nextPageBtn.style.opacity = 0.5; // Visual cue
  } else {
    nextPageBtn.disabled = false;
    nextPageBtn.style.opacity = 1;
  }
}

// Event listeners call renderPosts directly after resetting the page number
searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderPosts();
});

categoryFilter.addEventListener("change", () => {
  currentPage = 1;
  renderPosts();
});

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
});

nextPageBtn.addEventListener("click", () => {
  const filteredPosts = getFilteredPosts();
  const maxPage = Math.ceil(filteredPosts.length / postsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    renderPosts();
  }
});

// Initial render on page load
document.addEventListener("DOMContentLoaded", renderPosts);

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
