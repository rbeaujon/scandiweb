<?PHP

require (__DIR__."/dvd.php");
require (__DIR__."/book.php");
require (__DIR__."/furniture.php");

class product  {    
    
    public static function factory ($data){

        if ($data['type'] === "dvd") {

            $spec = dvd::showModel($data);
            return $spec;
        }
        else if ($data['type'] === "book") {

            $spec = book::showModel($data);
            return $spec;
        }
        else if ($data['type'] === "furniture") {

            $spec = furniture::showModel($data);
            return $spec;
        }
        
    }

}  
?>