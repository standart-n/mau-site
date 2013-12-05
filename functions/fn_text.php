<?php class fn_text {

var $db;
var $id;
var $run="\r\n";
var $runn="\r\n\r\n";

function getTextByMark($mark="name",$key="main",$order="post_dt",$sort="ASC",$start="0",$limit="10000") {
    $sort=strval(trim(htmlspecialchars(strtoupper($sort))));	$order=strval(htmlspecialchars($order));	$mas=array(); 
    $s_1="SELECT * FROM `".$this->prefix."_dataTexts` "; $s_2=" ORDER by ".$order." ".$sort." LIMIT {$start},{$limit}";
	if ((isset($this->db)) && (isset($this->base))) 	{
		$this->base->db=$this->db;
		switch ($mark) {
			case 'all': $this->base->sql=$s_1."WHERE (`group`<>'')".$s_2; break;
			default: $this->base->sql=$s_1."WHERE (`".$mark."`=\"$key\")".$s_2; 
		}
		$this->text_ms=$this->base->sqlSelect(); $index=0;
		if (isset($this->text_ms)) { if (isset($this->text_ms['res'])) { if ($this->text_ms['res']) {
        	while($this->text_row=mysql_fetch_array($this->text_ms['res'])) {
				$this->ms=array();
				while (list($name,$value)=each($this->text_row)) $this->ms[$name]=$value;
				$this->getDate("post");	$this->getDate("last");
				$mas[$index]=$this->ms; $index++;
			} 
			$mas['index']=$index; $mas['order']=$order; $mas['sort']=$sort;
		}	}	}
	}
    return $mas;
}

function getDate($type) {
	if (isset($this->text_row[$type.'_d']))     {
		$dt_ms=explode("-",$this->text_row[$type.'_d']);
		$dt_year=       intval(trim($dt_ms['0']));
		$dt_month=      intval(trim($dt_ms['1']));
		$dt_day=        intval(trim($dt_ms['2']));
		$dt_month_ms=   $this->getRusMonthByNumber($dt_month);
		$this->ms[$type.'_day']=		$dt_day;
		$this->ms[$type.'_day_int']=   	$dt_day;
		$this->ms[$type.'_year']=        $dt_year;
		$this->ms[$type.'_year_int']=    $dt_year;
		if (intval($dt_day)<10) { $str="0";	} else { $str=""; }
		$this->ms[$type.'_day_two']=$str.strval($dt_day);
		if (intval($dt_month)<10) { $str="0"; } else { $str=""; }
		$this->ms[$type.'_month_two']=$str.strval($dt_month);
		foreach (explode("|","int|rus|cut|inc") as $key) { $this->ms[$type.'_month_'.$key]=$dt_month_ms[$key]; }
		$this->ms[$type.'_month']=$dt_month_ms['rus'];
		$this->ms[$type.'_year_two']=substr(strval($dt_year),2,2);
	}
}

function showText(&$html,$mas,$div,$style="none") {
    for ($i=0;$i<sizeof($mas);$i++) { if (isset($mas[$i])) {
		$mdl='models/mdl_text_'.$style.'.html';
		if (file_exists($mdl)) { if (fopen($mdl,"r")) {
			$model=file_get_contents($mdl); $this->checkModel($model,$mas[$i],$style);     
			$this->showModel($html,$model,$div); $this->showCSS($html,$style);
		}	}	
	}	}	
}

function showTextById(&$html,$div="idBlockMain",$id="1",$style="none",$order="post_dt",$sort="ASC",$start="0",$limit="10000") {
    $mas=$this->getTextByMark("id",$id,$order,$sort,$start,$limit);
    $this->showText($html,$mas,$div,$style);
}

function showTextByName(&$html,$div="idBlockMain",$name="main",$style="none",$order="post_dt",$sort="ASC",$start="0",$limit="10000") {
    $mas=$this->getTextByMark("name",$name,$order,$sort,$start,$limit);
    $this->showText($html,$mas,$div,$style);
}

function showTextByGroup(&$html,$div="idBlockMain",$group="none",$style="none",$order="post_dt",$sort="ASC",$start="0",$limit="10000") {
    $mas=$this->getTextByMark("group",$group,$order,$sort,$start,$limit);
    $this->showText($html,$mas,$div,$style);
}

function showTextByTitle(&$html,$div="idBlockMain",$title="none",$style="none",$order="post_dt",$sort="ASC",$start="0",$limit="10000") {
    $mas=$this->getTextByMark("title",$title,$order,$sort,$start,$limit);
    $this->showText($html,$mas,$div,$style);
}

function showTextByKey(&$html,$div="idBlockMain",$key="none",$style="none",$order="post_dt",$sort="ASC",$start="0",$limit="10000") {
    $mas=$this->getTextByMark("key",$key,$order,$sort,$start,$limit);
    $this->showText($html,$mas,$div,$style);
}

function showTextAll(&$html,$div="idBlockMain",$style="none",$order="post_dt",$sort="ASC",$start="0",$limit="10000") {
    $mas=$this->getTextByMark("all","none",$order,$sort,$start,$limit);
    $this->showText($html,$mas,$div,$style);
}

function editTitle(&$html,$title) {
    $html=preg_replace("/(\<title\>)[\s\S]*?(\<\/title\>)/i","$1".$title."$2",$html);
}

function editKeywords(&$html,$keywords) {
    $html=preg_replace("/(\<meta name=\"keywords\" content=\")[\s\S]*?(\" \/>)/i","$1".$keywords."$2",$html);
}

function editDescription(&$html,$description) {
    $html=preg_replace("/(\<meta name=\"description\" content=\")[\s\S]*?(\" \/>)/i","$1".$description."$2",$html);
}

function editTitleByTextName(&$html,$name="main",$field="caption") {
    $mas=$this->getTextByMark("name",$name);
    $this->editTitle($html,$mas[0][$field]);
}

function editTitleByTextId(&$html,$id="1",$field="caption") {
    $mas=$this->getTextByMark("id",$id);
    $this->editTitle($html,$mas[0][$field]);
}

function editKeywordsByTextName(&$html,$name="main") {
    $mas=$this->getTextByMark("name",$name);
    $this->editKeywords($html,$mas[0]['keywords']);
}

function editKeywordsByTextId(&$html,$id="1") {
    $mas=$this->getTextByMark("id",$id);
    $this->editKeywords($html,$mas[0]['keywords']);
}

function editDescriptionByTextName(&$html,$name="main") {
    $mas=$this->getTextByMark("name",$name);
    $this->editDescription($html,$mas[0]['description']);
}

function editDescriptionByTextId(&$html,$id="1") {
    $mas=$this->getTextByMark("id",$id);
    $this->editDescription($html,$mas[0]['description']);
}

function checkModel(&$model,$ms,$style) {
    $path="models/mdl_text.ini";
    if (file_exists($path)) {	$mdl_ini=parse_ini_file($path,false);
        foreach($mdl_ini as $key => $value) {	
			if (isset($ms[$key])) {	if ($ms[$key]!="") {
				$model=preg_replace("/(\[".$key.".-.*[\S]*?\])/i",$ms[$key],$model);
			}	}
        }
    }
}

function showCSS(&$html,$style) {
    $css="style/css_text_".$style.".css";
    if (file_exists($css)) {
        $file="<link href=\"".$css."\" rel=\"stylesheet\" type=\"text/css\">";
        /*$html=preg_replace("/<link href=\"(*?)css_text_".$style.".css\"(*?)>/i","",$html);*/
        $html=preg_replace("/(\[css.<.*[\S]*?\])/i",$file."\r\n$1",$html);
    }
}

function showModel(&$html,$model,$div) {
	$html=preg_replace("/(\[cell.<.*id:".$div.";[\S]*?\])/i",$model."$1\r\n",$html);
}

function getRusMonthByNumber($month_int = 1) {
	$month_int=intval(trim($month_int)); $ms=array();
	$month_ru="";  $month_inc=""; $month_cut="";
	if ($month_int==1) { $month_ru='Январь';  $month_inc='января';  $month_cut='Янв';  }
	if ($month_int==2) { $month_ru='Февраль'; $month_inc='февраля'; $month_cut='Фев';  }
	if ($month_int==3) { $month_ru='Март';    $month_inc='марта';   $month_cut='Мар';  }
	if ($month_int==4) { $month_ru='Апрель';  $month_inc='апреля';  $month_cut='Апр';  }
	if ($month_int==5) { $month_ru='Май';     $month_inc='мая';     $month_cut='Май';  }
	if ($month_int==6) { $month_ru='Июнь';    $month_inc='июня';    $month_cut='Июн';  }
	if ($month_int==7) { $month_ru='Июль';    $month_inc='июля';    $month_cut='Июл';  }
	if ($month_int==8) { $month_ru='Август';  $month_inc='августа'; $month_cut='Авг';  }
	if ($month_int==9) { $month_ru='Сентябрь';$month_inc='сентября';$month_cut='Сен';  }
	if ($month_int==10){ $month_ru='Октябрь'; $month_inc='октября'; $month_cut='Окт';  }
	if ($month_int==11){ $month_ru='Ноябрь';  $month_inc='ноября';  $month_cut='Ноя';  }
	if ($month_int==12){ $month_ru='Декабрь'; $month_inc='декабря'; $month_cut='Дек';  }
    $ms['int']=$month_int;  $ms['rus']=$month_ru;  $ms['inc']=$month_inc; $ms['cut']=$month_cut;
    return $ms;
}

} ?>
