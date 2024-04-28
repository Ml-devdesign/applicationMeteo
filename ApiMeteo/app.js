    //  json A FAIRE =>
    //  Recuperer le weather[0].description => '' => pour
    // modification du background en fonction de temps 
document.addEventListener('DOMContentLoaded', function() {
    //pour vous assurer que le DOM est entièrement chargé avant d'essayer d'accéder à ses élément

    let ville = 'Metz';
    recupereTemp(ville);//Permet un affichage dune ville au moment de la genreration de la page 

    // Creation d'un prompt pour permettre la mofication de la ville et recupperation de la ville 
    let changerDeVille = document.querySelector('#changer');
    changerDeVille.addEventListener('click',()=>{
        ville = prompt('Quelle ville souhaitez-vous voir ? ');
        recupereTemp(ville);
    });

    // Fonction ajouter qui englobe les demande en fonction de la ville 
    function recupereTemp(ville){
        // https://api.openweathermap.org/data/2.5/weather?q=metz&appid=ce6bd0ce3526d798bf8d5fbe56b765e2&units=metric
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville +'&appid=ce6bd0ce3526d798bf8d5fbe56b765e2&units=metric';
        // const url = "https://api.ambeedata.com/weather/latest/by-lat-lng?lat=49.133333&lng=6.166667"
        // paramètres :
            // q - pour spécifier la ville (ici la merveilleuse ville de Saint-Saulve)
            // appid - pour spécifier votre clé secrète (la mienne ne l'est plus désormais !)
            // units - pour spécifier que nous voulons la température en Celsius


        // function setInterval(){ pas d'interval car l'api n'offre que 1000 envoie par jour 
            let requete = new XMLHttpRequest();//
            // Ouvre une nouvelle requête avec la méthode GET et l'URL spécifiée
            requete.open('GET', url);
            // Indique que la réponse attendue est au format JSON
            requete.responseType = 'json';
            // Envoie la requête
            requete.send();
            // Gère l'événement onload, qui se déclenche lorsque la réponse est reçue
            requete.onload = function() {

            // Vérifie requete.readyState  == XMLHttpRequest.DONE si du meme type ou a la meme valeur  
                if (requete.readyState === XMLHttpRequest.DONE) {
                    
                    if (requete.status === 200) {
                        let reponse = requete.response;
                        
                        let date = Date();
                        let meteo = reponse.main.temp;//récuparation Json 
                        let villes = reponse.name;
                        let meteoMin = reponse.main.temp_min
                        let meteoMax = reponse.main.temp_max
                        

                        document.querySelector('#date').textContent = date;
                        document.querySelector('#villes').textContent = villes;
                        document.querySelector('#temperature_label').textContent = meteo;
                        document.querySelector('#temperature_label-min').textContent = meteoMin;
                        document.querySelector('#temperature_label-max').textContent = meteoMax;
                        console.log(reponse);

                    } else {
                        console.error('Un probléme et survenue veuillez reesayer plus tard ' + requete.status);
                    }
                }
            };
                // console.log('temperature_label');
        // }

        // setInterval(removePrice, 5000);
    };
});