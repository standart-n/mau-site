// Dement.ru

// различные эффекты, которые можно применять используя библиотеку Dement 


/*  пример создания анимации на jQuery

	parentDiv.animate({
			left: xpos,
			top: ypos
			}, 
			speed,
			"linear",
			function(){
			//
			}
		);

*/

/* пример замены setTimeout через ложную анимацию

	$('#dement').animate({top: '1px'},speed,"linear",function(){	
		functionName();	
		});									

*/

/* пример остановки такой анимации

	$("#parentDiv").click(function(){
      $("#parentDiv").stop();
    });
	
*/

// ------------------------------  ВЫБОР ЭФФЕКТА

function deShowEffect(object,effect,speed) {               // функция для того чтобы выбирать различные эффекты внутри модуля
															//	параметры: объект, название эффекта, скорость выполнения 
	if (effect=="MovingUp") {									
		deShowMovingUp(object,speed); }						// эффекты 	появления окна с разных сторон экрана		
	if (effect=="MovingLeft") {
		deShowMovingLeft(object,speed); }
	if (effect=="MovingRight") {
		deShowMovingRight(object,speed); }
	if (effect=="MovingDown") {
		deShowMovingDown(object,speed); }

	if (effect=="MovingUpLeft") {							// эффекты появления с разных углов экрана 
		deShowMovingUpLeft(object,speed); }
	if (effect=="MovingUpRight") {
		deShowMovingUpRight(object,speed); }
	if (effect=="MovingDownLeft") {
		deShowMovingDownLeft(object,speed); }
	if (effect=="MovingDownRight") {
		deShowMovingDownRight(object,speed); }

	if (effect=="UncoverUp") {								// плавное открытие объекта с определенной стороны
		deShowUncoverUp(object,speed); }

	if (effect=="OpacityEffect") {							// плавное изменение непрозрачности  от 0 до 100 % 
		deShowOpacityEffect(object,speed); }

	if (effect=="SharpEffect") {							// просто резкое появление или исчезновение объекта
		deShowSharpEffect(object,speed); }

}


// ---------------------------- ПРОСТОЕ МГНОВЕННОЕ ПОЯВЛЕНИЕ ИЛИ ИСЧЕЗАНИЕ ОБЪЕКТА


function deShowSharpEffect(object,speed) {

	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	

		deObject_vsbl.css({'display': 'none'});
		deObject_hddn.css({'display': 'block'});		

/*     	deObject_vsbl.animate({
        //
	    	}, 
			1,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
			}
		);

		deShowOpacitySharp(deObject_hddn,0);
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        //
	      }, 1 );

*/


}


// -----------------------------  НЕПРОЗРАЧНОСТЬ


function deShowOpacitySlow(object,startOpacity,finishOpacity,speed) { // функция для плавной смены непрозрачности объекта 
																	// параметры : объект , начальная непрозрачность, конечная непрозрачность, скорость изменения		
	deObject=$(object);			
	deShowOpacitySharp(object,startOpacity);
	deObject.css({'display': 'block'});		
   	deObject.animate({
     opacity: (finishOpacity/100)
    }, speed );

}


function deShowOpacitySharp(object,opacity) {					// функция для мгновенной смены непрозрачности объекта 
															  // параметры : объект , непрозрачность которую необходимо задать объекту 			
	deObject=$(object);			
	deObject.css({'filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity='+opacity+')'});		
	deObject.css({'-moz-opacity': opacity/100});		
	deObject.css({'-khtml-opacity': opacity/100});		
	deObject.css({'opacity': opacity/100});		
	
}


function deShowOpacityEffect(object,speed) {
	
	deObject_hddn=$(object+':hidden');					
	deObject_vsbl=$(object+':visible');					

     	deObject_vsbl.animate({
        opacity: 0
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
			}
		);

		deShowOpacitySharp(deObject_hddn,0);
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        opacity: 1
	      }, speed );

}


// ------------------------------  ПЛАВНОЕ ПОЯВЛЕНИЕ ИЛИ СКРЫТИЕ ОБЪЕКТА СВЕРХУ, СНИЗУ, СПРАВА ИЛИ СЛЕВА   !ЭКРАНА!

function deShowMovingUp(object,speed) {						// четыре функции для плавного появления объекта с определенной стороны экрана
															//	deShowMovingUp(object,speed)        - выезжает сверху						  					
	deObject_hddn=$(object+':hidden');						//  deShowMovingDown(object,speed)      - выезжает снизу
	deObject_vsbl=$(object+':visible');						//  deShowMovingLeft(object,speed)      - выезжает слева
	screenHeight=deGetScreenSize().height; 					//  deShowMovingRight(object,speed)     - выезжает справа 	
															// 	параметры : объект , скорость 				
		deTop=deObject_vsbl.css('top');
     	deObject_vsbl.animate({
        	top: -screenHeight
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'top': deTop});
			}
		);

		deTop=deObject_hddn.css('top');							
		deObject_hddn.css({'top': -screenHeight});			// ВНИМАНИЕ! 
		deObject_hddn.css({'display': 'block'});				// если у объекта параметр dislpay: block то значит он уже виден на экране 	
     	deObject_hddn.animate({								//   и объект наоборот скроется в заданном направлении
        top: deTop											// если у объекта параметр display: none но при при этом заданы все другие настройки 		
	      }, speed );										//  и объект имеет определенное положение на экране, то мы увидим плавное появление объекта 
															//	с определенной стороны экрана 
}


function deShowMovingDown(object,speed) {
	
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	
	screenHeight=deGetScreenSize().height; 

		deTop=deObject_vsbl.css('top');
	   	deObject_vsbl.animate({
    	    top: +screenHeight
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'top': deTop});
			}
		);

		deTop=deObject_hddn.css('top');
		deObject_hddn.css({'top': +screenHeight});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        top: deTop
	      }, speed );

}


function deShowMovingLeft(object,speed) {
	
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	
	screenWidth=deGetScreenSize().width; 

		deLeft=deObject_vsbl.css('left');
     	deObject_vsbl.animate({
        	left: -screenWidth
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'left': deLeft});
			}
		);

		deLeft=deObject_hddn.css('left');
		deObject_hddn.css({'left': -screenWidth});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        left: deLeft
	      }, speed );


}


function deShowMovingRight(object,speed) {
	
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	
	screenWidth=deGetScreenSize().width; 

		deLeft=deObject_vsbl.css('left');
     	deObject_vsbl.animate({
	        left: +screenWidth
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'left': deLeft});
			}
		);

		deLeft=deObject_hddn.css('left');
		deObject_hddn.css({'left': +screenWidth});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        left: deLeft
	      }, speed );

}

//deShowMovingUp('#'+deMDialog_id,1000);
//deShowMovingDown('#'+deMDialog_id,1000);
//deShowMovingLeft('#'+deMDialog_id,1000);
//deShowMovingRight('#'+deMDialog_id,1000);



//  ---------------------------  ПЛАВНОЕ ПОЯВЛЕНИЕ ИЛИ СКРЫТИЕ ОБЪЕКТА C РАЗНЫХ СТОРОН ЭКРАНА


function deShowMovingUpLeft(object,speed) {
	
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	
	screenWidth=deGetScreenSize().width; 
	screenHeight=deGetScreenSize().height; 

		deLeft=deObject_vsbl.css('left');
		deTop=deObject_vsbl.css('top');
     	deObject_vsbl.animate({
        	left: -screenWidth,
			top: -screenHeight
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'left': deLeft});
				deObject_vsbl.css({'top': deTop});
			}
		);

		deLeft=deObject_hddn.css('left');
		deTop=deObject_hddn.css('top');
		deObject_hddn.css({'left': -screenWidth});		
		deObject_hddn.css({'top': -screenHeight});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        left: deLeft,
        top: deTop
	      }, speed );

}


function deShowMovingUpRight(object,speed) {
	
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	
	screenWidth=deGetScreenSize().width; 
	screenHeight=deGetScreenSize().height; 

		deLeft=deObject_vsbl.css('left');
		deTop=deObject_vsbl.css('top');
     	deObject_vsbl.animate({
	        left: +screenWidth,
			top: -screenHeight
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'left': deLeft});
				deObject_vsbl.css({'top': deTop});
			}
		);

		deLeft=deObject_hddn.css('left');
		deTop=deObject_hddn.css('top');
		deObject_hddn.css({'left': +screenWidth});		
		deObject_hddn.css({'top': -screenHeight});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        left: deLeft,
        top: deTop
	      }, speed );

}

function deShowMovingDownLeft(object,speed) {
	
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	
	screenWidth=deGetScreenSize().width; 
	screenHeight=deGetScreenSize().height; 

		deLeft=deObject_vsbl.css('left');
		deTop=deObject_vsbl.css('top');
     	deObject_vsbl.animate({
	        left: -screenWidth,
			top: +screenHeight
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'left': deLeft});
				deObject_vsbl.css({'top': deTop});
			}
		);

		deLeft=deObject_hddn.css('left');
		deTop=deObject_hddn.css('top');
		deObject_hddn.css({'left': -screenWidth});		
		deObject_hddn.css({'top': +screenHeight});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        left: deLeft,
        top: deTop
	      }, speed );

}



function deShowMovingDownRight(object,speed) {
	
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	
	screenWidth=deGetScreenSize().width; 
	screenHeight=deGetScreenSize().height; 

		deLeft=deObject_vsbl.css('left');
		deTop=deObject_vsbl.css('top');
     	deObject_vsbl.animate({
	        left: +screenWidth,
			top: +screenHeight
	    	}, 
			speed,
			"linear",
			function(){
				deObject_vsbl.css({'display': 'none'});
				deObject_vsbl.css({'left': deLeft});
				deObject_vsbl.css({'top': deTop});
			}
		);

		deLeft=deObject_hddn.css('left');
		deTop=deObject_hddn.css('top');
		deObject_hddn.css({'left': +screenWidth});		
		deObject_hddn.css({'top': +screenHeight});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
        left: deLeft,
        top: deTop
	      }, speed );

}

// ---------------------------------------------


function deShowUncoverUp(object,speed) {
	
	deObject=$(object);	
	deObject_id=object.replace("#","");
	deObject.css({'overflow': 'hidden'});
	deObject_hddn=$(object+':hidden');	
	deObject_vsbl=$(object+':visible');	

		deHeight=deObject.height();
		//deHeight=deObject.height();
		//alert(deHeight)
     	deObject_vsbl.animate({
	        height: '1px'
	    	}, 
			speed,
			"linear",
			function(){
				deObject.height(deHeight);
				deObject_vsbl.css({'display': 'none'});
//				document.getElementById(deObject_id).offsetHeight=deHeight;
			}
		);

		///deHeight=deObject.height();
		//deHeight=deObject_hddn.height();
		deObject_hddn.css({'height': '1px'});		
		deObject_hddn.css({'display': 'block'});		
     	deObject_hddn.animate({
	        height: deHeight
	      }, speed );

//			setTimeout("alert(deObject.css('height'))",2010);		

}

