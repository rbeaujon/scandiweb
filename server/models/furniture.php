<?PHP 

require_once (__DIR__."/productModel.php");

class Furniture extends ProductModel {

    public function __construct($data) { 
        parent::__construct($data);
    }

    public function getData (){

        $spec = "Dimension: " . $this->data['height'] . "X" .  $this->data['width'] . "X" . $this->data['length'];
       
        $jsonList  = [    
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