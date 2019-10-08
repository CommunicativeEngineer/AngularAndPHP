<?php
    header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $ret = array(); 
  require_once("DbConfig.php");
  $dbconfig = new DbConfig();
  $dbconfig->__construct();
  $connection=$dbconfig->connection;
  $connection->set_charset("utf8");
     $i=$_GET['i'];
        $query2="SELECT COUNT(id) FROM publication";
        $result2 = $connection->query($query2);
        $data2 = array();
        if ($result2) {
            $row = $result2->fetch_row();
            $data2[] = $row;
            $ret['count'] = $data2[0][0];
            // echo json_encode($);
        }

        $n=$ret['count'];
        if($n<8*$i){
        $d=0;
        $f=$n-($i-1)*8;}
        else{
        $f=8;
         $d=$n-8*$i;}

        $query="SELECT id,date,titre,lien FROM publication LIMIT $d,$f";
        $result = $connection->query($query);
        $data = array();
        if ($result) {
        
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                $data[] = $row;
            }
            $ret['data'] = $data;
            echo json_encode($ret);
        }
        $result2->close();
        $result->close();
    

?>