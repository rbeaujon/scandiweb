<?PHP

  require("../controller/myclass.php");

  $sku = $_POST['sku'];
  $name = $_POST['name'];
  $price = $_POST['price'];
  $myswitch = $_POST['myswitch'];

  
  $product = new Product();
  $product->CreateProduct($myswitch, $sku, $name, $price, $dvdMB, $bookW, $height, $width, $lenght );
?>