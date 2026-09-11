const params = new URLSearchParams(location.search);
const emptyArticles = params.get("empty") === "articles";
const emptyCategories = params.get("empty") === "categories";

let selected = "all";

const categoryList = document.getElementById("category-list");
const categoriesEmpty = document.getElementById("categories-empty");
const articleList = document.getElementById("article-list");
const articlesEmpty = document.getElementById("articles-empty");
const featuredList = document.getElementById("featured-list");
const recentList = document.getElementById("recent-list");
const trending = document.getElementById("trending");
const latestSection = document.getElementById("latest");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

function visibleArticles() {
  if (emptyArticles) return [];
  return articles.filter((a) => selected === "all" || a.category === selected);
}

function renderCategories() {
  categoryList.innerHTML = "";
  if (emptyCategories || categories.length === 0) {
    categoriesEmpty.classList.remove("hidden");
    document.querySelector(".explore-more")?.classList.add("hidden");
    return;
  }
  categoriesEmpty.classList.add("hidden");
  document.querySelector(".explore-more")?.classList.remove("hidden");

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "cat-tile" + (selected === cat.id ? " is-selected" : "");
    btn.type = "button";
    btn.innerHTML = `
      <span class="tile-art"><img src="${cat.image}" alt="" /></span>
      <span>${cat.label}</span>
    `;
    btn.addEventListener("click", () => {
      selected = selected === cat.id ? "all" : cat.id;
      render();
    });
    categoryList.appendChild(btn);
  });
}

function renderFeatured(visible) {
  featuredList.innerHTML = "";
  const featured = visible.slice(0, 3);
  featured.forEach((article, index) => {
    const card = document.createElement("a");
    card.className = "feature-card";
    card.href = articleUrl(article.id);
    if (index === 0) {
      card.setAttribute("aria-label", "Continue reading: " + article.title);
    }
    card.innerHTML = `
      <div class="feature-media">
        <img src="${article.image}" alt="" />
      </div>
      <div class="feature-copy">
        <p class="meta"><span class="tag">${categoryLabel(article.category)}</span> · ${article.date}</p>
        <h3>${article.title}</h3>
        <p class="feature-excerpt">${article.excerpt}</p>
        <span class="continue">Continue reading →</span>
      </div>
    `;
    featuredList.appendChild(card);
  });
}

function renderRecent(visible) {
  recentList.innerHTML = "";
  visible.slice(0, 3).forEach((article) => {
    const item = document.createElement("li");
    item.className = "recent-item";
    item.innerHTML = `
      <a class="recent-link" href="${articleUrl(article.id)}">
        <div class="recent-thumb"><img src="${article.image}" alt="" /></div>
        <div>
          <strong>${article.title}</strong>
          <span>${article.date}</span>
        </div>
      </a>
    `;
    recentList.appendChild(item);
  });
}

function renderArticles() {
  articleList.innerHTML = "";
  const visible = visibleArticles();

  if (visible.length === 0) {
    articlesEmpty.classList.remove("hidden");
    trending.classList.add("hidden");
    latestSection.classList.add("hidden");
    return;
  }
  articlesEmpty.classList.add("hidden");
  trending.classList.remove("hidden");
  latestSection.classList.remove("hidden");

  renderFeatured(visible);
  renderRecent(visible);

  visible.forEach((article) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = articleUrl(article.id);
    card.innerHTML = `
      <div class="card-media"><img src="${article.image}" alt="" /></div>
      <div class="card-body">
        <p class="meta"><span class="tag">${categoryLabel(article.category)}</span> · ${article.date}</p>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
      </div>
    `;
    articleList.appendChild(card);
  });
}

function render() {
  renderCategories();
  renderArticles();
}

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

render();
