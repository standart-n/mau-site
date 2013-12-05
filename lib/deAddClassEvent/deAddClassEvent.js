/*standart-n.ru*/				 
var addClassEvent=jQuery.Class.create({ 
init: function(de){$(document).ready(function(){
addClassEvent_init();
$(de.target).live(de.event, function(){  
    $(de.object).addClass(de.className);
});														
$(de.target).live("mouseover", function(e){  	
    $(de.target).css({'cursor': 'pointer'});
});
});														
function addClassEvent_init(){
    if (de.target==undefined) {de.target=".link";}
    if (de.event==undefined) {de.event="click";}
    if (de.object==undefined) {de.object="#block";}
    if (de.className==undefined) {de.className="myClass";}
}												
return "Dement.ru";}
});	

