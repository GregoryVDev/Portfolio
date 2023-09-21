// Fonction pour afficher ou masquer la flèche en fonction du défilement
function toggleScrollTopButton() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (window.scrollY > 50) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Fonction pour faire défiler doucement vers le haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Écoutez l'événement de défilement de la fenêtre
window.addEventListener("scroll", toggleScrollTopButton);

// Écoutez l'événement de clic sur la flèche
document.querySelector("#scroll-to-top a").addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop();
});


// **** MEDIA QUERY : 550PX ****


// Fonction pour afficher ou masquer la flèche en fonction du défilement
function toggleScrollTopButton() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (window.scrollY > 50 && window.innerWidth > 550) { // Vérifiez également la largeur de l'écran
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Fonction pour faire défiler doucement vers le haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Écoutez l'événement de défilement de la fenêtre
window.addEventListener("scroll", toggleScrollTopButton);

// Écoutez l'événement de clic sur la flèche
document.querySelector("#scroll-to-top a").addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop();
});