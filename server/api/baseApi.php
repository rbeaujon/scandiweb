<?PHP

abstract class api {

    public $method;


    public function handleRequest() {

        $method = $_SERVER['REQUEST_METHOD'];

        switch($method){

            case "GET": 
                $this->get();
            break; 
            
            case "POST": 
                $this->post();
            break;  
                    
            case "DELETE":
                $this->delete();
            break;

        }
    }
    abstract function  get();
    abstract function  post();
    abstract function  delete();



}


  
?>
