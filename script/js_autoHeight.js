function autoHeight() { 
 $(document).ready(function () {
	Browser=deGetBrowserType();
	screenHeight=deGetScreenSize().height;
	screenWidth=deGetScreenSize().Width;
	middleheight=screenHeight-($('#Top').height()+$('#Header').height()+$('#Tools').height()+$('#Navigation').height()+$('#Buttons').height()+$('#Return').height()+$('#Footer').height()+98);
        PrimaryContent=$('#Content').height();
     if (middleheight>(PrimaryContent)) {
          /*$('#Content').css({'height': middleheight });
          $('#ContentPrimary').css({'height': middleheight });
          $('#ContentSide').css({'height': middleheight });*/
          /*PrimaryContent='800px';
          $('#Content').css({'min-height': PrimaryContent });
          $('#ContentPrimary').css({'min-height': PrimaryContent });
          $('#ContentSide').css({'min-height': PrimaryContent });*/
     } else {
          /*PrimaryContent.css({'height':'auto'});
          $('#Content').css({'height': PrimaryContent.height() });
          $('#ContentPrimary').css({'height': PrimaryContent.height() });
          $('#ContentSide').css({'height': PrimaryContent.height() });*/
          /*$('#Content').css({'height':'auto'});
          $('#ContentPrimary').css({'height':'auto'});
          $('#ContentSide').css({'height':'auto'});*/
     }
});	
}
