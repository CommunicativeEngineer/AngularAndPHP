<?php
    include "Crud.php";
    $crud= new Crud();
    
        $query=" SELECT id ,  nom ,  prenom ,  telephone ,  email ,  sujet ,  messagee FROM contact_form";  
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>