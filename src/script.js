// Initialisation du script
document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments
    const affichage = document.querySelector(".affichage");
    const clavier = document.getElementById("clavier");
    const boutonAjouter = document.getElementById("ajouter");
  
    // Variable globale pour alterner gauche/droite
    let compteur = 0;
  
    // Fonction pour déplacer le texte
    function deplacer() {
      const texte = clavier.value.trim();
      if (texte !== "") {
        // Créer une nouvelle div pour le message
        const nouvelDiv = document.createElement("div");
        nouvelDiv.innerHTML = texte;
  
        // Ajouter les classes
        nouvelDiv.classList.add("texte");
        if (compteur % 2 === 0) {
          nouvelDiv.classList.add("droite");
        } else {
          nouvelDiv.classList.add("gauche");
        }
  
        // Ajouter le message à l'affichage
        affichage.appendChild(nouvelDiv);
  
        // Réinitialiser le textarea
        clavier.value = "";
  
        // Incrémenter le compteur
        compteur++;
      }
    }
  
    // Modification du clavier au chargement
    function modifierAspectClavier() {
      clavier.style.width = "50%";
      clavier.style.minWidth = "400px";
      clavier.style.overflow = "auto";
    }
  
    // Associer les événements
    boutonAjouter.addEventListener("click", deplacer);
    window.addEventListener("load", modifierAspectClavier);
});  