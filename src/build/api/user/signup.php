<?php

	include_once("../db/DBManager.php");

	$my_DB = new DB();
	
	$pdo = $my_DB->pdo;

	$sql = "insert into users (name, email, password) values (:name, :email, :password)";

	$cmd = $pdo->prepare($sql);

	$name = $_GET['name'];               
	$email = $_GET['email'];     
	$password = $_GET['password'];

	$cmd->bindValue(":name", $name);                    
	$cmd->bindValue(":email", md5($email));         
	$cmd->bindValue(":password", password_hash($password, PASSWORD_DEFAULT)); 

	$result = $cmd->execute();
  
	echo json_encode(array(
		'result' => $result,
		'error' => $pdo->errorInfo()
	));

	return;

	if($result > 0)
	{

		echo json_encode(array(
			'result' => 201
		));

	}
	else
	{

		echo json_encode(array(
			'error' => $pdo->errorInfo()
		));

	}

?>