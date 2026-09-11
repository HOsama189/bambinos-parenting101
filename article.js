const id = new URLSearchParams(location.search).get("id") || location.hash.replace(/^#/, "");
const article = articles.find((item) => item.id === id);

const missing = document.getElementById("article-missing");
const read = document.getElementById("article-read");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

if (!article) {
  missing.classList.remove("hidden");
} else {
  document.title = article.title + " — Bambinos";
  document.getElementById("article-meta").innerHTML =
    `<span class="tag">${categoryLabel(article.category)}</span> · ${article.date}`;
  document.getElementById("article-title").textContent = article.title;
  document.getElementById("article-excerpt").textContent = article.excerpt;
  const img = document.getElementById("article-image");
  img.src = article.image;
  img.alt = "";
  const body = document.getElementById("article-body");
  article.body.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    body.appendChild(p);
  });
  read.classList.remove("hidden");
}

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
