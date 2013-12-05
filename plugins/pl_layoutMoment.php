<?php

// www.dement.ru
// version 11.01.10

class pl_layoutMoment { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";
var $t="\t";
var $tt="\t\t";


function engine() {

    $this->showStatic();
    return $this->de;

}

function showStatic() {

    $el="";
    if ((isset($this->de['base'])) && (isset($this->de['db']))) {    
	$this->de['base']->sql="SELECT * FROM `".$this->de['prefix']."_dataElements` WHERE (1=1)";
	$el_ms=$this->de['base']->sqlSelect();
	if (isset($el_ms['res']))	{
  	  while ($el_row=mysql_fetch_array($el_ms['res'])) {
		if (isset($el_row['html']))	{
			$div=strval(trim(htmlspecialchars($el_row['div_id'])));
            $el=$el_row['html'];
            $this->de['fn_markup']->insAfterOpenTag($this->de['html'],$el,'cell','t:div;id:'.$div.';');
		}
      }
	}
    }
}



}

?>