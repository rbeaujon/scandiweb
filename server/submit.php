

<?PHP
 include ("services/conectDB.php");

  $sku = $_POST['sku'];
  $name = $_POST['name'];
  $price = $_POST['price'];
  $myswitch = $_POST['myswitch'];

  if($myswitch === "dvd"){
    $dvdMB = $_POST['dvdMB'];
    $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', $dvdMB, NULL, NULL, NULL, NULL)";
    $conn->query($sql_insert);
  }
  if($myswitch === "book"){
    $bookW = $_POST['bookW'];
    $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', NULL, $bookW, NULL, NULL, NULL)";
    $conn->query($sql_insert);
  }
  if($myswitch === "furniture"){
    $height = $_POST['height'];
    $width = $_POST['width'];
    $lenght = $_POST['lenght'];
    $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', NULL, NULL, $height, $width, $lenght)";
    $conn->query($sql_insert);
  }  
  

  $conn->close();