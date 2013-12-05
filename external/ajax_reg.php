<?php
    session_start();
	include_once('../class/class_base.php');
	include_once('../functions/fn_ajax.php');
	include_once('../functions/fn_js.php');
	include_once('../functions/fn_reg.php');

	$type=strval(trim($_GET['type']));
	$action=strval(trim($_GET['action']));
	$word=strval(trim($_GET['word']));
	if (isset($_GET['word_2'])) { $word_2=strval(trim($_GET['word_2'])); }

	$base=new base;
	$fn_ajax=new fn_ajax;
	$fn_reg=new fn_reg;

	$base->getBaseFromAdmin();
	$db=				$base->db;
	$prefix=			$base->prefix;

	$fn_reg->prefix=	$prefix;
	$fn_reg->db=		$db;
	$fn_reg->base=		$base;
    $fn_reg->fn_ajax=   $fn_ajax;

    switch ($type) {
    case 'checkReg' :
        $func="check_".$action;
        switch($action) {
            case 'confirm': $valid=$fn_reg->$func($word,$word_2); break;
            default: $valid=$fn_reg->$func($word);
        }
        if ((isset($valid['check'])) && (isset($valid['field']))) {
            $check=$valid['check'];
            $field=$valid['field'];
            if ($check=="FALSE") {
                if (isset($valid['error'])) {
                   $error="<span id=\'users_notice_".$action."\'>".$valid['error']."</span>";
	               echo $fn_ajax->innerHTML('users_'.$action.'_notice','place',$error);
               	   echo $fn_ajax->editCSS('#users_notice_'.$action,'background','url(img/error.png) no-repeat left center');
                }
            } else {
                   $error="<span id=\'users_notice_".$action."\'></span>";
	               echo $fn_ajax->innerHTML('users_'.$action.'_notice','place',$error);
               	   echo $fn_ajax->editCSS('#users_notice_'.$action,'background','url(img/ok.png) no-repeat left center');
                   if ($action=="account") {
                     echo $fn_reg->getAutoValues($word);
                   }
            }
        }
       echo $fn_reg->getNoticeStyle($action);
       echo $fn_reg->getShakeEffect($action);
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






