<?php

// www.dement.ru
// version 11.01.10

class pl_layoutSpecial { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";


function engine() {

    if (file_exists('class/class_events_mod.php')) {
        include_once('class/class_events_mod.php');
        if (class_exists('events_mod')) {
            $this->events_mod = new events_mod;
            foreach($this->de as $key => $value) {
                $node=$this->de[$key];
                $this->events_mod->de[$key]=$node;
            }
            $this->de['html']=$this->events_mod->engine();

        }
    }

    return $this->de;

}


}

?>