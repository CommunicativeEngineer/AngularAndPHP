<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
 $a=$crud->correct($_POST->adresse);
 $m=$crud->correct($_POST->mail);
 $t1=$crud->correct($_POST->tel1);
 $t2=$crud->correct($_POST->tel2);
 $f=$crud->correct($_POST->fax);
 $fb=$crud->correct($_POST->facebook);
 $l=$crud->correct($_POST->linkedin);
 $t=$crud->correct($_POST->twitter);
$sql = "UPDATE  contact SET  adresse ='$a',  mail ='$m', tel1 ='$t1' , tel2 ='$t2', fax ='$f' , facebook ='$fb' , linkedin ='$l'  , twitter ='$t' WHERE id = '1' ";
$data=$crud->execute($sql);
?>