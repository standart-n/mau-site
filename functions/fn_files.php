<?php class fn_files {

var $db;
var $id;
var $tmp_file;
var $upl_file;
var $outfile;
var $infile;
var $uploaddir;

function saveTextInFile($path,$text) {
  $this->f=fopen($path,"w");
  if(!$this->f )
  {
	$show="FALSE";
  }
  else
  {
	fwrite($this->f,$text);
	$show="TRUE";
  }
  fclose($this->f);
  return $show;
}

function upload_file() {
	$this->tmp_file=		$_FILES['filename']['tmp_name'];
	$this->upl_file=		$_FILES['filename']['name'];

	if (move_uploaded_file($this->tmp_file, $this->uploaddir.$this->upl_file)) {
		$show="TRUE"; 
	} else { 
		$show="FALSE";
	}
	return $show;
}

function deltemporaryfiles($directory) {
    $dir = opendir($directory);
    while(($file = readdir($dir))) {
      if(is_file($directory."/".$file)) unlink($directory."/".$file);
      if(is_dir($directory."/".$file) &&
              ($file != ".") &&
              ($file != ".."))
      {
        $this->delTemporaryFiles($directory."/".$file);
        rmdir($directory."/".$file);
      }
    }
    closedir($dir);
  }

function copy2($dir, $dir2) {
if  (is_file($dir)) { return copy($dir, $dir2); }

$dh=opendir($dir); // открываем директорию
while(false!==($file=readdir($dh))) // 
{
if($file=='.'||$file=='..') continue; // естесственно, если нам попадается "путь на уровень выше" "." или "..", то пропускаем такой "файл" 
        if (!file_exists($dir2)) {
            mkdir($dir2);
        }
$this->copy2($dir . "/" . $file, $dir2 . "/" . $file);
}
closedir($dh); // "поработав" с директорией закрываем ее
if (file_exists($dir2)) return TRUE;
else return FALSE;
}

} ?>