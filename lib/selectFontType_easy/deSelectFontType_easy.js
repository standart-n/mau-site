	//Dement.ru				 
var deSelectFontType_easy = jQuery.Class.create({		
	init: function(deParentDiv_id,				// родительский див в который вставится весь HTML код 
				   deSelectFontType_id			// id главного дива  
				   ){	

$(document).ready(function () {
																				// innerHTML
		deCode='<div id="'+deSelectFontType_id+'">';  									// главный див
        deCode+='<table cellpadding="0" cellspacing="0" border="0">';
                
		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_arial" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Arial';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';
        
		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_arialblack" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Arial Black';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_arialnarrow" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Arial Narrow';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_bookantiqua" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Book Antiqua';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_centurygothic" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Century Gothic';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_comicsansms" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Comic Sans MS';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_couriernew" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Courier New';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_franklingothicmedium" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Franklin Gothic Medium';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_garamond" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Garamond';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_georgia" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Georgia';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_impact" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Impact';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_lucidaconsole" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Lucida Console';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_lucidasansunicode" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Lucida Sans Unicode';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_microsoftsansserif" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Microsoft Sans Serif';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_palatinolinotype" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Palatino Linotype';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_tahoma" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Tahoma';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_timesnewroman" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Times New Roman';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_trebuchetms" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Trebuchet MS';	 
		deCode+='</a></span>';
        deCode+='</td></tr>';

		deCode+='<tr><td>';
        deCode+='<span class="clCloseDlg"><a id="id_verdana" class="'+deSelectFontType_id+'Link" title="Нажмите, чтобы выбрать этот шрифт" href="#de">';
        deCode+='Verdana';	 
		deCode+='</a></span>';
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

																			

$('#id_arial').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Arial";    						
});



$('#id_arialblack').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Arial Black";    						
});



$('#id_arialnarrow').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Arial Narrow";    						
});



$('#id_bookantiqua').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Book Antiqua";    						
});

$('#id_franklingothicmedium').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Franklin Gothic Medium";    						
});


$('#id_georgia').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Georgia";    						
});

$('#id_garamond').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Garamond";    						
});

$('#id_impact').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Impact";    						
});


$('#id_centurygothic').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Century Gothic";    						
});

$('#id_comicsansms').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Comic Sans MS";    						
});


$('#id_couriernew').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Courier New";    						
});


$('#id_lucidaconsole').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Lucida Console";    						
});


$('#id_lucidasansunicode').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Lucida Sans Unicode";    						
});


$('#id_microsoftsansserif').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Microsoft Sans Serif";    						
});


$('#id_palatinolinotype').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Palatino Linotype";    						
});


$('#id_tahoma').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Tahoma";    						
});


$('#id_timesnewroman').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Times New Roman";    						
});


$('#id_trebuchetms').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Trebuchet MS";    						
});


$('#id_verdana').live("click", function(){
	   document.getElementById('id'+deSelectFontType_id+'Click').value="Verdana";    						
});


function deSelectFontType_css() {
	
	$('#'+deSelectFontType_id).css({'display': 'block'});		
	$('#'+deSelectFontType_id).css({'float': 'left'});
	$('#'+deSelectFontType_id).css({'height': 'auto'});
	$('#'+deSelectFontType_id).css({'color': '#000000'});
	$('#'+deSelectFontType_id).css({'text-align': 'left'});
	$('#'+deSelectFontType_id).css({'background': '#ffffff'});

	$('.'+deSelectFontType_id+'Link').css({'display': 'block'});		
	$('.'+deSelectFontType_id+'Link').css({'float': 'left'});		
	$('.'+deSelectFontType_id+'Link').css({'clear': 'both'});		
	$('.'+deSelectFontType_id+'Link').css({'color': '#003366'});		
	$('.'+deSelectFontType_id+'Link').css({'margin': '1px'});		
	$('.'+deSelectFontType_id+'Link').css({'font-size': '16px'});		
	$('.'+deSelectFontType_id+'Link').css({'text-decoration': 'none'});		
	$('.'+deSelectFontType_id+'Link').css({'outline': 'none'});		
	
	$('#id_arial').css({'font-family': 'arial'});		
	$('#id_arialblack').css({'font-family': 'arial black'});		
	$('#id_arialnarrow').css({'font-family': 'arial narrow'});		
	$('#id_bookantiqua').css({'font-family': 'book antiqua'});		
	$('#id_centurygothic').css({'font-family': 'century gothic'});		
	$('#id_comicsansms').css({'font-family': 'comic sans ms'});		
	$('#id_couriernew').css({'font-family': 'courier new'});		
	$('#id_franklingothicmedium').css({'font-family': 'franklin gothic medium'});		
	$('#id_garamond').css({'font-family': 'garamond'});		
	$('#id_georgia').css({'font-family': 'georgia'});		
	$('#id_impact').css({'font-family': 'impact'});		
	$('#id_couriernew').css({'font-family': 'courier new'});		
	$('#id_lucidaconsole').css({'font-family': 'lucida console'});		
	$('#id_lucidasansunicode').css({'font-family': 'lucida sans unicode'});		
	$('#id_microsoftsansserif').css({'font-family': 'microsoft sans serif'});		
	$('#id_palatinolinotype').css({'font-family': 'palatino linotype'});		
	$('#id_tahoma').css({'font-family': 'tahoma'});		
	$('#id_timesnewroman').css({'font-family': 'times new roman'});		
	$('#id_trebuchetms').css({'font-family': 'trebuchet ms'});		
	$('#id_verdana').css({'font-family': 'verdana'});		

}

	return "Dement.ru";
					// 2010 НВП "Стандарт-Н"
	}
});
									 




