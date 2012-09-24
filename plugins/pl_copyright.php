<?php class pl_copyright {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";


function engine() {

    $mdl=$this->de['fn_models']->loadModel('copyright');
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$mdl,'copyright');
	
	//$mdl="woooooo";
    //$this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$mdl,'copyright');
	
    return $this->de;

}

} ?>