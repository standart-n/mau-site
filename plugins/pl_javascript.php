<?php class pl_javascript {

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";


function engine() {

    $mdl=$this->javascript();
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$mdl,'js');
    return $this->de;

}

function javascript() {

	$show="";
	$this->de['base']->db=$this->de['db'];
	$this->de['base']->sql="SELECT * FROM `".$this->de['prefix']."_dataScripts` WHERE (activation=0) ORDER by id ASC";
	$js=$this->de['base']->sqlSelect();
	if (isset($js['res']))	{
		while ($js_row=mysql_fetch_array($js['res'])) {
			if (isset($js_row['script']))	{
				$show.=$js_row['script'].$this->runn;
			}
		}
	}
	$show.=$this->run;
	return $show;

}


} ?>