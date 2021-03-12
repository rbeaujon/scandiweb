<?PHP
 /*
 * Products controller to handle all comunication from user data
 */ 
require (__DIR__."/../services/productService.php");

$method = $_SERVER['REQUEST_METHOD'];

switch($method){

    case "GET": 
       get();
    break; 
    
    case "POST": 
      post();
    break; 
              
    case "DELETE":
      delete();
    break; 

}

function get() {

  $product = new Product();
  $product->ShowProduct();
  $list = json_decode($product->jsonList);
  echo $product->jsonList;
}


function post () {

  $sku = $_POST['sku'];
  $name = $_POST['name'];
  $price = $_POST['price'];
  $myswitch = $_POST['myswitch'];

  
  $product = new Product();
  $product->CreateProduct($myswitch, $sku, $name, $price);

}


function delete () {

  $itemsToDelete = file_get_contents('php://input');

  $productDelete = new Product();
  $productDelete->DeleteProduct($itemsToDelete);
  
  

}

?>