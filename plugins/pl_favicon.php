<?php class pl_favicon {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $mdl=$this->de['fn_models']->loadModel('favicon');
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$mdl,'css');
    return $this->de;
}

} ?>