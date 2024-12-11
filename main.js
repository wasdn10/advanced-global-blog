const CONFIG = {
    supportedLanguages: ["en", "es", "fr"],
    defaultLanguage: "en",
    theme: localStorage.getItem("theme") || "light",
};

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeLanguage();
});

function initializeTheme() {
    const currentTheme = CONFIG.theme;
    document.body.setAttribute("data-theme", currentTheme);
    document.getElementById("theme-toggle").addEventListener("click", () => {
        CONFIG.theme = CONFIG.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", CONFIG.theme);
        document.body.setAttribute("data-theme", CONFIG.theme);
    });
}

function initializeLanguage() {
    const userLang = localStorage.getItem("language") || CONFIG.defaultLanguage;
    const langSwitcher = document.getElementById("language-switcher");
    langSwitcher.value = userLang;
}
