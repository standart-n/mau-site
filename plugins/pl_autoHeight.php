<?php class pl_autoHeight { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $script=$this->de['fn_models']->loadScript('autoHeight');
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$script,'js');
    $this->de['html']=preg_replace("/(\<body)/i","$1 onload=\"autoHeight();\"",$this->de['html']);
    return $this->de;
}

} ?>