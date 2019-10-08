<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require_once("DbConfig.php");
  $dbconfig = new DbConfig();
  $dbconfig->__construct();
  $connection=$dbconfig->connection;
  $connection->set_charset("utf8");
  $query2="SELECT COUNT(id) FROM publication";
  $result2 = $connection->query($query2);
  $data2 = array();
  if ($result2) {
      $row = $result2->fetch_row();
      $data2[] = $row;
      echo json_encode(array('count'=>$data2[0][0]));
  }
        $result2->close();

        
    

?>