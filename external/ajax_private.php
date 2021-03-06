<?php
    session_start();
	include_once('../class/class_base.php');
	include_once('../functions/fn_ajax.php');
	include_once('../functions/fn_js.php');
	include_once('../functions/fn_private.php');

	$type=strval(trim($_GET['type']));
	$action=strval(trim($_GET['action']));
	$id=trim($_GET['id']);
    if (isset($_GET['value'])) { $value=intval(trim($_GET['value'])); } else { $value=""; }

	$base=new base;
	$fn_ajax=new fn_ajax;
	$fn_private=new fn_private;

	$base->getBaseFromAdmin();
	$db=				$base->db;
	$fdb=				$base->fdb;
	$it=				$base->it;
	$prefix=			$base->prefix;

	$fn_private->prefix=	$prefix;
	$fn_private->db=		$db;
	$fn_private->fdb=		$fdb;
	$fn_private->it=		$it;
	$fn_private->base=		$base;
    $fn_private->fn_ajax=   $fn_ajax;

    switch($type) {
    case 'checkCounter':
        switch($action) {
        case 'editoc':
		$ms=$fn_private->editPrivateNumber($id,$value);
    		echo $fn_ajax->innerHTML('users_private_oc_result','place',$ms['alert']);
        break;
        case 'info':
            $ms=$fn_private->getCounterInfoById($id);
            $code=$fn_private->getDialogCode($ms);
    		echo $fn_ajax->innerHTML('private_dlg_content','place',$code);
    		echo $fn_ajax->value('private_dlg_value','place',$value);
        break;
        case 'ins':
            $ms=$fn_private->getNewValue($id,$value);
            $date=$fn_private->getNowDate();
            $notice=$ms['notice'];
            $query=$ms['query'];
    		echo $fn_ajax->innerHTML('private_dlg_newValue_content','place',$notice);
      		echo $fn_ajax->editCSS('.private_dlg_notice','display','block');
      		echo $fn_ajax->editCSS('.private_dlg_notice','float','left');
      		echo $fn_ajax->editCSS('.private_dlg_notice','height','80px');
      		echo $fn_ajax->editCSS('.private_dlg_notice','padding','0 0 0 40px');
            if ($query=="FALSE") {
        		echo $fn_ajax->editCSS('.private_dlg_notice','background','url(img/private_error.png) no-repeat left top');
            } else {
        		echo $fn_ajax->editCSS('#private_dlg_value_'.$id,'font-weight','bold');
        		echo $fn_ajax->editCSS('#private_dlg_value_'.$id,'color','#339933');
        		echo $fn_ajax->editCSS('.private_dlg_notice','background','url(img/private_ok.png) no-repeat left top');
  		        echo $fn_ajax->innerHTML('private_dlg_value_'.$id,'place',$value);
  		        echo $fn_ajax->innerHTML('private_dlg_postdt_'.$id,'place',$date);
            }
        break;
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






