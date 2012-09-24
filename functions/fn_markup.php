<?php class fn_markup {

var $db;
var $id;
var $base;
var $html;

function insAfterAnyTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".*.*?".$params."[\s\S]*?\])/i","$1\r\n".$text,$html);
}

function insAfterOpenTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".>.*?".$params."[\s\S]*?\])/i","$1\r\n".$text,$html);
}

function insAfterKeyTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".-.*?".$params."[\s\S]*?\])/i","$1\r\n".$text,$html);
}

function insAfterCloseTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".<.*?".$params."[\s\S]*?\])/i","$1\r\n".$text,$html);
}



function insBeforeAnyTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".*.*?".$params."[\s\S]*?\])/i",$text."\r\n$1",$html);
}

function insBeforeOpenTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".>.*?".$params."[\s\S]*?\])/i",$text."\r\n$1",$html);
}

function insBeforeKeyTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".-.*?".$params."[\s\S]*?\])/i",$text."\r\n$1",$html);
}

function insBeforeCloseTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".<.*?".$params."[\s\S]*?\])/i",$text."\r\n$1",$html);
}



function insPlaceOpenTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".>.*?".$params."[\s\S]*?\])/i",$text,$html);
}

function insPlaceKeyTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".-.*?".$params."[\s\S]*?\])/i",$text,$html);
}

function insPlaceCloseTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".<.*?".$params."[\s\S]*?\])/i",$text,$html);
}

function insPlaceDualTag(&$html,$text,$tag,$params = "") {
   $html=preg_replace("/(\[".$tag.".>.*".$params."[\s\S]*?\])[\s\S]*?(\[".$tag.".<.*".$params."[\s\S]*?\])/i","$1\r\n".$text."$2",$html);
}




function insPlaceAllAnyTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.*.*".$params."[\S]*?\])/i",$text,$html);
}


function insPlaceAllOpenTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.>.*".$params."[\S]*?\])/i",$text,$html);
}

function insPlaceAllKeyTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.-.*".$params."[\S]*?\])/i",$text,$html);
}

function insPlaceAllCloseTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.<.*".$params."[\S]*?\])/i",$text,$html);
}


function insAfterAllOpenTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.>.*".$params."[\S]*?\])/i","$1\r\n".$text,$html);
}

function insAfterAllKeyTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.-.*".$params."[\S]*?\])/i","$1\r\n".$text,$html);
}

function insAfterAllCloseTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.<.*".$params."[\S]*?\])/i","$1\r\n".$text,$html);
}


function insBeforeAllOpenTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.>.*".$params."[\S]*?\])/i",$text."\r\n$1",$html);
}

function insBeforeAllKeyTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.-.*".$params."[\S]*?\])/i",$text."\r\n$1",$html);
}

function insBeforeAllCloseTag(&$html,$text,$params = "") {
   $html=preg_replace("/(\[[\S]*?.<.*".$params."[\S]*?\])/i",$text."\r\n$1",$html);
}

} ?>