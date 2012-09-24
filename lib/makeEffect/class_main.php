<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Создание эффекта появления или скрытия</title>';												
	echo		'<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />';								
   	echo		'<meta http-equiv="Content-Language" content="ru" />';
   	echo		'<meta name="robots" content="all" />';
	echo		'<meta name="Copyright" Lang="ru" content="2010 НВП Стандарт-Н">';
	echo		'<meta name="Document-state" content="Dynamic">';
	echo		'<meta name="Revesit" content="7">';
   	echo		'<meta name="description" content="Dement.ru - записки разработчиков компании НВП Стандарт-Н, веб-студия :: срипты, уроки, советы, модули, исходные коды, программирование, вебмастеру" />';
   	echo		'<meta name="keywords" content="демент, дизайн, веб-студия, скрипты, уроки, сайты, дизайн, верстка, программирование, фриланс,
											dement, web, internet, css, mysql, ajax, html, php, js, javascript, functions, script, code, design" />';

	echo		'<link	 href="http://www.dement.ru/img/favico.ico" rel="shortcut icon" type="image/x-icon" />';
	echo		'<link   href="style_main.css"  rel="stylesheet"   type="text/css">'; 									

	echo		'<script type="text/javascript" src="http://www.dement.ru/!lib/_js/De.js"></script>';  						 // библиотека dement.ru
												
	echo		'<script type="text/javascript">';					
	echo			'new deMakeEffect(';								// создание эффектов появления и исчезания	
	echo			'"idMainDiv",';										// див в который будет вставлен нужный нам блок 
	echo			'"<img src=\"http://www.dement.ru/!lib/_img/kanal.jpg\">",'; // html код содержимого этого блока									
	echo			'"deDiv1",';										// объект на который будет прицеплено событие появления
	echo			'"click",';											// событие появления
	echo			'"MovingUp",';										// эффект появления 
	echo			'"deDiv1",';										// объект на который будет прицеплено событие скрытия
	echo			'"click",';											// событие скрытия	
	echo			'"MovingUp",';										// эффект скрытия
	echo			'"20",';											// скорость плавного появления
	echo			'"absolute",';										// css POSIOTION позиционирование блока 
	echo			'"20px",';											// css 	TOP   расположение блока 
	echo			'"330px",';											// css  LEFT  расположение блока 
	echo			'"300",';											// css WIDTH ширина окна
	echo			'"300",';											// css HEIGHT высота окна 
	echo			'"hidden",';										// отображать или нет сформированный блок при загрузке страницы 
	echo			'"9",';												// css Z_INDEX		
	echo			'"dePhotoPreDiv_id1",';		//***					//  id DIV блока 
	echo			'"10"';												// !!! (мс) время задержки до начала эффекта (для нормальной работы скрипта) 
	echo			');';												//***  параметры, которые должны быть уникальными при многократном использовании скрипта
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
	echo		'<div id="deDiv1">';
	echo		'<img src="http://www.dement.ru/!lib/_img/strelka.jpg">';
	echo		'</div>';
	echo	'</div>';
}


}




?>