<?php class fn_js { 

var $db;
var $id;
var $base;
var $page;
var $action;
var $prefix;
var $pattern;
var $pattern_nm;
var $pattern_tb;
var $skeleton;
var $skeleton_nm;
var $skeleton_tb;
var $table;
var $work;
var $design;
var $html;
var $type;
var $object_id;
var $object_name;
var $object_start;
var $object_finish;
var $class_name;
var $parent_id;
var $parameter;
var $value;
var $effect=				"OpacityEffect";
var $event_start=			"mouseover";
var $event_finish=			"mouseleave";
var $caption=				"caption";
var $position=				"relative";
var $left=					"0px";
var $top=					"0px";
var $width=					"100px";
var $width_caption=			"100px";
var $width_block=			"100px";
var $height=				"auto";
var $height_caption=		"20px";
var $height_block=			"auto";
var $text=					"text";
var $text_on=				"text_on";
var $text_off=				"text_off";
var $background=			"#ffffff";
var $background_on=			"none";
var $background_off=		"none";
var $border=				"#999999 solid 1px";
var $border_on=				"none";
var $border_off=			"none";
var $off=					"OFF";
var $on=					"ON";
var $zindex=				"9";
var $speed=					"100";
var $timeBefore=			"200";
var $buttonYES=				"Да";
var $linkYES=				"#de";
var $functionYES=			"";
var $buttonNO=				"Нет";
var $linkNO=				"#de";
var $functionNO=			"";
var $dialog_border=			"#cccccc solid 1px";
var $dialog_zindex=			"100";
var $dialog_opacity=		"90";
var $dialog_id=				"deShowDialog";
var $topline_fontfamily=	"Verdana, Arial, Helvetica, sans-serif";
var $topline_fontsize=		"12px";
var $topline_fontcolor=		"#ffffff";
var $topline_height=		"30px";
var $topline_background=	"#003366";
var $topline_align=			"center";
var $topline_id=			"deShowTopline";
var $content_fontfamily=	"Verdana, Arial, Helvetica, sans-serif";
var $content_fontsize=		"12px";
var $content_fontcolor=		"#000000";
var $content_height=		"auto";
var $content_background=	"#ffffff";
var $content_align=			"left";
var $content_id=			"deShowContent";
var $backwall_vsbl=			"TRUE";
var $backwall_background=	"#000000";
var $backwall_opacity=		"50";
var $backwall_id=			"deShowBackwall";
var $btnX_vsbl=				"TRUE";
var $btnX_background=		"url(http://www.dement.ru/!lib/showModalDialog_mod/img/btnClose.gif) no-repeat center";
var $btnX_class=			"ClassButtonClose";
var $run=					"\r\n";
var $runn=					"\r\n\r\n";

function libs() {

	$show=		$this->runn.'<script src="../lib/_js/De_admin.js" type="text/javascript"></script>'.$this->runn; 
	return $show;

}

function editCSS() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// измение ксс
	$show.=		'$(document).ready(function () {'.$this->run;
	$show.=		'$("'.$this->object_name.'").css({"'.$this->parameter.'": "'.$this->value.'" });'.$this->run;
	$show.=		'});'.$this->run;
	$show.=		'</script>'.$this->runn;			
	return $show;

}

function showOk() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// скрипт :: окно подтверждения
	$show.=			'new deShowOk('.$this->run;			
	$show.=			'"<strong>'.$this->caption.'</strong>",'.$this->run;		// caption topLine			заголовок окна 
	$show.=			'"'.$this->text.'",'.$this->run;							// text content		содержимое всплывающего окна
	$show.=			'"Ок",'.$this->run;										// button YES				значение кнопки Да
	$show.=			'"'.$this->id.'",'.$this->run;	//***						// dialog_id				id главного окна 									
	$show.=			'"320",'.$this->run;										// z-index dialog			порядок данного слоя	
	$show.=			'"10"'.$this->run;							
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">Закрыть окно</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - уникальные параметры при многократном использовании скрипта на странице 				
	return $show;

}

function showYesNo() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// скрипт :: окно подтверждения
	$show.=			'new deShowYesNo('.$this->run;			
	$show.=			'"'.$this->object_id.'",'.$this->run;	//***				// object 					объект с которым связано событие появления всплывающего окна	
	$show.=			'"'.$this->event_start.'",'.$this->run;					// startEvent				событие при котором появляется всплывающее окно 				
	$show.=			'"'.$this->caption.'",'.$this->run;						// caption topLine			заголовок окна 
	$show.=			'"'.$this->text.'",'.$this->run;							// text content		содержимое всплывающего окна
	$show.=			'"'.$this->buttonYES.'",'.$this->run;						// button YES				значение кнопки Да
	$show.=			'"'.$this->linkYES.'",'.$this->run;						// Link YES					ссылки кнопки Да
	$show.=			'"'.$this->functionYES.'",'.$this->run;					// function YES				функция кнопки Да
	$show.=			'"'.$this->buttonNO.'",'.$this->run;						// button NO				значение кнопки Нет
	$show.=			'"'.$this->linkNO.'",'.$this->run;							// Link NO					ссылка кнопки Нет
	$show.=			'"'.$this->functionNO.'",'.$this->run;						// function NO				функция кнопки Нет
	$show.=			'"'.$this->id.'",'.$this->run;	//***						// dialog_id				id главного окна 									
	$show.=			'"'.$this->zindex.'",'.$this->run;							// z-index dialog			порядок данного слоя	
	$show.=			'"'.$this->timeBefore.'"'.$this->run;	// !!! (мс) время задержки до начала эффекта (для нормальной работы скрипта)
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">Закрыть окно</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - уникальные параметры при многократном использовании скрипта на странице 				
	return $show;

}


function showYesNoObj() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// скрипт :: окно подтверждения
	$show.=			'new deShowYesNoObj('.$this->run;			
	$show.=			'"'.$this->object.'",'.$this->run;	//***				// object 					объект с которым связано событие появления всплывающего окна	
	$show.=			'"'.$this->event_start.'",'.$this->run;					// startEvent				событие при котором появляется всплывающее окно 				
	$show.=			'"'.$this->caption.'",'.$this->run;						// caption topLine			заголовок окна 
	$show.=			'"'.$this->text.'",'.$this->run;							// text content		содержимое всплывающего окна
	$show.=			'"'.$this->buttonYES.'",'.$this->run;						// button YES				значение кнопки Да
	$show.=			'"'.$this->linkYES.'",'.$this->run;						// Link YES					ссылки кнопки Да
	$show.=			'"'.$this->functionYES.'",'.$this->run;					// function YES				функция кнопки Да
	$show.=			'"'.$this->buttonNO.'",'.$this->run;						// button NO				значение кнопки Нет
	$show.=			'"'.$this->linkNO.'",'.$this->run;							// Link NO					ссылка кнопки Нет
	$show.=			'"'.$this->functionNO.'",'.$this->run;						// function NO				функция кнопки Нет
	$show.=			'"'.$this->id.'",'.$this->run;	//***						// dialog_id				id главного окна 									
	$show.=			'"'.$this->zindex.'",'.$this->run;							// z-index dialog			порядок данного слоя	
	$show.=			'"'.$this->timeBefore.'"'.$this->run;	// !!! (мс) время задержки до начала эффекта (для нормальной работы скрипта)
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">Закрыть окно</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - уникальные параметры при многократном использовании скрипта на странице 				
	return $show;

}


function addClass() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					
	$show.=			'new deAddClass('.$this->run;						
	$show.=			'"'.$this->object_name.'",'.$this->run;								// объект
	$show.=			'"'.$this->class_name.'"'; 							// класс
	$show.=			');'.$this->run;								
	$show.=		'</script>'.$this->runn;			
	return $show;

}

function sliderBlock() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;						
	$show.=			'new deSliderBlock('.$this->run;									// вызов класса 
	$show.=			'"'.$this->parent_id.'",'.$this->run;								// id дива 
	$show.=			'"'.$this->event_finish.'",'.$this->run;							// событие при котором блок скроется 
	$show.=			'"'.$this->event_start.'",'.$this->run;							// событие при котором блок раскроется
	$show.=			'"'.$this->speed.'",'.$this->run;									// скорость появления
	$show.=			'"'.$this->position.'",'.$this->run;								// позиционирование блока
	$show.=			'"'.$this->left.'",'.$this->run;									// left отступ от левого края
	$show.=			'"'.$this->top.'",'.$this->run;									// top отступ сверху

	$show.=			'"'.$this->caption.'",'.$this->run;								// text1 OFF содержимое заголовка когда вкладка закрыта
	$show.=			'"'.$this->caption.'",'.$this->run;								// text2 ON текст заголовка когда она раскрыта
	$show.=			'"'.$this->width.'",'.$this->run;									// width ширина закладки
	$show.=			'"'.$this->height.'",'.$this->run;									// height высота закладки
	$show.=			'"'.$this->background_off.'",'.$this->run;							// background OFF задний фон при закрытой вкладке
	$show.=			'"'.$this->background_on.'",'.$this->run;							// background ON задний фон при раскрытой вкладке
	$show.=			'"'.$this->border_off.'",'.$this->run;								// border OFF границы при закрытой вкладке 
	$show.=			'"'.$this->border_on.'",'.$this->run;								// border ON границы при раскрытой вкладке

	$show.=			'"'.$this->html.'",'.$this->run;									// text inside содержимое блока которого появляется и исчезает 
	$show.=			'"'.$this->width.'",'.$this->run;									// width ширина этого блока 
	$show.=			'"'.$this->height_block.'",'.$this->run;							// height высота этого блока
	$show.=			'"'.$this->background.'",'.$this->run;								// background задний фон 
	$show.=			'"'.$this->border.'",'.$this->run;									// border окантовка 
	
	$show.=			'"'.$this->off.'",'.$this->run;									// ON/OFF with start начальное состояние закладки (открытое или закрытое 
	$show.=			'"'.$this->zindex.'",'.$this->run;									// css Z_INDEX		
	$show.=			'"'.$this->id.'"';		//***					//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	$show.=			');'.$this->run;						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
	$show.=		'</script>'.$this->runn;			
	return $show;

}

function sliderMenu() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;						
	$show.=			'new deSliderMenu('.$this->run;									// вызов класса 
	$show.=			'"'.$this->parent_id.'",'.$this->run;								// id дива который будет изменять прозрачность и у которого появится фон 
	$show.=			'"'.$this->object_start.'",'.$this->run;							// объект на которое привяжется след. событие
	$show.=			'"'.$this->event_start.'",'.$this->run;							// событие при котором блок скроется 
	$show.=			'"'.$this->object_finish.'",'.$this->run;							// объект на которое привяжется след. событие
	$show.=			'"'.$this->event_finish.'",'.$this->run;							// событие при котором блок раскроется
	$show.=			'"'.$this->speed.'",'.$this->run;									// скорость появления
	$show.=			'"'.$this->position.'",'.$this->run;								// позиционирование блока
	$show.=			'"'.$this->left.'",'.$this->run;									// left отступ от левого края
	$show.=			'"'.$this->top.'",'.$this->run;									// top отступ сверху

	$show.=			'"'.$this->text_off.'",'.$this->run;								// text1 OFF содержимое заголовка когда вкладка закрыта
	$show.=			'"'.$this->text_on.'",'.$this->run;								// text2 ON текст заголовка когда она раскрыта
	$show.=			'"'.$this->width_caption.'",'.$this->run;							// width ширина
	$show.=			'"'.$this->height_caption.'",'.$this->run;							// height высота

	$show.=			'"'.$this->text_block.'",'.$this->run;								// text inside содержимое блока которого появляется и исчезает 
	$show.=			'"'.$this->width_block.'",'.$this->run;							// width ширина
	$show.=			'"'.$this->height_block.'",'.$this->run;							// height высота
	$show.=			'"'.$this->background.'",'.$this->run;								// задний фон
	$show.=			'"'.$this->border.'",'.$this->run;									// границы
	
	$show.=			'"'.$this->off.'",'.$this->run;									// ON/OFF with start начальное состояние закладки (открытое или закрытое 
	$show.=			'"'.$this->zindex.'",'.$this->run;									// css Z_INDEX		
	$show.=			'"'.$this->id.'"';		//***							//  id блока который будет создан (выведено для многократного использования скрипта и для доп. функций) 
	$show.=			');'.$this->run;						//***  параметры, которые должны быть уникальными при многократном использовании скрипта										
	$show.=		'</script>'.$this->runn;			
	return $show;
	
}


function showDialog() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;		// скрипт :: всплывающее окно
	$show.=			'new deShowDialog('.$this->run;			
	$show.=			'"'.$this->object_id.'",'.$this->run;			//***		// object 					объект с которым связано событие появления всплывающего окна	
	$show.=			'"'.$this->event_start.'",'.$this->run;				// startEvent				событие при котором появляется всплывающее окно 				
	$show.=			'"'.$this->effect.'",'.$this->run;							// 							эффект появления объекта (MoveUp, MoveDown ... ) 
	$show.=			'"'.$this->width.'",'.$this->run;							// width dialog				ширина окна
	$show.=			'"'.$this->height.'",'.$this->run;							// height dialog			высота окна	
	$show.=			'"'.$this->dialog_border.'",'.$this->run;					// border dialog			границы окна CSS 
	$show.=			'"'.$this->dialog_zindex.'",'.$this->run;					// z-index dialog			порядок данного слоя	
	$show.=			'"'.$this->dialog_opacity.'",'.$this->run;					// opacity % dialog		    непрозрачность этого окна  
	$show.=			'"'.$this->speed.'",'.$this->run;							// (мс) effect speed  dialog     скорость появления окна
	$show.=			'"'.$this->dialog_id.'",'.$this->run;	//***				// dialog_id				id главного окна 									

	$show.=			'"'.$this->caption.'",'.$this->run;						// caption topLine			заголовок окна 
	$show.=			'"'.$this->topline_fontfamily.'",'.$this->run;				// font-family topLine		тип шрифта заголовка 
	$show.=			'"'.$this->topline_fontsize.'",'.$this->run;				// font-size topLine		размер шрифта заголовка	
	$show.=			'"'.$this->topline_fontcolor.'",'.$this->run;				// font-color topLne		цвет шрифта заголовка 
	$show.=			'"'.$this->topline_height.'",'.$this->run;					// height topLne			высота заголовка	
	$show.=			'"'.$this->topline_background.'",'.$this->run;				// background topLne		задний фон заголовка 
	$show.=			'"'.$this->topline_align.'",'.$this->run;					// text-align topLine		выравнивание данного заголовка
	$show.=			'"'.$this->topline_id.'",'.$this->run;	//***						// topLne_id				id полосы с заголовком 	

	$show.=			'"'.$this->text.'",'.$this->run;							// text content				содержимое всплывающего окна
	$show.=			'"'.$this->content_fontfamily.'",'.$this->run;				// font-family content		тип шрифта этого содержимого
	$show.=			'"'.$this->content_fontsize.'",'.$this->run;				// font-size content		размер шрифта этого содержимого
	$show.=			'"'.$this->content_fontcolor.'",'.$this->run;				// font-color content		цвет шрифта 
	$show.=			'"'.$this->content_background.'",'.$this->run;				// background content		задний фон 
	$show.=			'"'.$this->content_align.'",'.$this->run;					// text-align content		выравниевание текста
	$show.=			'"'.$this->content_id.'",'.$this->run;	//***				// content_id				id оболочки с основным содержимым 

	$show.=			'"'.$this->backwall_vsbl.'",'.$this->run;					// показывать ли задний фон
	$show.=			'"'.$this->backwall_background.'",'.$this->run;				// background backWall		
	$show.=			'"'.$this->backwall_opacity.'",'.$this->run;				// opacity % backWall		непрозрачность этого фона.  
	$show.=			'"'.$this->backwall_id.'",'.$this->run;	//***			// backwall_id				id дива с этим фоном 	

	$show.=			'"'.$this->btnX_vsbl.'",'.$this->run;						// отображать или нет кнопку выхода Х 
	$show.=			'"'.$this->btnX_background.'",'.$this->run;	// фон данной кнопки
	$show.=			'"'.$this->btnX_class.'",'.$this->run;	//***	// ВНИМАНИЕ!!! это класс для <span> внутри которого будут ссылки при нажатии на которые будет закрываться окно !!! 

	$show.=			'"'.$this->timeBefore.'"'.$this->run;	// !!! (мс) время задержки до начала эффекта (для нормальной работы скрипта), 
															//чтобы все текущие эффекты на странице успели закончиться
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">Закрыть окно</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - уникальные параметры при многократном использовании скрипта на странице 				
	return $show;


}


} ?>