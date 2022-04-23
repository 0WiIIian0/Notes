<?php
    
    include_once("../db/connectDB.php");

    $my_DB = new DB();	
	
	$pdo = $my_DB->pdo;

	$sql = "select id, title, content from notes where id = :id";

	$cmd = $pdo->prepare($sql);

    $id = $_GET['id'];

	$cmd->bindValue(":id" ,$id);  

	$cmd->execute();

	echo json_encode($cmd->fetchAll(PDO::FETCH_CLASS));
?>