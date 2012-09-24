	//Dement.ru								// Палитра Цветов 
var deSelectColor = jQuery.Class.create({		
	init: function(deParentDiv_id,				// родительский див в который вставится весь HTML код 
				   deImagePath,					// путь до картинки с палитрой
				   deHint,						// всплывающая подсказка при наведении мышью на палитру
				   deBackground,				// задний фон главного дива, лучше белый
				   deBorder,					// границы главного дива  
				   deCaption,					// текст главного заголовка, по-умолчанию Палитра цветов
				   deCaption_visible,			// выводить или нет этот заголовок 
				   deCaption_height,			// высота этого заголовка 
				   deCaption_fontFamily,		// шрифт этого заголовка	
				   deCaption_fontSize,			// размер шрифта этого заголовка
				   deCaption_color,				// цвет щрифта этого заголовка 
				   deHover,						// текст линии которая закрашивается выбранным цветом, по-умолчанию Выберите цвет  
				   deHover_visible,				// выводить или нет эту линию 
				   deHover_height,				// высота этой линии 
				   deHover_fontFamily,			// шрифт текста этой линии 
				   deHover_fontSize,			// размер шрифта этой линии 	
				   deHover_color,				// цвет шрифта этой линии 
				   dePalette_id,				// счас пойдут служебные настройки. сначала id главного дива с палитрой 
				   deCaption_id,				// id дива с главным заголовком 
				   deHover_id,					// id дива в котором в качестве бакграунда устанавливается цвет на которвый навели мышью 
				   deImagePalette_id,			// id дива в котором отображается картинка 
				   deInputLine_id, 				// id дива в котором отображаются инпуты 
				   deInputHoverColor_name,		// имя инпута в котором отображается цвет на который навели 	
				   deInputHoverColor_id,		//  id инпута в котором отображается цвет на который навели 		
				   deInputClickColor_name,		// имя инпута в котором отображается цвет который выбрали 
				   deInputClickColor_id			//  id инпута в котором отображается цвет который выбрали
				   ){	
											// !!! уникальные параметры модуля : deCaption_id, deHover_id, deImagePalette_id, deInputLine_id, 
											//			deInputHoverColor_name, deInputHoverColor_id, deInputClickColor_name, deInputClickColor_id 					
											// !!! при многоразовом использовании модуля на странице эти параметры должны быть каждый раз разными 	
$(document).ready(function () {
																				// innerHTML
		deCode='<div id="'+dePalette_id+'">';  									// главный див
	if (deCaption_visible=="TRUE") {											// заголовок 
		deCode+='<div id="'+deCaption_id+'">';
		deCode+=deCaption;
		deCode+='</div>';
	}
		deCode+='<div title="'+deHint+'" id="'+deImagePalette_id+'">';			// картинка с палитрой 
		deCode+='</div>';
		
	if (deHover_visible=="TRUE") {												// полоса с цветом на который навели мышью
		deCode+='<div id="'+deHover_id+'">';
		deCode+=deHover;
		deCode+='</div>';
	}
		deCode+='<div id="'+deInputLine_id+'">';								// див с инпутами 
		deCode+='<input id="'+deInputHoverColor_id+'" size="10" name="'+deInputHoverColor_name+'" type="text">';
		deCode+='<input id="'+deInputClickColor_id+'" size="10" name="'+deInputClickColor_name+'" type="text">';
		deCode+='</div>';
		deCode+='</div>';
				
	deParentDiv=document.getElementById(deParentDiv_id);						// вставляем сгенерированный код в документ 
	deParentDiv.innerHTML=deParentDiv.innerHTML+deCode;
		
		deSelectColor_css(); 													// CSS 
		
});

																				// functions

$('#'+deImagePalette_id).live("mouseover", function(){

	deSelectColor_css(); 													// CSS 

	palette=$('#'+deImagePalette_id);
	showColor=$('#'+deHover_id);

	addary=new Array(255,1,1);
	clrary=new Array(360);														// заполняем массив палитры	
	for(i=0;i<6;i++) {
		for(j=0;j<60;j++) { 
			clrary[60*i+j]=new Array(3);
		    for(k=0;k<3;k++) { 
				clrary[60*i+j][k]=addary[k];
		       	addary[k]+=((Math.floor(65049010/Math.pow(3,i*3+k))%3)-1)*4; 
			 }; 
		};
	};

		palette.mousemove(function(e){
	
	   sx=(e.pageX-palette.offset().left)-256;
	   sy=(e.pageY-palette.offset().top)-256;

	   quad=new Array(-180,360,180,0);
	   xa=Math.abs(sx); ya=Math.abs(sy);
	   d=ya*45/xa;
	   if (ya>xa) { d=90-(xa*45/ya); }
	   deg=Math.floor(Math.abs(quad[2*((sy<0)?0:1)+((sx<0)?0:1)]-d))+15;   		// вычисляем угол поворота
	   if (deg>360) { deg-=360; }
	   n=0; c="000000";
	   r=Math.sqrt((xa*xa)+(ya*ya));

	   if(sx!=0 || sy!=0) {         											//  вычисляем цвет 
	   	 for(i=0;i<3;i++) { 
		 	 r2=clrary[deg][i]*r/128;
	         if(r>128) r2+=Math.floor(r-128)*2;
	         if(r2>255) r2=255;
	         n=256*n+Math.floor(r2); 
		  };
	      c=(n.toString(16)).toUpperCase();
		  while(c.length<6) c="0"+c;       										// если цвет задан тремя символами то доводим до 6ти
	   };
	   

	   color="#"+c;   
	   showColor.css({'background': color });    								// меняем фон
	   document.getElementById(deInputHoverColor_id).value=color; 				// выводим значение
	
		});

});

$('#'+deImagePalette_id).live("click", function(){
																				// при нажатии мышью правый инпут принимает значение левого 
   document.getElementById(deInputClickColor_id).value=document.getElementById(deInputHoverColor_id).value; 

});


function deSelectColor_css() {
	
	dePalette=$('#'+dePalette_id);												// главный див
	dePalette.css({'display': 'block'});		
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'height': 'auto'});
	dePalette.css({'text-align': 'center'});
	dePalette.css({'background': deBackground});
	dePalette.css({'border': deBorder});

	dePalette=$('#'+deImagePalette_id);											// див с картинкой палитры
	dePalette.css({'display': 'block'});
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'height': '512px'});
	dePalette.css({'background': '#ffffff url('+deImagePath+') no-repeat center'});

	dePalette=$('#'+deCaption_id);												//  див с заголовком ("палитра цветов")
	dePalette.css({'font-family': deCaption_fontFamily});
	dePalette.css({'font-size': deCaption_fontSize});
	dePalette.css({'color': deCaption_color});
	dePalette.css({'display': 'block'});
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'clear': 'both'});
	dePalette.css({'line-height': deCaption_height});
	dePalette.css({'text-align': 'center'});

	dePalette=$('#'+deHover_id);												// див фон которого отображает цвет на который навели указателем мыши
	dePalette.css({'font-family': deHover_fontFamily});
	dePalette.css({'font-size': deHover_fontSize});
	dePalette.css({'color': deHover_color});
	dePalette.css({'display': 'block'});
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'clear': 'both'});
	dePalette.css({'line-height': deHover_height});
	dePalette.css({'text-align': 'center'});

	dePalette=$('#'+deInputLine_id);											// див с инпутами в которых отражается выбранный цвет и цвет на который навели мышкой
	dePalette.css({'display': 'block'});
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'clear': 'both'});
	dePalette.css({'text-align': 'center'});

}

	return "Dement.ru";
					// 2010 НВП "Стандарт-Н"
	}
});
									 




