// Dement.ru				 
										
var deTextEditor_rus = jQuery.Class.create({  // ��������� �������� 
									    
  init: function(deParentDiv_id,		 // 	������������ id 	
				 deTE,					 //  	������� id
				 deText					 //		��������� �����
				 ){				
  
$(document).ready(function () {			

      $('#dement').animate({top: '1px'},10,"linear",function(){     

        


	code='<div id="'+deTE+'Dement"></div>';
	code+='<div id="'+deTE+'">';
	code+='		<div id="'+deTE+'btnLine">';
	code+=' 		<b><a class="'+deTE+'btn" href="#de" id="'+deTE+'btnBold"			>�</a></b>';
	code+=' 		<i><a class="'+deTE+'btn" href="#de" id="'+deTE+'btnItalic"			>�</a></i>';
	code+=' 		<u><a class="'+deTE+'btn" href="#de" id="'+deTE+'btnUnderline"		>�</a></u>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnFontType"		>�����</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnFontSize"		>������</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnFontColor"		>����</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnBackColor"		>���</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnOrdList"		>������</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnImg"			>�����������</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnLink"			>������</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnLeft"			>�����</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnCenter"			>�� ������</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnRight"			>������</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnRemoveFormat"	>��������</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnSelectAll"		>�������� ���</a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnPrint"			>������</a>';
	code+='		</div>';
	code+='		<div id="'+deTE+'frmDiv">';
	code+='		<iframe id="'+deTE+'frame" name="'+deTE+'frame" align="left" width="inherit"  height="500px" frameborder="no" src="about:blank">dement ... </iframe>';
	code+='		</div>';
	code+='</div>';
	

	document.getElementById(deParentDiv_id).innerHTML+=code;			
	//document.body.innerHTML+='<div id="'+deBackDiv_id+'Dement"></div><div id="'+deBackDiv_id+'"></div>';

	deTextEditor_css();
	
	//   if (Browser="Opera") { ...  } 

	//browser = new deBrowserDetectLite();
	browser=deGetBrowserType(); 
    isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;

	if (isGecko) {
//	if (browser="Firefox") {
		deFrame=document.getElementById(deTE+'frame');
		deWin=deFrame.contentWindow;
		deDoc=deFrame.contentDocument;
		} else {
		deFrame=frames[deTE+'frame'];
		deWin=deFrame.window;
		deDoc=deFrame.document;
	}
		

	deHTML='<html><head>\n';
	//deHTML+='<style>\n';
	//deHTML+='body, div, p, td {font-size:10px; font-family:Verdana, Arial, Helvetica, sans-serif; margin:0px; padding:0px;}';
	//deHTML+='body {margin:5px;}';
	//deHTML+='</style>\n';
	deHTML+='</head><body>'+deText+'';
	deHTML+='</body></html>';

	deDoc.open();
	//deDoc.write(deHTML);
	deDoc.write(deHTML);
	deDoc.close();

	if (!deDoc.designMode) { 
		alert("���������� ����� �������������� �� �������������� ����� ���������"); 
		} else {
		if (isGecko) {
		//if (browser="Firefox") {
			deDoc.designMode="on";
			} else {
			deDoc.designMode="On";
		}
	}
/*
  var isGecko = navigator.userAgent.toLowerCase().indexOf("gecko") != -1;
	if (isGecko) {
		var deFrame=document.getElementById('idTextEditorframe');
		var deWin=deFrame.contentWindow;
		var deDoc=deFrame.contentDocument;
		} else {
		var deFrame=frames['idTextEditorframe'];
		var deWin=deFrame.window;
		var deDoc=deFrame.document;
	}
*/





$('#'+deTE+'btnOrdList').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("InsertOrderedList", null, "");
});
$('#'+deTE+'btnOrdList').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnOrdList',89,100,260);
});
$('#'+deTE+'btnOrdList').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnOrdList',100,89,260);
});




$('#'+deTE+'btnRemoveFormat').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("RemoveFormat", null, "");
});
$('#'+deTE+'btnRemoveFormat').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnRemoveFormat',89,100,260);
});
$('#'+deTE+'btnRemoveFormat').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnRemoveFormat',100,89,260);
});



$('#'+deTE+'btnPrint').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("Print", null, "");
});
$('#'+deTE+'btnPrint').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnPrint',89,100,260);
});
$('#'+deTE+'btnPrint').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnPrint',100,89,260);
});



$('#'+deTE+'btnLeft').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("JustifyLeft", null, "");
});
$('#'+deTE+'btnLeft').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnLeft',89,100,260);
});
$('#'+deTE+'btnLeft').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnLeft',100,89,260);
});


$('#'+deTE+'btnCenter').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("JustifyCenter", null, "");
});
$('#'+deTE+'btnCenter').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnCenter',89,100,260);
});
$('#'+deTE+'btnCenter').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnCenter',100,89,260);
});


$('#'+deTE+'btnRight').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("JustifyRight", null, "");
});
$('#'+deTE+'btnRight').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnRight',89,100,260);
});
$('#'+deTE+'btnRight').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnRight',100,89,260);
});





$('#'+deTE+'btnFontSize').live("click", function(){						
	deWin.focus();
    userFSize = deWin.prompt("������� ������ ������ (1-7):", "3");
    deWin.document.execCommand("FontSize",false,userFSize)
});
$('#'+deTE+'btnFontSize').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontSize',89,100,260);
});
$('#'+deTE+'btnFontSize').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontSize',100,89,260);
});


$('#'+deTE+'btnFontType').live("click", function(){						
	deWin.focus();
    userFType = deWin.prompt("������� ��� ������:", "sans-serif");
    deWin.document.execCommand("FontName",false,userFType)
});
$('#'+deTE+'btnFontType').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontType',89,100,260);
});
$('#'+deTE+'btnFontType').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontType',100,89,260);
});


$('#'+deTE+'btnFontColor').live("click", function(){						
	deWin.focus();
    userFColor = deWin.prompt("������� ���� ������ (6�� ������� ���) #:", "000066");
    deWin.document.execCommand("ForeColor",false,userFColor)
});
$('#'+deTE+'btnFontColor').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontColor',89,100,260);
});
$('#'+deTE+'btnFontColor').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontColor',100,89,260);
});






$('#'+deTE+'btnBold').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("bold", null, "");
});
$('#'+deTE+'btnBold').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnBold',89,100,260);
});
$('#'+deTE+'btnBold').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnBold',100,89,260);
});


$('#'+deTE+'btnItalic').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("italic", null, "");
});
$('#'+deTE+'btnItalic').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnItalic',89,100,260);
});
$('#'+deTE+'btnItalic').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnItalic',100,89,260);
});


$('#'+deTE+'btnUnderline').live("click", function(){						
	deWin.focus();
	deWin.document.execCommand("underline", null, "");
});
$('#'+deTE+'btnUnderline').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnUnderline',89,100,260);
});
$('#'+deTE+'btnUnderline').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnUnderline',100,89,260);
});


$('#'+deTE+'btnImg').live("click", function(){						
	deWin.focus();
    imgURL = deWin.prompt("������� �����:", "http://");
   // deWin.execCommand("Unlink",false,null)
    deWin.document.execCommand("InsertImage",false,imgURL)
});
$('#'+deTE+'btnImg').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnImg',89,100,260);
});
$('#'+deTE+'btnImg').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnImg',100,89,260);
});


$('#'+deTE+'btnLink').live("click", function(){						
	deWin.focus();
    userURL = deWin.prompt("������� ����� ������:", "http://");
    //deWin.execCommand("Unlink",false,null)
    deWin.document.execCommand("CreateLink",false,userURL)
});
$('#'+deTE+'btnLink').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnLink',89,100,260);
});
$('#'+deTE+'btnLink').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnLink',100,89,260);
});


$('#'+deTE+'btnSelectAll').live("click", function(){						
	deWin.focus();
    deWin.document.execCommand("SelectAll",null,"")
});
$('#'+deTE+'btnSelectAll').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnSelectAll',89,100,260);
});
$('#'+deTE+'btnSelectAll').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnSelectAll',100,89,260);
});


$('#'+deTE+'btnBackColor').live("click", function(){						
	deWin.focus();
    userBgColor = deWin.prompt("������� ���� ���� (6�� ������� ���) #:", "006699");
    deWin.document.execCommand("BackColor",false,userBgColor)
});
$('#'+deTE+'btnBackColor').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnBackColor',89,100,260);
});
$('#'+deTE+'btnBackColor').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnBackColor',100,89,260);
});

});																		

});																		


function deTextEditor_css() { 

	$('#'+deTE).css({'display': 'block'});				 			
	$('#'+deTE).css({'float': 'left'});				 			
	$('#'+deTE).css({'top': '50px'});				 			
	$('#'+deTE).css({'width': '800px'});				 			
	$('#'+deTE).css({'height': 'auto'});				 			
	$('#'+deTE).css({'padding': '5px'});				 			
	$('#'+deTE).css({'clear': 'both'});				 			
	$('#'+deTE).css({'border': '#cccccc solid 1px'});				 			

	$('#'+deTE+'btnLine').css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});				 			
	$('#'+deTE+'btnLine').css({'font-size': '12px'});				 			
	$('#'+deTE+'btnLine').css({'color': '#333333'});				 			
	$('#'+deTE+'btnLine').css({'display': 'block'});				 			
	$('#'+deTE+'btnLine').css({'float': 'left'});				 			
	$('#'+deTE+'btnLine').css({'width': '798px'});				 			
	$('#'+deTE+'btnLine').css({'margin': '0 0 5px 0'});				 			
	$('#'+deTE+'btnLine').css({'line-height': '30px'});				 			
	$('#'+deTE+'btnLine').css({'clear': 'both'});				 			
	$('#'+deTE+'btnLine').css({'background': '#eeeeee'});				 			
	$('#'+deTE+'btnLine').css({'border': '#dddddd solid 1px'});				 			
	$('#'+deTE+'btnLine').css({'text-align': 'center'});				 			

	$('#'+deTE+'frmDiv').css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});				 			
	$('#'+deTE+'frmDiv').css({'font-size': '12px'});				 			
	$('#'+deTE+'frmDiv').css({'color': '#000000'});				 			
	$('#'+deTE+'frmDiv').css({'display': 'block'});				 			
	$('#'+deTE+'frmDiv').css({'float': 'left'});				 			
	$('#'+deTE+'frmDiv').css({'top': '50px'});				 			
	$('#'+deTE+'frmDiv').css({'margin': '0 0 5px 0'});				 			
	$('#'+deTE+'frmDiv').css({'clear': 'both'});				 			
	$('#'+deTE+'frmDiv').css({'background': '#ffffff'});				 			
	$('#'+deTE+'frmDiv').css({'text-align': 'left'});				 			

	$('#'+deTE+'frame').css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});				 			
	$('#'+deTE+'frame').css({'font-size': '10px'});				 			
	$('#'+deTE+'frame').css({'color': '#000000'});				 			
	$('#'+deTE+'frame').css({'display': 'block'});				 			
	$('#'+deTE+'frame').css({'float': 'left'});				 			
	$('#'+deTE+'frame').css({'width': '798px'});				 			
	$('#'+deTE+'frame').css({'border-top': '#999999 solid 1px'});				 			
	$('#'+deTE+'frame').css({'border-left': '#999999 solid 1px'});				 			
	$('#'+deTE+'frame').css({'border-bottom': '#CCCCCC solid 1px'});				 			
	$('#'+deTE+'frame').css({'border-right': '#CCCCCC solid 1px'});				 			

	$('.'+deTE+'btn').css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});				 			
	$('.'+deTE+'btn').css({'font-size': '12px'});				 			
	$('.'+deTE+'btn').css({'color': '#000000'});				 			
	$('.'+deTE+'btn').css({'display': 'block'});				 			
	$('.'+deTE+'btn').css({'float': 'left'});				 			
	$('.'+deTE+'btn').css({'width': '99px'});				 			
	$('.'+deTE+'btn').css({'background': '#6699cc'});				 			
	$('.'+deTE+'btn').css({'text-decoration': 'none'});				 			
	$('.'+deTE+'btn').css({'text-align': 'center'});				 			

	deShowOpacitySharp('.'+deTE+'btn',89);
}



	return "Dement.ru";												
  }				// 2010 ��� "��������-�"


});	



