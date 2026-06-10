/* =========================
   PAGE FADE-IN
========================= */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("fade-in");

    /* Random splash text */

    const splashTexts = [
        "Now with Ocean Vibes!",
        "Powered by caffeine.",
        "RISC-V approved!",
        "Hello, World!",
        "Still debugging!",
        "Ocean lover detected.",
        "Touching grass occasionally."
    ];

    const splash = document.getElementById("splash-text");

    if (splash) {

        const randomIndex =
            Math.floor(Math.random() * splashTexts.length);

        splash.textContent =
            splashTexts[randomIndex];
    }

    /* Intro screen */

    const intro = document.getElementById("intro-screen");

    if (intro) {

        setTimeout(() => {

            intro.classList.add("hidden");

        }, 2500);

    }

});


/* =========================
   PAGE FADE-OUT
========================= */

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(event) {

        const target = this.href;

        if (target && !target.includes("#")) {

            event.preventDefault();

            document.body.classList.remove("fade-in");
            document.body.classList.add("fade-out");

            setTimeout(() => {

                window.location.href = target;

            }, 400);

        }

    });

});
