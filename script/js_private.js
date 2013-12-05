$(document).ready(function () {			
    new showDialog({
        object:".users_private_link a",
        dialogId:"private_dlg",
        uplineId:"private_dlg_upline",
        contentId:"private_dlg_content",
        uplineCaption:"Данные счетчика",
        uplineColor:"#872929",
        uplineBackground:"#dddddd",
        contentText:"Загрузка данных...",
        closeButton:"private_link",
        height:"200px"
    });												
    new showDialog({
        object:"#private_ins_newValue",
        dialogId:"private_dlg_newValue",
        contentId:"private_dlg_newValue_content",
        uplineCaption:"Изменить значение",
        uplineColor:"#872929",
        uplineBackground:"#dddddd",
        contentText:"Загрузка данных...",
        height:"100px"
    });												
});												

$("#private_ins_newValue").live("click", function(){
    id=document.getElementById("private_dlg_id").value;
    value=document.getElementById("private_dlg_value").value;
    deAjax('external/ajax_private.php?type=checkCounter&action=ins&id='+id+'&value='+value);
});

function private_editCounter(id) {
    value=document.getElementById("private_dlg_value_"+id).innerHTML;
    deAjax('external/ajax_private.php?type=checkCounter&action=info&id='+id+'&value='+value);
}

$(function(){

  $("#users_private_oc_edit a").live("click",function(){
    $("#users_private_oc").html('<input id="users_private_oc_new" type="text" value="'+$(this).attr("mauid")+'" width="100px">');
    $("#users_private_oc_edit").hide();
    $("#users_private_oc_save").show();
    //value=document.getElementById("private_dlg_value_"+id).innerHTML;
    //deAjax('external/ajax_private.php?type=checkCounter&action=info&id='+id+'&value='+value);
  });

  $("#users_private_oc_save a").live("click",function(){
  
    var value=$("#users_private_oc_new").val();
    
    $("#users_private_oc_save").hide();
    $("#users_private_oc_edit").show();

    $("#users_private_oc").html(value);
    deAjax('external/ajax_private.php?type=checkCounter&action=editoc&id='+0+'&value='+value);

  });
  
});
