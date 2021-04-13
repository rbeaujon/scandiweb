<?PHP 

class dvd {

    public function __construct() { } 

    public static function showModel ($data){

        $spec = "Size: " . $data['dvdSize'] . " MB";
        return $spec;



    }
}
?>