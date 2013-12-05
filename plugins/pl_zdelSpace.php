<?php class pl_zdelSpace {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $this->de['html']=preg_replace("/(\r\n)+/i","$1",$this->de['html']);
    return $this->de;
}

} ?>