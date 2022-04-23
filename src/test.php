<?php

if(empty($_SERVER['CONTENT_TYPE']))
{ 
 $_SERVER['CONTENT_TYPE'] = "application/x-www-form-urlencoded"; 
}

echo json_encode(array(
  'GET' => $_GET
));

?>