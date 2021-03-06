<?PHP

  require("../controller/productsController.php");

  $itemsToDelete = $_POST['itemsToDelete'];

  $productDelete = new Product();
  $productDelete->DeleteProduct($itemsToDelete);
?>