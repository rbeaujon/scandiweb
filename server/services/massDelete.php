<?PHP
 include ("db.php");

 //It delete by items or in massive mode from products the list from script massdelete.js

 $itemsToDelete = $_POST['itemsToDelete'];

 
 $sql_del= "DELETE FROM products WHERE id in ($itemsToDelete)";
 

 $conn->query($sql_del);

 $conn->close();