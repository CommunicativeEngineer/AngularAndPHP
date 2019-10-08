<?php
    include "Crud.php";
    $crud= new Crud();
    $i=$_GET['id'];
        $query2="SELECT COUNT(id) FROM contact_form";
        $data2=$crud->getData($query2);
        $n= $data2[0]['COUNT(id)'];
        if($n<10*$i){
        $d=0;
        $f=$n-($i-1)*10;}
        else{
        $f=10;
         $d=$n-10*$i;}
        $query="SELECT id ,  nom ,  prenom ,  telephone ,  email ,  sujet ,  messagee FROM contact_form LIMIT $d,$f";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>