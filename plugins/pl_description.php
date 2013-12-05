<?php class pl_description {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $mdl=$this->de['fn_models']->loadModel('meta');
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$mdl,'meta');
    return $this->de;
}

} ?>