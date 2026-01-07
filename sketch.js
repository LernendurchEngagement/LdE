// JS
/* ---------------------------------
    Responsive Navigation
---------------------------------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ---------------------------------
    Scrollen zu Projektankern
---------------------------------- */
function redirectUser(anchor) {
    if (window.location.pathname.includes("projekte.html")) {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
        window.location.href = "projekte.html#" + anchor;
    }
}

/* ---------------------------------
    ROTIERBARE ELEMENTE sammeln
---------------------------------- */
function getRotatable() {
    return document.querySelectorAll(
        "main h1, main h2, main h3, main p, main img, main div, main span, main section"
    );
}

/* ---------------------------------
    LOGO: Rotation in +90° Schritten
---------------------------------- */
let globalRotation = 0;

const triggerImage = document.getElementById("triggerImage");
if (triggerImage) {
    triggerImage.addEventListener("click", () => {
        globalRotation += 90;

        const elements = getRotatable();
        elements.forEach(el => {
            el.style.transform = `rotate(${globalRotation}deg)`;
            el.style.transition = "transform 0.4s";
        });
    });
}

/* ---------------------------------
    Kontakt zeigt Emoji Button
---------------------------------- */
const kontaktBtn = document.getElementById("kontaktBtn");

if (kontaktBtn) {
    kontaktBtn.addEventListener("click", () => {
        document.getElementById("emojiRotateButton").classList.remove("hidden");
    });
}

const emojiButton = document.getElementById("emojiRotateButton");
const datenschutz = document.getElementById("datenschutz");
const impressum = document.getElementById("impressum");

function hideEmojiIfVisible() {
    if (emojiButton && !emojiButton.classList.contains("hidden")) {
        emojiButton.classList.add("hidden");
    }
}

if (datenschutz) {
    datenschutz.addEventListener("click", hideEmojiIfVisible);
}

if (impressum) {
    impressum.addEventListener("click", hideEmojiIfVisible);
}

/* ---------------------------------
    Emoji-Button: Dauerrotation an/aus
---------------------------------- */
let spinning = false;

if (emojiButton) {
    emojiButton.addEventListener("click", () => {
        spinning = !spinning;

        const elements = getRotatable();

        if (spinning) {
            elements.forEach(el => el.classList.add("rotating"));
            emojiButton.classList.add("rotating");
        } else {
            elements.forEach(el => el.classList.remove("rotating"));
            emojiButton.classList.remove("rotating");
        }
    });
}

/* ---------------------------------
    Navbar halb-transparent beim Scrollen
---------------------------------- */
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/* ---------------------------------
    AUDIO PLAYER – GLOBAL INITIALISIERUNG
---------------------------------- */
document.querySelectorAll(".audioBox").forEach(box => {
    
    const audio = box.querySelector("audio");
    const playPauseBtn = box.querySelector(".playPauseBtn");
    const restartBtn = box.querySelector(".restartBtn");
    const forwardBtn = box.querySelector(".forwardBtn");
    const backwardBtn = box.querySelector(".backwardBtn");
    const progress = box.querySelector(".progress");
    const currentTimeLabel = box.querySelector(".currentTime");
    const durationLabel = box.querySelector(".duration");

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }

    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸";
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶";
        }
    });

    restartBtn.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
        playPauseBtn.textContent = "⏸";
    });

    forwardBtn.addEventListener("click", () => {
        audio.currentTime += 10;
    });

    backwardBtn.addEventListener("click", () => {
        audio.currentTime -= 10;
    });

    audio.addEventListener("loadedmetadata", () => {
        progress.max = audio.duration;
        durationLabel.textContent = formatTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
        progress.value = audio.currentTime;
        currentTimeLabel.textContent = formatTime(audio.currentTime);
    });

    progress.addEventListener("input", () => {
        audio.currentTime = progress.value;
    });
});

/*---------------
Unsichtbarer Text
---------------*/
document.addEventListener("DOMContentLoaded", function () {
    const clickable = document.querySelector(".clickable");
    const moreText = document.getElementById("moreText");

    if (clickable && moreText) {
        moreText.style.display = "none"; // Startzustand
        clickable.addEventListener("click", function () {
            moreText.style.display = "inline"; 
        });
    }
});
