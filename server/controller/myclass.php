<?PHP 

require("../config/db.php");

class Product{
    // Attributes
    private $sku;
    private $name;
    private $price;
    private $type;
    private $dvdData;
    private $bookW;
    private $height;
    private $width;
    private $lenght;
    
    public function __construct() { } 

    public function CreateProduct($myswitch, $sku, $name, $price, $dvdMB, $bookW, $height, $width, $lenght){
        // Method to create one Product in DB

        // my new instance of DB
        $conn = new ConnectionDB();
        
        // Create a new connection with DB
        $conn->CreateConnection();

        // registering in db according to the type of the item

        if($myswitch === "dvd"){
            $dvdMB = $_POST['dvdMB'];
            $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', $dvdMB, NULL, NULL, NULL, NULL)";
            $conn->ExecuteQuery($sql_insert);
        }
        if($myswitch === "book"){
            $bookW = $_POST['bookW'];
            $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', NULL, $bookW, NULL, NULL, NULL)";
            $conn->ExecuteQuery($sql_insert);
        }
        if($myswitch === "furniture"){
            $height = $_POST['height'];
            $width = $_POST['width'];
            $lenght = $_POST['lenght'];
            $sql_insert = "INSERT INTO products  (sku, name, price, type, dvdSize, bookKg, height, width, length) VALUES ('$sku', '$name', $price, '$myswitch', NULL, NULL, $height, $width, $lenght)";
            $conn->ExecuteQuery($sql_insert);
        }  

        // Closing the connection with BD
        $conn->CloseConnection();

    }

}
    ?>