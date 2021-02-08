<?PHP 
    $conn = mysqli_connect("127.0.0.1", "admin", "", "adm");
  
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
else{
   // echo "Conexion OK"; 
}
   
  

?>