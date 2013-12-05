<?php class fn_boxes {

var $run="\r\n";
var $runn="\r\n\r\n";

function getBoxByMark($mark="name",$key="main") { $mas=array(); 
    $s_1="SELECT * FROM `".$this->prefix."_legoShelfs` ";
	if ((isset($this->db)) && (isset($this->base))) 	{
		$this->base->db=$this->db;
		switch ($mark) {
			default: $this->base->sql=$s_1."WHERE (`".$mark."`=\"$key\")"; 
		}
		$this->Box_ms=$this->base->sqlSelect(); $index=0;
		if (isset($this->Box_ms)) { if (isset($this->Box_ms['res'])) { if ($this->Box_ms['res']) {
        	while($this->Box_row=mysql_fetch_array($this->Box_ms['res'])) {
				$this->ms=array();
				while (list($name,$value)=each($this->Box_row)) $this->ms[$name]=$value;
				$mas[$index]=$this->ms; $index++;
			} 
		}	}	}
	} return $mas;
}
function showBox(&$html,$mas,$div) {
    for ($i=0;$i<sizeof($mas);$i++) { if (isset($mas[$i])) {
		$this->showModel($html,$mas[$i]['text'],$div); 
	}	}
}
function showBoxById(&$html,$div="idBlockMain",$id="1") { $this->showBox($html,$this->getBoxByMark("id",$id),$div); }
function showBoxByName(&$html,$div="idBlockMain",$name="main") { $this->showBox($html,$this->getBoxByMark("name",$name),$div); }
function showBoxByCaption(&$html,$div="idBlockMain",$caption="caption") { $this->showBox($html,$this->getBoxByMark("caption",$caption),$div); }
function showModel(&$html,$model,$div) { $html=preg_replace("/(\[cell.<.*id:".$div.";[\S]*?\])/i",$model."$1\r\n",$html); }

} ?>
