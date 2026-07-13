/**
 * JS leve da cópia PHP — substitui interações básicas do React.
 * Não depende do projeto principal.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "ia-divulgadora-theme";

  function getPreferredTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  function bindThemeToggles() {
    var buttons = document.querySelectorAll(
      'button[aria-label*="tema" i], button[aria-label*="theme" i], [data-theme-toggle], .theme-toggle button',
    );
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        toggleTheme();
      });
    });

    // Fallback: botões no toolbar do hero
    document.querySelectorAll(".hero-section__toolbar button").forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        toggleTheme();
      });
    });
  }

  function bindFaqAccordion() {
    document.querySelectorAll("[data-radix-collection-item], .faq-accordion-trigger, button[aria-controls]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var item = trigger.closest("[data-state], .faq-accordion-item, [data-radix-collection-item]") || trigger.parentElement;
        if (!item) return;
        var root = item.closest("[data-state]") || item;
        var isOpen = root.getAttribute("data-state") === "open";
        root.setAttribute("data-state", isOpen ? "closed" : "open");
        trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
      });
    });
  }

  function bindSignupForm() {
    var form = document.querySelector("#cadastro-gratis form, .free-signup-section__card");
    if (!form || form.tagName !== "FORM") return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var nameInput = form.querySelector('input[name="name"], input[autocomplete="name"]');
      var emailInput = form.querySelector('input[name="email"], input[type="email"]');
      var phoneInput = form.querySelector('input[name="whatsapp"], input[type="tel"]');
      var name = nameInput ? nameInput.value.trim() : "";
      var email = emailInput ? emailInput.value.trim() : "";
      var whatsapp = phoneInput ? phoneInput.value.trim() : "";
      var message = [
        "Olá! Quero criar minha conta gratuita na IA Divulgadora.",
        "Nome: " + name,
        "E-mail: " + email,
        "WhatsApp: " + whatsapp,
      ].join("\n");
      var url =
        "https://api.whatsapp.com/send/?phone=5527997362780&text=" +
        encodeURIComponent(message) +
        "&type=phone_number&app_absent=0";
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }

  function bindSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var id = link.getAttribute("href");
        if (!id || id === "#") return;
        var target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getPreferredTheme());
    bindThemeToggles();
    bindFaqAccordion();
    bindSignupForm();
    bindSmoothAnchors();
  });
})();
