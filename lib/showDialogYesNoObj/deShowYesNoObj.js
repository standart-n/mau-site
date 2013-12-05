	//Dement.ru										// модуль для создания на сайте всплывающего окна 
var deShowYesNoObj = jQuery.Class.create({		
	init: function(deObject,								// объект, с которым свяжется событие вызова модального окна
				   deStartEvent,							// событие при котором вылезет всплывающее окно
				   deUpLine_caption,						//	заголовок окна	
				   deContent_text,							//	текст внутри окна
				   deButtonYes,								//	значение кнопки Да
				   deLinkYes,								// 	ссылка кнопки Да
				   deFunctionYes,							//	функция кнопки Да
				   deButtonNo,								//	значение кнопки Нет
				   deLinkNo,								// 	ссылка кнопки Нет	
				   deFunctionNo,							//	функция кнопки Нет
				   deMDialog_id,							//	id главного дива окна
				   deMDialog_zIndex,						//	z-index порядок слоя
				   deTimeBefore     						//	время задержки до начала скрипта
				   ){		
								
								
$(document).ready(function() {		

	deCode='<div id="'+deMDialog_id+'Dement"></div>'+
				'<div id="'+deMDialog_id+'Wall"></div>'+							// добавляем в наш документ див с задним фоном которым все закрашивается 
				'<div id="'+deMDialog_id+'">'+								// внутри рисуем оболочку с всплывающим окном	
					'<div id="'+deMDialog_id+'Upline">'+deUpLine_caption+'</div>';			//	добавляем див с заголовком
			deCode+='<div id="'+deMDialog_id+'Content">'+deContent_text+'</div>'+
					'<div id="'+deMDialog_id+'BtnLine">'+
						'<span class="de'+deMDialog_id+'Close"><a class="deModalDialogbtnAskYes" onClick="'+deFunctionYes+'" href="'+deLinkYes+'">'+deButtonYes+'</a></span>'+
						'<span class="de'+deMDialog_id+'Close"><a class="deModalDialogbtnAskNo" onClick="'+deFunctionNo+'" href="'+deLinkNo+'">'+deButtonNo+'</a></span>'+
					'</div>'+
				'</div>';  													// закрываем 
				
	document.body.innerHTML+=deCode;										// всовываем сгенерированный код в документ 	

	deShowDialog_css(); 													// стилизуем все объекты используя функцию которая описана внизу	

	deShowOpacitySharp('a.deModalDialogbtnClose',100);	
	deShowOpacitySharp('a.deModalDialogbtnAskYes',100);	
	deShowOpacitySharp('a.deModalDialogbtnAskNo',100);	

});

$(deObject).live(deStartEvent, function(){   						// если на заданном объекте случилось необходимое событие то необходимо вывести наше окно

  $('#'+deMDialog_id+'Dement').animate({top: '1px'},deTimeBefore,"linear",function(){		// ложная анимация чтобы подождать когда закончатся все предыдущие эффекты на странице

	deShowDialog_css();

	documentHeight=deGetDocumentSize().height;								// высота всего документа
	documentWidth=deGetDocumentSize().width;								// ширина всего документа
																			
	screenHeight=deGetScreenSize().height; 									// высота видимой области документа	
	screenWidth=deGetScreenSize().width; 									// ширина данной области
	
	scrollTop=deGetScrollSize().top; 										// находим велечину прокрути скролла
	scrollLeft=deGetScrollSize().left; 

	deMDialog=$('#'+deMDialog_id);											// объявляем объекты 
	deWall=$('#'+deMDialog_id+'Wall');			

	deMDialog.css({'display': 'none'});		
	deWall.css({'display': 'none'});		

	deMDialogHeight=deMDialog.height();										// определяем свойства окна, чтобы оно появилось в центре экрана	
	deMDialogWidth=deMDialog.width();
	deMDialogTop=(screenHeight-deMDialogHeight)/2+scrollTop-100;
	deMDialogLeft=(screenWidth-deMDialogWidth)/2+scrollLeft;
	
	deMDialog.css({'top': deMDialogTop});	
	deMDialog.css({'left': deMDialogLeft});		
	
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

	deWall.width(documentWidth);		
	deWall.height(documentHeight);		


	//deShowOpacitySharp('#'+deMDialog_id,90);					// устанавливаем непрозрачность для главной оболочки
	deShowOpacitySlow('#'+deMDialog_id+'Wall',0,50,10);       
	deShowEffect('#'+deMDialog_id,'OpacityEffect',70);				// 	делаем плавное появление всплывающего окна

  });																		// и потом вернуть все на место

});

$('span.de'+deMDialog_id+'Close a').live("click", function(){   				// если нажали на ссылку закрывающую наше модальное окно 

	deShowEffect('#'+deMDialog_id,'OpacityEffect',100);			// вызываем эффект который плавно скроет наше окно 
	deShowOpacitySlow('#'+deMDialog_id+'Wall',50,0,10);	// делаем плавное появление заднего фона 
    $('#'+deMDialog_id+'Dement').animate({top: '1px'},200,"linear",function(){
        deShowDialog_css();
    });
});


$('a.deModalDialogbtnAskYes').live("mouseover", function(){  

	deShowOpacitySlow('a.deModalDialogbtnAskYes',100,60,60);

});

$('a.deModalDialogbtnAskYes').live("mouseout", function(){   

	deShowOpacitySlow('a.deModalDialogbtnAskYes',60,100,60);

});

$('a.deModalDialogbtnAskNo').live("mouseover", function(){  

	deShowOpacitySlow('a.deModalDialogbtnAskNo',100,60,60);

});

$('a.deModalDialogbtnAskNo').live("mouseout", function(){   

	deShowOpacitySlow('a.deModalDialogbtnAskNo',60,100,60);

});



function deShowDialog_css() {
							// CSS 											// расписываем стили
	deMDialog=$('#'+deMDialog_id);
	/*alert('hello!');*/											// стили для главного окна
	$('#'+deMDialog_id).css({'position': 'absolute'});		
	$('#'+deMDialog_id).css({'float': 'left'});		
	$('#'+deMDialog_id).css({'top': '0'});		
	$('#'+deMDialog_id).css({'left': '0'});		
	$('#'+deMDialog_id).css({'display': 'none'});		
	$('#'+deMDialog_id).css({'width': '300px'});		
	$('#'+deMDialog_id).css({'height': 'auto'});										// высота определяется автомат. ( равна высоте заголов.+главного дива)
	$('#'+deMDialog_id).css({'border': '#333333 solid 1px'});							
	$('#'+deMDialog_id).css({'z-index': deMDialog_zIndex});							// z-index устанавливает разработчик

	deUpLine=$('#'+deMDialog_id+'Upline');											// стили для линии с заголовком 
	deUpLine.css({'font-family':'Verdana, Arial, Helvetica, sans-serif'});		
	deUpLine.css({'font-size':'12px'});		
	deUpLine.css({'color':'#ffffff'});		
	deUpLine.css({'display': 'block'});		
	deUpLine.css({'float': 'left'});		
	deUpLine.css({'width': '280px'});		
	deUpLine.css({'line-height': '30px'});		
	deUpLine.height('30px');		
	//document.getElementById(deUpLine_id).offsetHeight=100;
	deUpLine.css({'padding': '0 10px 0 10px'});		
	deUpLine.css({'text-align':'center'});		
	deUpLine.css({'background':'#003366'});		

	deContent=$('#'+deMDialog_id+'Content');			
	deContent.css({'font-family':'Verdana, Arial, Helvetica, sans-serif'});					// стили для дива в котором будет текст
	deContent.css({'font-size':'10px'});		
	deContent.css({'color':'#000000'});		
	deContent.css({'display': 'block'});		
	deContent.css({'float': 'left'});		
	deContent.css({'width': '280px'});		
	deContent.css({'height':'auto'});		
	deContent.css({'padding': '10px 10px 10px 10px'});		
	deContent.css({'clear': 'both'});		
	deContent.css({'text-align':'left'});		
	deContent.css({'background':'#ffffff'});		

	deContent=$('#'+deMDialog_id+'BtnLine');			
	deContent.css({'font-family':'Verdana, Arial, Helvetica, sans-serif'});					// стили для дива в котором будет текст
	deContent.css({'font-size':'10px'});		
	deContent.css({'color':'#000000'});		
	deContent.css({'display': 'block'});		
	deContent.css({'float': 'left'});		
	deContent.css({'width': '280px'});		
	deContent.css({'height':'auto'});		
	deContent.css({'padding': '10px 10px 10px 10px'});		
	deContent.css({'clear': 'both'});		
	deContent.css({'text-align':'center'});		
	deContent.css({'background':'#ffffff'});		

	deWall=$('#'+deMDialog_id+'Wall');												// стили для дива который блокирует и закрывает весь документ
	deWall.css({'position': 'absolute'});		
	deWall.css({'display': 'none'});		
	deWall.css({'float': 'left'});		
	deWall.css({'top': '0'});		
	deWall.css({'left': '0'});		
	deWall.css({'background':'#000000'});		
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
	deBtnClose.css({'background':'url(http://www.dement.ru/!lib/showModalDialog/img/btnClose.gif) no-repeat center'});		
	deBtnClose.css({'text-decoration': 'none'});		

	deBtnClose=$('a.deModalDialogbtnAskYes');								// стили для кнопки "закрыть" 
	deBtnClose.css({'display': 'block'});		
	deBtnClose.css({'float': 'left'});		
	deBtnClose.css({'width': '120px'});		
	deBtnClose.css({'color': '#000000'});	
	deBtnClose.css({'height': '20px'});	
	deBtnClose.css({'line-height': '20px'});	
	deBtnClose.css({'margin': '5px'});	
	deBtnClose.css({'background':'#cccccc'});		
	deBtnClose.css({'border':'#666666 solid 1px'});		
	deBtnClose.css({'text-decoration': 'none'});		
	deBtnClose.css({'text-align': 'center'});		

	deBtnClose=$('a.deModalDialogbtnAskNo');								// стили для кнопки "закрыть" 
	deBtnClose.css({'display': 'block'});		
	deBtnClose.css({'float': 'left'});		
	deBtnClose.css({'width': '120px'});		
	deBtnClose.css({'color': '#000000'});	
	deBtnClose.css({'height': '20px'});	
	deBtnClose.css({'line-height': '20px'});	
	deBtnClose.css({'margin': '5px'});	
	deBtnClose.css({'background':'#cccccc'});		
	deBtnClose.css({'border':'#666666 solid 1px'});		
	deBtnClose.css({'text-decoration': 'none'});		
	deBtnClose.css({'text-align': 'center'});		


}


	return "Dement.ru";
				// 2010  НВП "Стандарт-Н" 
	}
});
									 



