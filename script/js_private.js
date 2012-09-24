$(document).ready(function () {			
    new showDialog(de={
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
    new showDialog(de={
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
