<?php
    session_start();
    include_once("../db/DBManager.php");

    $my_DB = new DB();	
	
	$pdo = $my_DB->pdo;

	$sql = "delete from users where id = :id";

	$cmd = $pdo->prepare($sql);

	$cmd->bindValue(":id", $_SESSION['id'] );
    
	if($cmd->execute())
	{
		echo 'Usuario deletado com sucesso';
	}
	else
	{
		echo 'Nao foi possivel deletar o usuario';
	}
?>