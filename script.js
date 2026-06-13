(function () {
  const wiki = window.DOLLY_WIKI;
  const articleGrid = document.querySelector("[data-articles]");
  const navList = document.querySelector("[data-nav]");
  const searchInput = document.querySelector("[data-search]");
  const resultCount = document.querySelector("[data-result-count]");
  const emptyState = document.querySelector("[data-empty]");
  const topButton = document.querySelector("[data-top]");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderArticle(article) {
    const tags = article.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    const facts = article.facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join("");

    return `
      <article class="wiki-card" id="${escapeHtml(article.id)}" data-card>
        <div class="card-topline">
          <p>${escapeHtml(article.kicker)}</p>
          <a href="#top" aria-label="Back to top">Top</a>
        </div>
        <h2>${escapeHtml(article.title)}</h2>
        <p class="summary">${escapeHtml(article.summary)}</p>
        <ul class="facts">${facts}</ul>
        <p class="callout">${escapeHtml(article.callout)}</p>
        <div class="tags" aria-label="Search tags">${tags}</div>
      </article>
    `;
  }

  function renderNav(articles) {
    navList.innerHTML = articles
      .map((article) => `<a href="#${escapeHtml(article.id)}">${escapeHtml(article.title)}</a>`)
      .join("");
  }

  function renderArticles(query) {
    const matches = wiki.filterArticles(query);
    articleGrid.innerHTML = matches.map(renderArticle).join("");
    renderNav(matches.length ? matches : wiki.articles);
    resultCount.textContent = matches.length === 1 ? "1 article" : `${matches.length} articles`;
    emptyState.hidden = matches.length > 0;
  }

  searchInput.addEventListener("input", (event) => {
    renderArticles(event.target.value);
  });

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    topButton.classList.toggle("is-visible", window.scrollY > 500);
  });

  renderArticles("");
})();
