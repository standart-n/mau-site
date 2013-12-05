<?php class fn_ajax {

var $db;
var $id;
var $base;
var $page;
var $table;

function insertIntoFrame($frameDoc,$html) {

	//var frameDoc=document.getElementById('frame_id').contentDocument;
	//var frameDoc=frames['frame_name'].document;  // gecko 

	$show=  $frameDoc.".open();";   	   
	$show.= $frameDoc.".write(\"".$html."\");";   	   
	$show.= $frameDoc.".close();";   	   
	return $show;

}

function alert($msg) {

	$show="alert('".$msg."');";   	   
	return $show;

}

function innerHTML($id,$type,$html) {

	$show='';
	switch ($type) {
		case 'after':
		$show="document.getElementById('".$id."').innerHTML=document.getElementById('".$id."').innerHTML+'".$html."';";   	   
		break;
		case 'before':
		$show="document.getElementById('".$id."').innerHTML='".$html."'+document.getElementById('".$id."').innerHTML;";   	   
		break;
		case 'place':
		$show="document.getElementById('".$id."').innerHTML='".$html."';";   	   
		break;
	}
	return $show;

}

function value($id,$type,$value) {

    $show='';
	switch ($type) {
		case 'after':
		$show='document.getElementById("'.$id.'").value=document.getElementById("'.$id.'").value+"'.$value.'";';   	   
		break;
		case 'before':
		$show='document.getElementById("'.$id.'").value="'.$value.'"+document.getElementById("'.$id.'").value;';   	   
		break;
		case 'place':
		$show='document.getElementById("'.$id.'").value="'.$value.'";';   	   
		break;
	}
	return $show;

}

function editCSS($obj,$field,$value) {

	$show=  "$(document).ready(function () {";   	   
	$show.= "$('".$obj."').css({'".$field."': '".$value."'})";
	$show.= "});";
	return $show;

}

function submit($id) {

	$show="document.getElementById('".$id."').submit();";   	   
	return $show;

}


function location($url) {

	echo "document.location.href='".$url."'";

}

} ?>