			// Dement.ru				 
										 // имя класса лучше всего называть так же как и js файл  ( для удобства)  					
var dePhotoPre = jQuery.Class.create({   // прежде всего объявляем класс и записываем все переменные, обязательно комментируем каждое действие и каждую переменную 
									     // важно что в классе описываются только функции которые реагируют на какие либо события, все остальное описывается за классом 
										 // к переменным для красоты я делаю приставку de  - это просто как фирменная подпись dement.ru 
  init: function(deParentDiv_id,		 //	родительский див (див в который будет вставлен HTML код 
				 deImage_id,			 // id картинки при наведении на которую запустится скрипт 
				 deImage_path,			 // путь к картинке с увеличенным просмотром
				 deEffect,				 // тип эффекта появления объекта
				 deSpeed,				 // скорость этого плавного появления 
				 dePosition,			 // POSITION - позиционирование блока (CSS)
				 deTop,					 // TOP  - расположение увелич. просмотра (CSS)
				 deLeft,				 // LEFT
				 deWidth,				 // WIDTH
				 deHeight,				 // HEIGHT
				 deZindex,				 // Z-index	
				 deBorder,				 // Border 	
				 deMoveDiv_id,			 // id div блок с увеличенным просмотром
				 deMoveImg_id,			 // id img картинка увелич. просмотра
				 deTimeBefore			 // время чтобы подождать пока закончатся все эффекты на странице (достаточно и 10мс) 
				 ){						 // заканчиваем описание и приступаем к действию 
				 
				 						//  !!! лучше поменьше использовать var !!! 
										//      я понял что лучше работать с локальными переменными, тогда точно не будет 
										//		глючить при многократном использовании одного класса на странице + переменные не будут путаться. 
  
$(document).ready(function () {			// сначала описываем действия при загрузке страницы

	deParentDiv=document.getElementById(deParentDiv_id);				// находим родительский див и вставляем в него необходимый нам HTML код 
	deParentDiv.innerHTML=deParentDiv.innerHTML+'<div id="'+deMoveDiv_id+'Dement"></div><div id="'+deMoveDiv_id+'"><img id="'+deMoveImg_id+'" align="center" src="'+deImage_path+'"></div>';

	dePhotoPre_css();													// устанавливаем всю стилизацию для нашего срипта (функция всегда описана внизу)

});																		// больше никаких действий при загрузке 

$('#'+deImage_id).live("mouseover", function(){   						// действия при наведении мышью на картинку 

  $('#'+deMoveDiv_id+'Dement').animate({top: '1px'},deTimeBefore,"linear",function(){		// ложная анимация чтобы подождать когда закончатся все эффекты

	dePhotoPre_css();													// стилизуем 
											
	deShowEffect('#'+deMoveDiv_id,deEffect,deSpeed);					// эффект появления


  });																

$('#'+deImage_id).live("mouseover", function(e){  	

	$('#'+deImage_id).css({'cursor': 'pointer'});		// меняем курсор мыши

});

$('#'+deImage_id).live("mousemove", function(e){ 						// действия когда человек водит мышью по диву

	staticImg=$('#'+deImage_id);										// объявляем переменные и начинаем работу 	
	moveImg=$('#'+deMoveImg_id);
	moveDiv=$('#'+deMoveDiv_id);  									
	$('#'+deImage_id).css({'cursor': 'pointer'});		// меняем курсор мыши
																	
	//deShowEffect('#'+deMoveDiv_id,deEffect,deSpeed);

		staticImgWidth=staticImg.width(); 									// параметры статичной картинки
		staticImgHeight=staticImg.height();
		moveImgWidth=moveImg.width();   					 				// параметры появляющейся картинки
		moveImgHeight=moveImg.height();
		leftStep=staticImgWidth/2; 											// отступы для расположения увеления по центру
		topStep=staticImgHeight/2;

		yConst=moveImgHeight/staticImgHeight;
		xConst=moveImgWidth/staticImgWidth;   							// пропорции двух картинок 
	
		xpos=(e.pageX-staticImg.offset().left)*xConst-leftStep;			// расчитывем перемещение картинки 
		ypos=(e.pageY-staticImg.offset().top)*yConst-topStep; 
	
		moveDiv.scrollLeft(xpos);    									// меняем скролл дива (сдвигаем картинку )
		moveDiv.scrollTop(ypos);

});


$('#'+deImage_id).live("mouseout", function(){							// действия при уходе мышки с дива 
	
	deShowEffect('#'+deMoveDiv_id,deEffect,deSpeed);

	$('#'+deMoveDiv_id+'Dement').animate({top: '1px'},deSpeed,"linear",function(){		// ложная анимация чтобы подождать когда закончатся все эффекты
		dePhotoPre_css();
		  });																

});



});


function dePhotoPre_css() { 

	moveDiv=$('#'+deMoveDiv_id);  										// описываем всю стилизацию для нашего увелич. просмотра 
	moveDiv.css({'position': dePosition});
	moveDiv.css({'display': 'none'});
	moveDiv.css({'float': 'left'});
	moveDiv.css({'top': deTop});
	moveDiv.css({'left': deLeft});
	//moveDiv.css({'width': deWidth});
	//moveDiv.css({'height': deHeight});
	moveDiv.height(deHeight);
	moveDiv.width(deWidth);
	moveDiv.css({'border': deBorder});
	moveDiv.css({'z-index': deZindex});
	moveDiv.css({'overflow': 'hidden'});				 				// скрываем скролл 
}



	return "Dement.ru";													// просто подпись
  }				// 2010 НВП "Стандарт-Н"


});	



