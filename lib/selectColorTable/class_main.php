<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Выбор цвета из палитры</title>';

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

	echo		'<script type="text/javascript" src="http://www.dement.ru/!lib/_js/De.js"></script>'; 				 // dement.ru

	echo		'<script type="text/javascript">';				// Выбор цвета из палитры
	echo			'new deSelectColor(';						// вызов класса увеличенного просмотра изображений и его настройка
	echo			'"idMainDiv",';								//  id родительского дива (див , в который засунется код)
	echo			'"http://www.dement.ru/!lib/selectColorPalette/img/wheel.jpg",';	//  путь к картинке с палитрой
	echo			'"Нажмите мышью чтобы выбрать цвет",';		//  текст всплывающей подсказки
	echo			'"#ffffff",';								//  CSS background
	echo			'"#333333 solid 10px",';						//  CSS border

	echo			'"<strong>Палитра цветов</strong>",';						// заголовок палитры		
	echo			'"TRUE",';									// отображать или нет этот заголовок
	echo			'"20px",';									// его высота HEIGHT и ниже идет другой CSS код этого заголовка		
	echo			'"Verdana, Arial, Helvetica, sans-serif",'; //  CSS FONT 
	echo			'"12px",';									//  CCS FONT SIZE
	echo			'"#000000",';								//  CSS COLOR

	echo			'"Выбранный цвет",';						// надпись линии которая показывает цвет на который навели мышью
	echo			'"TRUE",';									// отображать эту линию или нет 	
	echo			'"30px",';									// ее высота HEIGHT и ниже идет другой CSS код этого заголовка
	echo			'"Verdana, Arial, Helvetica, sans-serif",'; //  CSS FONT 
	echo			'"10px",';									//  CCS FONT SIZE			
	echo			'"#000000",';								//  CSS COLOR

	echo			'"idPalette",';				//***			//  id главного дива
	echo			'"idPaletteCaption",';		//***			//  id дива с заголовком 
	echo			'"idPaletteHover",';		//***			//  id линии отражающей выбранный цвет
	echo			'"idPaletteImage",';		//***			//  id дива с картинкой палитры 
	echo			'"idPaletteInputLine",';	//***			//  имя инпута в котором показывается код цвета на который навели
	echo			'"namePaletteHoverColor",';	//***			//  имя инпута в котором показывается код цвета на который навели
	echo			'"idPaletteHoverColor",';	//***			//  ID инпута в котором показывается код цвета на который навели			
	echo			'"namePaletteClickColor",';	//***			//  имя инпута в котором показывается код цвета который выбрали	
	echo			'"idPaletteClickColor"';	//***			//  ID инпута в котором показывается код цвета который выбрали
	echo			');';												
	echo		'</script>';					//*** эти параметры должны быть уникальными при многократном использовании скрипта на странице 


	echo	'</head>';
	echo	'<body>';
}


function finish() {

	echo	'</body>';
	echo	'</html>';

}


function action() { 


	echo	'<div id="idMainDiv">';
	echo	'</div>';

}


}




?>