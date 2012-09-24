	//Dement.ru				 
var deSelectFontSize_easy = jQuery.Class.create({		
	init: function(deParentDiv_id,				// родительский див в который вставится весь HTML код 
				   deSelectFontSize_id			// id главного дива  
				   ){	

$(document).ready(function () {
																				// innerHTML
		deCode='<div id="'+deSelectFontSize_id+'">';  									// главный див
        deCode+='<table cellpadding="0" cellspacing="0" border="0">';
                
		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_xsmall" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='1';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';
        
		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_small" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='2';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_medium" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='3';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_large" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='4';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_xlarge" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='5';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_xxlarge" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='6';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='</table>';
		
		deCode+='<div id="'+deSelectFontSize_id+'Buttons">';								// див с инпутами 
		deCode+='<input id="id'+deSelectFontSize_id+'Click" name="nm'+deSelectFontSize_id+'Click" type="hidden">';
		deCode+='</div>';

		deCode+='</div>';
				
	   deParentDiv=document.getElementById(deParentDiv_id);				 
	   deParentDiv.innerHTML=deParentDiv.innerHTML+deCode;
		
		deSelectFontSize_css(); 							 
		
});

																			

$('#id_xsmall').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="1";    						
});



$('#id_small').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="2";    						
});



$('#id_medium').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="3";    						
});



$('#id_large').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="4";    						
});



$('#id_xlarge').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="5";    						
});




$('#id_xxlarge').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="6";    						
});



function deSelectFontSize_css() {
	
	$('#'+deSelectFontSize_id).css({'display': 'block'});		
	$('#'+deSelectFontSize_id).css({'float': 'left'});
	$('#'+deSelectFontSize_id).css({'height': 'auto'});
	$('#'+deSelectFontSize_id).css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});
	$('#'+deSelectFontSize_id).css({'color': '#000000'});
	$('#'+deSelectFontSize_id).css({'text-align': 'left'});
	$('#'+deSelectFontSize_id).css({'background': '#ffffff'});

	$('.'+deSelectFontSize_id+'Link').css({'display': 'block'});		
	$('.'+deSelectFontSize_id+'Link').css({'float': 'left'});		
	$('.'+deSelectFontSize_id+'Link').css({'clear': 'both'});		
	$('.'+deSelectFontSize_id+'Link').css({'color': '#003366'});		
	$('.'+deSelectFontSize_id+'Link').css({'margin': '1px'});		
    $('.'+deSelectFontSize_id+'Link').css({'text-decoration': 'none'});		
	$('.'+deSelectFontSize_id+'Link').css({'outline': 'none'});		
	
	$('#id_xsmall').css({'font-size': 'x-small'});		
	$('#id_small').css({'font-size': 'small'});		
	$('#id_medium').css({'font-size': 'medium'});		
	$('#id_large').css({'font-size': 'large'});		
	$('#id_xlarge').css({'font-size': 'x-large'});		
	$('#id_xxlarge').css({'font-size': 'xx-large'});		

}

	return "Dement.ru";
					// 2010 НВП "Стандарт-Н"
	}
});
									 




