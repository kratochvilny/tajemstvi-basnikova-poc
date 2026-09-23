document.addEventListener("DOMContentLoaded", () => {
    // ... (zde ponechte váš kód pro preloader a lazy loading obrázků) ...

    // Nový observer pro efekt psaní textu
    const verses = document.querySelectorAll(".anim-verse");

    const textObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Pokud je blok s básní viditelný alespoň z 20 % na obrazovce
            if (entry.isIntersecting) {
                entry.target.classList.add("vypisuje-se");
                observer.unobserve(entry.target); // Animace proběhne jen jednou
            }
        });
    }, {
        threshold: 0.2, // Spustí se, jakmile text vjede kousek do obrazovky
        rootMargin: "0px 0px -50px 0px" // Drobná rezerva na spodním okraji
    });

    verses.forEach(verse => textObserver.observe(verse));
});
