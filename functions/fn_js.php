<?php class fn_js { 

var $db;
var $id;
var $base;
var $page;
var $action;
var $prefix;
var $pattern;
var $pattern_nm;
var $pattern_tb;
var $skeleton;
var $skeleton_nm;
var $skeleton_tb;
var $table;
var $work;
var $design;
var $html;
var $type;
var $object_id;
var $object_name;
var $object_start;
var $object_finish;
var $class_name;
var $parent_id;
var $parameter;
var $value;
var $effect=				"OpacityEffect";
var $event_start=			"mouseover";
var $event_finish=			"mouseleave";
var $caption=				"caption";
var $position=				"relative";
var $left=					"0px";
var $top=					"0px";
var $width=					"100px";
var $width_caption=			"100px";
var $width_block=			"100px";
var $height=				"auto";
var $height_caption=		"20px";
var $height_block=			"auto";
var $text=					"text";
var $text_on=				"text_on";
var $text_off=				"text_off";
var $background=			"#ffffff";
var $background_on=			"none";
var $background_off=		"none";
var $border=				"#999999 solid 1px";
var $border_on=				"none";
var $border_off=			"none";
var $off=					"OFF";
var $on=					"ON";
var $zindex=				"9";
var $speed=					"100";
var $timeBefore=			"200";
var $buttonYES=				"��";
var $linkYES=				"#de";
var $functionYES=			"";
var $buttonNO=				"���";
var $linkNO=				"#de";
var $functionNO=			"";
var $dialog_border=			"#cccccc solid 1px";
var $dialog_zindex=			"100";
var $dialog_opacity=		"90";
var $dialog_id=				"deShowDialog";
var $topline_fontfamily=	"Verdana, Arial, Helvetica, sans-serif";
var $topline_fontsize=		"12px";
var $topline_fontcolor=		"#ffffff";
var $topline_height=		"30px";
var $topline_background=	"#003366";
var $topline_align=			"center";
var $topline_id=			"deShowTopline";
var $content_fontfamily=	"Verdana, Arial, Helvetica, sans-serif";
var $content_fontsize=		"12px";
var $content_fontcolor=		"#000000";
var $content_height=		"auto";
var $content_background=	"#ffffff";
var $content_align=			"left";
var $content_id=			"deShowContent";
var $backwall_vsbl=			"TRUE";
var $backwall_background=	"#000000";
var $backwall_opacity=		"50";
var $backwall_id=			"deShowBackwall";
var $btnX_vsbl=				"TRUE";
var $btnX_background=		"url(http://www.dement.ru/!lib/showModalDialog_mod/img/btnClose.gif) no-repeat center";
var $btnX_class=			"ClassButtonClose";
var $run=					"\r\n";
var $runn=					"\r\n\r\n";

function libs() {

	$show=		$this->runn.'<script src="../lib/_js/De_admin.js" type="text/javascript"></script>'.$this->runn; 
	return $show;

}

function editCSS() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// ������� ���
	$show.=		'$(document).ready(function () {'.$this->run;
	$show.=		'$("'.$this->object_name.'").css({"'.$this->parameter.'": "'.$this->value.'" });'.$this->run;
	$show.=		'});'.$this->run;
	$show.=		'</script>'.$this->runn;			
	return $show;

}

function showOk() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// ������ :: ���� �������������
	$show.=			'new deShowOk('.$this->run;			
	$show.=			'"<strong>'.$this->caption.'</strong>",'.$this->run;		// caption topLine			��������� ���� 
	$show.=			'"'.$this->text.'",'.$this->run;							// text content		���������� ������������ ����
	$show.=			'"��",'.$this->run;										// button YES				�������� ������ ��
	$show.=			'"'.$this->id.'",'.$this->run;	//***						// dialog_id				id �������� ���� 									
	$show.=			'"320",'.$this->run;										// z-index dialog			������� ������� ����	
	$show.=			'"10"'.$this->run;							
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">������� ����</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - ���������� ��������� ��� ������������ ������������� ������� �� �������� 				
	return $show;

}

function showYesNo() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// ������ :: ���� �������������
	$show.=			'new deShowYesNo('.$this->run;			
	$show.=			'"'.$this->object_id.'",'.$this->run;	//***				// object 					������ � ������� ������� ������� ��������� ������������ ����	
	$show.=			'"'.$this->event_start.'",'.$this->run;					// startEvent				������� ��� ������� ���������� ����������� ���� 				
	$show.=			'"'.$this->caption.'",'.$this->run;						// caption topLine			��������� ���� 
	$show.=			'"'.$this->text.'",'.$this->run;							// text content		���������� ������������ ����
	$show.=			'"'.$this->buttonYES.'",'.$this->run;						// button YES				�������� ������ ��
	$show.=			'"'.$this->linkYES.'",'.$this->run;						// Link YES					������ ������ ��
	$show.=			'"'.$this->functionYES.'",'.$this->run;					// function YES				������� ������ ��
	$show.=			'"'.$this->buttonNO.'",'.$this->run;						// button NO				�������� ������ ���
	$show.=			'"'.$this->linkNO.'",'.$this->run;							// Link NO					������ ������ ���
	$show.=			'"'.$this->functionNO.'",'.$this->run;						// function NO				������� ������ ���
	$show.=			'"'.$this->id.'",'.$this->run;	//***						// dialog_id				id �������� ���� 									
	$show.=			'"'.$this->zindex.'",'.$this->run;							// z-index dialog			������� ������� ����	
	$show.=			'"'.$this->timeBefore.'"'.$this->run;	// !!! (��) ����� �������� �� ������ ������� (��� ���������� ������ �������)
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">������� ����</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - ���������� ��������� ��� ������������ ������������� ������� �� �������� 				
	return $show;

}


function showYesNoObj() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					// ������ :: ���� �������������
	$show.=			'new deShowYesNoObj('.$this->run;			
	$show.=			'"'.$this->object.'",'.$this->run;	//***				// object 					������ � ������� ������� ������� ��������� ������������ ����	
	$show.=			'"'.$this->event_start.'",'.$this->run;					// startEvent				������� ��� ������� ���������� ����������� ���� 				
	$show.=			'"'.$this->caption.'",'.$this->run;						// caption topLine			��������� ���� 
	$show.=			'"'.$this->text.'",'.$this->run;							// text content		���������� ������������ ����
	$show.=			'"'.$this->buttonYES.'",'.$this->run;						// button YES				�������� ������ ��
	$show.=			'"'.$this->linkYES.'",'.$this->run;						// Link YES					������ ������ ��
	$show.=			'"'.$this->functionYES.'",'.$this->run;					// function YES				������� ������ ��
	$show.=			'"'.$this->buttonNO.'",'.$this->run;						// button NO				�������� ������ ���
	$show.=			'"'.$this->linkNO.'",'.$this->run;							// Link NO					������ ������ ���
	$show.=			'"'.$this->functionNO.'",'.$this->run;						// function NO				������� ������ ���
	$show.=			'"'.$this->id.'",'.$this->run;	//***						// dialog_id				id �������� ���� 									
	$show.=			'"'.$this->zindex.'",'.$this->run;							// z-index dialog			������� ������� ����	
	$show.=			'"'.$this->timeBefore.'"'.$this->run;	// !!! (��) ����� �������� �� ������ ������� (��� ���������� ������ �������)
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">������� ����</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - ���������� ��������� ��� ������������ ������������� ������� �� �������� 				
	return $show;

}


function addClass() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;					
	$show.=			'new deAddClass('.$this->run;						
	$show.=			'"'.$this->object_name.'",'.$this->run;								// ������
	$show.=			'"'.$this->class_name.'"'; 							// �����
	$show.=			');'.$this->run;								
	$show.=		'</script>'.$this->runn;			
	return $show;

}

function sliderBlock() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;						
	$show.=			'new deSliderBlock('.$this->run;									// ����� ������ 
	$show.=			'"'.$this->parent_id.'",'.$this->run;								// id ���� 
	$show.=			'"'.$this->event_finish.'",'.$this->run;							// ������� ��� ������� ���� �������� 
	$show.=			'"'.$this->event_start.'",'.$this->run;							// ������� ��� ������� ���� ����������
	$show.=			'"'.$this->speed.'",'.$this->run;									// �������� ���������
	$show.=			'"'.$this->position.'",'.$this->run;								// ���������������� �����
	$show.=			'"'.$this->left.'",'.$this->run;									// left ������ �� ������ ����
	$show.=			'"'.$this->top.'",'.$this->run;									// top ������ ������

	$show.=			'"'.$this->caption.'",'.$this->run;								// text1 OFF ���������� ��������� ����� ������� �������
	$show.=			'"'.$this->caption.'",'.$this->run;								// text2 ON ����� ��������� ����� ��� ��������
	$show.=			'"'.$this->width.'",'.$this->run;									// width ������ ��������
	$show.=			'"'.$this->height.'",'.$this->run;									// height ������ ��������
	$show.=			'"'.$this->background_off.'",'.$this->run;							// background OFF ������ ��� ��� �������� �������
	$show.=			'"'.$this->background_on.'",'.$this->run;							// background ON ������ ��� ��� ��������� �������
	$show.=			'"'.$this->border_off.'",'.$this->run;								// border OFF ������� ��� �������� ������� 
	$show.=			'"'.$this->border_on.'",'.$this->run;								// border ON ������� ��� ��������� �������

	$show.=			'"'.$this->html.'",'.$this->run;									// text inside ���������� ����� �������� ���������� � �������� 
	$show.=			'"'.$this->width.'",'.$this->run;									// width ������ ����� ����� 
	$show.=			'"'.$this->height_block.'",'.$this->run;							// height ������ ����� �����
	$show.=			'"'.$this->background.'",'.$this->run;								// background ������ ��� 
	$show.=			'"'.$this->border.'",'.$this->run;									// border ��������� 
	
	$show.=			'"'.$this->off.'",'.$this->run;									// ON/OFF with start ��������� ��������� �������� (�������� ��� �������� 
	$show.=			'"'.$this->zindex.'",'.$this->run;									// css Z_INDEX		
	$show.=			'"'.$this->id.'"';		//***					//  id ����� ������� ����� ������ (�������� ��� ������������� ������������� ������� � ��� ���. �������) 
	$show.=			');'.$this->run;						//***  ���������, ������� ������ ���� ����������� ��� ������������ ������������� �������										
	$show.=		'</script>'.$this->runn;			
	return $show;

}

function sliderMenu() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;						
	$show.=			'new deSliderMenu('.$this->run;									// ����� ������ 
	$show.=			'"'.$this->parent_id.'",'.$this->run;								// id ���� ������� ����� �������� ������������ � � �������� �������� ��� 
	$show.=			'"'.$this->object_start.'",'.$this->run;							// ������ �� ������� ���������� ����. �������
	$show.=			'"'.$this->event_start.'",'.$this->run;							// ������� ��� ������� ���� �������� 
	$show.=			'"'.$this->object_finish.'",'.$this->run;							// ������ �� ������� ���������� ����. �������
	$show.=			'"'.$this->event_finish.'",'.$this->run;							// ������� ��� ������� ���� ����������
	$show.=			'"'.$this->speed.'",'.$this->run;									// �������� ���������
	$show.=			'"'.$this->position.'",'.$this->run;								// ���������������� �����
	$show.=			'"'.$this->left.'",'.$this->run;									// left ������ �� ������ ����
	$show.=			'"'.$this->top.'",'.$this->run;									// top ������ ������

	$show.=			'"'.$this->text_off.'",'.$this->run;								// text1 OFF ���������� ��������� ����� ������� �������
	$show.=			'"'.$this->text_on.'",'.$this->run;								// text2 ON ����� ��������� ����� ��� ��������
	$show.=			'"'.$this->width_caption.'",'.$this->run;							// width ������
	$show.=			'"'.$this->height_caption.'",'.$this->run;							// height ������

	$show.=			'"'.$this->text_block.'",'.$this->run;								// text inside ���������� ����� �������� ���������� � �������� 
	$show.=			'"'.$this->width_block.'",'.$this->run;							// width ������
	$show.=			'"'.$this->height_block.'",'.$this->run;							// height ������
	$show.=			'"'.$this->background.'",'.$this->run;								// ������ ���
	$show.=			'"'.$this->border.'",'.$this->run;									// �������
	
	$show.=			'"'.$this->off.'",'.$this->run;									// ON/OFF with start ��������� ��������� �������� (�������� ��� �������� 
	$show.=			'"'.$this->zindex.'",'.$this->run;									// css Z_INDEX		
	$show.=			'"'.$this->id.'"';		//***							//  id ����� ������� ����� ������ (�������� ��� ������������� ������������� ������� � ��� ���. �������) 
	$show.=			');'.$this->run;						//***  ���������, ������� ������ ���� ����������� ��� ������������ ������������� �������										
	$show.=		'</script>'.$this->runn;			
	return $show;
	
}


function showDialog() {

	$show=		$this->runn.'<script type="text/javascript">'.$this->run;		// ������ :: ����������� ����
	$show.=			'new deShowDialog('.$this->run;			
	$show.=			'"'.$this->object_id.'",'.$this->run;			//***		// object 					������ � ������� ������� ������� ��������� ������������ ����	
	$show.=			'"'.$this->event_start.'",'.$this->run;				// startEvent				������� ��� ������� ���������� ����������� ���� 				
	$show.=			'"'.$this->effect.'",'.$this->run;							// 							������ ��������� ������� (MoveUp, MoveDown ... ) 
	$show.=			'"'.$this->width.'",'.$this->run;							// width dialog				������ ����
	$show.=			'"'.$this->height.'",'.$this->run;							// height dialog			������ ����	
	$show.=			'"'.$this->dialog_border.'",'.$this->run;					// border dialog			������� ���� CSS 
	$show.=			'"'.$this->dialog_zindex.'",'.$this->run;					// z-index dialog			������� ������� ����	
	$show.=			'"'.$this->dialog_opacity.'",'.$this->run;					// opacity % dialog		    �������������� ����� ����  
	$show.=			'"'.$this->speed.'",'.$this->run;							// (��) effect speed  dialog     �������� ��������� ����
	$show.=			'"'.$this->dialog_id.'",'.$this->run;	//***				// dialog_id				id �������� ���� 									

	$show.=			'"'.$this->caption.'",'.$this->run;						// caption topLine			��������� ���� 
	$show.=			'"'.$this->topline_fontfamily.'",'.$this->run;				// font-family topLine		��� ������ ��������� 
	$show.=			'"'.$this->topline_fontsize.'",'.$this->run;				// font-size topLine		������ ������ ���������	
	$show.=			'"'.$this->topline_fontcolor.'",'.$this->run;				// font-color topLne		���� ������ ��������� 
	$show.=			'"'.$this->topline_height.'",'.$this->run;					// height topLne			������ ���������	
	$show.=			'"'.$this->topline_background.'",'.$this->run;				// background topLne		������ ��� ��������� 
	$show.=			'"'.$this->topline_align.'",'.$this->run;					// text-align topLine		������������ ������� ���������
	$show.=			'"'.$this->topline_id.'",'.$this->run;	//***						// topLne_id				id ������ � ���������� 	

	$show.=			'"'.$this->text.'",'.$this->run;							// text content				���������� ������������ ����
	$show.=			'"'.$this->content_fontfamily.'",'.$this->run;				// font-family content		��� ������ ����� �����������
	$show.=			'"'.$this->content_fontsize.'",'.$this->run;				// font-size content		������ ������ ����� �����������
	$show.=			'"'.$this->content_fontcolor.'",'.$this->run;				// font-color content		���� ������ 
	$show.=			'"'.$this->content_background.'",'.$this->run;				// background content		������ ��� 
	$show.=			'"'.$this->content_align.'",'.$this->run;					// text-align content		������������� ������
	$show.=			'"'.$this->content_id.'",'.$this->run;	//***				// content_id				id �������� � �������� ���������� 

	$show.=			'"'.$this->backwall_vsbl.'",'.$this->run;					// ���������� �� ������ ���
	$show.=			'"'.$this->backwall_background.'",'.$this->run;				// background backWall		
	$show.=			'"'.$this->backwall_opacity.'",'.$this->run;				// opacity % backWall		�������������� ����� ����.  
	$show.=			'"'.$this->backwall_id.'",'.$this->run;	//***			// backwall_id				id ���� � ���� ����� 	

	$show.=			'"'.$this->btnX_vsbl.'",'.$this->run;						// ���������� ��� ��� ������ ������ � 
	$show.=			'"'.$this->btnX_background.'",'.$this->run;	// ��� ������ ������
	$show.=			'"'.$this->btnX_class.'",'.$this->run;	//***	// ��������!!! ��� ����� ��� <span> ������ �������� ����� ������ ��� ������� �� ������� ����� ����������� ���� !!! 

	$show.=			'"'.$this->timeBefore.'"'.$this->run;	// !!! (��) ����� �������� �� ������ ������� (��� ���������� ������ �������), 
															//����� ��� ������� ������� �� �������� ������ �����������
	$show.=			');'.$this->run;											// <span class="btnClose"><a href="#close">������� ����</a></span>												
	$show.=		'</script>'.$this->runn;			//*** - ���������� ��������� ��� ������������ ������������� ������� �� �������� 				
	return $show;


}


} ?>