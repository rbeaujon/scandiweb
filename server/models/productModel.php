<?PHP

 abstract class ProductModel  {    

    // Attributes
     public $data;
        
     
        public function __construct($data) { 
            
           $this->data = $data;

        } 
    
       abstract public function getData();

}  
?>