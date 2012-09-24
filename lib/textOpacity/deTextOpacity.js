// Dement.ru				 
										
var deTextOpacity = jQuery.Class.create({  // изменение непрозрачности фона объекта 
									    
  init: function(deTargetDiv_id,		 // id div'a с текстом	
				 deEventStart,			 // событие после которого начинается движение	
				 deEventFinish,			 // событие по которому заканчивается перетаскивание
				 deSpeed,				 // событие по которому заканчивается перетаскивание
				 deTextOpSt,			 // начальный горизонтальный скролл	
				 deTextOpFn,			 // начальный вертикальный скролл
				 deBackOpSt,			 // начальный горизонтальный скролл	
				 deBackOpFn,			 // начальный вертикальный скролл
				 deBackground,			 // путь к картинке с увеличенным просмотром
				 deZindex,				 // Z-index	
				 deBackDiv_id			 // id div блок с увеличенным просмотром
				 //deTimeBefore			 // время задержки эффектов до начала скрипта 	
				 ){				
				 
  
$(document).ready(function () {			

	//document.getElementById(deParentDiv_id).innerHTML+='<div id="'+deBackDiv_id+'Dement"></div><div id="'+deBackDiv_id+'"></div>'			
	//document.body.innerHTML+='<div id="'+deBackDiv_id+'Dement"></div><div id="'+deBackDiv_id+'"></div>';
	deText=$('#'+deTargetDiv_id).parent().html();
	$('#'+deTargetDiv_id).parent().html('<div id="'+deBackDiv_id+'Dement"></div><div id="'+deBackDiv_id+'"></div>'+deText);
	deTextOpacity_css();								// устанавливаем всю стилизацию для нашего скрипта 
		//deShowOpacitySlow('#'+deTargetDiv_id,deTextOpSt,deTextOpFn,deSpeed);
		//alert('js');
	deFlag="OFF";

});																		

$('#'+deBackDiv_id).live(deEventStart, function(){   	// действия при начальном событии :

//	if(deFlag=="OFF") {
		deShowOpacitySlow('#'+deTargetDiv_id,deTextOpSt,deTextOpFn,deSpeed);
		deShowOpacitySlow('#'+deBackDiv_id,deBackOpFn,deBackOpSt,deSpeed);
		deFlag="ON";
//	}
});

$('#'+deTargetDiv_id).live(deEventStart, function(){   	// действия при начальном событии :

//	if(deFlag=="OFF") {
		deShowOpacitySlow('#'+deTargetDiv_id,deTextOpSt,deTextOpFn,deSpeed);
		deShowOpacitySlow('#'+deBackDiv_id,deBackOpFn,deBackOpSt,deSpeed);
		deFlag="ON";
//	}
});


$('#'+deBackDiv_id).live(deEventFinish, function(){						
	
//	if(deFlag=="ON") {
		deShowOpacitySlow('#'+deTargetDiv_id,deTextOpFn,deTextOpSt,deSpeed);
		deShowOpacitySlow('#'+deBackDiv_id,deBackOpSt,deBackOpFn,deSpeed);
		deFlag="OFF";
//	}
});

$('#'+deTargetDiv_id).live(deEventFinish, function(){						
	
//	if(deFlag=="ON") {
		deShowOpacitySlow('#'+deTargetDiv_id,deTextOpFn,deTextOpSt,deSpeed);
		deShowOpacitySlow('#'+deBackDiv_id,deBackOpSt,deBackOpFn,deSpeed);
		deFlag="OFF";
//	}
});


function deTextOpacity_css() { 

	$('#'+deTargetDiv_id).css({'z-index': (deZindex+1)});				 			
	deWidth=$('#'+deTargetDiv_id).width();
	deHeight=$('#'+deTargetDiv_id).height();
	//deTop=deGetObjectPagePos(deTargetDiv_id).top;
	//deLeft=deGetObjectPagePos(deTargetDiv_id).left;
	deTop=$('#'+deTargetDiv_id).css('top');
	deLeft=$('#'+deTargetDiv_id).css('left');
	//deWidth=$('#'+deTargetDiv_id).css('width');
	//deHeight=$('#'+deTargetDiv_id).css('height');
	dePadding=$('#'+deTargetDiv_id).css('padding');
	deMargin=$('#'+deTargetDiv_id).css('margin');
	deBorder=$('#'+deTargetDiv_id).css('border');

	backDiv=$('#'+deBackDiv_id);  
	backDiv.css({'position': 'absolute'});
	backDiv.css({'display': 'block'});
	backDiv.css({'float': 'left'});
	backDiv.css({'top': deTop});
	backDiv.css({'left': deLeft});
	backDiv.css({'padding': dePadding});
	backDiv.css({'margin': deMargin});
	backDiv.css({'border': deBorder});
	//backDiv.css({'width': deWidth});
	//backDiv.css({'height': deHeight});
	backDiv.width(deWidth);
	backDiv.height(deHeight);
	backDiv.css({'background': deBackground});
	backDiv.css({'z-index': deZindex});
	deShowOpacitySharp('#'+deTargetDiv_id,deTextOpSt);		
 	deShowOpacitySharp('#'+deBackDiv_id,deBackOpFn);		
	
}



	return "Dement.ru";												
  }				// 2010 НВП "Стандарт-Н"


});	



