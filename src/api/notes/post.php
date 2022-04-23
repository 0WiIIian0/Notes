<?php

    session_start();
    include_once("../db/DBManager.php");

    $my_DB = new DB();	

    $pdo = $my_DB->pdo;

    $sql = "insert into notes (user,title,content) values (:user, :title, :content)";

    $cmd = $pdo->prepare($sql);

    $user  = $_SESSION['id'];                    
    $title = $_POST['title'];     
    $content  = $_POST['content'];

    $cmd->bindValue(":user"    , $user);                    
    $cmd->bindValue(":title"   , $title);         
    $cmd->bindValue(":content"    , $content); 

    $cmd->execute();
    
    json_encode($user,$title,$content);

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