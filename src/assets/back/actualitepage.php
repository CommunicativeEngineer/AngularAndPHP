<?php
    include "Crud.php";
    $crud= new Crud();
    $i=$_GET['i'];
        $query2="SELECT COUNT(id) FROM actualite";
        $data2=$crud->getData($query2);
        $n= $data2[0]['COUNT(id)'];
        if($n<6*$i){
        $d=0;
        $f=$n-($i-1)*6;}
        else{
        $f=6;
         $d=$n-6*$i;}
        $query="SELECT id,titre,datee,contenu,fichier FROM actualite LIMIT $d,$f";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>