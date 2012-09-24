<?php class pl_layoutFactors { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    $this->de['html']=$this->generate_propertys($this->de['html']);
    return $this->de;
}

function generate_propertys($html) {
	$pr="";
	$this->de['base']->sql="SELECT * FROM `sk_".$this->de['skeleton_tb']."_dataPropertys` WHERE (1=1)";
	$pr_ms=$this->de['base']->sqlSelect();
	if (isset($pr_ms['res']))	{
	  while ($pr_row=mysql_fetch_array($pr_ms['res'])) {
		if (isset($pr_row['property']))	{
			$div=strval(trim(htmlspecialchars($pr_row['div_id'])));
			$pr=$pr_row['property'];
			$pr=str_replace("\r\n"," ",$pr);
			$pr=ltrim($pr);
			$pr=rtrim($pr);
            $html=preg_replace("/(id=\"".$div."\")/i","$1 ".$pr,$html);
		}
      }
	}
    return $html;
}

} ?>