<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Изменение прозрачности текста и его фона</title>';												
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
	echo			'new deTextOpacity(';									// вызов класса изменения непрозрачности фона объекта
	echo			'"deText1",';											// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"mouseover",';											// событие с которого начинается движение картинки
	echo			'"mouseout",';											// событие после которого заканчивается перемещение
	echo			'"2000",';												// скорость появления
	echo			'"60",';												// начальная непрозрачность текста
	echo			'"90",';												// непрозрачность текста при наведении на него 
	echo			'"50",';												// непрозрачность фона при наведении
	echo			'"90",';												// непрозрачность фона в обычном состоянии 
	echo			'"url(http://www.dement.ru/!lib/_img/strelka.jpg) no-repeat center",'; // путь к файлу картинки с увеличенным просмотром 
	echo			'"9",';													// css Z_INDEX		
	echo			'"deTextOpacityDiv_1"';		//***						//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
	echo		'</script>';			

	echo		'<script type="text/javascript">';						
	echo			'new deTextOpacity(';									// вызов класса изменения непрозрачности фона объекта
	echo			'"deText2",';											// id дива который будет изменять прозрачность и у которого появится фон 
	echo			'"mouseover",';											// событие с которого начинается движение картинки
	echo			'"mouseout",';											// событие после которого заканчивается перемещение
	echo			'"2000",';												// скорость появления
	echo			'"60",';												// начальная непрозрачность текста
	echo			'"90",';												// непрозрачность текста при наведении на него 
	echo			'"50",';												// непрозрачность фона при наведении
	echo			'"90",';												// непрозрачность фона в обычном состоянии 
	echo			'"url(http://www.dement.ru/!lib/_img/bridge.jpg) no-repeat center",'; // путь к файлу картинки с увеличенным просмотром 
	echo			'"12",';													// css Z_INDEX		
	echo			'"deTextOpacityDiv_2"';		//***						//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
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
	echo		'<div id="deText1">';
	echo		'Здесь может быть совершенно любой тект или другое содержимое: картинки, <br>таблицы, формы и т.д.';
	echo		'</div>';
	echo		'<div id="deText2">';
	echo		'Таких форм вы можете создать на странице сколько угодно и для каждой делать собственные настройки';
	echo		'</div>';
	echo	'</div>';
}


}




?>