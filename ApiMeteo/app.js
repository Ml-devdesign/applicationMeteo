// const url = "https://api.ambeedata.com/weather/latest/by-lat-lng?lat=49.133333&lng=6.166667"
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=ce6bd0ce3526d798bf8d5fbe56b765e2&units=metric';

// paramètres :
    // q - pour spécifier la ville (ici la merveilleuse ville de Saint-Saulve)
    // appid - pour spécifier votre clé secrète (la mienne ne l'est plus désormais !)
    // units - pour spécifier que nous voulons la température en Celsius
let ville = 'Metz';
console.log(url);
// function setInterval(){ pas d'interval car l'api n'offre que 1000 envoie par jour 
    let requete = new XMLHttpRequest();
    requete.responseType = 'json';
    requete.open = ('GET', url);
    requet.send();// enregistre
    requet.onload = function(){//envoie une response
        
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                console.log(reponse + '================================');
                let prixEnEuro = reponse.EUR.last;
                document.querySelector('#temperature_label').textContent = prixEnEuro;
                console.log(reponse);
                // let temperature_label = reponse.EUR.last;
                // document.querySelector('#temperature_label').textContent = temperature_label;
            } else {
                console.error('Un probléme et survenue veuillez reesayer plus tard ' + requete.status);
            }
        }
    };
        console.log('temperature_label');
// }

// setInterval(removePrice, 5000);

