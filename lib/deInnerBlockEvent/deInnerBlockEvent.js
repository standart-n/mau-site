/*standart-n.ru*/				 
var innerBlockEvent=jQuery.Class.create({ 
init: function(de){$(document).ready(function () {
innerBlockEvent_init();
$(de.target).live(de.event, function(){   
deParent=document.getElementById(de.parentId);	
    if (de.place=="after") { deParent.innerHTML=deParent.innerHTML+de.html; }
    if (de.place=="before") { deParent.innerHTML=de.html+deParent.innerHTML; }
    if (de.place=="place") { deParent.innerHTML=de.html; }
});														
$(de.target).live("mouseover", function(e){ $(de.target).css({'cursor': 'pointer'}); });
});		
function innerBlockEvent_init(){
    if (de.target==undefined) {de.target=".link";}
    if (de.event==undefined) {de.event="click";}
    if (de.parentId==undefined) {de.parentId="primary";}
    if (de.html==undefined) {de.html="Hello,world";}
    if (de.place==undefined) {de.place="after";}
}												
return "Dement.ru";}
});	

