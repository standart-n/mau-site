	//Dement.ru										// модуль для создания на сайте всплывающего окна 
var deDragDrop = jQuery.Class.create({		
	init: function(deObject_id,			// объекта который будет перемещаться вслед за курсором мыши
				   deTarget_id			// объект при нажатии на который сработает скрипт 
				   ){		

$(document).ready(function() {		

	deFlag="false"; 					// устанавливаем флаг 

});

$('#'+deTarget_id).live("mouseover", function(e){  	

	deFlag="false"; 									// опускаем флаг если поднята клавиша мыши
	$('#'+deTarget_id).css({'cursor': 'move'});		// меняем курсор мыши

});

$('#'+deTarget_id).live("click", function(e){  	

	deFlag="true"; 									// опускаем флаг если поднята клавиша мыши

});

$('#'+deTarget_id).live("mousedown", function(e){  		// при нажатии кнопки мыши	

	deObject=$('#'+deObject_id);						
	deLeft=deGetObjectPosition('#'+deObject_id).left;		// определяем положение объекта
	deTop=deGetObjectPosition('#'+deObject_id).top;

	deDeltaX=dePosition(e).x-deLeft;					// расчитываем разнуцу м/д координатой мыши и положением объекта
	deDeltaY=dePosition(e).y-deTop;
	deFlag="true"; 										// поднимаем флаг : перетаскивание началось 			
	$('#'+deTarget_id).css({'cursor': 'move'});			// меняем курсор мыши	



$('#'+deTarget_id).live("mousemove", function(e){		// при движении мышью
	
	if (deFlag=="true") {								// если флаг поднят

		dePosX=dePosition(e).x-deDeltaX;				// расчитываем новые координаты объекта
		dePosY=dePosition(e).y-deDeltaY;	
		document.getElementById(deObject_id).style.left=dePosX + "px";	// передвигаем объект
		document.getElementById(deObject_id).style.top=dePosY + "px";
		$('#'+deTarget_id).css({'cursor': 'move'});		// меняем курсор мыши

	}

  }); 





});


	return "Dement.ru";
				// 2010  НВП "Стандарт-Н" 
	}
});
									 



