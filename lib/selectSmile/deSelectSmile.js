	//Dement.ru				 
var deSelectSmile = jQuery.Class.create({		
	init: function(deParentDiv_id,				// родительский див в который вставится весь HTML код 
				   deSelectSmile_id			// id главного дива  
				   ){	

$(document).ready(function () {
																				// innerHTML
		deCode='<div id="'+deSelectSmile_id+'">';  									// главный див
        deSmile='';
		deSmile+='<div id="'+deSelectSmile_id+'Block">'; 
          deSmile+='<table width="103px" height="103px" align="left" cellpadding="0" cellspacing="1" border="0">';
            for (i=0;i<7;i++) {
            deSmile+='<tr valign="top">';    
                for (j=0;j<7;j++) {
                    a=i+1;
                    b=j+1;
                    deSmile+='<td>';
                    deSmile+='<div class="'+deSelectSmile_id+'Cell"><span class="clCloseDlg">';
                    deSmile+='<a class="'+deSelectSmile_id+'Link" style="background:url(http://www.dement.ru/!lib/_img/smile/'+a+b+'.gif) no-repeat center;" href="#de">';
                    deSmile+='</a>';
                    deSmile+='</span></div>';
                    deSmile+='</td>';
                }
              deSmile+='</tr>';
            }        
       	  deSmile+='</table>';
		deSmile+='</div>';

		deCode+=deSmile;
        deCode+='<div id="'+deSelectSmile_id+'Buttons">';								// див с инпутами 
		deCode+='<input id="id'+deSelectSmile_id+'Click" name="nm'+deSelectSmile_id+'Click" type="hidden">';
		deCode+='</div>';

		deCode+='</div>';
				
	   deParentDiv=document.getElementById(deParentDiv_id);				 
	   deParentDiv.innerHTML=deParentDiv.innerHTML+deCode;
		
		deSelectSmile_css(); 							 
		
});

$("."+deSelectSmile_id+'Link').live("click", function(){

       smile=this.style.backgroundImage;
	   smile=smile.replace("url(",'');
	   smile=smile.replace(")",'');
       document.getElementById('id'+deSelectSmile_id+'Click').value=smile;    						
});



function deSelectSmile_css() {
	
	$('#'+deSelectSmile_id).css({'display': 'block'});		
	$('#'+deSelectSmile_id).css({'float': 'left'});
	$('#'+deSelectSmile_id).css({'height': 'auto'});
	$('#'+deSelectSmile_id).css({'background': '#ffffff'});

	$('.'+deSelectSmile_id+'Cell a').css({'display': 'block'});		
	$('.'+deSelectSmile_id+'Cell a').css({'float': 'left'});
	$('.'+deSelectSmile_id+'Cell a').css({'width': '51px'});
	$('.'+deSelectSmile_id+'Cell a').css({'height': '34px'});
	$('.'+deSelectSmile_id+'Cell a').css({'padding': '0'});
	$('.'+deSelectSmile_id+'Cell a').css({'margin': '0'});
	$('.'+deSelectSmile_id+'Cell a').css({'outline': 'none'});


}

	return "Dement.ru";
					// 2010 НВП "Стандарт-Н"
	}
});
									 




