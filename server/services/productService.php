<?PHP 

require (__DIR__."/db.php");
require (__DIR__."/../models/product.php");


abstract class productService{

    // Attributes
    public $id;
    public $myswitch;
    public $sku;
    public $name;
    public $price;
    public $spec;
    public $items;
    public $jsonList;
 
    public function __construct() { } 

    abstract function create($myswitch, $sku, $name, $price);
    public static function delete($items){
        
            // new inst from db
            $conn = new connectionDB();
            
            // my new conexion to db
            $conn->createConnection();
        
           //delete items in massive mode from products the list from functions massdelete
            
            $sql_del= "DELETE FROM products WHERE id in ($items)";
            
            $conn->executeQuery($sql_del);
        
            // Closing the connection with BD
            $conn->closeConnection();
        
    }
    public static function getAll(){
   

        // my new instance of DB
            $conn = new connectionDB();
            
            // Create a new connection with DB
            $conn->createConnection();
    
            $spec = "";
    
            $query = "SELECT * FROM products";
            $result=$conn->executeQuery($query);
            $jsonList = array();
          
            while($row = $result->fetch_array(MYSQLI_ASSOC)){

                $spec = product::factory($row);

    
                $jsonList [] = [
                                'id' => $row['id'],
                                'sku' => $row['sku'],
                                'name'=> $row['name'],
                                'price'=> $row['price'],
                                'spec'=> $spec
                              
                ];
            };
                $jsonList = json_encode($jsonList);
                return $jsonList;
    
                 // Closing the connection with BD
                 $conn->closeConnection();
   

    }

}

?>