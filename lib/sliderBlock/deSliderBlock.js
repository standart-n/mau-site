// Dement.ru				 
										
var deSliderBlock = jQuery.Class.create({  // 
									    
  init: function(deParentDiv_id,		 // id div'a с текстом	
				 deEventStart,			 // событие после которого начинается движение	
				 deEventFinish,			 // событие по которому заканчивается перетаскивание
				 deSpeed,				 // событие по которому заканчивается перетаскивание
				 dePosition,			 // позиционирование данного "спойлера"
				 deLeft,				 // положение : отступ слева	
				 deTop,					 // отступ сверху 	
				 deCap_textOFF,			 // содержимое при закрытой вкладке 	
				 deCap_textON,			 // содержимое при открытой вкладке 	
				 deCap_width,			 // ширина заголовка слайдера	
				 deCap_height,			 // его высота
				 deCap_backgroundOFF,    // ее задний фон при скрытой вкладке
				 deCap_backgroundON,	 // фон при раскрытой вкладке 	
				 deCap_borderOFF,		 // граница при закрытой вкладке 	
				 deCap_borderON,		 // граница при раскрытой вкладке 	
				 deTab_text,			 // основное содержимое слайдера	
				 deTab_width,			 // ширина слайдера  	
				 deTab_height,			 // высота слайдера
				 deTab_background,       // задний фон 
				 deTab_border,			 // границы	
				 deOpen,				 // начальное состояние :открыта или закрыта  
				 deZindex,				 // css z-index 	
				 deSlider			     // id дива слайдера 
				 ){				
				 
  
$(document).ready(function () {			

	//document.body.innerHTML+='<div id="'+deSlider+'Dement"></div><div id="'+deSlider+'"><div id="'+deSlider+'Cap">'+deCap_text+'</div><div id="'+deSlider+'Tab">'+deTab_text+'</div></div>'			
	// вставляем html код в нужный див 
	document.getElementById(deParentDiv_id).innerHTML+='<div id="'+deSlider+'Dement"></div><div id="'+deSlider+'"><div id="'+deSlider+'Cap"></div><div id="'+deSlider+'Tab">'+deTab_text+'</div></div>';			

	deSliderBlock_css();								// устанавливаем всю стилизацию для нашего скрипта 

});																		


$('#'+deSlider+'Cap').live('mouseover', function(){

	$('#'+deSlider+'Cap').css({'cursor': 'pointer'});		// меняем курсор мыши

});

$('#'+deSlider+'Cap').live('mouseleave', function(){

	$('#'+deSlider+'Cap').css({'cursor': 'auto'});			// меняем курсор мыши

});


$('#'+deSlider+'Cap').live(deEventStart, function(){   	// скрытие слайдера 

	 if ($('#'+deSlider+'Tab').is(":visible")) {  // если открыт 

		$('#'+deSlider+'Tab').slideUp(deSpeed);   // скрываем 
		document.getElementById(deSlider+'Cap').innerHTML=deCap_textOFF; // меняем текст заголовка 
		$('#'+deSlider+'Cap').css({'background': deCap_backgroundOFF});  // меняем задний фон 
		$('#'+deSlider+'Cap').css({'border': deCap_borderOFF});  // меняем границы 
	 }

});


$('#'+deSlider+'Cap').live(deEventFinish, function(){ // раскрытие слайдера 						

	 if ($('#'+deSlider+'Tab').is(":hidden")) {
		$('#'+deSlider+'Tab').slideDown(deSpeed);
		document.getElementById(deSlider+'Cap').innerHTML=deCap_textON;
		$('#'+deSlider+'Cap').css({'background': deCap_backgroundON}); 
		$('#'+deSlider+'Cap').css({'border': deCap_borderON}); 
	}

});




function deSliderBlock_css() { 

	slider=$('#'+deSlider);				 		// внешний див 	
	slider.css({'position': dePosition});
	slider.css({'display': 'block'});
	slider.css({'float': 'left'});
	slider.css({'top': deTop});
	slider.css({'left': deLeft});
	slider.css({'width': 'auto'});
	slider.css({'height': 'auto'});
	slider.css({'z-index': deZindex});

	slider=$('#'+deSlider+'Cap');				// див с заголовком  			
	slider.css({'display': 'block'});
	slider.css({'float': 'left'});
	slider.css({'width': deCap_width});
	if (deCap_height!="auto") {
		slider.css({'line-height': deCap_height});
	}
	slider.css({'height': deCap_height});
	if (deOpen=="ON") {
		slider.css({'background': deCap_backgroundON}); 
		slider.css({'border': deCap_borderON});
		document.getElementById(deSlider+'Cap').innerHTML=deCap_textON;
	} else {
		slider.css({'background': deCap_backgroundOFF}); 
		slider.css({'border': deCap_borderOFF});
		document.getElementById(deSlider+'Cap').innerHTML=deCap_textOFF;
	}
	
	slider=$('#'+deSlider+'Tab');			// див который выезает или скрывается 	 			
	slider.css({'display': 'block'});
	slider.css({'float': 'left'});
	slider.css({'width': deTab_width});
	slider.css({'height': deTab_height});
	slider.css({'border': deTab_border});
	slider.css({'background': deTab_background});
	slider.css({'clear': 'both'});
	slider.css({'overflow': 'hidden'});

	if (deOpen=="OFF") {					// если изначально спойлер скрыт то скрываем его 
		$('#'+deSlider+'Tab').css({'display': 'none'});
		$('#'+deSlider+'Tab').slideUp(1);
	}

}



	return "Dement.ru";												
  }				// 2010 НВП "Стандарт-Н"


});	



