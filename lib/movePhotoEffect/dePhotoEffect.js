// Dement.ru				 
										
var dePhotoEffect = jQuery.Class.create({  // Перемещение фотографии внутри блока
									    
										
  init: function(deParentDiv_id,		 //	родительский див (див в который будет вставлен HTML код 
				 deImage_path,			 // путь к картинке с увеличенным просмотром
				 deEventStart,			 // событие после которого начинается движение	
				 deEventFinish,			 // событие по которому заканчивается перетаскивание
				 deScrollLeft,			 // начальный горизонтальный скролл	
				 deScrollTop,			 // начальный вертикальный скролл
				 deWidth,				 // WIDTH
				 deHeight,				 // HEIGHT
				 deReturnScroll,		 //	возвращать или нет скролл по окончании перемещения
				 deZindex,				 // Z-index	
				 deMoveDiv_id			 // id div блок с увеличенным просмотром
				 ){				
				 
  
$(document).ready(function () {			

	deParentDiv=document.getElementById(deParentDiv_id);				// находим родительский див и вставляем в него необходимый нам HTML код 
	deParentDiv.innerHTML=deParentDiv.innerHTML+'<div id="'+deMoveDiv_id+'Dement"></div><div id="'+deMoveDiv_id+'"></div>';

	dePhotoEffect_css();													// устанавливаем всю стилизацию для нашего срипта 
	$('#'+deParentDiv_id).scrollLeft(deScrollLeft);    						// устанавливаем начальный скролл объекта		
	$('#'+deParentDiv_id).scrollTop(deScrollTop);
	deFlag="false"; 

});

$('#'+deMoveDiv_id).live("mouseover", function(e){  	

	$('#'+deMoveDiv_id).css({'cursor': 'move'});		// меняем курсор мыши

});
																		

$('#'+deMoveDiv_id).live(deEventStart, function(){   	// действия при начальном событии :
														// начинаем передвижение картинки взависимости от курсора


	dePhotoEffect_css();								// еще раз все стилизуем					
	deFlag="true"; 										// поднимаем флаг : перетаскивание началось 			
	$('#'+deMoveDiv_id).css({'cursor': 'move'});		// меняем курсор мыши

});


$('#'+deMoveDiv_id).live("mousemove", function(e){ 						

    $('#'+deParentDiv_id).stop();
	parentDiv=$('#'+deParentDiv_id);  									
	moveDiv=$('#'+deMoveDiv_id);  									
													// все перемещение картинки осуществляется через изменение значений скролла род. контейнера			
	if (deFlag=="true") {								// если флаг поднят то переопределяем значения скролла 
	
		xpos=(e.pageX-parentDiv.offset().left)*(moveDiv.width()-parentDiv.width())/(parentDiv.width());	// высчитываем новые значения		
		ypos=(e.pageY-parentDiv.offset().top)*(moveDiv.height()-parentDiv.height())/(parentDiv.height()); 
		parentDiv.scrollLeft(xpos);    								
		parentDiv.scrollTop(ypos);

		/*
		animSpeed=Math.sqrt(Math.pow(((parentDiv.width()/2)-(e.pageX-parentDiv.offset().left))/10,2)+Math.pow(((parentDiv.height()/2)-(e.pageY-parentDiv.offset().top))/10,2))/deSpeed;
		parentDiv.animate({
			scrollLeft: xpos,
			scrollTop: ypos
			}, 
			animSpeed,
			"linear",
			function(){
			}
		);*/

		parentDiv.css({'cursor': 'move'});				// меняем курсор мыши
	}
	
});


$('#'+deMoveDiv_id).live(deEventFinish, function(){						
	
    $('#'+deParentDiv_id).stop();
	deFlag="false"; 									// опускаем флаг
	dePhotoEffect_css();								// проводим стилизацию
	
	if (deReturnScroll=="TRUE") {						// если нужно то возвращаем начальные значения скролла 
		$('#'+deParentDiv_id).scrollLeft(deScrollLeft);    								
		$('#'+deParentDiv_id).scrollTop(deScrollTop);
	}


});



function dePhotoEffect_css() { 

	moveDiv=$('#'+deMoveDiv_id);  										// описываем всю стилизацию для картинки внутри родительского контейнера 
	moveDiv.css({'position': 'absolute'});
	moveDiv.css({'display': 'block'});
	moveDiv.css({'float': 'left'});
	moveDiv.css({'top': '0px'});
	moveDiv.css({'left': '0px'});
	moveDiv.css({'background': 'url('+deImage_path+') no-repeat center'});
	moveDiv.height(deHeight);
	moveDiv.width(deWidth);
	moveDiv.css({'z-index': deZindex});
	
	
	parentDiv=$('#'+deParentDiv_id);
	parentDiv.css({'overflow': 'hidden'});				 			
	parentDiv.css({'cursor': 'auto'});								
}



	return "Dement.ru";												
  }				// 2010 НВП "Стандарт-Н"


});	



