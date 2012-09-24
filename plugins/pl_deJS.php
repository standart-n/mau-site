<?php class pl_deJS {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $mdl=$this->de['fn_models']->loadModel('deJS');
    $this->de['fn_markup']->insAfterOpenTag($this->de['html'],$mdl,'js');
    return $this->de;
}

} ?>