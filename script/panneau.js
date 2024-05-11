document.addEventListener('DOMContentLoaded', () => {
  const bottomNavLinks = document.querySelectorAll('.bottom-nav .nav-link');
  let currentNameDisplay = null; // Stocke la référence du nom actuellement affiché

  // Fonction pour gérer le clic sur une icône de lien
  function handleNavLinkClick(event) {
    event.preventDefault();

    const linkText = this.textContent.trim();

    // Vérifier si l'écran est suffisamment large (condition personnalisée)
    if (window.innerWidth >= 768) {
      // Vérifier si le nom est déjà affiché
      if (!this.querySelector('.name-display')) {
        // Retirer le nom affiché précédemment s'il existe
        if (currentNameDisplay) {
          currentNameDisplay.remove();
        }

        // Créer un élément span pour afficher le nom du lien
        const nameDisplay = document.createElement('span');
        nameDisplay.textContent = linkText;
        nameDisplay.classList.add('name-display');

        // Ajouter le nom du lien à droite de l'icône
        this.appendChild(nameDisplay);

        // Mettre à jour la référence du nom actuellement affiché
        currentNameDisplay = nameDisplay;
      }
    }
  }

  // Ajouter un gestionnaire d'événements à chaque icône de lien
  bottomNavLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
  });
});
