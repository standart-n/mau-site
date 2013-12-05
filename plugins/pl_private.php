<?php class pl_private { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
    if ($this->de['level']=="private") {
        $script=$this->de['fn_models']->loadScript('private');
        $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$script,'js');
        $sign="FALSE";
        if ((isset($_SESSION['user_enter'])) && (isset($_SESSION['user_id']))) {
            if (($_SESSION['user_enter']=="TRUE") && ($_SESSION['user_id']>0)) {
                $sign="TRUE";
                $user_id=$_SESSION['user_id'];
            }
        }
        if ($sign=="TRUE") {
            $user_ms=$this->de['fn_reg']->getUserById($user_id);
            if (isset($user_ms)) {
                $this->account=$user_ms['account'];
                $this->adress=$this->de['fn_private']->getAdress($user_ms);
                $this->reg_date=$this->de['fn_private']->getRegDate($user_ms);
                $style=$this->de['fn_models']->loadStyle('users_private');
                $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');
                $this->mdl_pr=$this->de['fn_models']->loadModel('users_private');
                $this->insUserInfo("account|adress|reg_date");
                $this->getCountersById($this->mdl_pr,$user_id,$this->account);
                $this->getHistoryById($this->mdl_pr,$user_id,$this->account);
                $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl_pr,'users_private');
            }
       } else {
	     header('Location:http://www.izhmfc.ru/de.reg');  
       }
    }
    return $this->de;
}

function insUserInfo($ms) {
    $mas=explode("|",$ms);
    foreach($mas as $key) {
        $mark="users_".$key."_value";
        $this->de['fn_markup']->insPlaceKeyTag($this->mdl_pr,$this->$key,$mark);
    }
}

function getCountersById(&$mdl,$id,$account) { $sql=""; $this->i=0;
    if ((isset($this->de['fdb'])) && (isset($this->de['it']))) { 
			$sql.="SELECT de.d\$uuid as ID, de.vid as SERV, de.caption as SERIAL ";
			$sql.="FROM accounts ac ";
			$sql.="LEFT JOIN device de on ac.d\$uuid=de.account_d\$uuid ";
			$sql.="WHERE ac.caption='".$account."' and de.status=0 ";
        	$this->res=ibase_query($this->de['it'],$sql);
            if (isset($this->res)) {
                if ($this->res) {
                  while ($this->row=ibase_fetch_object($this->res)) { $sql_2=""; $this->i++;
					$sql_2.="SELECT ";
					$sql_2.="FIRST 1 ";
					$sql_2.="ad.val as VAL, ";
					$sql_2.="ad.insertdt as POSTDT ";
					$sql_2.="FROM account_data ad ";
					$sql_2.="WHERE ad.device_d\$uuid='".$this->row->ID."' and ad.status=0 ";
					$sql_2.="ORDER by ad.insertdt DESC ";
					$this->sql_2=$sql_2;
                	$this->res_2=ibase_query($this->de['it'],$sql_2);
                	if (isset($this->res_2)) { if ($this->res_2) {
						$this->row_2=ibase_fetch_object($this->res_2);
						$this->mdl_counter=$this->de['fn_models']->loadModel('users_counter');
						$this->insUserData("id|serv|serial|value|postdt");
						$this->de['fn_markup']->insBeforeCloseTag($mdl,$this->mdl_counter,'users_private_counters');
					}	}
                  }
                }
            }
    }
}

function getHistoryById(&$mdl,$id,$account) { $sql=""; $this->i=0;
    if ((isset($this->de['fdb'])) && (isset($this->de['it']))) { 
			$sql.="SELECT de.d\$uuid as ID, de.vid as SERV, de.caption as SERIAL ";
			$sql.="FROM accounts ac ";
			$sql.="LEFT JOIN device de on ac.d\$uuid=de.account_d\$uuid ";
			$sql.="WHERE ac.caption='".$account."' ";
        	$this->res=ibase_query($this->de['it'],$sql);
            if (isset($this->res)) {
                if ($this->res) {
                  while ($this->row=ibase_fetch_object($this->res)) { $sql_2=""; $this->i++;
					$sql_2.="SELECT ";
					$sql_2.="ad.val as VAL, ";
					$sql_2.="ad.insertdt as POSTDT ";
					$sql_2.="FROM account_data ad ";
					$sql_2.="WHERE ad.device_d\$uuid='".$this->row->ID."' ";
					$sql_2.="ORDER by ad.insertdt DESC ";
					$this->sql_2=$sql_2;
                	$this->res_2=ibase_query($this->de['it'],$sql_2);
                	if (isset($this->res_2)) { if ($this->res_2) {
						$this->row_2=ibase_fetch_object($this->res_2);
						if (isset($this->row_2)) { if (isset($this->row_2->VAL)) {  
						if (intval($this->row_2->VAL)>0) {
						  $this->mdl_counter=$this->de['fn_models']->loadModel('users_history');
						  $this->insUserData("id|serv|serial|value|postdt");
						  $this->de['fn_markup']->insBeforeCloseTag($mdl,$this->mdl_counter,'users_private_history');
						}
						} }
					}	}
                  }
                }
            }
    }
}


function insUserData($ms) {
	foreach (explode("|",$ms) as $key) {
		$tag="users_counter_".$key."";
		switch ($key) {
			case "id":
				if (isset($this->row->ID)) {
					$v=$this->row->ID;
				} else { $v=$this->i; }
			break;
			case "serv":
				if (isset($this->row->SERV)) {
					$v=$this->row->SERV;
				} else { $v="-"; }
			break;
			case "serial":
				if (isset($this->row->SERIAL)) {
					$v=$this->row->SERIAL;
				} else { $v="-"; }
			break;
			case "value":
				if (isset($this->row_2->VAL)) {
					$v=$this->row_2->VAL;
				} else { $v="-"; }
			break;
			case "postdt":
				if (isset($this->row_2->POSTDT)) {
					$v=$this->de['fn_private']->getDateRtn($this->row_2->POSTDT);
					//$v=$this->de['fn_markup']->getRegDate($this->row_2->POSTDT);
				} else { $v="-"; }
			break;
		}		
        $this->de['fn_markup']->insPlaceKeyTag($this->mdl_counter,$v,$tag);
	}
	
}


} ?>
