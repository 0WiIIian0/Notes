<?php
    session_start();
    include_once("../db/DBManager.php");

    $my_DB = new DB();	
	
	$pdo = $my_DB->pdo;

	$sql = "delete from notes where id = :id";

	$cmd = $pdo->prepare($sql);

	$cmd->bindValue(":id", $_SESSION['id'] );
    
	if($cmd->execute())
	{
		echo 'Nota deletado com sucesso';
	}
	else
	{
		echo 'Nao foi possivel deletar a nota';
	}
?>