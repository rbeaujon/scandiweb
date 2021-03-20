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

  $product = new dvd(); 
  $product->show(); // Call a public method iextends from the class product
  echo $product->jsonList;
}


function post () {

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


function delete () {

  $itemsToDelete = file_get_contents('php://input');

  $productDelete = new dvd();
  $productDelete->delete($itemsToDelete);
  
  

}

?>