<?PHP
    require("db.php");
    
    // my new instance of DB
    $conn = new ConnectionDB();
    
    // Create a new connection with DB
    $conn->CreateConnection();

 //It delete by items or in massive mode from products the list from script massdelete.js

 $itemsToDelete = $_POST['itemsToDelete'];

 
 $sql_del= "DELETE FROM products WHERE id in ($itemsToDelete)";
 

 $conn->ExecuteQuery($sql_del);

        // Closing the connection with BD
        $conn->CloseConnection();