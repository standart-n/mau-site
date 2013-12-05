// Dement.ru

$(document).ready(function () {	

$('#'+'deMdlFontColor'+'Block').live("click", function(){
    $('#dement').animate({top: '1px'},10,"linear",function(){     
        pushFontColor();
    });
});

$('#'+'deTextEditorFramebtnFontColor').live("mouseover", function(e){
    $('#deDlgFontColor').css({'top' : e.pageY+5});
    $('#deDlgFontColor').css({'left' : e.pageX-5});
});
    



$('#'+'deMdlBackColor'+'Block').live("click", function(){
    $('#dement').animate({top: '1px'},10,"linear",function(){     
        pushBackColor();
    });
});

$('#'+'deTextEditorFramebtnBackColor').live("mouseover", function(e){
    $('#deDlgBackColor').css({'top' : e.pageY+5});
    $('#deDlgBackColor').css({'left' : e.pageX-5});
});
    



$('.'+'deMdlFontSize'+'Link').live("click", function(){
    $('#dement').animate({top: '1px'},10,"linear",function(){     
        pushFontSize();
    });
});

$('#'+'deTextEditorFramebtnFontSize').live("mouseover", function(e){
    $('#deDlgFontSize').css({'top' : e.pageY+5});
    $('#deDlgFontSize').css({'left' : e.pageX-5});
});




$('.'+'deMdlFontType'+'Link').live("click", function(){
    $('#dement').animate({top: '1px'},10,"linear",function(){     
        pushFontType();
    });
});

$('#'+'deTextEditorFramebtnFontType').live("mouseover", function(e){
    $('#deDlgFontType').css({'top' : e.pageY+5});
    $('#deDlgFontType').css({'left' : e.pageX-5});
});




$('.'+'deMdlSmile'+'Link').live("click", function(){
    $('#dement').animate({top: '1px'},10,"linear",function(){     
        pushSmile();
    });
});

$('#'+'deTextEditorFramebtnSmile').live("mouseover", function(e){
    $('#deDlgSmile').css({'top' : e.pageY+5});
    $('#deDlgSmile').css({'left' : e.pageX-5});
});


$('.'+'deMdlImg'+'Link').live("click", function(){
    $('#dement').animate({top: '1px'},10,"linear",function(){     
    //    pushImg();
    });
});

$('#'+'deTextEditorFramebtnImg').live("mouseover", function(e){
    $('#deDlgImg').css({'top' : e.pageY+5});
    $('#deDlgImg').css({'left' : e.pageX-5});
});


$('.'+'deMdlFile'+'Link').live("click", function(){
    $('#dement').animate({top: '1px'},10,"linear",function(){     
    //    pushFile();
    });
});

$('#'+'deTextEditorFramebtnFile').live("mouseover", function(e){
    $('#deDlgFile').css({'top' : e.pageY+5});
    $('#deDlgFile').css({'left' : e.pageX-5});
});


});

function pushOrdList(){
	deWin.focus();
	deWin.document.execCommand("InsertOrderedList", null, "");
}

function pushRemoveFormat(){
	deWin.focus();
	deWin.document.execCommand("RemoveFormat", null, "");
}

function pushPrint(){
   	deWin.focus();
	deWin.document.execCommand("Print", null, "");
}

function pushLeft(){
	deWin.focus();
	deWin.document.execCommand("JustifyLeft", null, "");
}

function pushCenter(){
	deWin.focus();
	deWin.document.execCommand("JustifyCenter", null, "");
}

function pushRight(){
	deWin.focus();
	deWin.document.execCommand("JustifyRight", null, "");
}

function pushFontType(){
	deWin.focus();
    userFType=document.getElementById('id'+'deMdlFontType'+'Click').value;
    deWin.document.execCommand("FontName",false,userFType);
}

function pushSmile(){
	deWin.focus();
    userSmile=document.getElementById('id'+'deMdlSmile'+'Click').value;
    deWin.document.execCommand("InsertImage",false,userSmile);
}


function pushFontSize(){
	deWin.focus();
    userFSize=document.getElementById('id'+'deMdlFontSize'+'Click').value;
    deWin.document.execCommand("FontSize",false,userFSize);
}

function pushFontColor(){
	deWin.focus();
    userFColor=document.getElementById('id'+'deMdlFontColor'+'Click').value;
    deWin.document.execCommand("ForeColor",false,userFColor);
}

function pushBold(){
	deWin.focus();
	deWin.document.execCommand("bold", null, "");
}

function pushItalic(){
	deWin.focus();
	deWin.document.execCommand("italic", null, "");
}

function pushUnderline(){
	deWin.focus();
	deWin.document.execCommand("underline", null, "");
}

function pushImg(){
	deWin.focus();
    /*userImg=document.getElementById('id'+'deMdlImg'+'Click').value;*/
    userImg=deWin.prompt("¬ведите адрес изображени€:", "photo/");
    deWin.document.execCommand("InsertImage",false,userImg);
}

function pushLink(){
	deWin.focus();
    userURL = deWin.prompt("¬ведите адрес ссылки:", "http://");
    deWin.document.execCommand("CreateLink",false,userURL);
}

function pushFile(){
	deWin.focus();
    /*userFile=document.getElementById('id'+'deMdlFile'+'Click').value;*/
    userFile=deWin.prompt("¬ведите адрес файла:", "files/");
    deWin.document.execCommand("CreateLink",false,userFile);
}

function pushUpload(){
	deWin.focus();
    userURL = deWin.prompt("¬ведите адрес:", "http://");
    deWin.document.execCommand("CreateLink",false,userURL);
}

function pushSelectAll(){
	deWin.focus();
    deWin.document.execCommand("SelectAll",null,"");
}

function pushBackColor(){
	deWin.focus();
    userBgColor=document.getElementById('id'+'deMdlBackColor'+'Click').value;
    deWin.document.execCommand("BackColor",false,userBgColor);
}




