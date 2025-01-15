// Fonctions spécifiques à l'accueil
function masquerTousLesBlocsAccueil() {
    document.querySelectorAll('.accueil-options > div').forEach(bloc => bloc.style.display = 'none');
    document.querySelectorAll('.menu-accueil li').forEach(button => button.classList.remove('active'));
}

// Fonctions spécifiques au parcours
function masquerTousLesBlocsParcours() {
    document.querySelectorAll('.parcours-options > div').forEach(bloc => bloc.style.display = 'none');
    document.querySelectorAll('.menu-parcours li').forEach(button => button.classList.remove('active'));
}

// Gestion des événements pour les boutons "Accueil"
document.getElementById('btn-maxime-madureira')?.addEventListener('click', function () {
    masquerTousLesBlocsAccueil();
    document.getElementById('liste-maxime-madureira').style.display = 'block';
    this.classList.add('active');
});

document.getElementById('btn-logiciels')?.addEventListener('click', function () {
    masquerTousLesBlocsAccueil();
    document.getElementById('liste-logiciels').style.display = 'block';
    this.classList.add('active');
});

document.getElementById('btn-certifications')?.addEventListener('click', function () {
    masquerTousLesBlocsAccueil();
    document.getElementById('liste-certifications').style.display = 'block';
    this.classList.add('active');
});

// Gestion des événements pour les boutons "Parcours"
document.getElementById('btn-formations')?.addEventListener('click', function () {
    masquerTousLesBlocsParcours();
    document.getElementById('liste-formations').style.display = 'block';
    this.classList.add('active');
});

document.getElementById('btn-experiences')?.addEventListener('click', function () {
    masquerTousLesBlocsParcours();
    document.getElementById('liste-experiences').style.display = 'block';
    this.classList.add('active');
});
