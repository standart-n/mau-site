/*standart-n*/				 
var innerBlock=jQuery.Class.create({ 
init: function(de){$(document).ready(function(){
    innerBlock_init();
	deParent=document.getElementById(de.parentId);	
	if (de.place=="after") { deParent.innerHTML=deParent.innerHTML+de.html; }
	if (de.place=="before") { deParent.innerHTML=de.html+deParent.innerHTML; }
	if (de.place=="place") { deParent.innerHTML=de.html; }
});		
function innerBlock_init(){
    if (de.parentId==undefined) {de.parentId="primary";}
    if (de.html==undefined) {de.html="Hello,world";}
    if (de.place==undefined) {de.place="after";}
}												
return "dement.ru";}
});	

