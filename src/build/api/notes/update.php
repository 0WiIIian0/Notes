<?php
    session_start();
    include_once("../db/DBManager.php");

    $my_DB = new DB();	
	
	$pdo = $my_DB->pdo;

	$sql = " update notes set	
					user      = :user   , 
					title     = :title  ,
					content      = :content

				 where id = :id
				";

	$cmd = $pdo->prepare($sql);
	
	$cmd->bindValue(":id", $_POST['id']);

	$user    = $_SESSION['id'];                    
	$title   = $_POST['title'];     
	$content    = $_POST['content'];

	$cmd->bindValue(":user"    , $user);                    
	$cmd->bindValue(":title"   , $title);         
	$cmd->bindValue(":content"    , $content);
    
    echo json_encode($user,$title,$content);
    
    if($cmd->execute())
	{
		echo 'A nota foi editado com sucesso';
	}
	else
	{
		echo 'Nao foi possivel editar a nota';
	}
?>