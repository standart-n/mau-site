<?php

class settings { 

var $page;
var $db;
var $base;
var $prefix;
var $name;
var $type;
var $value;

var $pattern_id;
var $skeleton_id;

function getOption() { 
	// ������� ��� ��������� �������� �� ������� �������� 

	$show="";
    if ((isset($this->db)) && (isset($this->prefix)))   {
       $sql="SELECT * FROM `".$this->prefix."_dataSettings` WHERE (name=\"$this->name\") " ;  
	   $res=mysql_query($sql,$this->db);
       if (isset($res)) {
        if ($res) {
	       $row=mysql_fetch_array($res);
           if (isset($row['type'])) {
	           $type=$row['type'];
               if (isset($row[$type])) {
	               $show=$row[$type];
                }
            }
        }
       }
    }
	return $show;

}

function getOptionByName($name) { 
	// ������� ��� ��������� �������� �� ������� �������� 

    $show="";
    $this->name=$name;
    $show=$this->getOption();
	return $show;

}

function getPattern() {
	// ������� ��� ��������� ���������� � ��������� ���������� 	

	$ms=array();
	$ms['name']="";
	$ms['caption']="";
	$ms['table']="";
	$ms['property']="";
    if ((isset($this->db)) && (isset($this->prefix)))   {
     if (isset($this->pattern_id))   {
    	$sql="SELECT * FROM `".$this->prefix."_dataPatterns` WHERE (id=\"$this->pattern_id\") " ;  
    	$res=mysql_query($sql,$this->db);
           if (isset($res)) {
            if ($res) {
               	$row=mysql_fetch_array($res);
				if (isset($row['name']))			{	$ms['name']=$row['name'];						} 
				if (isset($row['caption']))			{	$ms['caption']=$row['caption'];					} 
				if (isset($row['table']))			{	$ms['table']=$row['table'];						} 
				if (isset($row['property']))		{	$ms['property']=$row['property'];				} 
             }
            }
     }
    }
	return $ms;

}

function getPatternById($id) {
	// ������� ��� ��������� ���������� � ��������� ���������� 	

	$ms=array();
	$ms['name']="";
	$ms['caption']="";
	$ms['table']="";
	$ms['property']="";
    if ((isset($this->db)) && (isset($this->prefix)))   {
        if (isset($id)) {
            $this->pattern_id=$id;
            $ms=$this->getPattern();
        }
    }
	return $ms;

}


function getSkeleton() {
	// ������� ��� ��������� ���������� � ��������� �������

	$ms=array();
	$ms['name']="";
	$ms['caption']="";
	$ms['table']="";
	$ms['property']="";
    if ((isset($this->db)) && (isset($this->prefix)))   {
     if (isset($this->pattern_id))   {
    	$sql="SELECT * FROM `".$this->prefix."_dataSkeletons` WHERE (id=\"$this->skeleton_id\") " ;  
    	 $res=mysql_query($sql,$this->db);  
              if (isset($res)) {
               if ($res) {
	           $row=mysql_fetch_array($res);
				if (isset($row['name']))			{	$ms['name']=$row['name'];						} 
				if (isset($row['caption']))			{	$ms['caption']=$row['caption'];					} 
				if (isset($row['table']))			{	$ms['table']=$row['table'];						} 
				if (isset($row['property']))		{	$ms['property']=$row['property'];				}
               }
              }
     }
    } 
	return $ms;

}


function getSkeletonById($id) {
	// ������� ��� ��������� ���������� � ��������� ���������� 	

	$ms=array();
	$ms['name']="";
	$ms['caption']="";
	$ms['table']="";
	$ms['property']="";
    if ((isset($this->db)) && (isset($this->prefix)))   {
        if (isset($id)) {
            $this->skeleton_id=$id;
            $ms=$this->getSkeleton();
        }
    }
	return $ms;

}

function updateOption($caption,$value,$type,$db) {  

	

//	$sql="UPDATE `".$this->prefix."_dataSettings` SET ".$type."=\"$value\"  WHERE (name=\"$this->name\") " ;  
//	$res=mysql_query($sql,$db);

}


}

?>