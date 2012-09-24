// Dement.ru				 
										 
var deMakeEffect = jQuery.Class.create({ 
										 
  init: function(deParent_id,			// родительский блок в который вставится наш див 		 
				 deObject_html,			// html код блока, который мы хотим анимировать 
				 deSubject_id_open,		// объект к которому привяжется событие появления 		 
				 deEvent_open,			// событие появления 	 
				 deEffect_open,			// эффект появления 	 
				 deSubject_id_close,	// объект к которому привяжется событие скрытия 		 
				 deEvent_close,			// событие скрытия 	 
				 deEffect_close,		// эффект скрытия 		 
				 deSpeed,				// скорость эффектов  
				 dePosition,			// позиционирование генерируемого блока 
				 deTop,					// отступ сверху 
				 deLeft,				// отступ слева 
				 deWidth,				// ширина 
				 deHeight,				// высота  
				 deVisible,				// отображать или нет при загрузке страницы 
				 deZindex,				// зэд-индекс 
				 deObject_id,			// id создаваемого блока
				 deTimeBefore			// время до начала эффекта  
				 ){						 
										
  
$(document).ready(function () {		
															// генерируем код блока с его содержимым и вставляем в родительский див 
	deParent=document.getElementById(deParent_id);			
	deParent.innerHTML=deParent.innerHTML+'<div id="'+deObject_id+'Dement"></div><div id="'+deObject_id+'">'+deObject_html+'</div>';

	deMakeEffect_css();									
	if (deVisible=="visible") {
		moveDiv=$('#'+deObject_id);  				
		moveDiv.css({'display': 'block'});
	} else {
		moveDiv=$('#'+deObject_id);  				
		moveDiv.css({'display': 'none'});
	}
});														

$('#'+deSubject_id_open).live(deEvent_open, function(){   		
														 	// делаем появления объекта при его событии если он скрыт 	
 if ($('#'+deObject_id).is(":hidden")) { 
  $('#'+deObject_id+'Dement').animate({top: '1px'},deTimeBefore,"linear",function(){

	deMakeEffect_css();											
											
	deShowEffect('#'+deObject_id,deEffect_open,deSpeed);			

  });																
 }

});


$('#'+deSubject_id_close).live(deEvent_close, function(){				
															// делаем скрытие объекта при событии которое к нему привязано если он уже отображен на экране
 if ($('#'+deObject_id).is(":visible")) { 
	deShowEffect('#'+deObject_id,deEffect_close,deSpeed);

	$('#'+deObject_id+'Dement').animate({top: '1px'},deSpeed,"linear",function(){	
		deMakeEffect_css();
		  });																
 }

});

  $('#'+deSubject_id_open).live("mouseover", function(e){  	

	$('#'+deSubject_id_open).css({'cursor': 'pointer'});		// меняем курсор мыши

  });

  $('#'+deSubject_id_close).live("mouseover", function(e){  	

	$('#'+deSubject_id_close).css({'cursor': 'pointer'});		// меняем курсор мыши

  });




function deMakeEffect_css() { 
														// стилизация 
	moveDiv=$('#'+deObject_id);  				
	moveDiv.css({'position': dePosition});
	moveDiv.css({'display': 'none'});
	moveDiv.css({'float': 'left'});
	moveDiv.css({'top': deTop});
	moveDiv.css({'left': deLeft});
	moveDiv.height(deHeight);
	moveDiv.width(deWidth);
	moveDiv.css({'z-index': deZindex});
}



	return "Dement.ru";						
  }				// 2010 НВП "Стандарт-Н"


});	

