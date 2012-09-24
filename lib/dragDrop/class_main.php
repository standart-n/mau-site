<?php

class main {

function head() {

	echo	'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
	echo	'<html xmlns="http://www.w3.org/1999/xhtml">';
	echo	'<head>';
	echo		'<title>Dement.ru :: Drag&Drop</title>';

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

	echo		'<script type="text/javascript" src="http://www.dement.ru/!lib/_js/De.js"></script>'; 						 // dement.ru

	echo		'<script type="text/javascript">';					// скрипт :: drag&drop
	echo			'new deDragDrop(';			
	echo			'"deModalDialog",';								// объект который будет перетаскиваться 
	echo			'"deUpperLine"';								// объект при нажатии на который будет работать перетаскивание
	echo			');';											// вполне возможно что это будет один и тот же объект - зависит от обстоятельств
	echo		'</script>';	


	echo		'<script type="text/javascript">';					// срипт :: всплывающее окно
	echo			'new deShowDialog(';			
	echo			'"testLink",';			//***					// object 					объект с которым связано событие появления всплывающего окна	
	echo			'"click",';										// startEvent				событие при котором появляется всплывающее окно 				
	echo			'"UncoverUp",';								// 							эффект появления объекта (MoveUp, MoveDown ... ) 
	echo			'"400px",';										// width dialog				ширина окна
	echo			'"300px",';										// height dialog			высота окна	
	echo			'"#999999 solid 10px",';						// border dialog			границы окна CSS 
	echo			'"100",';										// z-index dialog			порядок данного слоя	
	echo			'"90",';										// opacity % dialog		    непрозрачность этого окна  
	echo			'"200",';										// (мс) effect speed  dialog     скорость появления окна
	echo			'"deModalDialog",';	//***						// dialog_id				id главного окна 									

	echo			'"<strong>Модальное окно</strong>",';			// caption topLine			заголовок окна 
	echo			'"Verdana, Arial, Helvetica, sans-serif",';		// font-family topLine		тип шрифта заголовка 
	echo			'"12px",';										// font-size topLine		размер шрифта заголовка	
	echo			'"#333333",';									// font-color topLne		цвет шрифта заголовка 
	echo			'"30px",';										// height topLne			высота заголовка	
	echo			'"#dddddd",';									// background topLne		задний фон заголовка 
	echo			'"center",';									// text-align topLine		выравнивание данного заголовка
	echo			'"deUpperLine",';	//***						// topLne_id				id полосы с заголовком 	

	echo			'"Попробуйте передвигать это окно нажав на верхнюю часть с заголовком",';	// text content				содержимое всплывающего окна
	echo			'"Verdana, Arial, Helvetica, sans-serif",';		// font-family content		тип шрифта этого содержимого
	echo			'"12px",';										// font-size content		размер шрифта этого содержимого
	echo			'"#333333",';									// font-color content		цвет шрифта 
	echo			'"#ffffff",';									// background content		задний фон 
	echo			'"left",';										// text-align content		выравниевание текста
	echo			'"deMainContent",';	//***						// content_id				id оболочки с основным содержимым 

	echo			'"FALSE",';										// показывать ли задний фон
	echo			'"#000000",';									// background backWall		цвет фона которым закрашивается все позади окна. если он вам не нужен то поставьте none 
	echo			'"70",';										// opacity % backWall		непрозрачность этого фона.  
	echo			'"deBackWall",';	//***						// backwall_id				id дива с этим фоном 	

	echo			'"TRUE",';										// отображать или нет кнопку выхода Х 
	echo			'"url(http://www.dement.ru/!lib/showModalDialog/img/btnClose.gif) no-repeat center",';	// фон данной кнопки
	echo			'"ClassButtonClose",';	//***					// ВНИМАНИЕ!!! это класс для <span> внутри которого будут ссылки при нажатии на которые будет закрываться окно !!! 

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
	echo		'Это тестовая страница для проверки модуля deDragDrop на всплывающем окне (модуль deShowDialog)<br><br>';
	echo		'<a id="testLink" href="#de">Нажмите сюда чтобы вызвать всплывающее окно с функцией drag&drop</a>';
	echo	'</div>';

}


}




?>