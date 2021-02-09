<?PHP
 include ("db.php");

 $itemsToDelete = $_POST['itemsToDelete'];

 
 $sql_del= "DELETE FROM products WHERE id in ($itemsToDelete)";
 

 $conn->query($sql_del);

 $conn->close();