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

function get () {
    
  // my new instance of DB
  $conn = new ConnectionDB();
 
  // Create a new connection with DB
  $conn->CreateConnection();

  $tipo = "";

  $query = "SELECT * FROM products";
  $result=$conn->ExecuteQuery($query);
  //$result = mysqli_query($NewConn,"SELECT * FROM products");
      
  while($row = $result->fetch_array(MYSQLI_ASSOC)){
      $clase = $row['type'];
      if($clase === "dvd"){
          $tipo = "Size: " . $row['dvdSize']. " MB";
      }
      if($clase === "book"){
          $tipo = "Weight: " . $row['bookKg'] . " KG";
      }
      if($clase === "furniture"){
          $tipo = "Dimension: " . $row['height'] . "X" .  $row['width'] . "X" . $row['length'];
      }

 ?> 
 
 <div class="product">

  <input type="checkbox" id=<?PHP echo "$row[id]" ?> class="checkmark" >
      <div class="specifications">
          <ul>
              <p><strong><?PHP echo "$row[sku]" ?></strong></p>
              <p><strong><?PHP echo "$row[name]"?></strong></p>
              <p><strong><?PHP echo "$row[price]"?></strong></p>
              <p><strong> <?PHP echo "$tipo" ?></strong></p>
              
            
              
          </ul>
      </div>
  </div>
  <?PHP  
      };
      // Closing the connection with BD
      $conn->CloseConnection();

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