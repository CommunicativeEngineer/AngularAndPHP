
<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

require_once("DbConfig.php");
$dbconfig = new DbConfig();
$dbconfig->__construct();
$connection=$dbconfig->connection;
if((isset($_POST['firstName'])&& $_POST['firstName'] !='') && (isset($_POST['email'])&& $_POST['email'] !=''))
{

$firstName = $connection->real_escape_string($_POST['firstName']);
$lastName = $connection->real_escape_string($_POST['lastName']);
$phone = $connection->real_escape_string($_POST['phone']);
$email = $connection->real_escape_string($_POST['email']);
$subject = $connection->real_escape_string($_POST['subject']);
$message = $connection->real_escape_string($_POST['message']);
$stmt = $connection->prepare("INSERT INTO contact_form (nom, prenom, telephone, email , sujet , messagee) VALUES (?, ?, ?,?, ?, ?)");
$stmt->bind_param("ssssss", $firstName, $lastName, $phone ,$email ,$subject,$message);
$stmt->execute();
$stmt->store_result();

$stmt->close();

echo "Thank you! We will contact you soon";

}
else
{
echo "Please fill Name and Email";
}
?>