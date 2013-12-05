<?php class pl_zgetTarget {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $this->de['html']=preg_replace("/ target=_blank\"/i","\" target=\"_blank\"",$this->de['html']);
    return $this->de;
}

} ?>