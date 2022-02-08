var toggle = document.getElementById("logoClick");
document.documentElement.setAttribute('data-theme', "dark");
localStorage.setItem('theme', "dark");
var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};