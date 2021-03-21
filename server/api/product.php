<?PHP
 /*
 * Products controller to handle all comunication from user data
 */ 
require (__DIR__."/../services/productService.php");
require (__DIR__."/baseApi.php");


class productApi extends api{

  public $jsonList;

  public function get(){

     $getResult = product::getAll(); // Call a public  static method getAll to obtein all product in DB
     echo $getResult;
  }
  public function post(){

      $sku = $_POST['sku'];
      $name = $_POST['name'];
      $price = $_POST['price'];
      $myswitch = $_POST['myswitch'];

      if ($myswitch==="dvd"){
          
          $product = new dvd();
          $product->create($sku, $name, $price);
      }

      if ($myswitch==="book"){
          
          $product = new book();
          $product->create($sku, $name, $price);
      }

      if ($myswitch==="furniture"){
          
          $product = new furniture();
          $product->create($sku, $name, $price);
      }

  }
  public function delete(){

      $itemsToDelete = file_get_contents('php://input');
      product::delete($itemsToDelete);
  }
}

$productApi = new productApi();
$productApi->handleRequest();

?>