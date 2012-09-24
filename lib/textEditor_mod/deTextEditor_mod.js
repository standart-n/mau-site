// Dement.ru				 
										
var deTextEditor_mod = jQuery.Class.create({  // текстовый редактор 
									    
  init: function(deParentDiv_id,		 // 	родительский id 	
				 deTE,					 //  	главный id
				 deText,				 //		начальный текст
                 deHeight
				 ){				
  
$(document).ready(function () {			

      $('#dement').animate({top: '1px'},10,"linear",function(){     

        


	code='<div id="'+deTE+'Dement"></div>';
	code+='<div id="'+deTE+'">';
	code+='		<div id="'+deTE+'btnLine">';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnBold" title="Жирный"			         ><img alt="B"    src="http://www.dement.ru/!lib/_img/btn/btn_bold.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnItalic" title="Курсив"			         ><img alt="I"    src="http://www.dement.ru/!lib/_img/btn/btn_italic.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnUnderline" title="Подчеркивание"	     ><img alt="U"    src="http://www.dement.ru/!lib/_img/btn/btn_underline.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnFontType" title="Шрифт"		             ><img alt="T"    src="http://www.dement.ru/!lib/_img/btn/btn_fontType.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnFontSize" title="Размер шрифта"		     ><img alt="S"    src="http://www.dement.ru/!lib/_img/btn/btn_fontSize.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnFontColor" title="Цвет текста"  	     ><img alt="F"    src="http://www.dement.ru/!lib/_img/btn/btn_fontColor.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnBackColor" title="Цвет фона"		     ><img alt="Bg"   src="http://www.dement.ru/!lib/_img/btn/btn_backColor.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnLeft" title="По левому краю"			 ><img alt="L"    src="http://www.dement.ru/!lib/_img/btn/btn_left.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnCenter" title="По центру"			     ><img alt="C"    src="http://www.dement.ru/!lib/_img/btn/btn_center.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnRight" title="Справа"			         ><img alt="R"    src="http://www.dement.ru/!lib/_img/btn/btn_right.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnLink" title="Ссылка"			         ><img alt="<a>"  src="http://www.dement.ru/!lib/_img/btn/btn_link.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnImg" title="Изображение"			     ><img alt="Img"  src="http://www.dement.ru/!lib/_img/btn/btn_image.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnFile" title="Файл"			             ><img alt="File" src="http://www.dement.ru/!lib/_img/btn/btn_file.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnSmile" title="Смайлик"   			     ><img alt="Sm"   src="http://www.dement.ru/!lib/_img/btn/btn_smile.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnOrdList" title="Список"		             ><img alt="Ul"   src="http://www.dement.ru/!lib/_img/btn/btn_ordList.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnRemoveFormat" title="Очистить от тегов"	 ><img alt="clc"  src="http://www.dement.ru/!lib/_img/btn/btn_clear.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnSelectAll" title="Выделить все"		     ><img alt="all"  src="http://www.dement.ru/!lib/_img/btn/btn_select.png"></a>';
	code+=' 		   <a class="'+deTE+'btn" href="#de" id="'+deTE+'btnPrint" title="Печать"			         ><img alt="P"    src="http://www.dement.ru/!lib/_img/btn/btn_print.png"></a>';
	code+='		</div>';
	code+='		<div id="'+deTE+'frmDiv">';
	code+='		<iframe id="'+deTE+'frame" name="'+deTE+'frame" align="left" width="inherit"  height="'+deHeight+'" frameborder="no" src="about:blank">dement ... </iframe>';
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
		alert("Визуальный режим редактирования не поддерживается Вашим браузером"); 
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
    pushOrdList();
});
$('#'+deTE+'btnOrdList').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnOrdList',81,51,260);
});
$('#'+deTE+'btnOrdList').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnOrdList',51,81,260);
});




$('#'+deTE+'btnRemoveFormat').live("click", function(){
    pushRemoveFormat();
});
$('#'+deTE+'btnRemoveFormat').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnRemoveFormat',81,51,260);
});
$('#'+deTE+'btnRemoveFormat').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnRemoveFormat',51,81,260);
});



$('#'+deTE+'btnSmile').live("click", function(){
//    pushSmile();
});
$('#'+deTE+'btnSmile').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnSmile',81,51,260);
});
$('#'+deTE+'btnSmile').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnSmile',51,81,260);
});



$('#'+deTE+'btnPrint').live("click", function(){						
    pushPrint();
});
$('#'+deTE+'btnPrint').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnPrint',81,51,260);
});
$('#'+deTE+'btnPrint').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnPrint',51,81,260);
});



$('#'+deTE+'btnLeft').live("click", function(){						
    pushLeft();
});
$('#'+deTE+'btnLeft').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnLeft',81,51,260);
});
$('#'+deTE+'btnLeft').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnLeft',51,81,260);
});


$('#'+deTE+'btnCenter').live("click", function(){						
    pushCenter();
});
$('#'+deTE+'btnCenter').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnCenter',81,51,260);
});
$('#'+deTE+'btnCenter').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnCenter',51,81,260);
});


$('#'+deTE+'btnRight').live("click", function(){						
    pushRight();
});
$('#'+deTE+'btnRight').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnRight',81,51,260);
});
$('#'+deTE+'btnRight').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnRight',51,81,260);
});





$('#'+deTE+'btnFontSize').live("click", function(){						
    //pushFontSize();
});
$('#'+deTE+'btnFontSize').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontSize',81,51,260);
});
$('#'+deTE+'btnFontSize').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontSize',51,81,260);
});


$('#'+deTE+'btnFontType').live("click", function(){						
    //pushFontType();
});
$('#'+deTE+'btnFontType').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontType',81,51,260);
});
$('#'+deTE+'btnFontType').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontType',51,81,260);
});


$('#'+deTE+'btnFontColor').live("click", function(){						
    //pushFontColor();
});
$('#'+deTE+'btnFontColor').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontColor',81,51,260);
});
$('#'+deTE+'btnFontColor').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnFontColor',51,81,260);
});






$('#'+deTE+'btnBold').live("click", function(){						
    pushBold();
});
$('#'+deTE+'btnBold').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnBold',81,51,260);
});
$('#'+deTE+'btnBold').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnBold',51,81,260);
});


$('#'+deTE+'btnItalic').live("click", function(){						
    pushItalic();
});
$('#'+deTE+'btnItalic').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnItalic',81,51,260);
});
$('#'+deTE+'btnItalic').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnItalic',51,81,260);
});


$('#'+deTE+'btnUnderline').live("click", function(){						
    pushUnderline();
});
$('#'+deTE+'btnUnderline').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnUnderline',81,51,260);
});
$('#'+deTE+'btnUnderline').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnUnderline',51,81,260);
});


$('#'+deTE+'btnImg').live("click", function(){						
    pushImg();
});
$('#'+deTE+'btnImg').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnImg',81,51,260);
});
$('#'+deTE+'btnImg').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnImg',51,81,260);
});


$('#'+deTE+'btnFile').live("click", function(){						
    pushFile();
});
$('#'+deTE+'btnFile').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnFile',81,51,260);
});
$('#'+deTE+'btnFile').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnFile',51,81,260);
});


$('#'+deTE+'btnUpload').live("click", function(){						
    pushUpload();
});
$('#'+deTE+'btnUpload').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnUpload',81,51,260);
});
$('#'+deTE+'btnUpload').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnUpload',51,81,260);
});


$('#'+deTE+'btnLink').live("click", function(){						
    pushLink();
});
$('#'+deTE+'btnLink').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnLink',81,51,260);
});
$('#'+deTE+'btnLink').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnLink',51,81,260);
});


$('#'+deTE+'btnSelectAll').live("click", function(){						
    pushSelectAll();
});
$('#'+deTE+'btnSelectAll').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnSelectAll',81,51,260);
});
$('#'+deTE+'btnSelectAll').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnSelectAll',51,81,260);
});


$('#'+deTE+'btnBackColor').live("click", function(){						
    //pushBackColor();
});
$('#'+deTE+'btnBackColor').live("mouseover", function(){						
	deShowOpacitySlow('#'+deTE+'btnBackColor',81,51,260);
});
$('#'+deTE+'btnBackColor').live("mouseout", function(){						
	deShowOpacitySlow('#'+deTE+'btnBackColor',51,81,260);
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
	$('#'+deTE+'btnLine').css({'line-height': '36px'});				 			
	$('#'+deTE+'btnLine').css({'clear': 'both'});				 			
	/*$('#'+deTE+'btnLine').css({'background': '#eeeeee url(http://www.dement.ru/!lib/_img/btn/bg.png) repeat-x left top'});*/				 			
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
	$('.'+deTE+'btn').css({'width': '36px'});				 			
	$('.'+deTE+'btn').css({'height': '36px'});				 			
	/*$('.'+deTE+'btn').css({'background': '#6699cc'});*/				 			
	$('.'+deTE+'btn').css({'text-decoration': 'none'});				 			
	$('.'+deTE+'btn').css({'text-align': 'center'});				 			
	/*$('.'+deTE+'btn').css({'border-right': '#aaaaaa solid 1px'});*/				 			
	/*$('.'+deTE+'btn').css({'border-right': '#666666 solid 1px'});*/				 			
	$('.'+deTE+'btn').css({'outline': 'none'});				 			

	$('.'+deTE+'btn img').css({'border': 'none'});				 			
	
	deShowOpacitySharp('.'+deTE+'btn',81);
}



	return "Dement.ru";												
  }				// 2010 НВП "Стандарт-Н"


});	



