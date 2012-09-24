<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Раздвижные блоки</title>';												
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

	$inner1='<div id=\"Caption_off\">Информация</div>';
	$inner2='<div id=\"Caption_on\">Информация</div>';
	$innerBox='Здесь может находиться любая информация или любой html-код';
												
	echo		'<script type="text/javascript">';						
	echo			'new deSliderBlock(';									// вызов класса 
	echo			'"box1",';												// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"click",';												// событие при котором блок скроется 
	echo			'"click",';												// событие при котором блок раскроется
	echo			'"100",';												// скорость появления
	echo			'"relative",';											// позиционирование блока
	echo			'"0px",';												// left отступ от левого края
	echo			'"0px",';												// top отступ сверху

	echo			'"'.$inner1.'",';										// text1 OFF содержимое заголовка когда вкладка закрыта
	echo			'"'.$inner2.'",';										// text2 ON текст заголовка когда она раскрыта
	echo			'"300px",';												// width ширина закладки
	echo			'"20px",';												// height высота закладки
	echo			'"#9ccaea",';											// background OFF задний фон при закрытой вкладке
	echo			'"#cdd8e0",';											// background ON задний фон при раскрытой вкладке
	echo			'"#799fba solid 2px",';									// border OFF границы при закрытой вкладке 
	echo			'"#acacac solid 2px",';									// border ON границы при раскрытой вкладке

	echo			'"'.$innerBox.'",';										// text inside содержимое блока которого появляется и исчезает 
	echo			'"302px",';												// width ширина этого блока 
	echo			'"100px",';												// height высота этого блока
 	echo			'"#ffffff",';											// background задний фон 
	echo			'"#cccccc solid 1px",';									// border окантовка 
	
	echo			'"OFF",';												// ON/OFF with start начальное состояние закладки (открытое или закрытое 
	echo			'"9",';													// css Z_INDEX		
	echo			'"deSliderDiv_1"';		//***							//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
	echo		'</script>';			

	$inner1='<div id=\"Caption_off\">Изображение (1)</div>';
	$inner2='<div id=\"Caption_on\">Изображение</div>';
	$innerBox='<img src=\"http://www.dement.ru/!lib/_img/strelka.jpg\">';

	echo		'<script type="text/javascript">';						
	echo			'new deSliderBlock(';									// вызов класса 
	echo			'"box2",';												// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"click",';												// событие при котором блок скроется 
	echo			'"click",';												// событие при котором блок раскроется
	echo			'"100",';												// скорость появления
	echo			'"relative",';												// позиционирование блока
	echo			'"0px",';												// left
	echo			'"0px",';												// top

	echo			'"'.$inner1.'",';										// text1 OFF
	echo			'"'.$inner2.'",';										// text2 ON
	echo			'"300px",';												// width
	echo			'"20px",';												// height
	echo			'"#9ccaea",';											// background OFF
	echo			'"#cdd8e0",';											// background ON
	echo			'"#799fba solid 2px",';									// border OFF
	echo			'"#acacac solid 2px",';									// border ON

	echo			'"'.$innerBox.'",';											// text inside
	echo			'"302px",';												// width
	echo			'"200px",';												// height
	echo			'"#ffffff",';											// background
	echo			'"#cccccc solid 1px",';									// border 
	
	echo			'"OFF",';												// ON/OFF with start
	echo			'"9",';													// css Z_INDEX		
	echo			'"deSliderDiv_2"';		//***							//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';					//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
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
	echo	'<div id="box1"></div>';
	echo	'<div id="middle"></div>';
	echo	'<div id="box2"></div>';
	echo	'</div>';
}


}




?>