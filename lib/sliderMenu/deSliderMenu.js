// Dement.ru				 
										
var deSliderMenu = jQuery.Class.create({  // 
									    
  init: function(deParentDiv_id,		 // id div'a с текстом	
				 deObjectStart,			 // объект для события	
				 deEventStart,			 // событие по которому открывается слайдер
				 deObjectFinish,		 // объект для события		
				 deEventFinish,			 // событие по которому закрывается слайдер
				 deSpeed,				 // скорость эффекта
				 dePosition,			 // позиционирование данного "спойлера"
				 deLeft,				 // положение : отступ слева	
				 deTop,					 // отступ сверху 	
				 deCap_textOFF,			 // содержимое при закрытой вкладке 	
				 deCap_textON,			 // содержимое при открытой вкладке 	
				 deCap_width,			 // ширина заголовка слайдера	
				 deCap_height,			 // его высота
				 deTab_text,			 // основное содержимое слайдера	
				 deTab_width,			 // ширина слайдера  	
				 deTab_height,			 // высота слайдера
				 deTab_background,		 // бакграунд	
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


$(deObjectFinish).live(deEventFinish, function(){   	// скрытие слайдера 

	 if ($('#'+deSlider+'Tab').is(":visible")) {  // если открыт 
		$('#'+deSlider+'Tab').slideUp(deSpeed);   // скрываем 
		document.getElementById(deSlider+'Cap').innerHTML=deCap_textOFF; // меняем текст заголовка 
//		$('#'+deSlider+'Cap').css({'background': deCap_backgroundOFF});  // меняем задний фон 
//		$('#'+deSlider+'Cap').css({'border': deCap_borderOFF});  // меняем границы 
	 }

});


$(deObjectStart).live(deEventStart, function(){ // раскрытие слайдера 						

	 if ($('#'+deSlider+'Tab').is(":hidden")) {
		$('#'+deSlider+'Tab').slideDown(deSpeed);
		document.getElementById(deSlider+'Cap').innerHTML=deCap_textON;
//		$('#'+deSlider+'Cap').css({'background': deCap_backgroundON}); 
//		$('#'+deSlider+'Cap').css({'border': deCap_borderON}); 
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
//		slider.css({'background': deCap_backgroundON}); 
//		slider.css({'border': deCap_borderON});
		document.getElementById(deSlider+'Cap').innerHTML=deCap_textON;
	} else {
//		slider.css({'background': deCap_backgroundOFF}); 
//		slider.css({'border': deCap_borderOFF});
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



