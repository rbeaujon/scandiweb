<?PHP 

class furniture {

    public $spec;

    public function __construct() { } 

    public static function showModel ($data){

        $spec = "Dimension: " . $data['height'] . "X" .  $data['width'] . "X" . $data['length'];
        return $spec;
    }
}
?>