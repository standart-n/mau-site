<?php class pl_search { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
	$css_style="mauricItems";
    $style=$this->de['fn_models']->loadStyle('search_form');
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');
    $mdl=$this->de['fn_models']->loadModel('search_form');
    $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$mdl,'search_form');
    if ($this->de['level']=="search") {
		if (isset($_POST["search_form_input"])) $search=strval(trim($_POST["search_form_input"])); else $search="";
		$style=$this->de['fn_models']->loadStyle('text_'.$css_style);
		$this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');
		$res=$this->de['fn_search']->search($search,"caption",$css_style);
		$this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$res,'search_result');
	} return $this->de;
}

} ?>
