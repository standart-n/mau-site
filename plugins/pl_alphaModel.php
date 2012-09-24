<?php class pl_alphaModel {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {

    $mdl=$this->de['fn_models']->loadModel('alpha');
    $this->de['fn_markup']->insAfterOpenTag($this->de['html'],$mdl,'html');
    return $this->de;

}


} ?>