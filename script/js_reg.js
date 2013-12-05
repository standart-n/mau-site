$(document).ready(function () {			
  $('#users_email').live('blur', function(){
    line=document.getElementById('users_email').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=email&word='+line);
  });														
  $('#users_account').live('blur', function(){
    line=document.getElementById('users_account').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=account&word='+line);
  });														
  $('#users_password').live('blur', function(){
    line=document.getElementById('users_password').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=password&word='+line);
  });														
  $('#users_confirm').live('blur', function(){
    line=document.getElementById('users_confirm').value;
    line_2=document.getElementById('users_password').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=confirm&word='+line+'&word_2='+line_2);
  });														
  $('#users_street').live('blur', function(){
    line=document.getElementById('users_street').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=street&word='+line);
  });														
  $('#users_house').live('blur', function(){
    line=document.getElementById('users_house').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=house&word='+line);
  });														
  $('#users_building').live('blur', function(){
    line=document.getElementById('users_building').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=building&word='+line);
  });														
  $('#users_flat').live('blur', function(){
    line=document.getElementById('users_flat').value;
    deAjax('external/ajax_reg.php?type=checkReg&action=flat&word='+line);
  });														
});
