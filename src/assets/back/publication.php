<?php
    include "Crud.php";
    $crud= new Crud();
    
        $query="SELECT id,date,titre,lien FROM publication";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>