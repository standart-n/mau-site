	//Dement.ru				 
var deSelectFontSize = jQuery.Class.create({		
	init: function(deParentDiv_id,				// родительский див в который вставится весь HTML код 
				   deSelectFontSize_id			// id главного дива  
				   ){	

$(document).ready(function () {
																				// innerHTML
		deCode='<div id="'+deSelectFontSize_id+'">';  									// главный див
        deCode+='<table cellpadding="0" cellspacing="0" border="0">';
                
		deCode+='<tr><td width="330px">';
        deCode+='<span class="clCloseDlg"><a id="id_xsmall" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='Электрический город электронных мозгов';	 
		deCode+='</a></span>';
        deCode+='</td><td width="70px">';
        deCode+='<div class="cl'+deSelectFontSize_id+'Status" id="id_xsmall_status">x-small</div>';
        deCode+='</td></tr>';
        
		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_small" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='Странный  народ виртуальных миров';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontSize_id+'Status" id="id_small_status">small</div>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_medium" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='Каменных стен Смоговый цвет';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontSize_id+'Status" id="id_medium_status">medium</div>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_large" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='Реки машин SMS-ок ответ';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontSize_id+'Status" id="id_large_status">large</div>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_xlarge" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='Это наш мир это наш век';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontSize_id+'Status" id="id_xlarge_status">x-large</div>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
		deCode+='<span class="clCloseDlg"><a id="id_xxlarge" class="'+deSelectFontSize_id+'Link" title="Нажмите, чтобы выбрать этот размер" href="#de">';
        deCode+='Hi-Tech';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontSize_id+'Status" id="id_xxlarge_status">xx-large</div>';
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

																			

$('#id_xsmall').live("mouseover", function(){
	   $('#id_xsmall_status').css({'display': 'block' });    						
});

$('#id_xsmall').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="1";    						
});

$('#id_xsmall').live("mouseleave", function(){
	   $('#id_xsmall_status').css({'display': 'none' });    						
});


$('#id_small').live("mouseover", function(){
	   $('#id_small_status').css({'display': 'block' });    						
});

$('#id_small').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="2";    						
});

$('#id_small').live("mouseleave", function(){
	   $('#id_small_status').css({'display': 'none' });    						
});


$('#id_medium').live("mouseover", function(){
	   $('#id_medium_status').css({'display': 'block' });    						
});

$('#id_medium').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="3";    						
});

$('#id_medium').live("mouseleave", function(){
	   $('#id_medium_status').css({'display': 'none' });    						
});


$('#id_large').live("mouseover", function(){
	   $('#id_large_status').css({'display': 'block' });    						
});

$('#id_large').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="4";    						
});

$('#id_large').live("mouseleave", function(){
	   $('#id_large_status').css({'display': 'none' });    						
});


$('#id_xlarge').live("mouseover", function(){
	   $('#id_xlarge_status').css({'display': 'block' });    						
});

$('#id_xlarge').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="5";    						
});

$('#id_xlarge').live("mouseleave", function(){
	   $('#id_xlarge_status').css({'display': 'none' });    						
});


$('#id_xxlarge').live("mouseover", function(){
	   $('#id_xxlarge_status').css({'display': 'block' });    						
});

$('#id_xxlarge').live("click", function(){
	   document.getElementById('id'+deSelectFontSize_id+'Click').value="6";    						
});

$('#id_xxlarge').live("mouseleave", function(){
	   $('#id_xxlarge_status').css({'display': 'none' });    						
});


function deSelectFontSize_css() {
	
	$('#'+deSelectFontSize_id).css({'display': 'block'});		
	$('#'+deSelectFontSize_id).css({'float': 'left'});
	$('#'+deSelectFontSize_id).css({'height': 'auto'});
	$('#'+deSelectFontSize_id).css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});
	$('#'+deSelectFontSize_id).css({'color': '#000000'});
	$('#'+deSelectFontSize_id).css({'text-align': 'left'});
	$('#'+deSelectFontSize_id).css({'background': '#ffffff'});

	$('.cl'+deSelectFontSize_id+'Status').css({'display': 'none'});		
    $('.cl'+deSelectFontSize_id+'Status').css({'margin': '2px'});		
    $('.cl'+deSelectFontSize_id+'Status').css({'font-size': '9px'});		
    $('.cl'+deSelectFontSize_id+'Status').css({'color': '#999999'});		

	$('.'+deSelectFontSize_id+'Link').css({'display': 'block'});		
	$('.'+deSelectFontSize_id+'Link').css({'float': 'left'});		
	$('.'+deSelectFontSize_id+'Link').css({'clear': 'both'});		
	$('.'+deSelectFontSize_id+'Link').css({'color': '#003366'});		
	$('.'+deSelectFontSize_id+'Link').css({'margin': '2px'});		
    $('.'+deSelectFontSize_id+'Link').css({'border-bottom': '#003366 dashed 1px'});		
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
									 




