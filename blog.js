// Sample blog data
const blogPosts = [
  {
    title: "Modular CSS: Why It Matters",
    category: "css",
    excerpt: "Learn how breaking your styles into reusable modules can future-proof your site.",
    link: "post.html?id=1"
  },
  {
    title: "Neon UI: Designing with Glow",
    category: "design",
    excerpt: "Explore how neon-inspired design can elevate your brand.",
    link: "post.html?id=2"
  },
  {
    title: "Behind the Scenes: Ben’s Tech Hub",
    category: "workflow",
    excerpt: "A look at the architecture, tools, and mindset behind this glowing space.",
    link: "post.html?id=3"
  },
  // Add more posts as needed
];

let currentPage = 1;
const postsPerPage = 2;

function renderPosts() {
  const grid = document.getElementById("blogGrid");
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  const filtered = blogPosts.filter(post => {
    const matchesCategory = category === "all" || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(search) || post.excerpt.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  const start = (currentPage - 1) * postsPerPage;
  const paginated = filtered.slice(start, start + postsPerPage);

  grid.innerHTML = paginated.map(post => `
    <article class="blog-post" data-aos="fade-up">
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <a href="${post.link}" class="read-more">Read More →</a>
    </article>
  `).join("");

  document.getElementById("pageIndicator").textContent = `Page ${currentPage}`;
}

document.getElementById("searchInput").addEventListener("input", () => {
  currentPage = 1;
  renderPosts();
});

document.getElementById("categoryFilter").addEventListener("change", () => {
  currentPage = 1;
  renderPosts();
});

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const filtered = blogPosts.filter(post => {
    const matchesCategory = category === "all" || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(search) || post.excerpt.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  const maxPage = Math.ceil(filtered.length / postsPerPage);
  if (currentPage < maxPage) {
    currentPage++;
    renderPosts();
  }
});

document.addEventListener("DOMContentLoaded", renderPosts);
