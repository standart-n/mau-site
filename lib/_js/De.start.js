// Dement.ru

// события выполняемые при загрузке страницы для корректной работы библиотеки Dement

$(document).ready(function () {	//   ajax + dement
	
	document.body.innerHTML+="<div id=\"dement\"></div><div id=\"deAjax\"></div>";
	deStyleHiddenObject('#dement');
	deStyleHiddenObject('#deAjax');


});