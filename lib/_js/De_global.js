function deIncludeJS(jsFile) {
  jsFile='http://www.dement.ru/!lib/'+jsFile;
  document.write('<script type="text/javascript" src="'
    + jsFile + '"></scr' + 'ipt>'); 
}

// jQuery 
deIncludeJS('_js/jQuery1.4.4.min.js');	// ----------------------------------------- jquery 
deIncludeJS('_js/jQuery-ui-1.8.7.custom.min.js'); // ------------------------------- jquery UI 
deIncludeJS('_js/jQuery_class.js'); // --------------------------------------------- работа с классами jquery 
deIncludeJS('_js/jQuery_corner.js');	// ----------------------------------------- закругление углов методами jquery 
deIncludeJS('_js/jquery.uploadify.v2.1.4.min.js');	// ------------------------- загрузка файлов jquery 
deIncludeJS('_js/swfobject.js');

// Dement
deIncludeJS('_js/De.start.js'); // ------------------------------------------------- скрипты выполняемые при загрузке страницы 
deIncludeJS('_js/De.functions.js'); // --------------------------------------------- полезные функции 
deIncludeJS('_js/De.effects.js'); // ----------------------------------------------- библиотека эффектов 
deIncludeJS('_js/De.texteditor.js'); // -------------------------------------------- функции для текстового редактора

// Modules2.0
deIncludeJS('deInnerBlock/deInnerBlock.js'); // ------------------------------------ аналогия innerHTML
deIncludeJS('deInnerBlockEvent/deInnerBlockEvent.js'); // -------------------------- аналогия innerHTML (при событии)
deIncludeJS('deAddClass/deAddClass.js'); // ---------------------------------------- добавление класса к объекту
deIncludeJS('deAddClassEvent/deAddClassEvent.js'); // ------------------------------ добавление класса к объекту (при событии)
deIncludeJS('deShowDialog/deShowDialog.js'); // ------------------------------------ всплывающее окно
deIncludeJS('deColorPalette/deColorPalette.js'); // -------------------------------- выбор цвета из палитры

// Modules
deIncludeJS('dragDrop/deDragDrop.js'); // ----------------------------------------- drag&drop
deIncludeJS('selectColorPalette/deSelectColor.js'); // ---------------------------- выбор цвета из палитры
deIncludeJS('selectColorPalette_mod/deSelectColor_mod.js'); // -------------------- выбор цвета из палитры (модиф.)
deIncludeJS('scalePreviewPhotoMove/dePhotoPre.js'); // ---------------------------- увеличенный просмотр фотографии
deIncludeJS('movePhotoEffect/dePhotoEffect.js'); // ------------------------------- перемещение фотографии внутри блока
deIncludeJS('textOpacity/deTextOpacity.js'); // ----------------------------------- изменение непрозрачности текста и его фона
deIncludeJS('sliderBlock/deSliderBlock.js'); // ----------------------------------- раздвижные блоки 
deIncludeJS('makeEffect/deMakeEffect.js'); // ------------------------------------- создание эффектов появления и исчезания
deIncludeJS('innerBlockEvent/deInnerBlockEvent.js'); // --------------------------- аналогия innerHTML при каком либо событии
deIncludeJS('showEasyDialog/deShowEasyDialog.js'); // ----------------------------- простое окно
deIncludeJS('showModalDialog/deShowDialog.js'); // -------------------------------- всплывающее окно
deIncludeJS('showModalDialog_mod/deShowDialog_mod.js'); // ------------------------ всплывающее окно (модиф.)
deIncludeJS('showDialogYesNo/deShowYesNo.js'); // --------------------------------- окно подтверждения операции (да/нет)
deIncludeJS('showDialogYesNoObj/deShowYesNoObj.js'); // --------------------------- окно подтверждения операции (да/нет)
deIncludeJS('showDialogOk/deShowOk.js'); // --------------------------------------- окно с сообщением при загрузке страницы
deIncludeJS('textEditor/deTextEditor_rus.js'); // --------------------------------- текстовый редактор 
deIncludeJS('textEditor_mod/deTextEditor_mod.js'); // ----------------------------- текстовый редактор (модиф.)
deIncludeJS('sliderMenu/deSliderMenu.js'); // ------------------------------------- раздвижное меню
deIncludeJS('editCss/deEditCss.js'); // ------------------------------------------- изменение значения ксс
deIncludeJS('selectFontSize/deSelectFontSize.js'); // ----------------------------- выбор размера шрифта
deIncludeJS('selectFontSize_easy/deSelectFontSize_easy.js'); // ------------------- выбор размера шрифта (упрощ.)
deIncludeJS('selectFontType/deSelectFontType.js'); // ----------------------------- выбор типа шрифта
deIncludeJS('selectFontType_easy/deSelectFontType_easy.js'); // ------------------- выбор типа шрифта (упрощ.)
deIncludeJS('selectColorTable/deSelectColorTable.js'); // ------------------------- выбор цвета
deIncludeJS('selectSmile/deSelectSmile.js'); // ----------------------------------- выбор смайликов
deIncludeJS('uploadFile/deUploadFile.js'); // ------------------------------------- загрузка файлов

