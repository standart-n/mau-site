<?php class pl_tsj { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";
var $mdl="";

function engine() {
    $script=$this->de['fn_models']->loadScript('tsj');
    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$script,'js');
	$style=$this->de['fn_models']->loadStyle('tsj');
	$this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');
    if ($this->de['level']=="tsj") {
		$this->mdl.='<div class="stCaption">Выберите Вашу управляющую компанию или ТСЖ</div>';
		$this->mdl.='<div id="stSearch"><input id="stSearchName" value="Введите название..." type="text" size="20" maxlenght="20"></div>';
		$this->mdl.='<div id="stSelect">';
		$sql="SELECT * FROM `".$this->de['prefix']."_spInfo` WHERE (1=1) ORDER by caption ASC";
		$res=mysql_query($sql,$this->de['db']);
		if (isset($res)) { if ($res) {
			while($row=mysql_fetch_object($res)) {
				if (isset($row->id)) { if (isset($row->caption)) { if ($row->caption!="") {
					$code=intval($row->code); 
					$caption=strval($row->caption); 
					$this->mdl.='<div class="stLine" tsj_code="'.$code.'">'.$caption.'</div>';
				} } }
			}
		} }
		$this->mdl.='</div>';
		$this->mdl.='<div id="stResults">';
		$this->mdl.='</div>';
		$this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl,'tsj');
	}
    return $this->de;
}

} ?>