<?php

    include "Crud.php";
    $crud= new Crud();
    $id=$_GET['id'];
    $query="SELECT  `id`, `nom`, `prenom`, `telephone`, `email`, `sujet`, `messagee`  FROM contact_form where id='$id'";
        
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>