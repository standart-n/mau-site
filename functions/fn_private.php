<?php class fn_private {

var $db;
var $id;

function getCounterInfoById($id) {
    $this->ms=array();
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
		$this->base->sql="SELECT * FROM `".$this->prefix."_base_counters` WHERE (`id`=".$id.")";
		$this->line_ms=$this->base->sqlSelect();
		if (isset($this->line_ms)) {	if (isset($this->line_ms['res']))	{	if ($this->line_ms['res']) {
			$this->line_row=mysql_fetch_array($this->line_ms['res']);
			$this->getRow("id|serv|serial|profile_id");
		}	}	}
    }	return $this->ms;
}

function getRow($line) { $mas=explode("|",$line);
	foreach ($mas as $key) { if (isset($this->line_row[$key])) { 
		$this->ms[$key]=$this->line_row[$key];	} else { $this->ms[$key]=""; }	}
}

function getServiceName(&$name) {
    switch ($name){
		case "����": $name="�������� ����"; break;
		case "����": $name="������� ����"; break;
		case "����": $name="��������������"; break;
		case "����": $name="������������"; break;
		case "����": $name="�������������"; break;
    }	return $name;
}

function getLastValue($id) {
   	if ((isset($this->db)) && (isset($this->base))) {
		$this->base->db=$this->db;
		$this->base->sql="SELECT * FROM `".$this->prefix."_base_values` 
							WHERE (`counter_id`=".$id.") 
							ORDER by postdt DESC"; 
		$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
        			$line_row=mysql_fetch_array($line_ms['res']);
                    if (isset($line_row['id'])) { $ms['id']=$line_row['id']; }
                    if (isset($line_row['value'])) { $ms['value']=$line_row['value']; }
		}	}	}
    }
    if (isset($ms['value'])) { $last=$ms['value']; } else { $last="123"; }
    return $last;
}

function getDialogCode($ms) {
    $show="";
    $show.="<table cellpadding=\"2\" cellspacing=\"0\" border=\"0\">";
    $show.=$this->getDialogLine("ID",$ms['id']);
    $show.=$this->getDialogLine("������",$this->getServiceName($ms['serv']));
    $show.=$this->getDialogLine("�����",$ms['serial']);
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
		$this->base->sql="SELECT * FROM `".$this->prefix."_base_packets` 
							WHERE (1=1) 
							GROUP by id
							ORDER by id DESC"; 
		$line_ms=$this->base->sqlSelect();
		if (isset($line_ms)) {	if (isset($line_ms['res']))	{	if ($line_ms['res']) {
			$line_row=mysql_fetch_array($line_ms['res']);
			if (isset($line_row['id'])) { $ms['id']=$line_row['id']; }
		}	}	}
    }
    if (isset($ms['id'])) {	if (($ms['id'])>0) {	$packet=$ms['id'];	}	}
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
    $packet=$this->getLastPacket();
    $user=$_SESSION['user_id'];
    $zero=0;
    if ((intval($value))>0) {
        if ((intval($value))>(intval($last))) {
   	        if ((isset($this->db)) && (isset($this->base))) {
                $sql="INSERT INTO `".$this->prefix."_base_values` (counter_id,value,postdt) 
                      VALUES (\"$id\",\"$value\",NOW())";
        	    $res=mysql_query($sql,$this->db);
                if (isset($res)) {
                    if ($res) {
                     $notice="�������� ���������!";
                     $query="TRUE";                                                
                    } else { $notice="������ �� ��������"; }
                } else { $notice="������ �� ��������"; }
            }  else { $notice="�������� �������� � ������������ � ���� ������"; }
        } else { $notice="����� �������� �� ����� ���� ������ �������"; }
    } else { $notice="����� �������� ������ ���� ������ ����"; }
    $ms['notice']="<div class=\"private_dlg_notice\">".$notice."</div>";
    $ms['query']=$query;
    return $ms;
}

function showDialogNewValue($id) {
    $last=$this->getLastValue($id);
    $show="";
    $show.="<tr height=\"10px\"><td></td></tr>";
    $show.="<tr><td colspan=\"2\">";
    $show.="������� ����� ��������:";
    $show.="</td></tr>";
    $show.="<tr><td colspan=\"2\">";
    $show.="<input id=\"private_dlg_value\" type=\"text\" value=\"".$last."\">";
    $show.="<input id=\"private_dlg_id\" type=\"hidden\" value=\"".$id."\">";
    $show.="<span class=\"private_link\"><a id=\"private_ins_newValue\" href=\"#de\">���������</a></span>";
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

function getAdress($ms) {
    $adress="";
    if (((isset($ms['street'])) && (($ms['street'])!="")))  { $adress.=$ms['street'];  }
    if (((isset($ms['house'])) && (($ms['house'])!="")))    { $adress.=", �.".$ms['house'];  }
    if (((isset($ms['building'])) && (($ms['building'])!=""))) { $adress.=", �.".$ms['building'];  }
    if (((isset($ms['flat'])) && (($ms['flat'])!="")))     { $adress.=", ��.".$ms['flat'];  }
    return $adress;
}

} ?>
