<?php class pl_lost { 

var $de;
var $run="\r\n";
var $runn="\r\n\r\n";

function engine() {
	//if ((isset($this->de['fdb'])) && (isset($this->de['it']))) { echo 'fb'; }
    
    //$this->getCookies();
    //$script=$this->de['fn_models']->loadScript('reg');
    //$this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$script,'js');

    if ($this->de['level']=="lostpassword") {

            $style=$this->de['fn_models']->loadStyle('users_lost');
	    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');

	    $this->mdl_form=$this->de['fn_models']->loadModel('users_lost');
	    $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl_form,'users_reg');

    }

    if ($this->de['level']=="lost_check") {

	$lostage="FALSE";

    
        if (isset($_POST['users_lostemail'])) {
            $email=strval(htmlspecialchars(trim(stripslashes(strtolower($_POST['users_lostemail'])))));
            if ((isset($this->de['base'])) && (isset($this->de['db']))) {    
            	$sql="SELECT * FROM `mauric_dataUsers` WHERE (`email`=\"$email\") AND (`status`>0)";
            	$res=mysql_query($sql,$this->de['db']);
                if (isset($res)) {
                  if ($res) {
                    $row=mysql_fetch_array($res);
                    if ((isset($row['id'])) && (isset($row['password']))) {
                      $inbase_id=$row['id']; 
                      $inbase_email=$row['email'];
                      $inbase_account=$row['account'];
                      $inbase_password=$row['password'];
                      if ($inbase_id>=0) {
			 $password = rand(10000,99999);
                        $code=md5(md5($password)."deCMS");
     
			  $sql_upd="UPDATE `mauric_dataUsers` SET `password` = \"$code\" WHERE (`email`=\"$email\") AND (`status`>0)";
			  $res_upd=mysql_query($sql_upd,$this->de['db']);

			  $style=$this->de['fn_models']->loadStyle('users_lost_complete');
			  $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');

			  $this->mdl_lost_complete=$this->de['fn_models']->loadModel('users_lost_complete');
			  $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl_lost_complete,'users_reg');

			  $this->mailToUser($inbase_email,$inbase_account,$password);
			  //if ($code==$inbase_password) {
			  $lostage="TRUE";
                        //}
                      }  
                    }
                  }
                }
            }
          }
          
          
        if ($lostage=="FALSE") {

	  $style=$this->de['fn_models']->loadStyle('users_lost_notactiv');
	  $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');

	  $this->mdl_lost_notactiv=$this->de['fn_models']->loadModel('users_lost_notactiv');
	  $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl_lost_notactiv,'users_reg');
        
        }
    
    
    
    
/*    
    if ($this->de['level']=="lost_check") {
        $this->error="FALSE";
        $style=$this->de['fn_models']->loadStyle('users_lost_error');
	    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');
        $this->mdl_check=$this->de['fn_models']->loadModel('users_lost_check');

        $this->getValue("lostemail","str","none");
        
        if ($this->error=="TRUE") {
           $style=$this->de['fn_models']->loadStyle('users_reg_check');
           $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');
	       $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl_check,'users_reg_check');
    	   $style=$this->de['fn_models']->loadStyle('users_reg');
	       $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');

	       $this->mdl_reg=$this->de['fn_models']->loadModel('users_reg');
           $this->insValues("email|account|street|house|building|flat");
	       $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$this->mdl_reg,'users_reg');
        } else {
           if ($this->addUser()=="TRUE") {
               setcookie("user_lastEmail",$this->email,time()+2628000);
               $this->showModelByName("reg_complete");
               $this->mailToUser();
           }  else {
               $this->showModelByName("reg_notadd");
           }
        }
    }
*/  

    }
    
    return $this->de;
}

function insValues($ms){
    $mas=explode("|",$ms);
    foreach($mas as $key) {
        $mark="users_".$key;
        $this->de['fn_markup']->insPlaceKeyTag($this->mdl_reg,$this->$key,$mark);
    }
}

function getValue($type,$format,$space) {
        $pst="users_".$type;
        if (isset($_POST[$pst])) { $this->$type=$_POST[$pst]; } else { $this->$type=""; }
        switch ($format) {
            case 'str': $this->$type=$this->strCheck($this->$type); break;
            case 'int': $this->$type=$this->strCheck($this->$type); break;
        }
        /*
        switch ($space) {
            case 'none': $this->$type=preg_replace(" +","",$this->$type); break;
            case 'one': $this->$type=[]_replace(" +"," ",$this->$type); break;
        }
        */
        switch ($space) {
            case 'none': $this->$type=trim($this->$type); break;
            case 'one': $this->$type=trim($this->$type); break;
        }
        $this->getValid($type);
}

function clearSession($ms) {
    $mas=explode("|",$ms);
    foreach($mas as $key) {
        $mark="user_".$key;
        $_SESSION[$mark]="";
    }
}

function getValid($type) {
      $func="check_".$type;
      switch ($type) {
        case 'confirm': $this->type_valid=$this->de['fn_reg']->$func($this->$type,$this->password); break;
        default:        $this->type_valid=$this->de['fn_reg']->$func($this->$type);                 break;
      }
      if ($this->type_valid['check']=="FALSE") {
          $this->check_error($this->type_valid);
          $this->error="TRUE";
      }  else {
         if ($type=="email") {
            setcookie("user_lastEmail",$this->email,time()+2628000);
         }
      }
}

function check_error($ms) {
     $this->mdl_error=$this->de['fn_models']->loadModel('users_reg_error');
     $this->de['fn_markup']->insPlaceKeyTag($this->mdl_error,$ms['field'],'users_reg_error_type');
     $this->de['fn_markup']->insPlaceKeyTag($this->mdl_error,$ms['error'],'users_reg_error_comment');
     $this->de['fn_markup']->insBeforeCloseTag($this->mdl_check,$this->mdl_error,'users_reg_error');
}

function addUser() {
    $show="FALSE";
    $this->password_code=md5(md5($this->password)."deCMS");
    if ((isset($this->de['base'])) && (isset($this->de['db']))) {    
    	$sql="INSERT INTO `mauric_dataUsers` 
                    (email,password,account,street,house,building,flat,status,post_dt,post_d,post_t)
                        values (\"$this->email\",\"$this->password_code\",\"$this->account\",
                                \"$this->street\",\"$this->house\",\"$this->building\",\"$this->flat\",
                                0,NOW(),NOW(),NOW())";
    	$res=mysql_query($sql,$this->de['db']);
        if (isset($res)) {
            if ($res) {
                $this->user_id=mysql_insert_id();
                if ($this->user_id>=0) {
                    $show="TRUE";
                }
            }
        }
    }
    return $show;
}

function activationUserById($id) {
    $show="FALSE";
    if ((isset($this->de['base'])) && (isset($this->de['db']))) {    
    	$sql="UPDATE `mauric_dataUsers` set `status`=1 WHERE (`id`=".$id.")";
    	$res=mysql_query($sql,$this->de['db']);
        if (isset($res)) {
            if ($res) {
                $show="TRUE";
            }
        }
    }
    return $show;
}

function getCookies() {
    if (isset($_COOKIE['user'])) {
      if ($_COOKIE['user']=="TRUE") {
        if ((isset($_COOKIE['user_id'])) && (isset($_COOKIE['user_email'])) && (isset($_COOKIE['user_account'])) && (isset($_COOKIE['user_password']))) {
            $cookie_id=$this->intCheck($_COOKIE['user_id']);
            $cookie_acc=$this->strCheck($_COOKIE['user_account']);
            $cookie_email=$this->strCheck($_COOKIE['user_email']);
            $cookie_account=$this->strCheck($_COOKIE['user_account']);
            $cookie_password=$this->strCheck($_COOKIE['user_password']);
            $user_ms=$this->de['fn_reg']->getUserById($cookie_id);
            if ((isset($user_ms['email'])) && (isset($user_ms['account'])) && (isset($user_ms['password'])) && (isset($user_ms['status']))) {
               $status=$user_ms['status'];
               if ($status==1) {
                 $code_email=md5(md5($user_ms['email'])."deCode");
                 $code_account=md5(md5($user_ms['account'])."deCode");
                 $code_password=md5(md5($user_ms['password'])."deCode");
                 if (($code_email==$cookie_email) && ($code_account==$cookie_account) && ($code_password==$cookie_password)) {
                        $_SESSION['user_enter']="TRUE";
                        $_SESSION['user_id']=$cookie_id;
                        $_SESSION['user_acc']=$user_ms['account'];
                        $_SESSION['user_email']=(md5(md5($user_ms['email'])."deCode"));
                        $_SESSION['user_account']=(md5(md5($user_ms['account'])."deCode"));
                        $_SESSION['user_password']=(md5(md5($user_ms['password'])."deCode"));
                 }
               }
            }
        }
      }
    }
}

function strCheck($line) {
    $ret=strval(htmlspecialchars(trim(stripslashes(strtolower($line)))));
    return $ret;
}

function intCheck($line) {
    $ret=intval(htmlspecialchars(trim(stripslashes($line))));
    return $ret;
}

function showModelByName($name) {
	    $style=$this->de['fn_models']->loadStyle("users_".$name);
	    $this->de['fn_markup']->insBeforeCloseTag($this->de['html'],$style,'css');
	    $mdl=$this->de['fn_models']->loadModel("users_".$name);
	    $this->de['fn_markup']->insPlaceKeyTag($this->de['html'],$mdl,"users_".$name);
}

function mailToUser($email,$account,$password) {
//$code=md5(md5(date("j").$this->user_id.$this->email."deCMS"));
//$email=$this->email;
//����� ������������ ���� ������� ������, ��������� �� ������:
//http://www.mauric.ru/de.".$code.".".$this->user_id.".activation\n
//$subject="�������������� ������";
$subject="Password recovery";
$message="������������!\n 
�� ��������������� �������� �������������� ������ �� ����� �������������-���������� ������, www.mauric.ru\n
��� ������� ����: ".$account."
��� ����� ������: ".$password."\n
� ���������,\n ������������� �������������� ����������� ����������\n ��������-�������������� �����, www.mauric.ru";
mail($email,$subject,$message,"From:registration@mauric.ru");
}

} ?>