<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
 $c=$crud->correct($_POST->contenu);
 $t=$crud->correct($_POST->titre);
$sql = "UPDATE  actualite SET  titre ='$t',  contenu ='$c', datee ='$_POST->datee' WHERE id = '$_POST->id' ";
$data=$crud->execute($sql);
?>