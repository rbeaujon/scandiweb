<?PHP

require (__DIR__."/../models/dvd.php");
require (__DIR__."/../models/book.php");
require (__DIR__."/../models/furniture.php");


class ProductFactory  {    
    
    public static function factory ($data){

        if ($data['type'] === "dvd") {

            $product = new Dvd($data);
            return $product;
        }
        else if ($data['type'] === "book") {

            $product = new Book($data);
            return $product;
        }
        else if ($data['type'] === "furniture") {

            $product = new Furniture($data);
            return $product;
        }
        
    }

}  
?>