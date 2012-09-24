	//Dement.ru										// модуль для создания на сайте всплывающего окна 
var deShowEasyDialog = jQuery.Class.create({		
	init: function(deObject_id,								// объект, с которым свяжется событие вызова модального окна
				   deStartEvent,							// событие при котором вылезет всплывающее окно
				   deWidth,									//	ширина окна
				   deContent_text,							//	текст внутри окна
				   deMDialog_zindex,						//	z-index порядок слоя
				   deMDialog_id,							//	id главного дива окна
                   deCloseClass,                                 //  объект при нажатии на который будет происходить скрытие окна                       
				   deTimeBefore     						//	время задержки до начала скрипта
				   ){		
								 										
								  	
$(document).ready(function() {		

	deCode='<div id="'+deMDialog_id+'Dement"></div>'+
				'<div id="'+deMDialog_id+'">'+								// внутри рисуем оболочку с всплывающим окном	
    				'<div id="'+deMDialog_id+'Line">'+
                        '<span class="'+deCloseClass+'">'+
                            '<a title="Закрыть" id="'+deMDialog_id+'Close" href="#de">x</a>'+
                        '</span>'+
                    '</div>'+		
					'<div id="'+deMDialog_id+'content">'+deContent_text+'</div>'+
				'</div>';  													// закрываем 
				
	document.body.innerHTML+=deCode;										// всовываем сгенерированный код в документ 	

	deEasyDialog_css(); 													// стилизуем все объекты используя функцию которая описана внизу	


});

$('#'+deObject_id).live(deStartEvent, function(){   						// если на заданном объекте случилось необходимое событие то необходимо вывести наше окно

  $('#'+deMDialog_id+'Dement').animate({top: '1px'},deTimeBefore,"linear",function(){		// ложная анимация чтобы подождать когда закончатся все предыдущие эффекты на странице

	deEasyDialog_css();


	deMDialog=$('#'+deMDialog_id);											// объявляем объекты 
	deMDialog.css({'display': 'none'});		

	deMDialogTop=100;
	deMDialogLeft=100;

	deShowOpacitySharp('#'+deMDialog_id,100);					// устанавливаем непрозрачность для главной оболочки
	deShowEffect('#'+deMDialog_id,"SharpEffect",200);				// 	делаем плавное появление всплывающего окна

  });																		// и потом вернуть все на место

});

$('.'+deCloseClass+' a').live("click", function(){   				// если нажали на ссылку закрывающую наше модальное окно 

	deShowEffect('#'+deMDialog_id,"SharpEffect",200);			// вызываем эффект который плавно скроет наше окно 

	//$('#'+deMDialog_id+'Dement').animate({top: '1px'},200,"linear",function(){		// ложная анимация чтобы подождать когда закончатся все эффекты
		deEasyDialog_css();	
	//});											// и потом вернуть все на место

});




function deEasyDialog_css() {
							// CSS 											// расписываем стили
	deMDialog=$('#'+deMDialog_id);											// стили для главного окна
	deMDialog.css({'position': 'absolute'});		
	deMDialog.css({'display': 'none'});		
	deMDialog.css({'float': 'left'});		
	deMDialog.css({'width': deWidth});		
	deMDialog.css({'height': 'auto'});										// высота определяется автомат. ( равна высоте заголов.+главного дива)
	deMDialog.css({'border': '#999999 solid 1px'});							
	deMDialog.css({'z-index': deMDialog_zindex});							// z-index устанавливает разработчик
	deMDialog.css({'background': '#ffffff'});		

	deContent=$('#'+deMDialog_id+'content');			
	deContent.css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});					// стили для дива в котором будет текст
	deContent.css({'font-size': '12px'});		
	deContent.css({'color': '#000000'});		
	deContent.css({'display': 'block'});		
	deContent.css({'float': 'left'});		
	deContent.css({'width': (deMDialog.width()-4)});		
	deContent.css({'height': 'auto'});		
	deContent.css({'padding': '2px'});		
	deContent.css({'clear': 'both'});		
	deContent.css({'text-align': 'left'});		

	deLine=$('#'+deMDialog_id+'Line');			
	deLine.css({'display': 'block'});		
	deLine.css({'float': 'left'});		
	deLine.css({'width': (deMDialog.width()-4)});		
	deLine.css({'height': '15px'});		
	deLine.css({'clear': 'both'});		

	deClose=$('#'+deMDialog_id+'Close');			
	deClose.css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});
	deClose.css({'font-weight': 'bold'});
	deClose.css({'font-size': 'small'});
	deClose.css({'display': 'block'});		
	deClose.css({'float': 'right'});		
	deClose.css({'color': '#666699'});		
	deClose.css({'text-decoration': 'none'});		

}


	return "Dement.ru";
				// 2010  НВП "Стандарт-Н" 
	}
});
									 



