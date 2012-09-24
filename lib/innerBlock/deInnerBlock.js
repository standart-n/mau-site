// Dement.ru				 
										 
var deInnerBlock = jQuery.Class.create({ 
										 
  init: function(deParent_id,			// родительский блок в который вставитс€ код
				 deObject_html,			// html код который нужно вставить
				 deParam				// after     before     place	
				 ){						 
										
  
$(document).ready(function () {		
															
	deParent=document.getElementById(deParent_id);		// берем родительский блок	

	if (deParam=="after") {								// если вставл€ем вконец блока
		deParent.innerHTML=deParent.innerHTML+deObject_html;
	}
	if (deParam=="before") {							// если вставл€ем вначало блока	
		deParent.innerHTML=deObject_html+deParent.innerHTML;
	}
	if (deParam=="place") {								// если замен€ем все содержимое блока
		deParent.innerHTML=deObject_html;
	}

});														

	return "Dement.ru";						
  }				// 2010 Ќ¬ѕ "—тандарт-Ќ"


});	

