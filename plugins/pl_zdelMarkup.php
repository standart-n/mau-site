<?php class pl_zdelMarkup {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $this->de['fn_markup']->insPlaceAllOpenTag($this->de['html'],'');
    $this->de['fn_markup']->insPlaceAllKeyTag($this->de['html'],'');
    $this->de['fn_markup']->insPlaceAllCloseTag($this->de['html'],'');
    return $this->de;
}

} ?>