<?php

    include "Crud.php";
    $crud= new Crud();
    $query="SELECT id,email FROM newsletter_form";
        
        $data=$crud->getData($query);
         echo json_encode($data);
    
?>