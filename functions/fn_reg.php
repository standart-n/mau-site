<?php class fn_reg {

var $db;
var $id;
var $base;
var $page;
var $action;
var $prefix;
var $pattern;
var $pattern_nm;
var $pattern_tb;
var $skeleton;
var $skeleton_nm;
var $skeleton_tb;
var $table;


function check_email($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="e-mail адрес";
    if ($line!="") {
      if (strlen($line)>3) {
       if (preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $line)) {
          if ($this->emailExists($line)=="FALSE") {
                $ms['check']="TRUE";
          } else { $ms['error']="пользователь с данным e-mail адресом уже зарегистрирован"; }
       }  else { $ms['error']="не является e-mail адресом"; }
      } else { $ms['error']="слишком короткое значение"; }
    } else { $ms['error']="значение не указано"; }
    return $ms;
}

function check_account($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="лицевой счет";
    if ($line!="") {
      if (intval($line)>0) {
        if (($line>1000) && ($line<100000000000)) {
          if ($this->accountExists($line)=="FALSE") {
              if ($this->accountTrueExists($line)=="TRUE") {
                $ms['check']="TRUE";
              } else { $ms['error']="информации о данном лицевом счете нет в базе данных"; }
          } else { $ms['error']="пользователь с данным лиц. счетом уже зарегистрирован"; }
        }  else { $ms['error']="количество знаков не соответствует лиц. счету"; }
      } else { $ms['error']="не является числом"; }
    } else { $ms['error']="значение не указано"; }
    return $ms;
}

function check_password($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="пароль";
    if ($line!="") {
      if (strlen($line)>1) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="слишком длинное значение"; }
     } else { $ms['error']="слишком короткое значение"; }
    } else { $ms['error']="значение не указано"; }
    return $ms;
}

function check_confirm($psw1,$psw2){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="пароль";
      if ($psw1==$psw2) {
               $ms['check']="TRUE";
       } else { $ms['error']="пароли не совпадают"; }
    return $ms;
}

function check_street($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="улица";
    if ($line!="") {
      if (strlen($line)>1) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="слишком длинное значение"; }
     } else { $ms['error']="слишком короткое значение"; }
    } else { $ms['error']="значение не указано"; }
    return $ms;
}

function check_house($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="дом";
    if ($line!="") {
      if (strlen($line)>0) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="слишком длинное значение"; }
      } else { $ms['error']="слишком короткое значение"; }
    } else { $ms['error']="значение не указано"; }
    return $ms;
}

function check_building($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="корпус";
    if (strlen($line)<50) {
        $ms['check']="TRUE";
    } else { $ms['error']="слишком длинное значение"; }
    return $ms;
}

function check_flat($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="квартира";
    if ($line!="") {
      if (strlen($line)>0) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="слишком длинное значение"; }
      } else { $ms['error']="слишком короткое значение"; }
    } else { $ms['error']="значение не указано"; }
    return $ms;
}

function getUserById($id) {
    $this->ms=array();
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM `".$this->prefix."_dataUsers` WHERE (`id`=".$id.")";
    	$this->line_ms=$this->base->sqlSelect();
		if (isset($this->line_ms)) {	if (isset($this->line_ms['res']))	{	if ($this->line_ms['res']) {
			$this->line_row=mysql_fetch_array($this->line_ms['res']);
			$this->getRow("email|account|password|status|street|house|building|flat");
			$this->getRow("post_dt|post_d|post_t");
		}	}	}
    }	return $this->ms;
}

function getRow($line) {	$mas=explode("|",$line);
	foreach ($mas as $key) {	if (isset($this->line_row[$key])) { 
		$this->ms[$key]=$this->line_row[$key]; 	}	else { $this->ms[$key]="";	}	}
}

function getUserByAccount($occ) {
    $ms=array();
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM `".$this->prefix."_base_profiles` WHERE (`OCC`=".$occ.")";
    	$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			$line_row=mysql_fetch_array($line_ms['res']);
			if (isset($line_row['occ']))      { $ms['occ']=$line_row['occ'];                  }
			if (isset($line_row['street']))   { $ms['street']=$line_row['street'];            }
			if (isset($line_row['nom_dom']))  { $ms['nom_dom']=$line_row['nom_dom'];          }
			if (isset($line_row['nom_kvr']))  { $ms['nom_kvr']=$line_row['nom_kvr'];          }
		}	}	}
    }	return $ms;
}

function accountExists($line) {
    $show="FALSE";
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM `".$this->prefix."_dataUsers` WHERE (`account`=\"$line\")";
    	$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			while($line_row=mysql_fetch_array($line_ms['res'])) {
				$account=$line_row['account'];	if ($account==$line) { $show="TRUE"; }
			}
		}	}	}    
	}	return $show;
}

function accountTrueExists($line) {
    $show="FALSE";
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM `".$this->prefix."_base_profiles` WHERE (`OCC`=\"$line\")";
    	$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			while($line_row=mysql_fetch_array($line_ms['res'])) {
				$account=$line_row['occ'];
				if ($account==$line) { $show="TRUE"; }
			}
		}	}	}
    }	return $show;
}

function emailExists($line) {
    $show="FALSE";
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM `".$this->prefix."_dataUsers` WHERE (`email`=\"$line\")";
    	$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			while($line_row=mysql_fetch_array($line_ms['res'])) {
				$email=$line_row['email'];	if ($email==$line) { $show="TRUE"; }
			}	
		}	}	}
    }	return $show;
}

function getAutoValues($word) {
	$show="";	$ms=$this->getUserByAccount($word);
	if (isset($ms)) {	
		if (isset($ms['street'])) {	$show.=$this->fn_ajax->value('users_street','place',$ms['street']);	}
		if (isset($ms['nom_dom'])) { $show.=$this->fn_ajax->value('users_house','place',$ms['nom_dom']); }
		if (isset($ms['nom_kvr'])) { $show.=$this->fn_ajax->value('users_flat','place',$ms['nom_kvr']); }
	} return $show;
} 

function getShakeEffect($action) {
       $show="";
       $show.="$(document).ready(function () {";			
       $show.="$('#users_notice_".$action."').effect('shake',{times:1,direction:'down',distance:'5'},100);";
       $show.="});";
       return $show;			
}

function getNoticeIcon($action,$type) {
       $show="";
  	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'background','url(img/'.$type.'.png) no-repeat left center');
       return $show;
}

function getNoticeStyle($action) {
       $show="";
   	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'display','block');
   	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'float','left');
   	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'width','180px');
   	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'height','20px');
  	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'margin','0 0 0 10px');
  	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'padding','0 0 0 30px');
  	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'font-family','Verdana, Arial, Helvetica, sans-serif');
  	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'font-size','x-small');
  	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'font-weight','normal');
  	   $show.=$this->fn_ajax->editCSS('#users_notice_'.$action,'color','#872929');
       return $show;
}

} ?>
