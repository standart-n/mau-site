<?php class fn_script {

var $run="\r\n";
var $runn="\r\n\r\n";

function getScriptByMark($mark="name",$key="main") { $mas=array(); 
    $s_1="SELECT * FROM `".$this->prefix."_dataScripts` ";
	if ((isset($this->db)) && (isset($this->base))) 	{
		$this->base->db=$this->db;
		switch ($mark) {
			default: $this->base->sql=$s_1."WHERE (`".$mark."`=\"$key\")"; 
		}
		$this->Script_ms=$this->base->sqlSelect(); $index=0;
		if (isset($this->Script_ms)) { if (isset($this->Script_ms['res'])) { if ($this->Script_ms['res']) {
        	while($this->Script_row=mysql_fetch_array($this->Script_ms['res'])) {
				$this->ms=array();
				while (list($name,$value)=each($this->Script_row)) $this->ms[$name]=$value;
				$mas[$index]=$this->ms; $index++;
			} 
		}	}	}
	} return $mas;
}
function showScript(&$html,$mas) {
    for ($i=0;$i<sizeof($mas);$i++) { if (isset($mas[$i])) {
		$this->showModel($html,$mas[$i]['script']); 
	}	}
}
function showScriptById(&$html,$id="1") { $this->showScript($html,$this->getScriptByMark("id",$id)); }
function showScriptByName(&$html,$name="main") { $this->showScript($html,$this->getScriptByMark("name",$name)); }
function showScriptByCaption(&$html,$caption="caption") { $this->showScript($html,$this->getScriptByMark("caption",$caption)); }
function showModel(&$html,$model) { $html=preg_replace("/(\[js.<\])/i",$model."$1\r\n",$html); }

} ?>
