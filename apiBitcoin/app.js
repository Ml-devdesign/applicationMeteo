//// Crée une requête AJAX 

const url = 'https://blockchain.info/ticker'; 
// URL du JSON format avec JSON Viewer Pro

//Fonction pour l'interval (l'actualisation toute les 5 secondes)
function removePrice() {

    // Crée une requête XMLHttpRequest ==> Constructeur
    let requete = new XMLHttpRequest();//

    // Ouvre une nouvelle requête avec la méthode GET et l'URL spécifiée
    requete.open('GET', url);

    // Indique que la réponse attendue est au format JSON
    requete.responseType = 'json';

    // Envoie la requête
    requete.send();

    // Gère l'événement onload, qui se déclenche lorsque la réponse est reçue
    requete.onload = function() {

    // Vérifie si la requête a réussi (statut 200)
        if (requete.readyState === XMLHttpRequest.DONE) {

            if (requete.status === 200) {

                // Récupère les données de la réponse
                let reponse = requete.response;
                // Affiche les données reçues dans la console
                // console.log(reponse);

                let prixEnEuro = reponse.EUR.last;
                // Affiche les données reçues dans la console utilisation d'une API pour la réponse 
                // console.log(prixEnEuro);
            
                // Affiche les données reçues(prixEnEuro) dans la page HTML 
                document.querySelector('#price_label').textContent = prixEnEuro;

                // Fonctionne Mal ==test Echec==
                // Renouvelement toute les 5 secondes de la page car le prix fluctue rapidement 
                // setTimeout(function(){
                //     window.location.reload(true);
                // },10000);

             // Vous pouvez maintenant utiliser les données dans votre application
            } else {

                // Affiche un message d'erreur si la requête a échoué
                console.error('Un probléme et survenue veuillez reesayer plus tard ' + requete.status);
            }
        }
    };
    console.log('Prix Acualisé');
}

// Fonction pour l'interval (l'actualisation toute les 5 secondes)
setInterval(removePrice, 5000);