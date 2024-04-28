<?php 

///test for creating API 
header('Acess-Control-Allow-Origin: *');//defind a header with access to Php page to allow origin header for all requests and responses 

$prenom = (isset($_POST['prenom'])) ? $_POST['prenom'] : 'anonyme';
$resultat = 'Bonjour'.$prenom . ' ! Voici la requete Ajax';
$tableau = ['prenom' => $prenom, 'resultat' => $resultat];
echo json_encode($tableau)// Return a Json array, object containing 
//Retourne la représentation JSON d'une valeur
?>