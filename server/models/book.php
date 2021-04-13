<?PHP 

class book {

    public $spec;

    public function __construct() { } 

    public static function showModel ($data){

        $spec = "Weight: " . $data['bookKg'] . " KG";
        return $spec;
    }
}
?>