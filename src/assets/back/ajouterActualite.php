<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 include "Crud.php"; 
 $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
 $c=$crud->correct($_POST->contenu);
 $t=$crud->correct($_POST->titre);
 $f=$crud->correct($_POST->fichier);
$sql = "INSERT INTO actualite ( titre, contenu, datee, fichier)
VALUES ('$t', '$c', '$_POST->datee', '$f')";
if($_POST->titre){
$data=$crud->execute($sql);
} 
?>