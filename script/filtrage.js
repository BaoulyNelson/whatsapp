function searchFunction(query) {
    // Récupère les éléments dans le corps de la page à rechercher
    var elementsToSearch = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    var messageElement = document.getElementById("message");
    var searchResults = ''; // Initialise une chaîne vide pour stocker les résultats de la recherche

    // Parcours tous les éléments à rechercher
    elementsToSearch.forEach(function(element) {
        // Vérifie si le texte de l'élément contient la requête de recherche
        if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
            // Si oui, ajoute le texte de l'élément aux résultats de recherche
            searchResults += element.textContent + '<br>';
        }
    });

    // Met à jour le contenu de l'élément <i> avec les résultats de recherche
    messageElement.innerHTML = searchResults;
}
