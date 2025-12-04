function redirectUser(anchor) {
    // Prüfen, ob wir schon auf der Seite sind
    if (window.location.pathname.includes("projekte.html")) {
        // nur scrollen
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
        // sonst Seite mit Anker öffnen
        window.location.href = "projekte.html#" + anchor;
    }
}


const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById("triggerImage").addEventListener("click", () => {
    // Alle Textelemente auswählen
    const texts = document.querySelectorAll("h1, h2, h3, p, span, div, a, li");

    // Alle Bilder auswählen
    const images = document.querySelectorAll("img");

    // Alle rotieren lassen
    [...texts, ...images].forEach(el => {
        el.classList.toggle("rotate");
    });
});