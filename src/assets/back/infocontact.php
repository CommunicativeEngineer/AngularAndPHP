<?php
    include "Crud.php";
    $crud= new Crud();
    
        $query="SELECT id,adresse,mail,tel1,tel2,fax,facebook,linkedin,twitter FROM contact where id='1'";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>