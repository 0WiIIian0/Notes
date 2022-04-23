<?php
	session_start();

	include_once("../db/DBManager.php");
	
	$my_DB = new DB();	
	
	$pdo = $my_DB->pdo;

	$email = $_POST['email'];
	$password = $_POST['password'];
    
	$sql = "select * from users where email = :email";

	$cmd = $pdo->prepare($sql);

	$cmd->bindValue(":email", md5($email));
	
	$cmd->execute();

  echo json_encode($email,$password);
    
	if( $dados = $cmd->fetch(PDO::FETCH_ASSOC) )
	{
		
		if(password_verify($password,$dados['pass']))
		{
			$_SESSION['id']   = $dados['id'];
			$_SESSION['user'] = $dados['user'];

			//header("Location: ");
		}
		else
		{
			//header("Location: ");
		}

	} 
	else 
	{        	
		//header("Location: ");	
	}

?>