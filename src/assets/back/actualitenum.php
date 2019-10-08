<?php
    include "Crud.php";
    $crud= new Crud();
        $query="SELECT COUNT(id) FROM actualite";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>