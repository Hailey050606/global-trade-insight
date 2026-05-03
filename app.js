(function () {
  const data = window.SITE_CONTENT;
  if (!data) {
    console.error("SITE_CONTENT is missing.");
    return;
  }

  const i18n = {
    zh: {
      navPaths: "学习路径",
      navTopics: "核心专题",
      navCases: "案例解析",
      navResources: "资源中心",
      startLearning: "开始学习",
      viewResources: "查看资源",
      updatedAt: "最近更新",
      coverage: "覆盖市场",
      pathsTitle: "学习路径",
      pathsDesc: "从基础认知到实战进阶，按阶段系统学习。",
      topicsTitle: "核心专题",
      topicsDesc: "术语、合规、物流、结算等实务要点。",
      casesTitle: "案例解析",
      casesDesc: "从问题、处理到复盘，积累可复用经验。",
      resourcesTitle: "资源中心",
      resourcesDesc: "模板、清单与官方参考链接。",
      faqTitle: "常见问题",
      all: "全部",
      searchPlaceholder: "搜索专题 / 标签 / 案例",
      viewTopicDetail: "查看详情",
      favorite: "收藏",
      unfavorite: "取消收藏",
      favoritesOnly: "只看收藏",
      favoritesOn: "已启用收藏筛选",
      topicsCount: "当前展示 {count} 个专题",
      featured: "推荐",
      visitResource: "访问资源",
      issue: "问题",
      action: "处理",
      review: "复盘",
      close: "关闭",
      noResults: "没有匹配的内容，试试更短关键词。",
      themeToLight: "浅色",
      themeToDark: "深色",
      modalMetaSeparator: " · "
    },
    en: {
      navPaths: "Paths",
      navTopics: "Topics",
      navCases: "Cases",
      navResources: "Resources",
      startLearning: "Start Learning",
      viewResources: "View Resources",
      updatedAt: "Updated",
      coverage: "Market Coverage",
      pathsTitle: "Learning Paths",
      pathsDesc: "Move from fundamentals to advanced execution in structured stages.",
      topicsTitle: "Core Topics",
      topicsDesc: "Practical know-how in terms, compliance, logistics, and settlement.",
      casesTitle: "Case Analysis",
      casesDesc: "Capture reusable experience from issue, response, and review.",
      resourcesTitle: "Resource Center",
      resourcesDesc: "Templates, checklists, and official references.",
      faqTitle: "FAQ",
      all: "All",
      searchPlaceholder: "Search topics / tags / cases",
      viewTopicDetail: "View Details",
      favorite: "Save",
      unfavorite: "Saved",
      favoritesOnly: "Favorites Only",
      favoritesOn: "Favorites filter enabled",
      topicsCount: "{count} topics shown",
      featured: "Featured",
      visitResource: "Visit",
      issue: "Issue",
      action: "Action",
      review: "Review",
      close: "Close",
      noResults: "No content matched. Try a shorter keyword.",
      themeToLight: "Light",
      themeToDark: "Dark",
      modalMetaSeparator: " · "
    }
  };

  const state = {
    lang: "zh",
    theme: "dark",
    level: "all",
    region: "all",
    query: "",
    favoritesOnly: false,
    favorites: new Set()
  };

  const levelSet = [...new Set(data.topics.map((item) => item.level))];
  const regionSet = [...new Set(data.topics.map((item) => item.region))];
  const levelClassMap = {
    Beginner: "level-beginner",
    Intermediate: "level-intermediate",
    Advanced: "level-advanced"
  };
  const modal = byId("topic-modal");
  const modalTitle = byId("modal-title");
  const modalMeta = byId("modal-meta");
  const modalSummary = byId("modal-summary");
  const modalDetail = byId("modal-detail");
  const modalClose = byId("modal-close");
  const langToggle = byId("lang-toggle");
  const themeToggle = byId("theme-toggle");
  const searchInput = byId("search-input");
  const favoriteToggle = byId("favorite-filter-toggle");
  const topicCount = byId("topic-count");
  const heroMetrics = byId("hero-metrics");
  const heroTickerTrack = byId("hero-ticker-track");

  function byId(id) {
    return document.getElementById(id);
  }

  function t(key) {
    return i18n[state.lang][key] || key;
  }

  function field(obj, key) {
    if (state.lang === "en" && obj[`${key}En`]) {
      return obj[`${key}En`];
    }
    return obj[key];
  }

  function safeText(value) {
    return String(value || "").replace(/[<>&"]/g, (m) => ({
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "\"": "&quot;"
    }[m]));
  }

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function template(value, params) {
    return String(value).replace(/\{(\w+)\}/g, (_, key) => params[key] || "");
  }

  function containsQuery(...parts) {
    if (!state.query) {
      return true;
    }
    return parts.some((part) => normalize(part).includes(state.query));
  }

  function getThemePreference() {
    const cached = localStorage.getItem("trade-site-theme");
    if (cached === "dark" || cached === "light") {
      return cached;
    }
    return "dark";
  }

  function getFavoriteIds() {
    try {
      const cached = JSON.parse(localStorage.getItem("trade-site-favorites") || "[]");
      if (Array.isArray(cached)) {
        return cached.filter((item) => typeof item === "string");
      }
    } catch (error) {
      console.warn("Failed to parse favorites:", error);
    }
    return [];
  }

  function saveFavoriteIds() {
    localStorage.setItem("trade-site-favorites", JSON.stringify([...state.favorites]));
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    themeToggle.textContent = state.theme === "dark" ? t("themeToLight") : t("themeToDark");
  }

  function applyI18n() {
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = t(key);
    });
    searchInput.placeholder = t("searchPlaceholder");
    langToggle.textContent = state.lang === "zh" ? "EN" : "中文";
    modalClose.textContent = t("close");
    favoriteToggle.textContent = state.favoritesOnly ? t("favoritesOn") : t("favoritesOnly");
    favoriteToggle.classList.toggle("active", state.favoritesOnly);
    applyTheme();
  }

  function setupHero() {
    byId("site-title").textContent = field(data.site, "title");
    byId("site-subtitle").textContent = field(data.site, "subtitle");
    byId("site-updated-at").textContent = data.site.updatedAt;
    byId("year").textContent = String(new Date().getFullYear());

    const metricRows = (state.lang === "en" ? (data.site.metricsEn || []) : data.site.metrics) || [];
    heroMetrics.innerHTML = metricRows.map((item) => `
      <article class="hero-metric-card">
        <p class="hero-metric-value">${safeText(item.value)}</p>
        <p class="hero-metric-label">${safeText(item.label)}</p>
      </article>
    `).join("");

    const markets = (state.lang === "en" ? (data.site.marketCoverageEn || []) : data.site.marketCoverage) || [];
    const pills = markets.map((item) => `<span class="hero-market-pill">${safeText(item)}</span>`).join("");
    heroTickerTrack.innerHTML = pills + pills;
  }

  function renderPaths() {
    const rows = data.paths.filter((path) => {
      return containsQuery(
        field(path, "name"),
        field(path, "desc"),
        ...(state.lang === "en" ? (path.highlightsEn || []) : path.highlights)
      );
    });

    byId("paths-grid").innerHTML = rows.map((path) => `
      <article class="card">
        <span class="pill">${safeText(field(path, "name"))}</span>
        <h3>${safeText(field(path, "name"))}</h3>
        <p>${safeText(field(path, "desc"))}</p>
        <div class="tags">
          ${(state.lang === "en" ? (path.highlightsEn || []) : path.highlights).map((item) => `<span class="tag">${safeText(item)}</span>`).join("")}
        </div>
      </article>
    `).join("");
  }

  function renderFilterChips(containerId, values, key, keyEn) {
    const container = byId(containerId);
    container.innerHTML = [`<button class="chip ${state[key] === "all" ? "active" : ""}" data-value="all">${safeText(t("all"))}</button>`]
      .concat(values.map((value) => `
      <button class="chip ${state[key] === value ? "active" : ""}" data-value="${safeText(value)}">
        ${safeText(state.lang === "en" ? keyEn[value] : value)}
      </button>
    `)).join("");

    container.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        state[key] = chip.dataset.value;
        renderAll();
      });
    });
  }

  function renderTopics() {
    const levelEnMap = Object.fromEntries(data.topics.map((item) => [item.level, item.levelEn || item.level]));
    const regionEnMap = Object.fromEntries(data.topics.map((item) => [item.region, item.regionEn || item.region]));

    renderFilterChips("level-filter", levelSet, "level", levelEnMap);
    renderFilterChips("region-filter", regionSet, "region", regionEnMap);

    const topics = data.topics.filter((topic) => {
      const levelMatch = state.level === "all" || topic.level === state.level;
      const regionMatch = state.region === "all" || topic.region === state.region;
      const favoriteMatch = !state.favoritesOnly || state.favorites.has(topic.id);
      const queryMatch = containsQuery(
        field(topic, "title"),
        field(topic, "summary"),
        field(topic, "detail"),
        ...(state.lang === "en" ? (topic.tagsEn || []) : topic.tags)
      );
      return levelMatch && regionMatch && favoriteMatch && queryMatch;
    }).sort((a, b) => {
      const featuredA = Boolean(a.featured);
      const featuredB = Boolean(b.featured);
      if (featuredA !== featuredB) {
        return featuredA ? -1 : 1;
      }
      return field(a, "title").localeCompare(field(b, "title"));
    });

    topicCount.textContent = template(t("topicsCount"), { count: String(topics.length) });

    if (!topics.length) {
      byId("topics-grid").innerHTML = `<article class="card"><p>${safeText(t("noResults"))}</p></article>`;
      return;
    }

    byId("topics-grid").innerHTML = topics.map((topic) => `
      <article class="card">
        <div class="topic-card-header">
          <span class="pill level-pill ${safeText(levelClassMap[topic.levelEn] || "")}">${safeText(field(topic, "level"))}</span>
          ${topic.featured ? `<span class="pill topic-featured">${safeText(t("featured"))}</span>` : ""}
        </div>
        <p class="topic-meta">${safeText(field(topic, "region"))}</p>
        <h3>${safeText(field(topic, "title"))}</h3>
        <p>${safeText(field(topic, "summary"))}</p>
        <div class="tags">
          ${(state.lang === "en" ? (topic.tagsEn || []) : topic.tags).map((tag) => `<span class="tag">${safeText(tag)}</span>`).join("")}
        </div>
        <p class="topic-cta">
          <button class="chip fav-btn ${state.favorites.has(topic.id) ? "active" : ""}" data-favorite-id="${safeText(topic.id)}">
            ${safeText(state.favorites.has(topic.id) ? t("unfavorite") : t("favorite"))}
          </button>
          <button class="btn btn-ghost topic-detail-btn" data-topic-id="${safeText(topic.id)}">${safeText(t("viewTopicDetail"))}</button>
        </p>
      </article>
    `).join("");

    byId("topics-grid").querySelectorAll(".topic-detail-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const topic = data.topics.find((item) => item.id === btn.dataset.topicId);
        if (!topic) {
          return;
        }
        modalTitle.textContent = field(topic, "title");
        modalMeta.textContent = `${field(topic, "level")}${t("modalMetaSeparator")}${field(topic, "region")}`;
        modalSummary.textContent = field(topic, "summary");
        modalDetail.textContent = field(topic, "detail");
        modal.showModal();
      });
    });

    byId("topics-grid").querySelectorAll(".fav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.favoriteId;
        if (!id) {
          return;
        }
        if (state.favorites.has(id)) {
          state.favorites.delete(id);
        } else {
          state.favorites.add(id);
        }
        saveFavoriteIds();
        renderTopics();
      });
    });
  }

  function renderCases() {
    const rows = data.cases.filter((item) => {
      return containsQuery(field(item, "title"), field(item, "problem"), field(item, "solution"), field(item, "lesson"));
    });

    byId("cases-timeline").innerHTML = rows.map((item) => `
      <article class="timeline-item card">
        <h3>${safeText(field(item, "title"))}</h3>
        <p><strong>${safeText(t("issue"))}:</strong> ${safeText(field(item, "problem"))}</p>
        <p><strong>${safeText(t("action"))}:</strong> ${safeText(field(item, "solution"))}</p>
        <p class="kpi"><strong>${safeText(t("review"))}:</strong> ${safeText(field(item, "lesson"))}</p>
      </article>
    `).join("");
  }

  function renderResources() {
    const rows = data.resources.filter((item) => {
      return containsQuery(field(item, "name"), field(item, "type"), field(item, "desc"));
    });

    byId("resources-grid").innerHTML = rows.map((item) => `
      <article class="card">
        <span class="pill">${safeText(field(item, "type"))}</span>
        <h3>${safeText(field(item, "name"))}</h3>
        <p>${safeText(field(item, "desc"))}</p>
        <p><a class="btn btn-ghost" href="${safeText(item.link)}" target="_blank" rel="noreferrer noopener">${safeText(t("visitResource"))}</a></p>
      </article>
    `).join("");
  }

  function renderFaq() {
    const rows = data.faq.filter((item) => {
      return containsQuery(field(item, "q"), field(item, "a"));
    });

    byId("faq-list").innerHTML = rows.map((item) => `
      <details class="faq-item">
        <summary>${safeText(field(item, "q"))}</summary>
        <p>${safeText(field(item, "a"))}</p>
      </details>
    `).join("");
  }

  function setupReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
  }

  function renderAll() {
    applyI18n();
    setupHero();
    renderPaths();
    renderTopics();
    renderCases();
    renderResources();
    renderFaq();
  }

  state.theme = getThemePreference();
  state.favorites = new Set(getFavoriteIds());
  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "zh" ? "en" : "zh";
    renderAll();
  });
  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("trade-site-theme", state.theme);
    applyTheme();
  });
  searchInput.addEventListener("input", () => {
    state.query = normalize(searchInput.value);
    renderAll();
  });
  favoriteToggle.addEventListener("click", () => {
    state.favoritesOnly = !state.favoritesOnly;
    renderAll();
  });
  modalClose.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  renderAll();
  setupReveal();
})();
