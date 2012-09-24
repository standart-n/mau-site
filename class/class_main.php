<?php


class main { 

var $fn=array();
var $pl=array();
var $de=array();

var $run="\r\n";
var $runn="\r\n\r\n";

// термины и сокращения встречающиеся в коде
// id = id
// nm = name
// cl = class
// tb = table
// fn = function
// pl = plugin
// pt = pattern
// sk = skeleton
// st = start
// nd = end
// pr = property


function engine() {
	session_start();
    $this->check_classes();
	$this->check_functions();
	$this->check_plugins();
	$this->check_base();
	$this->check_settings();
	$this->check_url();
	$this->check_pages();
}

function check_classes() {
	$this->base=						new base;
	$this->settings=					new settings;
}

function check_functions() {
	chdir("./functions");
	$dir=opendir(".");
	$count=0;
	while ($d=readdir($dir)) {
        if (is_file($d)) {
    	 if (preg_match("/fn_[0-9a-z]+\.php/i",$d))	{
			$this->fn[$count]['path']=$d;
			$count++;
		  }
		}
	}
	closedir($dir);
	chdir ("..");	
	for ($i=0;$i<(sizeof($this->fn));$i++) {
		include_once('functions/'.$this->fn[$i]['path']);
		$name=str_replace('.php','',$this->fn[$i]['path']);
    		$this->$name=new $name;
            $this->fn[$i]['fn']=$this->$name;
		    $this->fn[$i]['name']=$name;
            $this->de[$name]=$this->$name;
	}
}

function check_plugins() {
	chdir("./plugins");
	$dir=opendir(".");
	$count=0;
	while ($d=readdir($dir)) {
        if (is_file($d)) {
    	 if (preg_match("/pl_[0-9a-z]+\.php/i",$d))	{
			$this->pl[$count]['path']=$d;
			$count++;
		  }
		}
	}
	closedir($dir);
	chdir ("..");	
    for ($i=0;$i<(sizeof($this->pl));$i++) {
		include_once('plugins/'.$this->pl[$i]['path']);
		$name=str_replace('.php','',$this->pl[$i]['path']);
            $this->$name=new $name;
            $this->pl[$i]['pl']=$this->$name;
            $this->pl[$i]['name']=$name;
	}
}

function check_base() {
    $this->de['html']=                  "";
    $this->de['run']=                   "\r\n";
    $this->de['runn']=                  "\r\n\r\n";
	$this->base->getBaseFromSite();
    $this->de['base']=					$this->base;
	$this->de['db']=					$this->base->db;
	$this->de['prefix']=				$this->base->prefix;
}

function check_settings() {
    foreach($this->de as $key => $value) {
        $node=$this->de[$key];
        $this->settings->$key=$node;
    }
	$this->de['pattern_id']=	      	$this->settings->getOptionByName('pattern');
	$this->de['skeleton_id']=      		$this->settings->getOptionByName('skeleton');
	$this->de['pattern']=				$this->settings->getPatternById($this->de['pattern_id']);
    $this->de['pattern_nm']=            $this->de['pattern']['name'];
    $this->de['pattern_tb']=            $this->de['pattern']['table'];
	$this->de['skeleton']=				$this->settings->getSkeletonById($this->de['skeleton_id']);
    $this->de['skeleton_nm']=           $this->de['skeleton']['name'];
    $this->de['skeleton_tb']=           $this->de['skeleton']['table'];
    $this->de['settings']=              $this->settings;
}


function check_url() {
	if (isset($_GET['id']))				{	$this->de['id']=strval(trim($_GET['id']));						}	else 	{	$this->de['id']="0";				        }
	if (isset($_GET['page']))			{	$this->de['page']=strval(trim($_GET['page']));					}	else 	{	$this->de['page']="main";			        }
	if (isset($_GET['action']))			{	$this->de['action']=strval(trim($_GET['action']));				}	else 	{	$this->de['action']="";	       		        }
	if (isset($_GET['task']))			{	$this->de['task']=strval(trim($_GET['task']));				    }	else 	{	$this->de['task']="";		      	        }
	if (isset($_GET['node']))			{	$this->de['node']=strval(trim($_GET['node']));				    }	else 	{	$this->de['node']="";		      	        }
	if (isset($_GET['subnode']))		{	$this->de['subnode']=strval(trim($_GET['subnode']));			}	else 	{	$this->de['subnode']="";	      	        }
    $i=0;
    for ($i=0;$i<20;$i++) {
        if (isset($_GET['level'.($i+1)])) {
           $this->de['level'.($i+1)]=strval(htmlspecialchars(trim($_GET['level'.($i+1)])));
           $this->de['level']=$this->de['level'.($i+1)]; 
           $this->de['maxlevelname']=$this->de['level'.($i+1)]; 
           $this->de['maxlevelid']=($i+1);
           if (isset($this->de['level'.($i)])) {
                if  ($this->de['level'.($i)]!="unset") {
                    $this->de['prevlevelname']=$this->de['level'.($i)]; 
                    $this->de['prevlevelid']=($i);
                } else {
                    $this->de['prevlevelname']="main"; 
                    $this->de['prevlevelid']=0;
                }
           } 
        } else {
           $this->de['level'.($i+1)]="unset";
        }
    }
    if (!isset($this->de['level'])) {
           $this->de['level']="main"; 
           $this->de['level1']="main"; 
           $this->de['maxlevelname']=$this->de['level']; 
           $this->de['maxlevelid']=0;
    }
}

function check_pages() {
		$this->de['html'].= $this->envelope();
    	asort($this->fn);
        reset($this->fn);
        foreach ($this->fn as $function) {
            foreach($this->de as $key => $value) {
                $node=$this->de[$key];
                $function['fn']->$key=$node;
            }
             $this->de[$function['name']]=$function['fn'];
		}
    	asort($this->pl);
        reset($this->pl);
        foreach ($this->pl as $plugin) {
            foreach($this->de as $key => $value) {
                $node=$this->de[$key];
                $plugin['pl']->de[$key]=$node;
            }
                $pl=$plugin['name'];
                $this->de=$plugin['pl']->engine();
		}
		echo trim($this->de['html']);
}


function envelope() {
    
	$show="";
    $show.='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'.$this->run;
	$show.='<HTML xmlns="http://www.w3.org/1999/xhtml">'.$this->run;
	$show.='[html.>]'.$this->run;
	$show.='[html.<]'.$this->run;
    $show.='</HTML>'.$this->run;
    return $show;
}

}

?>