<?php
    session_start();
	include_once('../class/class_base.php');
	include_once('../functions/fn_ajax.php');
	include_once('../functions/fn_js.php');

	foreach (explode("|","id|action|code|search|inn|email") as $key) {
		if (isset($_GET[$key])) { $$key=trim(strval($_GET[$key])); } else { $$key=""; }
	}

	$base=new base;
	$fn_ajax=new fn_ajax;

	$base->getBaseFromAdmin();
	$db=				$base->db;
	$prefix=			$base->prefix;

    switch ($action) {
    case 'saveInn' :
		if ((isset($inn)) && (isset($code))) { $mdl=""; $i=0;
			if (($inn!="") && ($code!="")) {
				$sql="UPDATE `".$prefix."_spInfo` SET chanel=\"$inn\" WHERE (`code`=\"$code\")";
				$res=mysql_query($sql,$db);
			}
		}
    break;
    case 'saveEmail' :
		if ((isset($email)) && (isset($code))) { $mdl=""; $i=0;
			if (($email!="") && ($code!="")) {
				$sql="UPDATE `".$prefix."_spInfo` SET email=\"$email\" WHERE (`code`=\"$code\")";
				$res=mysql_query($sql,$db);
			}
		}
    break;
    case 'clearInn' :
		if (isset($code)) { $mdl=""; $i=0;
			if ($code!="") {
				$sql="UPDATE `".$prefix."_spInfo` SET chanel=\"\" WHERE (`code`=\"$code\")";
				$res=mysql_query($sql,$db);
			}
		}
    break;
    case 'clearEmail' :
		if (isset($code)) { $mdl=""; $i=0;
			if ($code!="") {
				$sql="UPDATE `".$prefix."_spInfo` SET email=\"\" WHERE (`code`=\"$code\")";
				$res=mysql_query($sql,$db);
			}
		}
    break;
    case 'search' :
		if (isset($search)) { $mdl=""; $i=0;
		$sql="SELECT * FROM `".$prefix."_spInfo` WHERE (`caption` LIKE '%".$search."%') ORDER by caption ASC";
		$res=mysql_query($sql,$db);
		if (isset($res)) { if ($res) {
			while($row=mysql_fetch_object($res)) {
				if (isset($row->id)) { if (isset($row->caption)) { if ($row->caption!="") {
					$code=intval($row->code); 
					$caption=strval($row->caption); 
					$mdl.='<div class="stLine" tsj_code="'.$code.'">'.$caption.'</div>';
					$i++;
				} } }
			}
			echo $fn_ajax->innerHTML('stSelect','place',$mdl);
			echo $fn_ajax->innerHTML('stResults','place','');
            //echo "autoHeight();";
            /*echo "$('#Content').css({'height':'auto'});";
            echo "$('#ContentPrimary').css({'height':'auto'});";
            echo "$('#ContentSide').css({'height':'auto'});";*/
		} }
		}
    break;
    case 'click' :
		if (isset($code)) { $mdl=""; $i=0; $ready=TRUE;
		$sql="SELECT * FROM `".$prefix."_spInfo` WHERE (`code`=\"$code\")";
		$res=mysql_query($sql,$db);
		if (isset($res)) { if ($res) {
			$row=mysql_fetch_object($res);
				if (isset($row->id)) { if (isset($row->caption)) { if ($row->caption!="") {
					foreach (explode("|","caption|chanel|adres|regnum|factadres|ruk|fax|tel|email|web") as $key) {
						$$key=trim(strval($row->$key));
					}
						$mdl.='<div class="stCaption">Вы выбрали:</div>';
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField">название:</div>';
						$mdl.='<div class="stValue">'.$caption.'</div>';
						$mdl.='<input value="'.$code.'" id="stCode" type="hidden">';
						$mdl.='</div>';
					if ($ruk!="") {
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField">руководитель:</div>';
						$mdl.='<div class="stValue">'.$ruk.'</div>';
						$mdl.='</div>';
					}
					if ($adres!="") {
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField">адрес:</div>';
						$mdl.='<div class="stValue">'.$adres.'</div>';
						$mdl.='</div>';
					}

					if ($email!="") {
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField">email:</div>';
						$mdl.='<div class="stValue">';
						$mdl.=$email;
						$mdl.='<a class="stLink" href="#de" id="stClearEmail">изменить</a>';
						$mdl.='</div>';
						$mdl.='</div>';
					} else {
						$ready=FALSE;
						$mdl.='<div class="stCaption" style="color:#cc0000;">Эл. адрес не указан!</div>';
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField">Введите email:</div>';
						$mdl.='<div class="stValue">';
						$mdl.='<input value="" type="text" size="25" id="stEmail" maxlenght="30">';
						$mdl.='<a href="#de" class="stButton" id="stSaveEmail">Сохранить</a>';
						$mdl.='</div>';
						$mdl.='</div>';
					}
					
					if ($chanel!="") {
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField">ИНН:</div>';
						$mdl.='<div class="stValue">';
						$mdl.=$chanel;
						$mdl.='<a class="stLink" href="#de" id="stClearInn">изменить</a>';
						$mdl.='</div>';
						$mdl.='</div>';
					} else {
						$ready=FALSE;
						$mdl.='<div class="stCaption" style="color:#cc0000;">ИНН не указан!</div>';
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField">Введите ИНН:</div>';
						$mdl.='<div class="stValue">';
						$mdl.='<input value="" type="text" size="25" id="stInn" maxlenght="30">';
						$mdl.='<a href="#de" class="stButton" id="stSaveInn">Сохранить</a>';
						$mdl.='</div>';
						$mdl.='</div>';
					}

					if ($ready==TRUE) {
						$mdl.='<div class="stStroke">';
						$mdl.='<div class="stField"> </div>';
						$mdl.='<div class="stValue">';
						$mdl.='<br><a href="files/mauricreginfo.zip" class="stButton" id="stDownload">Получить рег. файл</a>';
						$mdl.='<a href="files/setup.exe" class="stButton">Скачать программу</a>';
						$mdl.='<a href="files/instruction.doc" class="stButton">Скачать инструкцию</a>';
						$mdl.='</div>';
						$mdl.='</div>';
					}

					if ($ready==TRUE) { $t="";
						$t.="{100500}\n"; 
						$t.=$regnum."\n"; 
						$t.=$caption."\n"; 
						$t.=$email."\n"; 
						$t.=$tel."\n"; 
						$t.=$adres."\n"; 
						$t.=$factadres."\n"; 
						$t.=$ruk."\n"; 
						$t.=$chanel."\n"; 
						$t.=$web."\n"; 
						$error=FALSE;
						$f=fopen("../files/mauricreginfo.zip","w");
						if(!$f) { $error=TRUE; } else { fwrite($f,$t); }
						fclose($f);
					}

					$i++;
				} } }
			echo $fn_ajax->innerHTML('stResults','place',$mdl);
            //echo "autoHeight();";
            echo "$('div#stSearch input').val('".$caption."');";
            /*echo "$('#Content').css({'height':'auto'});";
            echo "$('#ContentPrimary').css({'height':'auto'});";
            echo "$('#ContentSide').css({'height':'auto'});";*/
		} }
		}
    break;
    }

/*
		echo $fn_ajax->innerHTML('idStatusItems','place','');
		echo $fn_ajax->innerHTML('idSelectItems','place','');
		echo $fn_ajax->editCSS('#idBoxText','display','none');
		echo $fn_ajax->editCSS('#idBoxButtons','display','none');
		echo $fn_ajax->insertIntoFrame('deDoc','');

	
*/															


  
?>		







