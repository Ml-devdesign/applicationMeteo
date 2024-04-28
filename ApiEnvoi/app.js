const url =  'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();


//  // Ouvre une nouvelle requête avec la méthode GET et l'URL spécifiée
// // Objet   =>   utiise le protocole Get
// requete.open('Get',url);
// requete.responseType ='json';
// requete.send();
// // Objet 

 // Ouvre une nouvelle requête avec la méthode POST et l'URL spécifiée
// Objet   =>   utiise le protocole Get
requete.open('POST',url);
//propriéte  setRequestHeader qui def le header pour envoyer a L'API 
requete.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
requete.responseType ='json';
requete.send('prenom=John');// Nous cherchont une variable avec une valeur
//Pour plus de parametre => requete.send('prenom=John&nom=DO')
// Objet 

requete.onload = (function() {
    if(requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200){
            let reponse = requete.response;
            console.log(reponse);
            
        } else{
            alert('Error while sending request to server : ' + JSON.stringify(requete));
        }
    } 
});