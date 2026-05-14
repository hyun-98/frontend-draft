(function () {
  "use strict";

  var THEME_KEY = "universal-web-starter-theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  }

  function setStoredTheme(value) {
    try {
      localStorage.setItem(THEME_KEY, value);
    } catch {
      /* ignore */
    }
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
    }

    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    function syncPressed() {
      var attr = document.documentElement.getAttribute("data-theme");
      var isDark =
        attr === "dark" ||
        (!attr && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      toggle.setAttribute("aria-pressed", isDark ? "true" : "false");
      toggle.textContent = isDark ? "라이트 모드" : "다크 모드";
    }

    syncPressed();

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        if (!getStoredTheme()) syncPressed();
      });
    }

    toggle.addEventListener("click", function () {
      var attr = document.documentElement.getAttribute("data-theme");
      var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var currentlyDark = attr === "dark" || (!attr && systemDark);
      var next = currentlyDark ? "light" : "dark";
      applyTheme(next);
      setStoredTheme(next);
      syncPressed();
    });
  }

  function initNav() {
    var nav = document.querySelector("[data-nav]");
    var btn = document.querySelector("[data-nav-toggle]");
    if (!nav || !btn) return;

    function setOpen(open) {
      nav.setAttribute("data-open", open ? "true" : "false");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    btn.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      setOpen(!open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 768px)").matches) setOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function initDemoForm() {
    var form = document.querySelector("form[data-no-submit]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("데모 폼입니다. action URL을 연결하세요.");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initTheme();
      initNav();
      initYear();
      initDemoForm();
    });
  } else {
    initTheme();
    initNav();
    initYear();
    initDemoForm();
  }
})();
