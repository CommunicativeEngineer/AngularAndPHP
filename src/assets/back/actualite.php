<?php
    include "Crud.php";
    $crud= new Crud();
        $query="SELECT id,titre,datee,contenu,fichier FROM actualite";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>