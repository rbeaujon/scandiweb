<?PHP 

require_once (__DIR__."/productModel.php");

class Dvd extends ProductModel {

    public function __construct($data) { 
        parent::__construct($data);
    }

    public function getData (){

        $spec = "Size: " . $this->data['dvdSize'] . " MB";

       
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