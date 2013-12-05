<?php
	if (!isset($_POST["action"])) {
		
		$rtn .= $_POST["userfile"]["tmp_name"];
		$rtn .= "<FORM ENCTYPE=\"multipart/form-data\" ACTION=\"upload.php\" METHOD=POST>
		<INPUT TYPE=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"1000000000\">
		Файл для загрузки: <INPUT NAME=\"userfile\" TYPE=\"file\"><br>
		<INPUT NAME=\"action\" VALUE=\"upload\" TYPE=\"hidden\">
		<INPUT TYPE=\"submit\" VALUE=\"Загрузить\">
		</FORM><br>
		";
		
	}
	else
	{
		$serverfilename=$_FILES['userfile']['tmp_name'];
		$rtn .=  "path on server: ".$serverfilename."<br>\r\n";
		//$destname="files/".$_FILES['userfile']['name'];
		$destname="../files/base.dbf";
		$rtn .=  "name: ".$destname."<br>\r\n";
		$rtn .=  "size: ".$_FILES['userfile']['size']."<br>\r\n";
		if (!rename($serverfilename,$destname)){die("error");}
		chmod($destname,0777);
		$rtn .=  "successfull!<br>\r\n";
		$path=$destname; $type=".dbf";
		$name=$_FILES['userfile']['name']; 
		$size=$_FILES['userfile']['size']; 
		
		
		if ($path!="") {
			$tm=intval(time()); $id=0;
		}
		
	
	}

	echo $rtn;
	
?>