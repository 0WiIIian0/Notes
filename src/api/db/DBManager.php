<?php
    
    class DB {
        
        public $pdo;
    
        function __construct() {
    
            try {	
                $this->pdo = new PDO("mysql:host=localhost;dbname=notes","root","test123"); 
            } catch(PDOException $e) {
                die('Failed to connect to local database.');
            }
    
        }
    
    }
/*
    $db = new DB();
	$pdo = $db->pdo;

    $cmd = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");

	$cmd->bindValue(":name" , 'test');                   
	$cmd->bindValue(":email"    , 'test@test.com'); 
	$cmd->bindValue(":password" , 'klashdashad ashg');

    $cmd->execute();

    echo json_encode($cmd->fetchAll());*/

?>
