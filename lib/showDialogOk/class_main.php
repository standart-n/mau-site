<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Окно подтверждения операции (Да/Нет)</title>';

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

	echo		'<script type="text/javascript" src="http://www.dement.ru/!lib/_js/De.js"></script>'; 						 // dement 

	$inner.='<span class=\"ClassButtonClose\"><a id=\"goSecond\" href=\"#de\">Нажмите сюда, чтобы закрыть это окно и открыть второе</a></span>';
	$inner2.='<span class=\"ClassButtonClose2\"><a href=\"#de\">Нажмите сюда, чтобы закрыть это окно</a></span>';

	echo		'<script type="text/javascript">';					// скрипт :: окно подтверждения
	echo			'new deShowYesNo(';			
	echo			'"testLink",';			//***					// object 					объект с которым связано событие появления всплывающего окна	
	echo			'"click",';										// startEvent				событие при котором появляется всплывающее окно 				
	echo			'"<strong>Вы уверены?</strong>",';				// caption topLine			заголовок окна 
	echo			'"Вы действительно хотите совершить это действие?",';// text content		содержимое всплывающего окна
	echo			'"Да",';										// button YES				значение кнопки Да
	echo			'"#Yes",';										// Link YES					ссылки кнопки Да
	echo			'"deGet_yes();",';								// function YES				функция кнопки Да
	echo			'"Нет",';										// button NO				значение кнопки Нет
	echo			'"#No",';										// Link NO					ссылка кнопки Нет
	echo			'"",';											// function NO				функция кнопки Нет
	echo			'"deModalDialog",';	//***						// dialog_id				id главного окна 									
	echo			'"100",';										// z-index dialog			порядок данного слоя	
	echo			'"10"';											// !!! (мс) время задержки до начала эффекта (для нормальной работы скрипта), чтобы все текущие эффекты на странице успели закончиться
	echo			');';											// <span class="btnClose"><a href="#close">Закрыть окно</a></span>												
	echo		'</script>';			//*** - уникальные параметры при многократном использовании скрипта на странице 				


	echo	'</head>';
	echo	'<body>';
}


function finish() {

	echo	'</body>';
	echo	'</html>';

}


function action() { 


	echo	'<div id="idMainDiv">';
	echo		'Данный модуль придуман, чтобы можно было быстро создавать окна для подтверждения какой-либо операции.<br>';
	echo		'<br>';
	echo		'<a id="testLink" href="#de">Нажмите сюда, чтобы вызвать окно подтверждения</a>';
	echo	'</div>';

}


}




?>