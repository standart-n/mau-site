<?php

class events_mod {

function engine() {

          foreach($this->de as $key => $value) {
              $node=$this->de[$key];
              $$key=$node;
          }

/*[--- open ---]*/    

    switch($level1) {
    case 'main':
    $fn_boxes->showBoxByName($html,"ButtonsLine","buttons_main");
    $fn_boxes->showBoxByName($html,"NavigationLine","nav_services");
    break;
    case 'count':
    $fn_boxes->showBoxByName($html,"ButtonsLine","buttons_count");
    break;
    case 'company':
    $fn_boxes->showBoxByName($html,"ButtonsLine","buttons_company");
    break;
    default:
    $fn_boxes->showBoxByName($html,"ButtonsLine","buttons_default");
    }
	
    if ($level=="main") {
      $fn_text->showTextByName($html,"ContentPrimary","services","mauric");
      $fn_text->showTextByKey($html,"ContentSide","services","sideItems");
    }
    else 
    {
        if ($level2=="unset") {
            $fn_text->showTextByName($html,"ContentPrimary",$level1,"mauric");
            $fn_text->showTextByGroup($html,"ContentPrimary",$level1,"mauricItems");
	    $fn_text->showTextByKey($html,"ContentSide","services","sideItems");
        }
        else
        {
            if ($level3=="unset") {
                $fn_text->showTextByName($html,"ContentPrimary",$level2,"mauric");
                $fn_text->showTextByGroup($html,"ContentPrimary",$level1.".".$level2,"mauricItems");
	    $fn_text->showTextByKey($html,"ContentSide","services","sideItems");
            }
            else 
            {
                $fn_text->showTextByName($html,"ContentPrimary",$level3,"mauric");
                $fn_text->showTextByGroup($html,"ContentSide",$level1.".".$level2,"sideItems");
             }
        }
     }

    $fn_boxes->showBoxByName($html,"ContentPrimary","plugins");
    

 /*[--- close ---]*/
    
	return $html;


}


}

?>
