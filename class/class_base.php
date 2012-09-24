<?php

class base {

var $db;
var $settings_path;
var $config_ini;
var $host;
var $dbname;
var $login;
var $password;
var $table;
var $prefix;
var $sql;
var $query;
var $row;
var $rows_count;
var $res;
var $box;
var $error;



function getBaseFromSite() {

    $this->settings_path="settings/config.ini";
   	if (file_exists($this->settings_path)) { 
    	$this->db=$this->connect();
    	$this->prefix=$this->prefix;
    } else {
        die("Не найден файл настроек подключения к базе данных");
    } 
    
}

function getBaseFromAdmin() {

   	$this->settings_path="../settings/config.ini";
   	if (file_exists($this->settings_path)) { 
    	$this->db=$this->connect();
    	$this->prefix=$this->prefix;
    } else {
        die("Не найден файл настроек подключения к базе данных");
    } 
    
}

function getBaseFromModule() {

   	$this->settings_path="../../../settings/config.ini";
   	if (file_exists($this->settings_path)) { 
    	$this->db=$this->connect();
    	$this->prefix=$this->prefix;
    } else {
        die("Не найден файл настроек подключения к базе данных");
    } 
    
}

function getDB() {
	// функция подключения к базе данных

	$host=$this->host;
	$dbname=$this->dbname;
	$login=$this->login;
	$password=$this->password;
	$db=mysql_connect($host,$login,$password) or die("Нет подключения к базе данных");
	$isok=mysql_select_db($dbname,$db) or die("Ошибка при выполнении sql-запросов");
	mysql_query("/*!40101 SET NAMES 'cp1251' */",$db) or die("Ошибка при изменении кодировки базы данных");
	return $db;

}

function sqlSelect() {
	// функция для работы с sql запросами

	$ms=array();
	$this->res=mysql_query($this->sql,$this->db);
	if (!$this->res) {	$this->error=mysql_errno($this->db).":".mysql_error($this->db); 	}
	if ($this->res)  {  $this->rows_count=mysql_num_rows($this->res);						}
	$ms['sql']=$this->sql;
	$ms['res']=$this->res;
	$ms['rows_count']=$this->rows_count;
	return $ms;

}

function connect() {
	// быстрое подключение к бд

 	$this->config_ini=			parse_ini_file($this->settings_path,true);
 	$this->host=				$this->config_ini['base']['host'];
 	$this->dbname=				$this->config_ini['base']['dbname'];
 	$this->login=				$this->config_ini['base']['login'];
 	$this->password=			$this->config_ini['base']['password'];
 	$this->prefix=				$this->config_ini['site']['prefix'];
	$this->db=					$this->getDB();	
	return $this->db;

}


}

?>