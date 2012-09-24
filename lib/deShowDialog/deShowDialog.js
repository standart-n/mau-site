/*standart-n.ru*/ 
var showDialog=jQuery.Class.create({		
init:function(de){$(document).ready(function() {
    showDialog_init();
    deCode='<div id="'+de.dialogId+'Dement"></div>'+
				'<div id="'+de.wallId+'"></div>'+							 
				'<div id="'+de.dialogId+'">'+									
					'<div id="'+de.uplineId+'">'+de.uplineCaption;			
	if (de.closeVisible=="TRUE") { deCode+='<span class="'+de.closeButton+'"><a class="'+de.closeClassLink+'" href="#de"></a></span>'; }
	deCode+=			'</div>'+											
					'<div id="'+de.contentId+'">'+de.contentText+'</div>'+
				'</div>';  													 
	document.body.innerHTML+=deCode;										 	
    showDialog_css(); 														
$(de.object).live(de.event, function(){
	showDialog_css();
	documentHeight=deGetDocumentSize().height;
	documentWidth=deGetDocumentSize().width;
	screenHeight=deGetScreenSize().height; 		
	screenWidth=deGetScreenSize().width;
	scrollTop=deGetScrollSize().top;
	scrollLeft=deGetScrollSize().left;
    deMDialog=$('#'+de.dialogId); 
	deWall=$('#'+de.wallId);			
    deMDialog.css({'display': 'none'});		
	deWall.css({'display': 'none'});		
    deMDialogHeight=deMDialog.height();	
	deMDialogWidth=deMDialog.width();
	deMDialogTop=(screenHeight-deMDialogHeight)/2+scrollTop;
	deMDialogLeft=(screenWidth-deMDialogWidth)/2+scrollLeft;
    if (deMDialogTop>0) {
        if ((deMDialogHeight+deMDialogTop)<(documentHeight+100)) {
            deMDialog.css({'top': deMDialogTop});	
        } else { deMDialog.css({'top': '50px'}); }
    } else { deMDialog.css({'top': '100px'}); }    
    if (deMDialogLeft>0) {
        if ((deMDialogWidth+deMDialogLeft)<(documentWidth+100)) {
            deMDialog.css({'left': deMDialogLeft});	
        } else { deMDialog.css({'left': '50px'}); }
    } else { deMDialog.css({'left': '100px'}); }    
	deWallHeight=screenHeight+scrollTop;
	deWallWidth=screenWidth+scrollLeft;
	deWall.width(documentWidth);		
	deWall.height(documentHeight);		
	if (de.wallVisible=="TRUE") { deShowOpacitySlow('#'+de.wallId,0,de.wallOpacity,1); }
	deShowEffect('#'+de.dialogId,de.effect,de.speed);
});
$('span.'+de.closeButton+' a').live("click", function(){
	deShowEffect('#'+de.dialogId,de.effect,de.speed); 
	if (de.wallVisible=="TRUE") { deShowOpacitySlow('#'+de.wallId,de.wallOpacity,0,1); }
	$('#'+de.dialogId+'Dement').animate({top: '1px'},de.speed,"linear",function(){ showDialog_css(); });
});
$('a.'+de.closeClassLink).live("mouseover", function(){ deShowOpacitySlow('a.'+de.closeClassLink,100,60,100); });
$('a.'+de.closeClassLink).live("mouseout", function(){ deShowOpacitySlow('a.'+de.closeClassLink,60,100,100); });
});
function showDialog_init() {
    if (de.object==undefined) {de.object="#primary";}
    if (de.event==undefined) {de.event="click";}
    if (de.effect==undefined) {de.effect="OpacityEffect";}
    if (de.before==undefined) {de.before="0.01";}
    if (de.width==undefined) {de.width="300px";}
    if (de.height==undefined) {de.height="300px";}
    if (de.dialogBorder==undefined) {de.dialogBorder="#999999 solid 1px";}
    if (de.dialogZindex==undefined) {de.dialogZindex="200";}
    if (de.dialogOpacity==undefined) {de.dialogOpacity="95";}
    if (de.speed==undefined) {de.speed="10";}
    if (de.dialogId==undefined) {de.dialogId="dialog";}
    if (de.uplineCaption==undefined) {de.uplineCaption="Всплывающее окно";}
    if (de.uplineFontFamily==undefined) {de.uplineFontFamily="Verdana, Times New Roman, Sans-Serif";}
    if (de.uplineFontSize==undefined) {de.uplineFontSize="medium";}
    if (de.uplineColor==undefined) {de.uplineColor="#ffffff";}
    if (de.uplineHeight==undefined) {de.uplineHeight="30px";}
    if (de.uplineBackground==undefined) {de.uplineBackground="#003366";}
    if (de.uplineAlign==undefined) {de.uplineAlign="center";}
    if (de.uplineId==undefined) {de.uplineId=de.dialogId+'Upline';}
    if (de.contentText==undefined) {de.contentText="Hello,world!";}
    if (de.contentFontFamily==undefined) {de.contentFontFamily="Verdana, Times New Roman, Sans-Serif";}
    if (de.contentFontSize==undefined) {de.contentFontSize="small";}
    if (de.contentColor==undefined) {de.contentColor="#000000";}
    if (de.contentBackground==undefined) {de.contentBackground="#ffffff";}
    if (de.contentAlign==undefined) {de.contentAlign="left";}
    if (de.contentId==undefined) {de.contentId=de.dialogId+'Content';}
    if (de.wallBackground==undefined) {de.wallBackground="#000000";}
    if (de.wallVisible==undefined) {de.wallVisible="TRUE";}
    if (de.wallOpacity==undefined) {de.wallOpacity="50";}
    if (de.wallId==undefined) {de.wallId=de.dialogId+'Wall';}
    if (de.closeBackground==undefined) {de.closeBackground="url(http://www.dement.ru/!lib/deShowDialog/img/btnClose.png) no-repeat center";}
    if (de.closeButton==undefined) {de.closeButton=de.dialogId+'Close';}
    if (de.closeClassLink==undefined) {de.closeClass=de.dialogId+'LinkClose';}
    if (de.closeVisible==undefined) {de.closeVisible='TRUE';}
}
function showDialog_css() {
	deMDialog=$('#'+de.dialogId);
	deMDialog.css({'position': 'absolute'});		
	deMDialog.css({'display': 'none'});		
	deMDialog.css({'float': 'left'});		
	deMDialog.css({'top': '0'});		
	deMDialog.css({'left': '0'});		
	deMDialog.css({'width': de.width});		
	deMDialog.css({'height': 'auto'});				
	deMDialog.css({'border': de.dialogBorder});							
	deMDialog.css({'z-index': de.dialogZindex});	

	deUpLine=$('#'+de.uplineId);					 
	deUpLine.css({'font-family': de.uplineFontFamily});		
	deUpLine.css({'font-size': de.uplineFontSize});		
	deUpLine.css({'color': de.uplineColor});		
	deUpLine.css({'display': 'block'});		
	deUpLine.css({'float': 'left'});		
	deUpLine.css({'width': (deMDialog.width()-20)});		
	deUpLine.css({'line-height': de.uplineHeight});		
	deUpLine.height(de.uplineHeight);		
	deUpLine.css({'padding': '0 10px 0 10px'});		
	deUpLine.css({'text-align': de.uplineAlign});		
	deUpLine.css({'background': de.uplineBackground});		

	deContent=$('#'+de.contentId);			
	deContent.css({'font-family': de.contentFontFamily});
	deContent.css({'font-size': de.contentFontSize});		
	deContent.css({'color': de.contentColor});		
	deContent.css({'display': 'block'});		
	deContent.css({'float': 'left'});		
	deContent.css({'width': (deMDialog.width()-20)});		
	deContent.css({'height': de.height});		
	deContent.css({'padding': '10px 10px 10px 10px'});		
	deContent.css({'clear': 'both'});		
	deContent.css({'text-align': de.contentAlign});		
	deContent.css({'background': de.contentBackground});		

	deWall=$('#'+de.wallId);					
	deWall.css({'position': 'absolute'});		
	deWall.css({'display': 'none'});		
	deWall.css({'float': 'left'});		
	deWall.css({'top': '0'});		
	deWall.css({'left': '0'});		
	deWall.css({'background': de.wallBackground});		
	deWall.css({'z-index': (de.dialogZindex-1)});
	deWall.height(deGetDocumentSize().height);
	deWall.width(deGetDocumentSize().width);
	
	deBtnClose=$('a.'+de.closeClassLink); 
	deBtnClose.css({'position': 'absolute'});		
	deBtnClose.css({'display': 'block'});		
	deBtnClose.css({'float': 'left'});		
	deBtnClose.css({'top': '8px'});		
	deBtnClose.css({'right': '10px'});		
	deBtnClose.css({'width': '16px'});		
	deBtnClose.css({'height': '16px'});		
	deBtnClose.css({'background': de.closeBackground});		
	deBtnClose.css({'text-decoration': 'none'});		
}
return "Dement.ru";}
});
									 



