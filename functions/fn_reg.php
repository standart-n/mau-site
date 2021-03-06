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
    $ms['field']="e-mail �����";
    if ($line!="") {
      if (strlen($line)>3) {
       if (preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $line)) {
          if ($this->emailExists($line)=="FALSE") {
                $ms['check']="TRUE";
          } else { $ms['error']="������������ � ������ e-mail ������� ��� ���������������"; }
       }  else { $ms['error']="�� �������� e-mail �������"; }
      } else { $ms['error']="������� �������� ��������"; }
    } else { $ms['error']="�������� �� �������"; }
    return $ms;
}

function check_account($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="������� ����";
    if ($line!="") {
      if (intval($line)>0) {
        if (($line>1000) && ($line<100000000000)) {
          if ($this->accountExists($line)=="FALSE") {
              if ($this->accountTrueExists($line)=="TRUE") {
                $ms['check']="TRUE";
              } else { $ms['error']="���������� � ������ ������� ����� ��� � ���� ������"; }
          } else { $ms['error']="������������ � ������ ���. ������ ��� ���������������"; }
        }  else { $ms['error']="���������� ������ �� ������������� ���. �����"; }
      } else { $ms['error']="�� �������� ������"; }
    } else { $ms['error']="�������� �� �������"; }
    return $ms;
}

function check_password($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="������";
    if ($line!="") {
      if (strlen($line)>1) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="������� ������� ��������"; }
     } else { $ms['error']="������� �������� ��������"; }
    } else { $ms['error']="�������� �� �������"; }
    return $ms;
}

function check_confirm($psw1,$psw2){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="������";
      if ($psw1==$psw2) {
               $ms['check']="TRUE";
       } else { $ms['error']="������ �� ���������"; }
    return $ms;
}

function check_street($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="�����";
    //if ($line!="") {
      if (strlen($line)>1) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="������� ������� ��������"; }
     } else { $ms['error']="������� �������� ��������"; }
    //} else { $ms['error']="�������� �� �������"; }
    $ms['check']="TRUE";
    return $ms;
}

function check_house($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="���";
    if ($line!="") {
      if (strlen($line)>0) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="������� ������� ��������"; }
      } else { $ms['error']="������� �������� ��������"; }
    } else { $ms['error']="�������� �� �������"; }
    $ms['check']="TRUE";
    return $ms;
}

function check_building($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="������";
    if (strlen($line)<50) {
        $ms['check']="TRUE";
    } else { $ms['error']="������� ������� ��������"; }
    $ms['check']="TRUE";
    return $ms;
}

function check_flat($line){
    $ms=array();
    $ms['check']="FALSE";
    $ms['field']="��������";
    if ($line!="") {
      if (strlen($line)>0) {
        if (strlen($line)<50) {
                $ms['check']="TRUE";
        } else { $ms['error']="������� ������� ��������"; }
      } else { $ms['error']="������� �������� ��������"; }
    } else { $ms['error']="�������� �� �������"; }
    $ms['check']="TRUE";
    return $ms;
}

function getUserById($id) {
    $this->ms=array();
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM `mauric_dataUsers` WHERE (`id`=".$id.")";
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

function getUserByAccount($occ) { $s="";
    $ms=array();
   	if ((isset($this->fdb)) && (isset($this->it))) {
		$this->base->fdb=$this->fdb;
		$this->base->it=$this->it;        
        $s.="SELECT ";
		$s.="ac.caption as OCC, ac.apartment as NOM_KVR, ";
		$s.="bu.street as STREET, bu.nomer as NOM_DOM ";
		$s.="FROM ACCOUNTS ac ";
		$s.="LEFT JOIN buildings bu on (bu.d\$uuid=ac.building_d\$uuid) ";
		$s.="WHERE (CAPTION='".$occ."') ";
		$this->base->sql=$s;        
    	$line_ms=$this->base->fdbSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			$row=ibase_fetch_object($line_ms['res']);
			if (isset($row->OCC))      { $ms['occ']=$row->OCC;                  }
			if (isset($row->STREET))   { $ms['street']=$row->STREET;            }
			if (isset($row->NOM_DOM))  { $ms['nom_dom']=$row->NOM_DOM;          }
			if (isset($row->NOM_KVR))  { $ms['nom_kvr']=$row->NOM_KVR;          }
		}	}	}
    }	return $ms;
}

function accountExists($line) {
    $show="FALSE";
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM `mauric_dataUsers` WHERE (account='".$line."') AND (status>0)";
    	$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			while($line_row=mysql_fetch_array($line_ms['res'])) {
				$account=$line_row['account'];	if ($account==$line) { $show="TRUE"; }
			}
		}	}	}    
	}	return $show;
}

function accountTrueExists($line) {
	$line=trim($line);
    $show="FALSE";
   	if ((isset($this->fdb)) && (isset($this->it))) {
		$this->base->it=$this->it;
		$this->base->fdb=$this->fdb;
        $this->base->sql="SELECT * FROM ACCOUNTS WHERE (CAPTION='".$line."') AND (STATUS=0)";
    	$line_ms=$this->base->fdbSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			while($row=ibase_fetch_object($line_ms['res'])) {
				$account=$row->CAPTION;
				if ($account==$line) { 
					$show="TRUE"; 
				}
			}
		}	}	}
    }	
    return $show;
}

function emailExists($line) {
    $show="FALSE";
   	if ((isset($this->db)) && (isset($this->base))) {
        $sql="DELETE FROM mauric_dataUsers WHERE (email='".$line."') AND (status=0)";
		mysql_query($sql,$this->db);
		$this->base->db=$this->db;
        $this->base->sql="SELECT * FROM mauric_dataUsers WHERE (email='".$line."') AND (status>0)";
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