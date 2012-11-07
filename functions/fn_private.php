<?php class fn_private {

var $db;
var $id;

function getCounterInfoById($id) { $sql="";
    $this->ms=array();
   	if ((isset($this->fdb)) && (isset($this->it))) {
		$this->base->fdb=$this->fdb;
		$this->base->it=$this->it;
		$sql.="select de.d\$uuid as ID, de.vid as SERV, de.caption as SERIAL, de.account_d\$uuid as PROFILE_ID ";
		$sql.="from device de ";
		$sql.="where de.d\$uuid='".$id."' ";
		$this->base->sql=$sql;
		$this->line_ms=$this->base->fdbSelect();
		if (isset($this->line_ms)) {	if (isset($this->line_ms['res']))	{	if ($this->line_ms['res']) {
			$this->row=ibase_fetch_object($this->line_ms['res']);
			//$this->row->SQL=$sql;
			$this->getRow(strtoupper("id|serv|serial|profile_id|sql"));
		}	}	}
    }	return $this->ms;
}

function getRow($line) { $mas=explode("|",$line);
	foreach ($mas as $key) { 
		if (isset($this->row->$key)) { 
			$this->ms[strtolower($key)]=$this->row->$key;	
		} else { 
			$this->ms[strtolower($key)]="";
		}
	}
}

function getServiceName(&$name) {
    switch ($name){
		case "хвод": $name="Холодная вода"; break;
		case "гвод": $name="Горячая вода"; break;
		case "элек": $name="Электроэнергия"; break;
		case "отоп": $name="Теплоэнергия"; break;
		case "пгаз": $name="Газоснабжение"; break;
    }	return $name;
}

function getLastValue($id) { $sql="";
   	if ((isset($this->fdb)) && (isset($this->it))) {
		$this->base->fdb=$this->fdb;
		$this->base->it=$this->it;
		$sql.="select ";
		$sql.="first 1 ";
		$sql.="ad.val as VAL ";
		$sql.="from account_data ad ";
		$sql.="where (ad.device_d\$uuid='".$id."') ";
		$sql.="order by ad.insertdt desc ";
		$this->base->sql=$sql; 
		$line_ms=$this->base->fdbSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
        			$row=ibase_fetch_object($line_ms['res']);
                    if (isset($row->VAL)) { $ms['value']=$row->VAL; }
		}	}	}
    }
    if (isset($ms['value'])) { $last=$ms['value']; } else { $last=10000; }
    return $last;
}

function getDialogCode($ms) {
    $show="";
    $show.="<table cellpadding=\"2\" cellspacing=\"0\" border=\"0\">";
    $show.=$this->getDialogLine("ID",substr($ms['id'],0,4));
    $show.=$this->getDialogLine("Услуга",$this->getServiceName($ms['serv']));
    $show.=$this->getDialogLine("Номер",$ms['serial']);
    $show.=$this->showDialogNewValue($ms['id']);
    $show.="</table>";
    return $show;
}

function getDialogLine($caption,$value) {
    $show="";
    $show.="<tr><td width=\"80px\">";
    $show.="<div class=\"private_dlg_label\">".$caption."</div>";
    $show.="</td><td>";
    $show.="<div class=\"private_dlg_value\">".$value."</div>";
    $show.="</td></tr>";
    return $show;
}

function getLastPacket() {
    $packet=1;
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
		$this->base->sql="SELECT * FROM `mauric_base_packets` 
							WHERE (1=1) 
							GROUP by id
							ORDER by id DESC"; 
		$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			$line_row=mysql_fetch_array($line_ms['res']);
			if (isset($line_row['id'])) { $ms['id']=$line_row['id']; }
		} } }
    }
    if (isset($ms['id'])) { if (($ms['id'])>0) { $packet=$ms['id']; } }
    return $packet;
}

function getNowDate() {
    $day=date("d");	$month=date("m");	$year=date("Y");
    $now_date=$day.".".$month.".".$year;	return $now_date;
}

function getNewValue($id,$value) {
    $ma=array();
    $notice="";
    $query="FALSE";
    $last=$this->getLastValue($id);
    $user=$_SESSION['user_id'];
    $zero=0;
    $sql="";
    $s="";
    $doubleDay=false;
    if ((intval($value))>0) {
        //if ((intval($value))>(intval($last))) {
   	        if ((isset($this->fdb)) && (isset($this->it))) {
				$s.="SELECT count(VAL) as LINES ";
				$s.="FROM account_data ";
				$s.="WHERE (1=1) ";
				$s.="AND (device_d\$uuid='".$id."')  ";
				$s.="AND (cur_date=current_date)  ";
				$q=ibase_query($this->it,$s);
				if (isset($q)) { if ($q) {
					$r=ibase_fetch_object($q);
					if (isset($r)) { 
						if (isset($r->LINES)) {
							if ($r->LINES>0) {
								$doubleDay=true;
							}
						}
					}
				} }				
					if (!$doubleDay) {
						$sql.="insert into account_data ";
						$sql.="(val,user_id,insertdt,cur_date,status,updatesession_id,device_d\$uuid,d\$uuid) ";
						$sql.="values ";
						$sql.="(".$value.",0,current_timestamp,current_date,0,0,'".$id."',UUID_TO_CHAR(GEN_UUID())) ";
					} else {
						$sql.="UPDATE account_data SET ";
						$sql.="val=".$value.", ";
						$sql.="insertdt=current_timestamp ";
						$sql.="WHERE (1=1) ";
						$sql.="AND (user_id=0) ";
						$sql.="AND (device_d\$uuid='".$id."')  ";
						$sql.="AND (cur_date=current_date)  ";
					}
						$res=ibase_query($this->it,$sql);
						ibase_commit($this->it);
						$this->it=ibase_trans(IBASE_WRITE+IBASE_COMMITTED+IBASE_REC_VERSION+IBASE_NOWAIT,$this->fdb);
                if (isset($res)) {
                    if ($res) {
                     $notice="Значение обновлено!";
                     $query="TRUE";                                                
                    } else { $notice="Запрос не выполнен"; }
                } else { $notice="Запрос не выполнен"; }
            }  else { $notice="Возникли проблемы с подключением к базе данных"; }
        //} else { $notice="Новое значение не может быть меньше старого"; }
    } else { $notice="Новое значение должно быть больше нуля"; }
    $ms['notice']="<div class=\"private_dlg_notice\">".$notice."</div>";
    $ms['query']=$query;
    return $ms;
}

function showDialogNewValue($id) {
    $last=$this->getLastValue($id);
    $show="";
    $show.="<tr height=\"10px\"><td></td></tr>";
    $show.="<tr><td colspan=\"2\">";
    $show.="Введите новое значение:";
    $show.="</td></tr>";
    $show.="<tr><td colspan=\"2\">";
    $show.="<input id=\"private_dlg_value\" type=\"text\" value=\"".$last."\">";
    $show.="<input id=\"private_dlg_id\" type=\"hidden\" value=\"".$id."\">";
    $show.="<span class=\"private_link\"><a id=\"private_ins_newValue\" href=\"#de\">сохранить</a></span>";
    $show.="</td></tr>";
    return  $show;    
}

function getRegDate($ms) {
    $reg_date="";
    if (isset($ms['post_d'])) {	$reg_date=$ms['post_d'];	$this->getDate($reg_date);	}
    return $reg_date;
}

function getDate(&$date) {
    $ms=explode("-",$date);	
    $year=$ms[0];	$month=$ms[1];	$day=$ms[2];
    $date=$day.".".$month.".".$year;
}

function getDateRtn($date) {
    $ms=explode("-",substr($date,0,10));	
    $year=$ms[0];	$month=$ms[1];	$day=$ms[2];
    return $day.".".$month.".".$year; 
}

function getAdress($ms) {
    $adress="";
    if (((isset($ms['street'])) && (($ms['street'])!="")))  { $adress.=$ms['street'];  }
    if (((isset($ms['house'])) && (($ms['house'])!="")))    { $adress.=", д.".$ms['house'];  }
    if (((isset($ms['building'])) && (($ms['building'])!=""))) { $adress.=", к.".$ms['building'];  }
    if (((isset($ms['flat'])) && (($ms['flat'])!="")))     { $adress.=", кв.".$ms['flat'];  }
    return $adress;
}

} ?>
