<?PHP 

require_once (__DIR__."/productModel.php");

class Book extends ProductModel {

    public function __construct($data) { 
        parent::__construct($data);
    }

    public function getData (){

        $spec = "Weight: " . $this->data['bookKg'] . " KG";
       
        $jsonList = [    
            'id' => $this->data['id'],
            'sku' => $this->data['sku'],
            'name'=> $this->data['name'],
            'price'=> $this->data['price'],
            'spec'=> $spec
        ];

        return $jsonList;
    }
}
?>