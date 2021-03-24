<?PHP
 /*
 * Products controller to handle all comunication from user data
 */ 
require (__DIR__."/../services/productService.php");
require ("baseApi.php");


class productApi extends api{

    public $jsonList;

    public function get(){
     
        $code = 200;

        $getResult = product::getAll(); // Call a public  static method getAll to obtein all product in DB//
        
        if($getResult == NULL || $getResult === ""){

            $code = 500;
            return api::responseCode($code);
        }
        else{
        
            echo $getResult;
            echo $getResult;return api::responseCode($code);
        }
    }
    public function post(){

       
        $sku = isset($_POST['sku']);
        $name = isset($_POST['name']);
        $price = isset($_POST['price']);
        $myswitch = isset($_POST['myswitch']);

        $code = 200;

        if($sku == NULL || $sku === "" || $name == NULL || $name === "" || $price == NULL || $price === "" || $myswitch == NULL || $myswitch === ""){

            $code = 400;
            return api::responseCode($code); 

        }  
        else {
               
            return api::responseCode($code);

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
    }
    public function delete(){
            
        
        $itemsToDelete = file_get_contents('php://input');
        $code = 200;

        if($itemsToDelete === "" || $itemsToDelete == NULL){

            $code = 400;
            return api::responseCode($code);
            
        }  
        else {
        product::delete($itemsToDelete);
        return api::responseCode($code);
        }
    }
}

$productApi = new productApi();
$productApi->handleRequest();

?>