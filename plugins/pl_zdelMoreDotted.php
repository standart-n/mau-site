<?php class pl_zdelMoreDotted {

function engine() {
    $this->de['html']=preg_replace("/href=\"de\.\./i",'href="de.',$this->de['html']);
    return $this->de;
}

} ?>
