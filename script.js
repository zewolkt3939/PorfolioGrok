/**
 * Portfolio — lightweight JS
 * - Dark / Light mode (localStorage + system preference)
 * - Mobile sidebar toggle
 * - Active nav link on scroll (home page)
 * - Contact form demo feedback
 * - Blog: render cards + category filter
 */

(function () {
  "use strict";

  /* ---------- Theme icons (inline SVG) ---------- */
  const ICONS = {
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>`,
    moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`,
  };

  /* ---------- Theme ---------- */
  const STORAGE_KEY = "portfolio-theme";

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeUI(theme);
  }

  function updateThemeUI(theme) {
    const isDark = theme === "dark";
    const label = isDark ? "Light mode" : "Dark mode";
    const icon = isDark ? ICONS.sun : ICONS.moon;

    const desktop = document.getElementById("themeToggle");
    if (desktop) {
      const iconEl = desktop.querySelector(".theme-icon");
      const labelEl = desktop.querySelector(".theme-label");
      if (iconEl) iconEl.innerHTML = icon;
      if (labelEl) labelEl.textContent = label;
      desktop.setAttribute("aria-label", `Chuyển sang ${label}`);
    }

    const mobile = document.getElementById("themeToggleMobile");
    if (mobile) {
      mobile.innerHTML = `<span class="theme-icon">${icon}</span>`;
      mobile.setAttribute("aria-label", `Chuyển sang ${label}`);
    }
  }

  function toggleTheme() {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  applyTheme(getPreferredTheme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });

  document.getElementById("themeToggle")?.addEventListener("click", toggleTheme);
  document
    .getElementById("themeToggleMobile")
    ?.addEventListener("click", toggleTheme);

  /* ---------- Mobile nav ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  function openNav() {
    document.body.classList.add("nav-open");
    menuToggle?.setAttribute("aria-expanded", "true");
    menuToggle?.setAttribute("aria-label", "Đóng menu");
  }

  function closeNav() {
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Mở menu");
  }

  function toggleNav() {
    if (document.body.classList.contains("nav-open")) closeNav();
    else openNav();
  }

  menuToggle?.addEventListener("click", toggleNav);
  overlay?.addEventListener("click", closeNav);

  sidebar?.querySelectorAll(".nav-link, .blog-side-cats a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 900px)").matches) closeNav();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Active section highlight (home) ---------- */
  const sections = document.querySelectorAll("main .section[id]");
  const navLinks = document.querySelectorAll(".sidebar-nav .nav-link[href^='#']");

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${id}`);
    });
  }

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveLink(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );
    sections.forEach((s) => observer.observe(s));
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href")?.slice(1);
      if (id) setActiveLink(id);
    });
  });

  /* ---------- Contact form (demo) ---------- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = "Please fill in all required fields.";
      status.className = "form-status error";
      return;
    }

    status.textContent =
      "Thanks! (Demo only — connect Formspree or a backend to send real emails.)";
    status.className = "form-status success";
    form.reset();

    setTimeout(() => {
      status.textContent = "";
      status.className = "form-status";
    }, 6000);
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ============================================================
     Blog: cards + category filter
     ============================================================ */
  const posts = Array.isArray(window.PORTFOLIO_POSTS)
    ? window.PORTFOLIO_POSTS.slice()
    : [];
  const categories = Array.isArray(window.PORTFOLIO_CATEGORIES)
    ? window.PORTFOLIO_CATEGORIES
    : [{ id: "all", label: "All" }];

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T12:00:00");
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function diffClass(diff) {
    const key = String(diff || "notes").toLowerCase();
    if (key === "easy") return "diff-easy";
    if (key === "medium") return "diff-medium";
    if (key === "hard") return "diff-hard";
    if (key === "insane") return "diff-insane";
    return "diff-notes";
  }

  function countByCategory() {
    const counts = { all: posts.length };
    posts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }

  function getQueryCategory() {
    try {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("cat");
      if (cat && categories.some((c) => c.id === cat)) return cat;
    } catch (e) {
      /* ignore */
    }
    return "all";
  }

  function setQueryCategory(cat) {
    try {
      const url = new URL(window.location.href);
      if (cat === "all") url.searchParams.delete("cat");
      else url.searchParams.set("cat", cat);
      window.history.replaceState({}, "", url);
    } catch (e) {
      /* file:// may limit history in some browsers — ignore */
    }
  }

  function sortPosts(list) {
    return list.slice().sort((a, b) => {
      if (a.date === b.date) return a.title.localeCompare(b.title);
      return a.date < b.date ? 1 : -1;
    });
  }

  function renderCard(post, basePath) {
    const href = (basePath || "") + post.slug;
    const tags = (post.tags || [])
      .slice(0, 3)
      .map((t) => `<span class="tag tag-sm">${escapeHtml(t)}</span>`)
      .join("");

    return `
      <a class="blog-card" href="${escapeAttr(href)}" data-category="${escapeAttr(post.category)}" data-id="${escapeAttr(post.id)}">
        <div class="blog-card-top">
          <span class="blog-card-icon" aria-hidden="true">${post.icon || "📝"}</span>
          <span class="cat-badge cat-${escapeAttr(post.category)}">${escapeHtml(post.categoryLabel || post.category)}</span>
        </div>
        <h3 class="blog-card-title">${escapeHtml(post.title)}</h3>
        <p class="blog-card-excerpt">${escapeHtml(post.excerpt || "")}</p>
        <div class="post-tags" style="margin-bottom:0.65rem">${tags}</div>
        <div class="blog-card-meta">
          <time datetime="${escapeAttr(post.date)}">${escapeHtml(formatDate(post.date))}</time>
          <span class="diff-badge ${diffClass(post.difficulty)}">${escapeHtml(post.difficulty || "Notes")}</span>
        </div>
      </a>
    `;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }

  function initBlogFilter(opts) {
    const {
      filterBarId,
      gridId,
      statusId,
      emptyId,
      sideCatsId,
      syncUrl,
    } = opts;

    const filterBar = document.getElementById(filterBarId);
    const grid = document.getElementById(gridId);
    if (!filterBar || !grid) return;

    const statusEl = statusId ? document.getElementById(statusId) : null;
    const emptyEl = emptyId ? document.getElementById(emptyId) : null;
    const sideCats = sideCatsId ? document.getElementById(sideCatsId) : null;
    const basePath = grid.getAttribute("data-base-path") || "";
    const counts = countByCategory();

    let active = syncUrl ? getQueryCategory() : "all";

    // Build filter buttons
    filterBar.innerHTML = categories
      .map((c) => {
        const n = counts[c.id] != null ? counts[c.id] : 0;
        const countHtml =
          c.id === "all" || n
            ? `<span class="filter-count">(${n})</span>`
            : `<span class="filter-count">(0)</span>`;
        return `<button type="button" class="filter-btn${c.id === active ? " is-active" : ""}" data-filter="${escapeAttr(c.id)}" aria-pressed="${c.id === active}">${escapeHtml(c.label)} ${countHtml}</button>`;
      })
      .join("");

    // Sidebar category links (blog hub)
    if (sideCats) {
      sideCats.innerHTML =
        `<p class="blog-side-cats-title">Categories</p>` +
        categories
          .map((c) => {
            const href =
              c.id === "all" ? "index.html" : `index.html?cat=${encodeURIComponent(c.id)}`;
            return `<a href="${href}" data-filter="${escapeAttr(c.id)}" class="${c.id === active ? "is-active" : ""}">${escapeHtml(c.label)}${counts[c.id] != null ? ` (${counts[c.id]})` : ""}</a>`;
          })
          .join("");
    }

    function applyFilter(cat, pushUrl) {
      active = cat;
      const filtered =
        cat === "all" ? sortPosts(posts) : sortPosts(posts.filter((p) => p.category === cat));

      filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
        const on = btn.getAttribute("data-filter") === cat;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });

      if (sideCats) {
        sideCats.querySelectorAll("a[data-filter]").forEach((a) => {
          a.classList.toggle("is-active", a.getAttribute("data-filter") === cat);
        });
      }

      grid.innerHTML = filtered.map((p) => renderCard(p, basePath)).join("");

      if (emptyEl) emptyEl.hidden = filtered.length > 0;

      if (statusEl) {
        const label =
          categories.find((c) => c.id === cat)?.label || cat;
        statusEl.textContent =
          filtered.length === 0
            ? `No write-ups in “${label}”.`
            : `Showing ${filtered.length} post${filtered.length === 1 ? "" : "s"}${cat === "all" ? "" : ` in ${label}`}.`;
      }

      if (pushUrl && syncUrl) setQueryCategory(cat);
    }

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      applyFilter(btn.getAttribute("data-filter") || "all", true);
    });

    // Side cat clicks: if same page, intercept for SPA-like filter
    if (sideCats && syncUrl) {
      sideCats.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-filter]");
        if (!a) return;
        e.preventDefault();
        applyFilter(a.getAttribute("data-filter") || "all", true);
        if (window.matchMedia("(max-width: 900px)").matches) closeNav();
      });
    }

    applyFilter(active, false);
  }

  // Home page preview grid
  initBlogFilter({
    filterBarId: "homeFilterBar",
    gridId: "homePostGrid",
    statusId: "homeFilterStatus",
    emptyId: "homeEmpty",
    syncUrl: false,
  });

  // Blog hub
  initBlogFilter({
    filterBarId: "blogFilterBar",
    gridId: "blogPostGrid",
    statusId: "blogFilterStatus",
    emptyId: "blogEmpty",
    sideCatsId: "blogSideCats",
    syncUrl: true,
  });
})();
