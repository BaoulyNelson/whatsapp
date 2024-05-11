// Sélection des liens dans la barre de navigation en bas
const bottomNavLinks = document.querySelectorAll('.bottom-nav .nav-link');

// Sélection de la barre de navigation en haut
const topNav = document.querySelector('.top-nav .nav');

// Sélection des icônes de la barre de navigation en haut
const searchIconTop = document.querySelector('.top-nav .fa-search');
const cameraIconTop = document.querySelector('.top-nav .fa-camera');
const settingsIconTop = document.querySelector('.top-nav .fa-ellipsis-v');

// Ajout d'un gestionnaire d'événements pour chaque lien
bottomNavLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien

    const linkText = link.textContent; // Récupérer le texte du lien cliqué

    // Création d'un nouvel élément li pour afficher le texte du lien
    const newListElement = document.createElement('li');
    newListElement.classList.add('nav-item');
    newListElement.textContent = linkText;

    // Effacer le contenu existant de la barre de navigation en haut
    topNav.innerHTML = '';

    // Ajouter les icônes à la barre de navigation en haut (à droite)
    if (!topNav.contains(searchIconTop)) {
      topNav.appendChild(searchIconTop.cloneNode(true)); // Ajouter l'icône de recherche
    }
    if (!topNav.contains(cameraIconTop)) {
      topNav.appendChild(cameraIconTop.cloneNode(true)); // Ajouter l'icône de la caméra
    }
    if (!topNav.contains(settingsIconTop)) {
      topNav.appendChild(settingsIconTop.cloneNode(true)); // Ajouter l'icône des paramètres
    }

    // Ajouter le nouvel élément avec le texte du lien à gauche des icônes
    topNav.insertBefore(newListElement, topNav.firstChild); // Insérer avant la première icône
  });
});