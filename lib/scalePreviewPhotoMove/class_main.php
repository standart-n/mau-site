<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Увеличенный просмотр изображения</title>';													 // всетаки солиднее когда все на своем сайте		
	echo		'<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />';								 	 // !!!! все нужные библиотеки перенес на dement  		
   	echo		'<meta http-equiv="Content-Language" content="ru" />';
   	echo		'<meta name="robots" content="all" />';
	echo		'<meta name="Copyright" Lang="ru" content="2010 НВП Стандарт-Н">';
	echo		'<meta name="Document-state" content="Dynamic">';
	echo		'<meta name="Revesit" content="7">';
   	echo		'<meta name="description" content="Dement.ru - записки разработчиков компании НВП Стандарт-Н, веб-студия :: срипты, уроки, советы, модули, исходные коды, программирование, вебмастеру" />';
   	echo		'<meta name="keywords" content="демент, дизайн, веб-студия, скрипты, уроки, сайты, дизайн, верстка, программирование, фриланс,
											dement, web, internet, css, mysql, ajax, html, php, js, javascript, functions, script, code, design" />';

	echo		'<link	 href="http://www.dement.ru/img/favico.ico" rel="shortcut icon" type="image/x-icon" />';
	echo		'<link   href="style_main.css"  rel="stylesheet"   type="text/css">'; 											 // лучше сначала прописывать стили а потом скрипты 

	echo		'<script type="text/javascript" src="http://www.dement.ru/!lib/_js/De.js"></script>';  						 // библиотека dement.ru

																		// Увеличенный просмотр изображения  - не забываем говорить о чем вобще данный срипт 		
	echo		'<script type="text/javascript">';						// dePhotoPre    обязательно описываем все переменные чтобы было понятно что они значат 
	echo			'new dePhotoPre(';									// вызов класса увеличенного просмотра изображений и его настройка
	echo			'"idMainDiv",';										// id дива в который будет вставлена оболочка с увеличенным просмотром
	echo			'"imgStatic1",';									// id картинки (img) при наведении на которую появится увеличенный просмтр 			
	echo			'"http://www.dement.ru/!lib/_img/strelka_full.jpg",'; // путь к файлу картинки с увеличенным просмотром 
	echo			'"MovingUp",';										// тип плавного появление увеличенного просмотра			
	echo			'"200",';											// скорость плавного появления
	echo			'"absolute",';										// далее идет css POSIOTION позиционирование блока с увеличенным просмотром
	echo			'"50px",';											// css 	TOP   расположение блока с увеличенным просмотром
	echo			'"400px",';											// css  LEFT  расположение блока с увеличенным просмотром
	echo			'"300px",';											// css WIDTH ширина окна с увеличенным просмотром 
	echo			'"300px",';											// css HEIGHT высота окна с увеличенным просмотром 
	echo			'"9",';												// css Z_INDEX		
	echo			'"#0000FF solid 1px",';								// css BORDER
	echo			'"dePhotoPreDiv_id1",';		//***					//  id DIV блока с увеличенным просмотрам (выведено для многократного использования скрипта и для доп. функций) 
	echo			'"dePhotoPreImg_id1",';		//***					//  id IMG картирнки с увеличенным просмотрам (выведено для многократного использования скрипта и для доп. функций) 
	echo			'"10"';												// !!! (мс) время задержки до начала эффекта (для нормальной работы скрипта), чтобы все текущие эффекты на странице успели закончиться
	echo			');';												// запускаем увеличенный просмотр
	echo		'</script>';			//***  параметры, которые должны быть уникальными при многократном использовании скрипта




	echo		'<script type="text/javascript">';						// dePhotoPre    обязательно описываем все переменные чтобы было понятно что они значат 
	echo			'new dePhotoPre(';									// вызов класса увеличенного просмотра изображений и его настройка
	echo			'"idMainDiv",';										// id дива в который будет вставлена оболочка с увеличенным просмотром
	echo			'"imgStatic2",';									// id картинки (img) при наведении на которую появится увеличенный просмтр 			
	echo			'"http://www.dement.ru/!lib/_img/kanal_full.jpg",'; // путь к файлу картинки с увеличенным просмотром 
	echo			'"MovingDown",';									// тип плавного появление увеличенного просмотра			
	echo			'"200",';											// скорость плавного появления
	echo			'"absolute",';										// далее идет css POSIOTION позиционирование блока с увеличенным просмотром
	echo			'"50px",';											// css 	TOP   расположение блока с увеличенным просмотром
	echo			'"400px",';											// css  LEFT  расположение блока с увеличенным просмотром
	echo			'"300px",';											// css WIDTH ширина окна с увеличенным просмотром 
	echo			'"300px",';											// css HEIGHT высота окна с увеличенным просмотром 
	echo			'"9",';												// css Z_INDEX		
	echo			'"#00FF00 solid 1px",';								// css BORDER
	echo			'"dePhotoPreDiv_id2",';								//  id DIV блока с увеличенным просмотрам (выведено для многократного использования скрипта и для доп. функций) 
	echo			'"dePhotoPreImg_id2"';								//  id IMG картирнки с увеличенным просмотрам (выведено для многократного использования скрипта и для доп. функций) 
	echo			');';												// запускаем увеличенный просмотр
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
	echo		'<img id="imgStatic1" align="center" src="http://www.dement.ru/!lib/_img/strelka.jpg">';
	echo		'<img id="imgStatic2" align="center" src="http://www.dement.ru/!lib/_img/kanal.jpg">'; 
	echo	'<br><strong>Увеличенный просмотр изображения.</strong><br>';
	//echo	'Наведите на изображение, чтобы увидеть его увеличенный вариант.';
	//echo	'Затем перемещайте курсор по фотографии, чтобы изменять ракурс увеличенного изображения.';
	echo	'</div>';
}


}




?>