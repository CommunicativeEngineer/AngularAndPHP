<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 $ret = array(); 
 require_once("DbConfig.php");
 $dbconfig = new DbConfig();
 $dbconfig->__construct();
 $connection=$dbconfig->connection;
 $connection->set_charset("utf8");

$id=$_GET['id'];


$query="SELECT id,date,titre,lien FROM publication where id='$id'";
$result = $connection->query($query);

$data = array();
if ($result) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

$result->close();


?>