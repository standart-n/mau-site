$(document).ready(function(){			
	$('div#stSearch input').live('keyup',function(){
		if (($(this).val()!="Введите название...") && ($(this).val()!="")) {
			deAjax('external/ajax_tsj.php?action=search&search='+$(this).val());
            $('#stSelect').css({'display':'block'});
		}
	});														
	$('div#stSelect div.stLine').live('click',function(){
		deAjax('external/ajax_tsj.php?action=click&code='+$(this).attr("tsj_code"));
        $('#stSelect').css({'display':'none'});
	});														
	$('a#stSaveInn').live('click',function(){
		if ($("#stInn").val()!="") {
			deAjax('external/ajax_tsj.php?action=saveInn&inn='+$("#stInn").val()+'&code='+$("#stCode").val());
			deAjax('external/ajax_tsj.php?action=click&code='+$("#stCode").val());
		}
	});														
	$('a#stSaveEmail').live('click',function(){
		if ($("#stEmail").val()!="") {
			deAjax('external/ajax_tsj.php?action=saveEmail&email='+$("#stEmail").val()+'&code='+$("#stCode").val());
			deAjax('external/ajax_tsj.php?action=click&code='+$("#stCode").val());
		}
	});														
	$('a#stClearInn').live('click',function(){
		deAjax('external/ajax_tsj.php?action=clearInn&code='+$("#stCode").val());
		deAjax('external/ajax_tsj.php?action=click&code='+$("#stCode").val());
	});														
	$('a#stClearEmail').live('click',function(){
		deAjax('external/ajax_tsj.php?action=clearEmail&code='+$("#stCode").val());
		deAjax('external/ajax_tsj.php?action=click&code='+$("#stCode").val());
	});														
	$('div#stSearch input').live('focus',function(){
		if ($(this).val()=="Введите название...") {
			$(this).val("");
			$(this).css({'color':'#000'});
		}
	});														
	$('div#stSearch input').live('blur',function(){
		$(this).css({'color':'#333'});
		if ($(this).val()=="") {
			$(this).val("Введите название...");
		}
	});														
	$('div#stSelect div.stLine').live('mouseover',function(){
		$(this).css({
			'cursor':'pointer',
			'background':'#ffffcc'
		});
		
	});														
	$('div#stSelect div.stLine').live('mouseleave',function(){
		$(this).css({
			'cursor':'auto',
			'background':'#fff'
		});
	});														
	/*$('#users_account').live('blur', function(){
		line=document.getElementById('users_account').value;
		deAjax('external/ajax_reg.php?type=checkReg&action=account&word='+line);
	});*/
});

