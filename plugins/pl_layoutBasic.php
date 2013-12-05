<?php class pl_layoutBasic { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $mdl_gl=$this->de['fn_models']->loadModel('basic');
    $mdl=$this->de['fn_models']->loadModel('layout');
    $this->de['fn_markup']->insBeforeCloseTag($mdl_gl,$mdl,'layout_main');
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$mdl_gl,'model');
    return $this->de;
}

} ?>