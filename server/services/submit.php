<?PHP

  require("../controller/productsController.php");

  $sku = $_POST['sku'];
  $name = $_POST['name'];
  $price = $_POST['price'];
  $myswitch = $_POST['myswitch'];

  
  $product = new Product();
  $product->CreateProduct($myswitch, $sku, $name, $price);
?>