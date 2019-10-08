<?php

header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  echo json_encode(array('status' => false,
      'msg'    => 'pas post.'));
  exit;
}

$path = 'C:\wamp\www64\fichier\\';

if (isset($_FILES['uploadFile'])) { 
$originalName = $_FILES['uploadFile']['name'];
  $ext = '.'.pathinfo($originalName, PATHINFO_EXTENSION); 
  $generatedName = $originalName;
  $filePath = $path.$generatedName;

  if (!is_writable($path)) {
    echo json_encode(array(
      'status' => false,
      'msg'    => 'Destination directory not writable.'
    ));
    exit;
  }

  if (move_uploaded_file($_FILES['uploadFile']['tmp_name'], $filePath)) {
    echo json_encode(array(
      'status'        => true,  
      'generatedName' => $generatedName
    ));
  }
}
else {
  echo json_encode(
    array('status' => false, 'msg' => 'No file uploaded.')
  );
  exit;
}

?>