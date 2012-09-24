	//Dement.ru				 
var deSelectFontType = jQuery.Class.create({		
	init: function(deParentDiv_id,				// родительский див в который вставится весь HTML код 
				   deSelectFontType_id			// id главного дива  
				   ){	

$(document).ready(function () {
																				// innerHTML
		deCode='<div id="'+deSelectFontType_id+'">';  									// главный див
        deCode+='<table cellpadding="0" cellspacing="0" border="0">';
                
		deCode+='<tr><td width="300px">';
        deCode+='<span class="clCloseDlg"><a id="id_serif" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Мир спасает доброта';	 
		deCode+='</a></span>';
        deCode+='</td><td width="70px">';
        deCode+='<div class="cl'+deSelectFontType_id+'Status" id="id_serif_status">serif</div>';
        deCode+='</td></tr>';
        
		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_sansserif" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Она как мудрость всей земли';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontType_id+'Status" id="id_sansserif_status">sans-serif</div>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_cursive" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Нас силой светлой наполняет';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontType_id+'Status" id="id_cursive_status">curisve</div>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_fantasy" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='И взмахом ласковой руки';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontType_id+'Status" id="id_fantasy_status">fantasy</div>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_monospace" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='От всех невзгод оберегает';	 
		deCode+='</a></span>';
        deCode+='</td><td>';
        deCode+='<div class="cl'+deSelectFontType_id+'Status" id="id_monospace_status">monospace</div>';
        deCode+='</td></tr>';

		deCode+='</table>';
		
		deCode+='<div id="'+deSelectFontType_id+'Buttons">';								// див с инпутами 
		deCode+='<input id="id'+deSelectFontType_id+'Click" name="nm'+deSelectFontType_id+'Click" type="hidden">';
		deCode+='</div>';

		deCode+='</div>';
				
	   deParentDiv=document.getElementById(deParentDiv_id);				 
	   deParentDiv.innerHTML=deParentDiv.innerHTML+deCode;
		
		deSelectFontType_css(); 							 
		
});

																			

$('#id_serif').live("mouseover", function(){
	   $('#id_serif_status').css({'display': 'block' });    						
});

$('#id_serif').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="serif";    						
});

$('#id_serif').live("mouseleave", function(){
	   $('#id_serif_status').css({'display': 'none' });    						
});



$('#id_sansserif').live("mouseover", function(){
	   $('#id_sansserif_status').css({'display': 'block' });    						
});

$('#id_sansserif').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="sans-serif";    						
});

$('#id_sansserif').live("mouseleave", function(){
	   $('#id_sansserif_status').css({'display': 'none' });    						
});



$('#id_cursive').live("mouseover", function(){
	   $('#id_cursive_status').css({'display': 'block' });    						
});

$('#id_cursive').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="cursive";    						
});

$('#id_cursive').live("mouseleave", function(){
	   $('#id_cursive_status').css({'display': 'none' });    						
});



$('#id_fantasy').live("mouseover", function(){
	   $('#id_fantasy_status').css({'display': 'block' });    						
});

$('#id_fantasy').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="fantasy";    						
});

$('#id_fantasy').live("mouseleave", function(){
	   $('#id_fantasy_status').css({'display': 'none' });    						
});



$('#id_monospace').live("mouseover", function(){
	   $('#id_monospace_status').css({'display': 'block' });    						
});

$('#id_monospace').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="monospace";    						
});

$('#id_monospace').live("mouseleave", function(){
	   $('#id_monospace_status').css({'display': 'none' });    						
});


function deSelectFontType_css() {
	
	$('#'+deSelectFontType_id).css({'display': 'block'});		
	$('#'+deSelectFontType_id).css({'float': 'left'});
	$('#'+deSelectFontType_id).css({'height': 'auto'});
	$('#'+deSelectFontType_id).css({'color': '#000000'});
	$('#'+deSelectFontType_id).css({'text-align': 'left'});
	$('#'+deSelectFontType_id).css({'background': '#ffffff'});

	$('.cl'+deSelectFontType_id+'Status').css({'display': 'none'});		
    $('.cl'+deSelectFontType_id+'Status').css({'margin': '2px'});		
	$('.cl'+deSelectFontType_id+'Status').css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});
    $('.cl'+deSelectFontType_id+'Status').css({'font-size': '9px'});		
    $('.cl'+deSelectFontType_id+'Status').css({'color': '#999999'});		

	$('.'+deSelectFontType_id+'Link').css({'display': 'block'});		
	$('.'+deSelectFontType_id+'Link').css({'float': 'left'});		
	$('.'+deSelectFontType_id+'Link').css({'clear': 'both'});		
	$('.'+deSelectFontType_id+'Link').css({'color': '#003366'});		
	$('.'+deSelectFontType_id+'Link').css({'margin': '2px'});		
	$('.'+deSelectFontType_id+'Link').css({'font-size': '16px'});		
    $('.'+deSelectFontType_id+'Link').css({'border-bottom': '#003366 dashed 1px'});		
	$('.'+deSelectFontType_id+'Link').css({'text-decoration': 'none'});		
	$('.'+deSelectFontType_id+'Link').css({'outline': 'none'});		
	
	$('#id_serif').css({'font-family': 'serif'});		
	$('#id_sansserif').css({'font-family': 'sans-serif'});		
	$('#id_cursive').css({'font-family': 'cursive'});		
	$('#id_fantasy').css({'font-family': 'fantasy'});		
	$('#id_monospace').css({'font-family': 'monospace'});		

}

	return "Dement.ru";
					// 2010 НВП "Стандарт-Н"
	}
});
									 




