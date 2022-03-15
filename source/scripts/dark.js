(() => {
  // src/scripts/dark.ts
  var modeSwitcher = document.querySelector(".mode-switch .iconfont");
  var highlightThemeLink = document.querySelector("LINK[light-src*=https]");
  var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  var currentTheme = localStorage.getItem("theme");
  var lightCss = highlightThemeLink == null ? void 0 : highlightThemeLink.getAttribute("light-src");
  var darkCss = highlightThemeLink == null ? void 0 : highlightThemeLink.getAttribute("dark-src");
  if (currentTheme === "dark") {
    highlightThemeLink == null ? void 0 : highlightThemeLink.setAttribute("href", "");
    document.body.classList.toggle("dark-mode");
    highlightThemeLink == null ? void 0 : highlightThemeLink.setAttribute("href", darkCss);
  } else if (currentTheme === "light") {
    document.body.classList.toggle("light-mode");
    highlightThemeLink == null ? void 0 : highlightThemeLink.setAttribute("href", lightCss);
  }
  modeSwitcher == null ? void 0 : modeSwitcher.addEventListener("click", (e) => {
    e.stopPropagation();
    let theme = "";
    if (prefersDarkScheme.matches) {
      document.body.classList.toggle("light-mode");
      theme = document.body.classList.contains("light-mode") ? "light" : "dark";
    } else {
      document.body.classList.toggle("dark-mode");
      theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    }
    highlightThemeLink == null ? void 0 : highlightThemeLink.setAttribute("href", theme === "dark" ? darkCss : lightCss);
    localStorage.setItem("theme", theme);
  });
})();
