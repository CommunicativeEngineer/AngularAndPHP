<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "DELETE FROM actualite WHERE id = '$_POST->id' ";
$data=$crud->execute($sql);
?>