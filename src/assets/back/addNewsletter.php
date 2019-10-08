
<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once("DbConfig.php");
$dbconfig = new DbConfig();
$dbconfig->__construct();
$connection=$dbconfig->connection;
if((isset($_POST['email'])) && (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ))
{


$email = $connection->real_escape_string($_POST['email']);

$stmt = $connection->prepare("INSERT INTO newsletter_form ( email ) VALUES (?)");
$stmt->bind_param("s",$email );
$stmt->execute();
$stmt->store_result();

$stmt->close();

echo "Thank you! you are now subscribed to our newsletter";

}
else
{
echo "Please fill your Email";
}
?>