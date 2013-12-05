/*standart-n.ru*/				 
var addClass=jQuery.Class.create({
init: function(de){$(document).ready(function () {		
addClass_init();
$(de.object).addClass(de.className);
});				
function addClass_init() {
   if (de.object==undefined) {de.object="#primary";}
   if (de.className==undefined) {de.className="myClass";}
}										
return "Dement.ru";}
});	

