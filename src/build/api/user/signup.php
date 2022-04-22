<?php

	include_once("../db/DBManager.php");

	$my_DB = new DB();	
	
	$pdo = $my_DB->pdo;

	$sql = "insert into notes (nome, email, password) values (:nome, :email, :password)";

	$cmd = $pdo->prepare($sql);

	$name = $_POST['name'];               
	$email = $_POST['email'];     
	$password = $_POST['password'];

	$cmd->bindValue(":nome", $nome);                    
	$cmd->bindValue(":email", md5($email));         
	$cmd->bindValue(":password", password_hash($password), PASSWORD_DEFAULT); 

	$cmd->execute();

    echo json_encode($name,$email,$password);
    
	if($dados = $cmd->fetch(PDO::FETCH_ASSOC))
	{
		echo json_encode(array(
			'result' => 201
		));
	}
	else
	{
		echo json_encode(array(
			'result' => 500
		));
	}
?>