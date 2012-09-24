<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Раздвижное меню</title>';												
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

	$inner1='<div class=\"clLinkTop\"><a id=\"idBtn1\" href=\"#de\">Кнопка1</a></div>';
	$inner2='<div class=\"clLinkTop\"><a id=\"idBtn1\" href=\"#de\">Кнопка1</a></div>';
	$innerB='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка1</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка2</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка3</a></div>';
												
	echo		'<script type="text/javascript">';						
	echo			'new deSliderMenu(';									// вызов класса 
	echo			'"box1",';												// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"#idBtn1",';											// объект на которое привяжется след. событие
	echo			'"mouseover",';											// событие при котором блок скроется 
	echo			'"#deSlider_1",';										// объект на которое привяжется след. событие
	echo			'"mouseleave",';										// событие при котором блок раскроется
	echo			'"100",';												// скорость появления
	echo			'"relative",';											// позиционирование блока
	echo			'"0px",';												// left отступ от левого края
	echo			'"0px",';												// top отступ сверху

	echo			'"'.$inner1.'",';										// text1 OFF содержимое заголовка когда вкладка закрыта
	echo			'"'.$inner2.'",';										// text2 ON текст заголовка когда она раскрыта
	echo			'"100px",';												// width ширина
	echo			'"30px",';												// height высота

	echo			'"'.$innerB.'",';										// text inside содержимое блока которого появляется и исчезает 
	echo			'"98px",';												// width ширина
	echo			'"auto",';												// height высота
	echo			'"none",';												// задний фон
	echo			'"#999999 solid 1px",';									// границы
	
	echo			'"OFF",';												// ON/OFF with start начальное состояние закладки (открытое или закрытое 
	echo			'"9",';													// css Z_INDEX		
	echo			'"deSlider_1"';		//***							//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
	echo		'</script>';			


	$inner1='<div class=\"clLinkTop\"><a id=\"idBtn2\" href=\"#de\">Кнопка2</a></div>';
	$inner2='<div class=\"clLinkTop\"><a id=\"idBtn2\" href=\"#de\">Кнопка2</a></div>';
	$innerB='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка1</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка2</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка3</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка4</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка5</a></div>';
												
	echo		'<script type="text/javascript">';						
	echo			'new deSliderMenu(';									// вызов класса 
	echo			'"box2",';												// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"#idBtn2",';											// объект на которое привяжется след. событие
	echo			'"mouseover",';											// событие при котором блок скроется 
	echo			'"#deSlider_2",';										// объект на которое привяжется след. событие
	echo			'"mouseleave",';										// событие при котором блок раскроется
	echo			'"100",';												// скорость появления
	echo			'"relative",';											// позиционирование блока
	echo			'"0px",';												// left отступ от левого края
	echo			'"0px",';												// top отступ сверху

	echo			'"'.$inner1.'",';										// text1 OFF содержимое заголовка когда вкладка закрыта
	echo			'"'.$inner2.'",';										// text2 ON текст заголовка когда она раскрыта
	echo			'"100px",';												// width ширина
	echo			'"30px",';												// height высота

	echo			'"'.$innerB.'",';										// text inside содержимое блока которого появляется и исчезает 
	echo			'"98px",';												// width ширина
	echo			'"auto",';												// height высота
	echo			'"none",';												// задний фон
	echo			'"#999999 solid 1px",';									// границы
	
	echo			'"OFF",';												// ON/OFF with start начальное состояние закладки (открытое или закрытое 
	echo			'"9",';													// css Z_INDEX		
	echo			'"deSlider_2"';		//***							//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
	echo		'</script>';			


	$inner1='<div class=\"clLinkTop\"><a id=\"idBtn3\" href=\"#de\">Кнопка3</a></div>';
	$inner2='<div class=\"clLinkTop\"><a id=\"idBtn3\" href=\"#de\">Кнопка3</a></div>';
	$innerB='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка1</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка2</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка3</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка4</a></div>';
												
	echo		'<script type="text/javascript">';						
	echo			'new deSliderMenu(';									// вызов класса 
	echo			'"box3",';												// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"#idBtn3",';											// объект на которое привяжется след. событие
	echo			'"mouseover",';											// событие при котором блок скроется 
	echo			'"#deSlider_3",';										// объект на которое привяжется след. событие
	echo			'"mouseleave",';										// событие при котором блок раскроется
	echo			'"100",';												// скорость появления
	echo			'"relative",';											// позиционирование блока
	echo			'"0px",';												// left отступ от левого края
	echo			'"0px",';												// top отступ сверху

	echo			'"'.$inner1.'",';										// text1 OFF содержимое заголовка когда вкладка закрыта
	echo			'"'.$inner2.'",';										// text2 ON текст заголовка когда она раскрыта
	echo			'"100px",';												// width ширина
	echo			'"30px",';												// height высота

	echo			'"'.$innerB.'",';										// text inside содержимое блока которого появляется и исчезает 
	echo			'"98px",';												// width ширина
	echo			'"auto",';												// height высота
	echo			'"none",';												// задний фон
	echo			'"#999999 solid 1px",';									// границы
	
	echo			'"OFF",';												// ON/OFF with start начальное состояние закладки (открытое или закрытое 
	echo			'"9",';													// css Z_INDEX		
	echo			'"deSlider_3"';		//***							//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
	echo		'</script>';			


	$inner1='<div class=\"clLinkTop\"><a id=\"idBtn4\" href=\"#de\">Кнопка4</a></div>';
	$inner2='<div class=\"clLinkTop\"><a id=\"idBtn4\" href=\"#de\">Кнопка4</a></div>';
	$innerB='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка1</a></div>';
	$innerB.='<div class=\"clLinkSide\"><a href=\"#de\">Ссылка2</a></div>';
												
	echo		'<script type="text/javascript">';						
	echo			'new deSliderMenu(';									// вызов класса 
	echo			'"box4",';												// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"#idBtn4",';											// объект на которое привяжется след. событие
	echo			'"mouseover",';											// событие при котором блок скроется 
	echo			'"#deSlider_4",';										// объект на которое привяжется след. событие
	echo			'"mouseleave",';										// событие при котором блок раскроется
	echo			'"100",';												// скорость появления
	echo			'"relative",';											// позиционирование блока
	echo			'"0px",';												// left отступ от левого края
	echo			'"0px",';												// top отступ сверху

	echo			'"'.$inner1.'",';										// text1 OFF содержимое заголовка когда вкладка закрыта
	echo			'"'.$inner2.'",';										// text2 ON текст заголовка когда она раскрыта
	echo			'"100px",';												// width ширина
	echo			'"30px",';												// height высота

	echo			'"'.$innerB.'",';										// text inside содержимое блока которого появляется и исчезает 
	echo			'"98px",';												// width ширина
	echo			'"auto",';												// height высота
	echo			'"none",';												// задний фон
	echo			'"#999999 solid 1px",';									// границы
	
	echo			'"OFF",';												// ON/OFF with start начальное состояние закладки (открытое или закрытое 
	echo			'"9",';													// css Z_INDEX		
	echo			'"deSlider_4"';		//***							//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
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
	echo	'<div id="box2"></div>';
	echo	'<div id="box3"></div>';
	echo	'<div id="box4"></div>';
	echo	'</div>';
}


}




?>