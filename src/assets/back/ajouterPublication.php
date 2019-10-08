<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
 $l=$crud->correct($_POST->lien);
 $t=$crud->correct($_POST->titre);
$sql = "INSERT INTO publication ( titre, lien, date)
VALUES ('$t', '$l', '$_POST->date')";
if($_POST->titre){
$data=$crud->execute($sql);
}
?>