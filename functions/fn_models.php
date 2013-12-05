<?php class fn_models {

var $db;
var $id;
var $base;
var $page;
var $html;

function loadModel($name) {
    $mdl='models/mdl_'.$name.'.html';	$model="";
    if (file_exists($mdl)) {	if (fopen($mdl,"r")) {
		$model=file_get_contents($mdl);
	}	}	return $model;
}

function loadStyle($name) {
    $css="style/css_".$name.".css";	$style="";
    if (file_exists($css)) {	
		$style='<link href="'.$css.'" rel="stylesheet" type="text/css">';
    }	return $style;
}

function loadScript($name) {
    $js="script/js_".$name.".js";	$script="";
    if (file_exists($js)) {
        $script='<script src="'.$js.'" type="text/javascript"></script>';
    }	return $script;
}

} ?>
