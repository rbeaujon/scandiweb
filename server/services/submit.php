<?PHP
    require("db.php");
    
    // my new instance of DB
    $conn = new ConnectionDB();
    
    // Create a new connection with DB
    $conn->CreateConnection();

// registering in db according to the sort of item

  $sku = $_POST['sku'];
  $name = $_POST['name'];
  $price = $_POST['price'];
  $myswitch = $_POST['myswitch'];

  if($myswitch === "dvd"){
    $dvdMB = $_POST['dvdMB'];
    $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', $dvdMB, NULL, NULL, NULL, NULL)";
    $conn->ExecuteQuery($sql_insert);
  }
  if($myswitch === "book"){
    $bookW = $_POST['bookW'];
    $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', NULL, $bookW, NULL, NULL, NULL)";
    $conn->ExecuteQuery($sql_insert);
  }
  if($myswitch === "furniture"){
    $height = $_POST['height'];
    $width = $_POST['width'];
    $lenght = $_POST['lenght'];
    $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', NULL, NULL, $height, $width, $lenght)";
    $conn->ExecuteQuery($sql_insert);
  }  
  

    // Closing the connection with BD
    $conn->CloseConnection();