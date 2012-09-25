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
                $this->getCountersById($this->mdl_pr,$user_id);
                $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl_pr,'users_private');
            }
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

function getCountersById(&$mdl,$id) {
    if ((isset($this->de['base'])) && (isset($this->de['db']))) {    
        $sql="SELECT 
                users.email as 'email', 
                profiles.OCC as 'ooc', 
                counters.id as 'id', 
                counters.serv as 'serv', 
                counters.serial as 'serial', 
                vals.value as 'value',
                vals.postdt as 'date'
            FROM  `mauric_dataUsers` users
            LEFT JOIN mauric_base_profiles profiles ON ( profiles.OCC = users.account ) 
            LEFT JOIN mauric_base_counters counters ON ( profiles.id = counters.profile_id ) 
            LEFT JOIN mauric_base_values vals ON ( vals.counter_id = counters.id ) 
            WHERE (users.id=".$id.") GROUP by vals.counter_id ORDER by vals.id DESC";
        	$this->res=mysql_query($sql,$this->de['db']);
            if (isset($this->res)) {
                if ($this->res) {
                  while ($this->row=mysql_fetch_array($this->res)) {
                    $sql_2="SELECT * FROM  `mauric_base_values`
                            WHERE (counter_id=".$this->row['id'].") GROUP by postdt, value ORDER by value DESC";
                	$this->res_2=mysql_query($sql_2,$this->de['db']);
                	if (isset($this->res_2)) { if ($this->res_2) {
						$this->row_2=mysql_fetch_array($this->res_2);
						$this->mdl_counter=$this->de['fn_models']->loadModel('users_counter');
						$this->insUserData("id|serv|serial|value|postdt");
						$this->de['fn_markup']->insBeforeCloseTag($mdl,$this->mdl_counter,'users_private_counters');
					}	}
                  }
                }
            }
    }
}

function insUserData($ms) {
    $mas=explode("|",$ms);
    foreach($mas as $key) {
        $mark="users_counter_".$key;
        if (($key!="value") && ($key!="postdt")) {
            if (isset($this->row[$key])) {
                $value=$this->row[$key];
                if ($key=="date") { $this->de['fn_private']->getDate($value); }
                if ($key=="serv") { $this->de['fn_private']->getServiceName($value); }
            }
        } else {
            if (isset($this->row_2[$key])) {
                $value=$this->row_2[$key];
                if ($key=="postdt") { $this->de['fn_private']->getDate($value); }
            }
        }
        $this->de['fn_markup']->insPlaceKeyTag($this->mdl_counter,$value,$mark);
    }
}

} ?>
