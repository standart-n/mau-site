	//Dement.ru										// модуль для создания на сайте всплывающего окна 
var deShowDialog = jQuery.Class.create({		
	init: function(deObject_id,								// объект, с которым свяжется событие вызова модального окна
				   deStartEvent,							// событие при котором вылезет всплывающее окно
				   deEffect,								// эффект появления окна
				   deWidth,									//	ширина окна
				   deHeight,								//	высота окна
				   deMDialog_border,						//  стиль границы окна	
				   deMDialog_zIndex,						//	z-index порядок слоя
				   deMDialog_opacity,						//	непрозрачность окна
				   deSpeed,									//	скорость эффектов скрипта
				   deMDialog_id,							//	id главного дива окна
				   deUpLine_caption,						//	заголовок окна	
				   deUpLine_fontFamily,						//	шрифт	
				   deUpLine_fontSize,						//	размер шрифта
				   deUpLine_fontColor,						//	цвет шрифта
				   deUpLine_height,							//	высота линии заголовка
				   deUpLine_background,						//	задний фон заголовка
				   deUpLine_textAlign,						//	выравниевание заголовка
				   deUpLine_id,								//	id линии с заголовком
				   deContent_text,							//	текст внутри окна
				   deContent_fontFamily,					//	шрифт этого текста
				   deContent_fontSize,						//	размер шрифта
				   deContent_fontColor,						//	цвет шрифта
				   deContent_background,					//  задний фон оболочки с текством
				   deContent_textAlign,						//	выравнивание этого текста	
				   deContent_id,							//	id дива с текстом
				   deWall_visible,							//	фон которым все закрашивается помимо всплывающего окна
				   deWall_background,						//	фон которым все закрашивается помимо всплывающего окна
				   deWall_opacity,							//	непрозрачность этого фона
				   deWall_id,								//	id дива c этим фоном 
				   debtnClose_vsbl,							//	выводить или нет кнопку при нажатии на которую закроется окно 
				   debtnClose_background,					//	CSS фон этой кнопки
				   debtnClose_class,						//	стилевой класс кнопок, при нажатии на которые будут закрываться окна
				   deTimeBefore     						//	время задержки до начала скрипта
				   ){		
								// !!! уникальные параметры модуля : deMDialog_id, deUpLine_id, deContent_id, deWall_id, debtnClose_class, deMDialog_zIndex 										
								// !!! если модуль на странице используется несколько раз то эти параметры должны быть различными !!!  	
$(document).ready(function() {		

	deCode='<div id="'+deMDialog_id+'Dement"></div>'+
				'<div id="'+deWall_id+'"></div>'+							// добавляем в наш документ див с задним фоном которым все закрашивается 
				'<div id="'+deMDialog_id+'">'+								// внутри рисуем оболочку с всплывающим окном	
					'<div id="'+deUpLine_id+'">'+deUpLine_caption;			//	добавляем див с заголовком
	if (debtnClose_vsbl=="TRUE") {											// в зависимости от параметра добавляем кнопку при которой закроется все окно 
		deCode+=				'<span class="'+debtnClose_class+'"><a class="deModalDialogbtnClose" href="#de"></a></span>'; 
	}
	deCode+=			'</div>'+											// добавляем в оболочку див в котором будет основное содержимое окна
					'<div id="'+deContent_id+'">'+deContent_text+'</div>'+
				'</div>';  													// закрываем 
				
	document.body.innerHTML+=deCode;										// всовываем сгенерированный код в документ 	

	deShowDialog_css(); 													// стилизуем все объекты используя функцию которая описана внизу	

	/*deShowOpacitySharp('#'+deWall_id,0);*/
	deShowOpacitySharp('a.deModalDialogbtnClose',60);						//  непрозрачность кнопки "закрыть" ( Х ) без наведения равна 60% 

});

$('#'+deObject_id).live(deStartEvent, function(){   						// если на заданном объекте случилось необходимое событие то необходимо вывести наше окно

  $('#'+deMDialog_id+'Dement').animate({top: '1px'},deTimeBefore,"linear",function(){		// ложная анимация чтобы подождать когда закончатся все предыдущие эффекты на странице

	deShowDialog_css();

	documentHeight=deGetDocumentSize().height;								// высота всего документа
	documentWidth=deGetDocumentSize().width;								// ширина всего документа
																			
	screenHeight=deGetScreenSize().height; 									// высота видимой области документа	
	screenWidth=deGetScreenSize().width; 									// ширина данной области
	
	scrollTop=deGetScrollSize().top; 										// находим велечину прокрути скролла
	scrollLeft=deGetScrollSize().left; 

	deMDialog=$('#'+deMDialog_id);											// объявляем объекты 
	deWall=$('#'+deWall_id);			

	deMDialog.css({'display': 'none'});		
	deWall.css({'display': 'none'});		

	deMDialogHeight=deMDialog.height();										// определяем свойства окна, чтобы оно появилось в центре экрана	
	deMDialogWidth=deMDialog.width();
	deMDialogTop=(screenHeight-deMDialogHeight)/2+scrollTop;
	deMDialogLeft=(screenWidth-deMDialogWidth)/2+scrollLeft;
	
    if (deMDialogTop>0) {
        if ((deMDialogHeight+deMDialogTop)<(documentHeight+100)) {
            deMDialog.css({'top': deMDialogTop});	
        } else {
            deMDialog.css({'top': '50px'});	
        }
    } else {
            deMDialog.css({'top': '100px'});	
    }    

    if (deMDialogLeft>0) {
        if ((deMDialogWidth+deMDialogLeft)<(documentWidth+100)) {
            deMDialog.css({'left': deMDialogLeft});	
        } else {
            deMDialog.css({'left': '50px'});	
        }
    } else {
            deMDialog.css({'left': '100px'});	
    }    
	
	deWallHeight=screenHeight+scrollTop;
	deWallWidth=screenWidth+scrollLeft;										// раставляем все так чтобы можно было отобразить

	deWall.width(documentWidth);		
	deWall.height(documentHeight);		


	deShowOpacitySharp('#'+deMDialog_id,deMDialog_opacity);					// устанавливаем непрозрачность для главной оболочки
	if (deWall_visible=="TRUE") {
		/*deShowOpacitySharp('#'+deWall_id,50);*/	// делаем плавное появление заднего фона 
		deShowOpacitySlow('#'+deWall_id,0,deWall_opacity,1);	// делаем плавное появление заднего фона 
	}
	deShowEffect('#'+deMDialog_id,deEffect,deSpeed);				// 	делаем плавное появление всплывающего окна

  });																		// и потом вернуть все на место

});

$('span.'+debtnClose_class+' a').live("click", function(){   				// если нажали на ссылку закрывающую наше модальное окно 

	deShowEffect('#'+deMDialog_id,deEffect,deSpeed);			// вызываем эффект который плавно скроет наше окно 

	if (deWall_visible=="TRUE") {
		/*deShowOpacitySharp('#'+deWall_id,0);*/		// делаем плавное появление заднего фона 
		deShowOpacitySlow('#'+deWall_id,deWall_opacity,0,1);	// делаем плавное появление заднего фона 
	}


	$('#'+deMDialog_id+'Dement').animate({top: '1px'},deSpeed,"linear",function(){		// ложная анимация чтобы подождать когда закончатся все эффекты
		deShowDialog_css();	
		});											// и потом вернуть все на место

});

$('a.deModalDialogbtnClose').live("mouseover", function(){   				// увеличиваем непрозрачность кнопки закрыть при наведении на нее мышью	

	deShowOpacitySlow('a.deModalDialogbtnClose',60,100,300);

});

$('a.deModalDialogbtnClose').live("mouseout", function(){   				// уменьшаем непрозрачность кнопки закрыть если курсор мыши уходит с нее 	

	deShowOpacitySlow('a.deModalDialogbtnClose',100,60,300);

});



function deShowDialog_css() {
							// CSS 											// расписываем стили
	deMDialog=$('#'+deMDialog_id);											// стили для главного окна
	deMDialog.css({'position': 'absolute'});		
	deMDialog.css({'display': 'none'});		
	deMDialog.css({'float': 'left'});		
	deMDialog.css({'top': '0'});		
	deMDialog.css({'left': '0'});		
	deMDialog.css({'width': deWidth});		
	deMDialog.css({'height': 'auto'});										// высота определяется автомат. ( равна высоте заголов.+главного дива)
	deMDialog.css({'border': deMDialog_border});							
	deMDialog.css({'z-index': deMDialog_zIndex});							// z-index устанавливает разработчик

	deUpLine=$('#'+deUpLine_id);											// стили для линии с заголовком 
	deUpLine.css({'font-family': deUpLine_fontFamily});		
	deUpLine.css({'font-size': deUpLine_fontSize});		
	deUpLine.css({'color': deUpLine_fontColor});		
	deUpLine.css({'display': 'block'});		
	deUpLine.css({'float': 'left'});		
	deUpLine.css({'width': (deMDialog.width()-20)});		
	deUpLine.css({'line-height': deUpLine_height});		
	deUpLine.height(deUpLine_height);		
	//document.getElementById(deUpLine_id).offsetHeight=100;
	deUpLine.css({'padding': '0 10px 0 10px'});		
	deUpLine.css({'text-align': deUpLine_textAlign});		
	deUpLine.css({'background': deUpLine_background});		

	deContent=$('#'+deContent_id);			
	deContent.css({'font-family': deContent_fontFamily});					// стили для дива в котором будет текст
	deContent.css({'font-size': deContent_fontSize});		
	deContent.css({'color': deContent_fontColor});		
	deContent.css({'display': 'block'});		
	deContent.css({'float': 'left'});		
	deContent.css({'width': (deMDialog.width()-20)});		
	deContent.css({'height': deHeight});		
	//document.getElementById(deContent_id).offsetHeight=200;
	//deContent.width(deMDialog.width()-20);		
	//deContent.height(deHeight);		
	deContent.css({'padding': '10px 10px 10px 10px'});		
	deContent.css({'clear': 'both'});		
	deContent.css({'text-align': deContent_textAlign});		
	deContent.css({'background': deContent_background});		

	deWall=$('#'+deWall_id);												// стили для дива который блокирует и закрывает весь документ
	deWall.css({'position': 'absolute'});		
	deWall.css({'display': 'none'});		
	deWall.css({'float': 'left'});		
	deWall.css({'top': '0'});		
	deWall.css({'left': '0'});		
//	deWall.css({'width': deGetDocumentSize().width});		
//	deWall.css({'height': deGetDocumentSize().height});		
	deWall.css({'background': deWall_background});		
	deWall.css({'z-index': (deMDialog_zIndex-1)});							// тут внимание на том что z-index делаем меньше чем у самой оболочки
	deWall.height(deGetDocumentSize().height);
	deWall.width(deGetDocumentSize().width);
	
	deBtnClose=$('a.deModalDialogbtnClose');								// стили для кнопки "закрыть" 
	deBtnClose.css({'position': 'absolute'});		
	deBtnClose.css({'display': 'block'});		
	deBtnClose.css({'float': 'left'});		
	deBtnClose.css({'top': '8px'});		
	deBtnClose.css({'right': '10px'});		
	deBtnClose.css({'width': '16px'});		
	deBtnClose.css({'height': '16px'});		
	deBtnClose.css({'background': debtnClose_background});		
	deBtnClose.css({'text-decoration': 'none'});		


}


	return "Dement.ru";
				// 2010  НВП "Стандарт-Н" 
	}
});
									 



