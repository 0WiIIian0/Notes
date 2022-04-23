<?php
    
    class DB {
        
        public $pdo;
    
        function __construct() {
    
            try {	
                $this->pdo = new PDO("mysql:host=186.208.132.170;dbname=notes","root","test123"); 
            } catch(PDOException $e) {
                die('Failed to connect to local database.');
            }
    
        }
    
    }

    echo "123";

    $my_DB = new DB();

?>
