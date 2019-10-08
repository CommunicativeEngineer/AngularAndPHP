<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
 $l=$crud->correct($_POST->lien);
 $t=$crud->correct($_POST->titre);
$sql = "UPDATE  publication SET  titre ='$t',  lien ='$l', date ='$_POST->date' WHERE id = '$_POST->id' ";
$data=$crud->execute($sql);
?>