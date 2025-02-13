document.addEventListener("DOMContentLoaded", function () {
    // Referenzen zu den HTML-Elementen abrufen
    const menuToggle = document.getElementById("menu-toggle"); // Das ☰-Symbol
    const navLinks = document.getElementById("nav-links"); // Die Navigation

    // Wenn das ☰-Symbol angeklickt wird, Menü ein-/ausblenden
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // "show"-Klasse wird hinzugefügt/entfernt
    });
});
