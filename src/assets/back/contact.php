<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once("DbConfig.php");
$dbconfig = new DbConfig();
$dbconfig->__construct();
$connection=$dbconfig->connection;
$connection->set_charset("utf8");
$query="SELECT id,tel1,tel2,fax,mail,adresse,facebook,linkedin,twitter FROM contact";
$result = $connection->query($query);

$myArray = array();
if ($result) {

    while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
}

$result->close();

?>