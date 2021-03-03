<?PHP 

class ConnectionDB{
    // Attributes
    private $host;
    private $user;
    private $password;
    private $database;
    private $conn;
     
    public function __construct(){ 
        //Constructor
        require_once "config_db.php";
        $this->host=HOST;
        $this->user=USER;
        $this->password=PASSWORD;
        $this->database=DATABASE;
      
    }
      
    public function CreateConnection(){
        // Method to create and return the connetion to DB
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);
        if($this->conn->connect_errno) {
        die("Error to connect to DB in MySQL: (" . $this->conn->connect_errno . ") " . $this->conn->connect_error);
        }
    }
      
    public function CloseConnection(){
        //Metodo que cierra la conexion a la BD
        $this->conn->close();
    }
    
    public function ExecuteQuery($sql){
        /* Metodo que ejecuta un query sql
         Retorna un resultado si es un SELECT*/
         $result = $this->conn->query($sql);
         return $result;
        }

}
    ?>