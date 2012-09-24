<?php class fn_photo {

var $db;
var $id;
var $base;
var $page;
var $tmp_file;
var $upl_file;
var $outfile;
var $infile;
var $file_type;
var $file_size;
var $file_ext;
var $uploaddir;
var $new_width;
var $new_height;
var $quality;

function image_resize() {
  
	$fullname=$this->infile;
	$ext=$this->file_ext;
		
	switch ($ext) {
	
	case 'jpg':
	    $im=imagecreatefromjpeg($this->infile);
	break;

	case 'png':
	    $im=imagecreatefrompng($this->infile);
	break;

	case 'gif':
	    $im=imagecreatefromgif($this->infile);
	break;
	}

	$srcWidth=imagesx($im);
	$srcHeight=imagesy($im);

    $k1=$this->new_width/$srcWidth;
    $k2=$this->new_height/$srcHeight;
    $k=$k1>$k2?$k2:$k1;

    $w=intval($srcWidth*$k);
    $h=intval($srcHeight*$k);


    $im1=imagecreatetruecolor($w,$h);
    imagecopyresampled($im1,$im,0,0,0,0,$w,$h,$srcWidth,$srcHeight);


	switch ($ext) {
	
	case 'jpg':
    	imagejpeg($im1,$this->outfile);
	break;

	case 'png':
    	imagepng($im1,$this->outfile);
	break;

	case 'gif':
    	imagegif($im1,$this->outfile);
	break;
	}

    imagedestroy($im);
    imagedestroy($im1);

}


function upload_file() {

	$this->tmp_file=		$_FILES['filename']['tmp_name'];
	$this->upl_file=		$_FILES['filename']['name'];

	//chmod($_FILES['filename']['tmp_name'],0777); 
	//move_uploaded_file($_FILES['filename']['tmp_name'],"../photo/123.jpg");
	if (move_uploaded_file($this->tmp_file, $this->uploaddir.$this->upl_file)) {
		$show="TRUE"; 
	} else { 
		$show="FALSE";
	}
	
	return $show;

}

} ?>