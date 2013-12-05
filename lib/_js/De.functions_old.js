// Dement.ru

// js библиотека различных полезных функций 

// типы функций:
// get        - возвращает значение
// show       - показывает визульный эффект
// work       - вспомогательные функции, необходимо для работы данных функции 
// style      - функция которая определенным образом стилизует объект 
// is         - функция проверки (да/нет)
// make       - функции которые что делают, меняют на странице

// терминология : 
// de         - Dement
// screen     - экран
// width      - ширина
// height     - высота
// size       - размер
// browser    - браузер
// scroll     - прокрутка
// opacity    - непрозрачность
// slow       - плавно
// sharp      - резко

// _hddn       - hidden (скрыт) 
// _vsbl      - visible (виден) 


// необходимо строго различать понятия object и id .  к примеру : 
// id  прописывается как <div id="" > и является уникальным 
// jbject - это может быть что угодно, что можно вызвать через jQuery : "a.LinkStyle" или "p.Class1"
// если в параметр object нужно передать id , то это делается так : functionName('#'+id); - т.е. добавление символа #  как в jQuery

// сайты с которых был взят некоторый материал для наполнения данной библиотеки
// tigir.com
// slyweb.ru
// jscript.ru
// www.cryer.co.uk
// vingrad.ru


// -----------------------------------------------------------------------------------------------------------------------------------------------------

function deAjax(url) {
	document.getElementById("deAjax").innerHTML="MSIE...<script></script>";
	$('#deAjax').animate({top: '1px'},10,"linear",function(){ sendscipt(url); });
}

function sendscipt(url) {				//  ajax sendscript
    scr=document.getElementById("deAjax").getElementsByTagName("script")[0];   
    scr.language="javascript";   
    if(scr.setAttribute)scr.setAttribute("src",url);else scr.src=url;   
}


function deStyleHiddenObject(object) {		// сделать див скрытым и без размеров 
	deObject=$(object);
	deObject.css({'position': 'absolute'});		
	deObject.css({'display': 'none'});		
	deObject.css({'float': 'left'});		
	deObject.css({'left': '0'});		
	deObject.css({'top': '0'});	
	deObject.width(0);
	deObject.height(0);
}

function deLoadJS(jsFile) {					// include js файла 		
	document.write('<script type="text/javascript" src="'
    + jsFile + '"></scr' + 'ipt>'); 
}

function deGet_yes() {
	alert('YES!');
}

function deGet_no() {
	alert('NO!');
}


function deReplaceHTML(id, html) {			// БЫСТРЫЙ АНАЛОГ innerHTML, ускоряет работу в 10раз. 
	oldEl = typeof id === "string" ? document.getElementById(id) : id;
	/*@cc_on 
		oldEl.innerHTML = html;
		return oldEl;
	@*/
	newEl = oldEl.cloneNode(false);
	newEl.innerHTML = html;
	oldEl.parentNode.replaceChild(newEl, oldEl);
	return newEl;
};

//	deReplaceHTML(deParentDiv_id,"hello!");


// -----------------------------   ТИП БРАУЗЕРА

function deGetBrowserType() {		// функция для определения типа браузера
	Browser = false;				// возвращает имя браузера 	
	userAgent = navigator.userAgent.toLowerCase(); 
	
	if ((userAgent.indexOf("opera") > -1) && (userAgent.indexOf("msie") > -1)) 	  { Browser = "Opera"; }
	if (userAgent.indexOf("opera/9") > -1)                                        { Browser = "Opera"; }
	if (userAgent.indexOf("netscape/7") > -1)                                     { Browser = "Netscape"; } //7
	if (userAgent.indexOf("netscape/8") > -1)                                     { Browser = "Netscape"; } //8
	if (userAgent.indexOf("firefox") > -1)                                        { Browser = "Firefox"; }
	if (userAgent.indexOf("msie") > -1)                                           { Browser = "Internet Explorer"; }
 
	return Browser;
}
 

function deBrowserDetectLite() {							// еще один способ определения типа браузера 
  var ua        = navigator.userAgent.toLowerCase(); 
  var is_major  = parseInt(navigator.appVersion);
  var is_ie     = ((ua.indexOf("msie") != -1) && (ua.indexOf("opera") == -1));
   
// Certain browser names/versions we're interested in
  this.isGecko  = (ua.indexOf('gecko') != -1 && ua.indexOf('safari') == -1);
  this.isIE     = ( (ua.indexOf('msie') != -1) && (ua.indexOf('opera') == -1) && (ua.indexOf('webtv') == -1) ); 
  this.isIE4to5 = (is_ie && (is_major >= 4) && (is_major <= 5) );
}

//   Browser=deGetBrowserType(); 
//   if (Browser="Opera") { ...  } 


// ---------------------------  КООРДИНАТЫ КУРСОРА МЫШИ

function dePosition(event) {									// в качестве переменной указываем event 
	 x=0;
	 y=0;
	if (document.attachEvent != null) { // Internet Explorer & Opera
		x = window.event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
		y = window.event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	} else if (!document.attachEvent && document.addEventListener) { // Gecko
		x = event.clientX + window.scrollX;
		y = event.clientY + window.scrollY;
	} else {
	// 
	}
	return {x:x, y:y};
}

function preload() {
	if (document.images) {
		var imgsrc = preload.arguments;
		arr=new Array(imgsrc.length);
		for (var j=0; j<imgsrc.length; j++) {
			arr[j] = new Image;
			arr[j].src = imgsrc[j];
		}
	}
}


// ---------------------------   РАЗМЕРЫ ДОКУМЕНТА


function deGetViewportSize() {			// размеры видимой части документа				

 ua = navigator.userAgent.toLowerCase();
 isOpera = (ua.indexOf('opera')  > -1);
 isIE = (!isOpera && ua.indexOf('msie') > -1);

	deViewportHeight=((document.compatMode || isIE) && !isOpera) ? 
						(document.compatMode == 'CSS1Compat') ? 
							document.documentElement.clientHeight : 
								document.body.clientHeight : (document.parentWindow || document.defaultView).innerHeight;

	deViewportWidth=((document.compatMode || isIE) && !isOpera) ? 
						(document.compatMode == 'CSS1Compat') ? 
							document.documentElement.clientWidth : 
								document.body.clientWidth : (document.parentWindow || document.defaultView).innerWidth;

	return {height:deViewportHeight,width:deViewportWidth}
}


function deGetMonitorSize() {	// получить размеры монитора и глубину цвета 
	
	w=screen.width 				// ширина экрана в пикселях
	h=screen.height 			// высота экрана в пикселях
	aw=screen.availWidth 		// доступная (рабочая) ширина экрана в пикселях
	ah=screen.availHeight 		// доступная (рабочая) высота экрана в пикселях
	cd=screen.colorDepth 		// глубина цвета, бит
	
	return {height:h,width:w,availWidth:aw,availHeight:ah,colorDepth:cd}
}

// alert(deGetMonitorSize().colorDepth);
// alert(deGetMonitorSize().availWidth);


function deGetScreenSize() {  		// фукнция для опеределения размера документа без учета скролла 
									// возвращает длину или ширину 
	Browser=deGetBrowserType();
	if (Browser=="Internet Explorer"){ 
		screenHeight=document.documentElement.clientHeight;
		screenWidth=document.documentElement.clientWidth;
		} else {
		screenHeight=window.innerHeight; 
		screenWidth=window.innerWidth; 
	}

	return {height:screenHeight,width:screenWidth}
}

// screenHeight=deGetScreenSize().height; 
// screenWidth=deGetScreenSize().width; 


function deGetScrollSize() {	  // функция для определения длины на которую прокручен скролл данной страницы 
						  		  //  возвращает значение прокрутки вниз и в право
	scrollLeft=(document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
	scrollTop=(document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;

	return {top:scrollTop,left:scrollLeft}
}

// scrollTop=deGetScrollSize().top; 
// scrollLeft=deGetScrollSize().left; 


function deGetDocumentSize() {		// размеры всего документа

	Browser=deGetBrowserType();
	if ((Browser!="Internet Explorer") && (Browser!="Opera") && (Browser!="Firefox") && (Browser!="Netscape")) {
		deDocHeight=(document.body.scrollHeight > document.body.offsetHeight)?document.body.scrollHeight:document.body.offsetHeight;
	} else {
		deDocHeight=Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollHeight : document.documentElement.scrollHeight, deGetViewportSize().height);
	}

	if ((Browser!="Internet Explorer") && (Browser!="Opera") && (Browser!="Firefox") && (Browser!="Netscape")) {
		deDocWidth=(document.body.scrollWidth > document.body.offsetWidth)?document.body.scrollWidth:document.body.offsetWidth;
	} else {
		deDocWidth=Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollWidth : document.documentElement.scrollWidth, deGetViewportSize().width);
	}

	return {height:deDocHeight,width:deDocWidth}

}

// ----------------------------     МАКСИМИЗИРОВАТЬ РАЗМЕРЫ ОКНА

function deMakeMaximumScreen() {

window.moveTo(0, 0);
window.resizeTo(screen.availWidth, screen.availHeight);
}




// ------------------------------   ПАРАМЕТРЫ И СВОЙСТВА ОБЪЕКТА

																		// вывести на экран параметры объекта
function deShowProperties(obj, objName) {								// В ДАННОМ СЛУЧАЕ ОБЪЕКТ НЕ JQUERY А DOM !!!

 result = "The properties for the " + objName + " object:" + "\n";
  
  for (var i in obj) {result += i + " = " + obj[i] + "\n";}
  
  return result;
}



function deGetObjectPosition(object) {	

	deTop=$(object).css('top').replace("px",""); 	// узнать координаты расположения объекта как числа а не как строковые величины (без "px")		
	deLeft=$(object).css('left').replace("px","");

	return {top:deTop,left:deLeft}
}


function deGetObjectParams(id) {

	deWidth = document.getElementById(id).offsetWidth;		// узнать высоту и ширину объекта по id 
	deHeight = document.getElementById(id).offsetHeight;

	return {width:deWidth,height:deHeight}
}


function deGetObjectPagePos(id) {							// узнать по id позиционирование объекта относительно документа

   elem = document.getElementById(id);
   l = 0;
   t = 0;
	
    while (elem)
    {
        l += elem.offsetLeft;
        t += elem.offsetTop;
        elem = elem.offsetParent;
    }

    return {"left":l, "top":t};
	
}

// --------------------------------  СТРОКОВЫЕ ФУНКЦИИ
															//убрать/вырезать пробелы (пробельные символы: tab, \r, \n, form feed, vertical tab) из строки
function trim(s) {											// из всей строки

	return rtrim(ltrim(s));
}

function ltrim(s) {											// только слева

	return s.replace(/^\s+/, ''); 
}

function rtrim(s) {											// только справа 

	return s.replace(/\s+$/, ''); 
}

//	alert(trim("  dement  "));


// ------------------------------  ПОДАВИТЬ СООБЩЕНИЯ ОБ ОШИБКЕ

function deFalseError() {					//подавить все сообщения об ошибках JavaScript 
	
	window.onerror=null;
}



//  -------------------------------   ПРОВЕРКА E-MAIL НА ВАЛИДНОСТЬ
																											/* Функция isValidEmail принимает один или 2 аргумента:
																											email - электронный адрес для проверки;
																											strict - необязательный логический параметр (true/false), который 
																											определяет строгую проверку при которой пробелы до и после адреса 
																											считаются ошибкой
																											В качестве результата функция возвращает либо true, либо false		*/
function deIsValidEmail (email, strict) {

 if ( !strict ) email = email.replace(/^\s+|\s+$/g, '');
 return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i).test(email);
}

// alert(deIsValidEmail("aleksnick@list.ru"));



// -------------------------------  ПРОВЕРКА ПАРОЛЯ НА НАДЕЖНОСТЬ

function deCheckPassStrength(a){				// выдает значение от 1 до 5 взависимости от надежности 
  var c = 0;									// единственный параметр - пароль
  var l = new Array(1, 2, 3, 4, 5);
  var lvl = 0;
  if(a.length<5){c=(c+7)}else if(a.length>4&&a.length<8){c=(c+14)}else if(a.length>7&&a.length<16){c=(c+17)}else if(a.length>15){c=(c+23)}if(a.match(/[a-z]/)){c=(c+9)}
  if(a.match(/[A-Z]/)){c=(c+10)}
  if(a.match(/\d+/)){c=(c+10)}
  if(a.match(/(.*[0-9].*[0-9].*[0-9])/)){c=(c+10)}
  if(a.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)){c=(c+10)}
  if(a.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)){c=(c+10)}
  if(a.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){c=(c+7)}
  if(a.match(/([a-zA-Z])/)&&a.match(/([0-9])/)){c=(c+7)}
  if(a.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)){c=(c+15)}
  if(c<21){lvl = 0}else
    if(c>20&&c<30){lvl = 1}else
      if(c>29&&c<43){lvl = 2}else
	if(c>42&&c<60){lvl = 3}else{
	  lvl = 4}
 
  return l[lvl];
}

// 	alert(deCheckPassStrength("123456"));











// -----------------------------------------------------------------------------------------------------------------------------------------------------------

