<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Текстовый редактор</title>';

	echo		'<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />';
   	echo		'<meta http-equiv="Content-Language" content="ru" />';
   	echo		'<meta name="robots" content="all" />';
	echo		'<meta name="Copyright" Lang="ru" content="2010 НВП Стандарт-Н">';
	echo		'<meta name="Document-state" content="Dynamic">';
	echo		'<meta name="Revesit" content="7">';
   	echo		'<meta name="description" content="Dement.ru - записки разработчиков компании НВП Стандарт-Н, веб-студия 
					:: срипты, уроки, советы, модули, исходные коды, 					программирование, вебмастеру" />';
   	echo		'<meta name="keywords" content="демент, дизайн, веб-студия, скрипты, уроки, сайты, дизайн, верстка, программирование, фриланс,
											dement, web, internet, css, mysql, ajax, html, php, js, javascript, functions, script, code, design" />';

	echo		'<link	 href="http://www.dement.ru/img/favico.ico" rel="shortcut icon" type="image/x-icon" />';
	echo		'<link   href="style_main.css"  rel="stylesheet"   type="text/css">'; 
	echo		'<link   href="deTextEditor.css"  rel="stylesheet"   type="text/css">'; 	

	echo		'<script type="text/javascript" src="http://www.dement.ru/!lib/_js/De.js"></script>'; 						 // dement 

	echo		'<script type="text/javascript">';						
	echo			'new deTextEditor_rus(';	
	echo			'"idMainDiv",';		
	echo			'"deTextEditorFrame",';	
	echo			'"<i>Текстовый</i> редактор <b>DEMENT</b>"';		
	echo			');';				
	echo		'</script>';			



	echo	'</head>';
	echo	'<body>';
}


function finish() {

	echo	'</body>';
	echo	'</html>';

}


function action() { 


	echo	'<div id="idMainDiv">';
	echo		'<p><strong>Текстовый on-line редактор</strong></p>';
	echo	'</div>';
}


}




?>