// Cette fonction permet de basculer l'affichage du formulaire de recherche entre "none" (caché) et "block" (affiché).
function toggleSearchForm() {
    // Récupère l'élément du formulaire de recherche par son ID "searchForm".
    var searchForm = document.getElementById("searchForm");
    // Récupère l'élément de l'icône de recherche par son ID "searchIcon".
    var searchIcon = document.getElementById("searchIcon");
    var cameraIcon = document.getElementById("cameraIcon"); // Ajout d'un ID à l'icône de la caméra
    var ellipsisIcon = document.getElementById("ellipsisIcon"); // Ajout d'un ID à l'icône des points de suspension


    // Vérifie si le style "display" du formulaire de recherche est "none" (caché).
    if (searchForm.style.display === "none") {
        // Si le formulaire est caché, le rend visible en changeant le style "display" à "block".
        searchForm.style.display = "block";
        // Masque l'icône de recherche lorsque le formulaire est affiché en changeant le style "display" à "none".
        searchIcon.style.display = "none";
        cameraIcon.style.display = "none"; // Masque l'icône de la caméra lorsque le formulaire est affiché
        ellipsisIcon.style.display = "none"; // Masque l'icône des points de suspension lorsque le formulaire est affiché
       
        
        // Récupère l'élément du champ de recherche par son ID "mySearch".
        var inputField = document.getElementById("mySearch");
        // Met le focus sur le champ de recherche, ce qui permet à l'utilisateur de commencer à taper immédiatement.
        inputField.focus();
        // Définit la position du curseur dans le champ de recherche après le premier caractère, donc après la flèche.
        inputField.setSelectionRange(1, 1);
    } else {
        // Si le formulaire est déjà visible, le cache en changeant le style "display" à "none".
        searchForm.style.display = "none";
        // Affiche à nouveau l'icône de recherche lorsque le formulaire est caché en changeant le style "display" à "block".
        searchIcon.style.display = "block";
        cameraIcon.style.display = "block"; // Affiche à nouveau l'icône de la caméra lorsque le formulaire est caché
        ellipsisIcon.style.display = "block"; // Affiche à nouveau l'icône des points de suspension lorsque le formulaire est caché
  
    }
}


// Fonction pour revenir en arrière lorsque la flèche de retour est cliquée dans le formulaire de recherche
function goBack() {
    toggleSearchForm(); // Ferme le formulaire de recherche
}
