	//Dement.ru				 
var deSelectColorTable = jQuery.Class.create({		
	init: function(deParentDiv_id,				// родительский див в который вставится весь HTML код 
				   deSelectColor_id			// id главного дива  
				   ){	

$(document).ready(function () {
																				// innerHTML
		deCode='<div id="'+deSelectColor_id+'">';  									// главный див

        deColor='';
        for (k=0;k<6;k++) {
		deColor+='<div id="'+deSelectColor_id+'Block">'; 
          deColor+='<table width="103px" height="103px" align="left" cellpadding="0" cellspacing="1" border="0" bgcolor="#000000">';
            for (i=0;i<6;i++) {
            deColor+='<tr valign="top">';    
                for (j=0;j<6;j++) {
                    red=deGetColor(k);
                    green=deGetColor(j);
                    blue=deGetColor(i);
//                    deColor+='<td bgcolor="#'+red+green+blue+'">';
                    deColor+='<td>';
                    deColor+='<div class="'+deSelectColor_id+'Cell"><span class="clCloseDlg">';
                    deColor+='<a class="'+deSelectColor_id+'Link" style="background:#'+red+green+blue+';" href="#de">';
                    deColor+='</a>';
                    deColor+='</span></div>';
                    deColor+='</td>';
                }
              deColor+='</tr>';
            }        
       	  deColor+='</table>';
		deColor+='</div>';
        }
		
		deCode+=deColor;
        deCode+='<div id="'+deSelectColor_id+'Buttons">';								// див с инпутами 
		deCode+='<input id="id'+deSelectColor_id+'Click" name="nm'+deSelectColor_id+'Click" type="hidden">';
		deCode+='</div>';

		deCode+='</div>';
				
	   deParentDiv=document.getElementById(deParentDiv_id);				 
	   deParentDiv.innerHTML=deParentDiv.innerHTML+deCode;
		
		deSelectColor_css(); 							 
		
});


$("."+deSelectColor_id+'Link').live("click", function(){
	   color=this.style.backgroundColor;
	   document.getElementById('id'+deSelectColor_id+'Click').value=color;
});

																			
function deGetColor(x) {
    
    x++;
    color="00";
    
    if (x==1) {
        color="00";
    }
    if (x==2) {
        color="33";
    }
    if (x==3) {
        color="66";
    }
    if (x==4) {
        color="99";
    }
    if (x==5) {
        color="cc";
    }
    if (x==6) {
        color="ff";
    }
    return color;
    
}


function deSelectColor_css() {
	
	$('#'+deSelectColor_id).css({'display': 'block'});		
	$('#'+deSelectColor_id).css({'float': 'left'});
	$('#'+deSelectColor_id).css({'width': '309px'});
	$('#'+deSelectColor_id).css({'height': '206px'});
	$('#'+deSelectColor_id).css({'color': '#000000'});
	$('#'+deSelectColor_id).css({'text-align': 'left'});
	$('#'+deSelectColor_id).css({'background': '#ffffff'});

	$('#'+deSelectColor_id+'Block').css({'display': 'block'});		
	$('#'+deSelectColor_id+'Block').css({'float': 'left'});
	$('#'+deSelectColor_id+'Block').css({'width': '103px'});
	$('#'+deSelectColor_id+'Block').css({'height': '103px'});

	$('.'+deSelectColor_id+'Cell').css({'display': 'block'});		
	$('.'+deSelectColor_id+'Cell').css({'float': 'left'});
	$('.'+deSelectColor_id+'Cell').css({'width': '16px'});
	$('.'+deSelectColor_id+'Cell').css({'height': '16px'});
	$('.'+deSelectColor_id+'Cell').css({'padding': '0'});
	$('.'+deSelectColor_id+'Cell').css({'margin': '0'});

	$('.'+deSelectColor_id+'Cell a').css({'display': 'block'});		
	$('.'+deSelectColor_id+'Cell a').css({'float': 'left'});
	$('.'+deSelectColor_id+'Cell a').css({'width': '16px'});
	$('.'+deSelectColor_id+'Cell a').css({'height': '16px'});
	$('.'+deSelectColor_id+'Cell a').css({'padding': '0'});
	$('.'+deSelectColor_id+'Cell a').css({'margin': '0'});
	$('.'+deSelectColor_id+'Cell a').css({'outline': 'none'});

	$('.'+deSelectColor_id+'Buttons').css({'display': 'none'});		
	$('.'+deSelectColor_id+'Buttons').css({'float': 'left'});
	

}

	return "Dement.ru";
					// 2010 НВП "Стандарт-Н"
	}
});
									 




