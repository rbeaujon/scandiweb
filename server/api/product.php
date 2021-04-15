<?PHP
 /*
 * Products controller to handle all comunication from user data
 */ 
require (__DIR__."/../services/productService.php");
require (__DIR__."/baseApi.php");

class productApi extends api{

    public $jsonList;

    public function get(){
     
        $code = 200;
        $products = ProductService::getAll(); // Call a public  static method getAll to obtein all product in DB//

        if($products == NULL || $products === ""){

            $code = 500;
            api::responseCode($code);
        }
        else{

            $productsData = array(); 
            
            
            foreach ($products as $product){

    
                $data = $product->getData(); 
                array_push ($productsData, $data);
            } 
            
            api::responseCode($code);

            echo json_encode($productsData);;
            


        }
    }
    public function post(){

       
        $sku = isset($_POST['sku']);
        $name = isset($_POST['name']);
        $price = isset($_POST['price']);
        $myswitch = isset($_POST['myswitch']);



        $code = 200;

        if($sku == NULL  || $name == NULL  || $price == NULL || $myswitch == NULL){

            $code = 400;
            api::responseCode($code); 

        }  
        else {
               
            api::responseCode($code);


            $sku = $_POST['sku'];
            $name = $_POST['name'];
            $price = $_POST['price'];
            $myswitch = $_POST['myswitch'];
                            
            $products = new products();
            $products->create($myswitch, $sku, $name, $price);

        }
    }
    public function delete(){
            
        $itemsToDelete = file_get_contents('php://input');
      
        $code = 200;

        if($itemsToDelete === "" || $itemsToDelete == NULL){

            $code = 400;
            api::responseCode($code);
            
        }  
        else {
            product::delete($itemsToDelete);   
            api::responseCode($code);
        };
       
    }
}

$productApi = new productApi();
$productApi->handleRequest();


?>