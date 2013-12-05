/*standart-n.ru*/
var сolorPalette = jQuery.Class.create({		
init: function(de){$(document).ready(function(){
    deColorPalette_init();
	deCode='<div id="'+de.paletteId+'">';  									
		deCode+='<div id="'+de.captionId+'">';
		deCode+=de.caption;
		deCode+='</div>';	
	deCode+='<div title="'+de.hint+'" id="'+de.imageId+'">';	 
	deCode+='</div>';
		deCode+='<div id="'+de.hoverId+'">';
		deCode+=de.hover;
		deCode+='</div>';
    deCode+='<div id="'+de.lineId+'">';							 
	deCode+='<input id="'+de.inputHoverId+'" size="10" name="'+de.inputHoverName+'" type="text">';
	deCode+='<input id="'+de.inputClickId+'" size="10" name="'+de.inputClickName+'" type="text">';
	deCode+='</div>';
	deCode+='</div>';
	deParentDiv=document.getElementById(de.parentId); 
	deParentDiv.innerHTML=deParentDiv.innerHTML+deCode;
    deColorPalette_css(); 							 
$('#'+de.imageId).live("mouseover", function(){
	deColorPalette_css(); 
	palette=$('#'+de.imageId);
	showColor=$('#'+de.hoverId);
	addary=new Array(255,1,1);
	clrary=new Array(360);				
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
	deg=Math.floor(Math.abs(quad[2*((sy<0)?0:1)+((sx<0)?0:1)]-d))+15;
	if (deg>360) { deg-=360; }
	n=0; c="000000";
	r=Math.sqrt((xa*xa)+(ya*ya));
    if(sx!=0 || sy!=0) { 
	   	 for(i=0;i<3;i++) { 
		 	 r2=clrary[deg][i]*r/128;
	         if(r>128) r2+=Math.floor(r-128)*2;
	         if(r2>255) r2=255;
	         n=256*n+Math.floor(r2); 
		  };
	      c=(n.toString(16)).toUpperCase();
		  while(c.length<6) c="0"+c;       		
	   };
	   color="#"+c;   
	   showColor.css({'background': color });
	   document.getElementById(de.inputHoverId).value=color;
	});
});
$('#'+de.imageId).live("click", function(){
   document.getElementById(de.inputClickId).value=document.getElementById(de.inputHoverId).value; 
});
});
function deColorPalette_init() {
    if (de.parentId==undefined) {de.parentId="idMain";}
    if (de.imagePath==undefined) {de.imagePath="http://www.dement.ru/!lib/deColorPalette/img/wheel.jpg";}
    if (de.hint==undefined) {de.hint="Нажмите мышью чтобы выбрать цвет";}
    if (de.background==undefined) {de.background="#ffffff";}
    if (de.border==undefined) {de.border="#999999 solid 1px";}
    if (de.caption==undefined) {de.caption="Палитра цветов";}
    if (de.captionVisible==undefined) {de.captionVisible="TRUE";}
    if (de.captionHeight==undefined) {de.captionHeight="20px";}
    if (de.captionFontFamily==undefined) {de.captionFontFamily="Verdana, Sans-Serif, Arial";}
    if (de.captionFontSize==undefined) {de.captionFontSize="medium";}
    if (de.captionColor==undefined) {de.captionColor="#000000";}
    if (de.hover==undefined) {de.hover="Выбранный цвет";}
    if (de.hoverVisible==undefined) {de.hoverVisible="TRUE";}
    if (de.hoverHeight==undefined) {de.hoverHeight="30px";}
    if (de.hoverFontFamily==undefined) {de.hoverFontFamily="Verdana, Sans-Serif, Arial";}
    if (de.hoverFontSize==undefined) {de.hoverFontSize="medium";}
    if (de.hoverColor==undefined) {de.hoverColor="#000000";}
    if (de.paletteId==undefined) {de.paletteId="palette";}
    if (de.captionId==undefined) {de.captionId=de.paletteId+"Caption";}
    if (de.hoverId==undefined) {de.hoverId=de.paletteId+"Hover";}
    if (de.imageId==undefined) {de.imageId=de.paletteId+"Image";}
    if (de.lineId==undefined) {de.lineId=de.paletteId+"Line";}
    if (de.lineVisible==undefined) {de.lineVisible="TRUE";}
    if (de.inputHoverName==undefined) {de.inputHoverName=de.paletteId+"InputHoverName";}
    if (de.inputHoverId==undefined) {de.inputHoverId=de.paletteId+"InputHoverId";}
    if (de.inputClickName==undefined) {de.inputClickName=de.paletteId+"InputClickName";}
    if (de.inputClickId==undefined) {de.inputClickId=de.paletteId+"InputClickId";}
}
function deColorPalette_css() {
	dePalette=$('#'+de.paletteId);
	dePalette.css({'display': 'block'});		
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'height': 'auto'});
	dePalette.css({'text-align': 'center'});
	dePalette.css({'background': de.background});
	dePalette.css({'border': de.border});

	dePalette=$('#'+de.imageId);
	dePalette.css({'display': 'block'});
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'height': '512px'});
	dePalette.css({'background': '#ffffff url('+de.imagePath+') no-repeat center'});

	dePalette=$('#'+de.captionId);
	dePalette.css({'font-family': de.captionFontFamily});
	dePalette.css({'font-size': de.captionFontSize});
	dePalette.css({'color': de.captionColor});
	if (de.captionVisible=="TRUE") {											 
	   dePalette.css({'display': 'block'});
    } else {
	   dePalette.css({'display': 'none'});
    }
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'clear': 'both'});
	dePalette.css({'line-height': de.captionHeight});
	dePalette.css({'text-align': 'center'});

	dePalette=$('#'+de.hoverId);
	dePalette.css({'font-family': de.hoverFontFamily});
	dePalette.css({'font-size': de.hoverFontSize});
	dePalette.css({'color': de.hoverColor});
	if (de.hoverVisible=="TRUE") {										
        dePalette.css({'display': 'block'});
    } else {
        dePalette.css({'display': 'none'});
    }
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'clear': 'both'});
	dePalette.css({'line-height': de.hoverHeight});
	dePalette.css({'text-align': 'center'});

	dePalette=$('#'+de.lineId);
	if (de.lineVisible=="TRUE") {										
        dePalette.css({'display': 'block'});
    } else {
        dePalette.css({'display': 'none'});
    }
	dePalette.css({'display': 'block'});
	dePalette.css({'float': 'left'});
	dePalette.css({'width': '512px'});
	dePalette.css({'clear': 'both'});
	dePalette.css({'text-align': 'center'});
}
return "Dement.ru";}
});
									 




