const categories = [
  {
    id: "sleep",
    label: "Sleep",
    image:
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "feeding",
    label: "Feeding",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "development",
    label: "Development",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "health",
    label: "Health & care",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "emotions",
    label: "Feelings",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=300&q=80",
  },
];

const articles = [
  {
    id: "1",
    category: "sleep",
    date: "10 May 2024",
    title: "A calmer bedtime when nights feel endless",
    excerpt: "Small routines that help when your child will not settle.",
    image:
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    category: "feeding",
    date: "8 May 2024",
    title: "Picky eating without turning dinner into a battle",
    excerpt: "What to try when every meal becomes a negotiation.",
    image:
      "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    category: "development",
    date: "5 May 2024",
    title: "Milestones as a map, not a race",
    excerpt: "How to notice progress without comparing every week.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    category: "health",
    date: "2 May 2024",
    title: "When to call, and when to wait it out",
    excerpt: "A parent’s checklist for common worries at home.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    category: "emotions",
    date: "28 Apr 2024",
    title: "Big feelings in small bodies",
    excerpt: "Language that helps during tantrums and tears.",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    category: "sleep",
    date: "22 Apr 2024",
    title: "Naps that slipped — what still helps",
    excerpt: "Adjusting the day when the old schedule no longer fits.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
  },
];

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

function categoryLabel(id) {
  return categories.find((c) => c.id === id)?.label || id;
}

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
  featured.forEach((article) => {
    const card = document.createElement("article");
    card.className = "feature-card";
    card.innerHTML = `
      <div class="feature-media">
        <img src="${article.image}" alt="" />
      </div>
      <div>
        <p class="meta"><span class="tag">${categoryLabel(article.category)}</span> · ${article.date}</p>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a class="continue" href="#latest">Continue reading →</a>
      </div>
    `;
    featuredList.appendChild(card);
  });
}

function renderRecent(visible) {
  recentList.innerHTML = "";
  visible.slice(0, 4).forEach((article) => {
    const item = document.createElement("li");
    item.className = "recent-item";
    item.innerHTML = `
      <div class="recent-thumb"><img src="${article.image}" alt="" /></div>
      <div>
        <strong>${article.title}</strong>
        <span>${article.date}</span>
      </div>
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
    const card = document.createElement("article");
    card.className = "card";
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
