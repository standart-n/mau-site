	//Dement.ru				 
var deUploadFile = jQuery.Class.create({		
	init: function(deParentDiv_id,				// ������������ ��� � ������� ��������� ���� HTML ��� 
				   deUpload_id,                 // id �������� ����
                   dePath,
                   deUploader,
                   deScript,
                   deCheck,
                   deCancel,
                   deFileDesc,
                   deFileExt,
                   deFunction
				   ){	


$(document).ready(function () {


		deCode='<div id="'+deUpload_id+'">';
        deCode+='<div id="'+deUpload_id+'Upload">';
        deCode+='<input type="file" name="nm'+deUpload_id+'" id="id'+deUpload_id+'" />';
        deCode+='<div id="'+deUpload_id+'file"></div>';

        deCode+='<div id="'+deUpload_id+'Cancel">';
        deCode+="<p><a href=\"javascript:jQuery('#id"+deUpload_id+"').uploadifyClearQueue()\">�������� ��������</a></p>";
		deCode+='</div>';

        //deCode+='<div id="'+deUpload_id+'Start"><span class="clCloseDlg">';
        //deCode+="<a class=\""+deUpload_id+"Link\" href=\"javascript:$('#uploadify').uploadifyUpload();\">���������</a>";
		//deCode+='</span></div>';

        deCode+='<div id="'+deUpload_id+'Buttons">';								// ��� � �������� 
		deCode+='<input id="id'+deUpload_id+'Click" name="nm'+deUpload_id+'Click" type="hidden">';
		deCode+='</div>';

		deCode+='</div>';
				
	   deParentDiv=document.getElementById(deParentDiv_id);				 
	   deParentDiv.innerHTML=deParentDiv.innerHTML+deCode;
       
       deQueue=deUpload_id+'file';
		
		deUpload_css(); 							 




    $("#id"+deUpload_id).uploadify({
    'uploader' : deUploader,
    'script' : deScript,
    'checkscript' : deCheck,
    'cancelImg' : deCancel,
    'queueID' : deQueue,
    'auto' : true,
    'multi' : false,
    'fileDesc' : deFileDesc,
    'fileExt' : deFileExt,
    'folder' : dePath,
    'onComplete' : function(event,queueID,fileObj,response,data) {
                    $('#response').append(response);
                    document.getElementById('id'+deUpload_id+'Click').value=fileObj.filePath;
                    setTimeout(deFunction,10);
                    }
    });


});



function deUpload_css() {
	
	$('#'+deUpload_id).css({'display': 'block'});		
	$('#'+deUpload_id).css({'float': 'left'});
	$('#'+deUpload_id).css({'height': 'auto'});
	$('#'+deUpload_id).css({'background': '#ffffff'});

	$('#'+deUpload_id+'Cancel a').css({'display': 'none'});

	$('#'+deUpload_id+'Start a').css({'font-family': 'Verdana, Arial, Helvetica, sans-serif'});
	$('#'+deUpload_id+'Start a').css({'font-weight': 'bold'});
	$('#'+deUpload_id+'Start a').css({'font-size': 'small'});
	$('#'+deUpload_id+'Start a').css({'color': '#333333'});
	$('#'+deUpload_id+'Start a').css({'text-decoration': 'underline'});



}

	return "Dement.ru";
					// 2010 ��� "��������-�"
	}
});
									 




