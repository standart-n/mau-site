<?php class pl_caption {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $mdl=$this->title();
    $this->de['fn_markup']->insPlaceDualTag($this->de['html'],$mdl,'title');
    return $this->de;

}

function title() {
    $this->de['title']=$this->de['settings']->getOptionByName("title");
    $mdl="";
    $mdl=$this->de['fn_models']->loadModel('title');

    if ($this->de['title']!="") {
        $this->de['fn_markup']->insPlaceKeyTag($mdl,$this->de['title'],'title_value');
    }
    return $mdl;
}

} ?>