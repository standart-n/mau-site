<?php

	function GetDBF() 
	{
		$fpath = "../files/base.dbf";	
		return dbase_open($fpath, 2);
		
	}

	function show_table()
	{
		$rtn = "<br>";
		
		$dbf = GetDBF();
		$records_count = dbase_numrecords($dbf);
		if (!$dbf) return "Ошибка подключения к базе!";
		
		$rtn .= "<form>
		<table bgcolor=#374f55 width = 100% border=0 cellpadding=5 cellspacing=1>
		<tr bgcolor=#143b59>
		<td align=center><b><font color=#f4f6f7>Улица</font></b></td>
		<td align=center><b><font color=#f4f6f7>Номер дома</font></b></td>
		<td align=center><b><font color=#f4f6f7>Район</font></b></td>
		<td align=center><b><font color=#f4f6f7>Описание</font></b></td>
		<td align=center><b><font color=#f4f6f7>Услуга</font></b></td>
		<td align=center><b><font color=#f4f6f7>Отключение</font></b></td>
		</tr>";				
		
		for ($i = 1; $i <= $records_count; $i++) {
			
			$row = dbase_get_record_with_names($dbf, $i);
			//if ($_SESSION["user_login"] == trim(iconv('CP866', 'CP1251', $row["AGR_NO"]))) {
				//if ($row["NEW_CDV"] > 0) $newdate=date("d.m.Y", strtotime(iconv('CP866', 'CP1251', $row["NEW_CDD"])));
				//else $newdate = "";
				$rtn .= "<tr width=300 bgcolor=#eff2f3 onclick='".tr_vis("tr".$i).";' onmouseover='this.style.background=\"#eff9f9\";this.style.cursor=\"pointer\";' onmouseout='this.style.background=\"#eff2f3\";this.style.cursor=\"default\";'>
				<td align=center>".iconv('CP866', 'CP1251', $row["STREET"])."</td>
				<td align=center>".iconv('CP866', 'CP1251', $row["NOMER"])."</td>
				<td align=center>".iconv('CP866', 'CP1251', $row["SREGION"])."</td>
				<td align=center>".iconv('CP866', 'CP1251', $row["COMMENTS1"])."</td>
				<td align=center>".iconv('CP866', 'CP1251', $row["SSERVICE"])."</td>
				<td align=center>".iconv('CP866', 'CP1251', $row["DATE_OFF"])."</td>
				</tr>";
		
			$rtn .= "<tr bgcolor=#eff2f3 id='tr".$i."' style='display: none;'>
				<td align=right>
			Дата приема заявки: <br>
			Дата планируемого включения: <br>
			Дата включения: <br>
			Дата отключения: <br>
			Дата документа виновника: <br>
			Номер документа виновника: <br>
			Описание: <br>
			Тип отключения: <br>
			Исполнитель: <br>
			Причина отключения: <br>
			Заявитель: <br>
			Часов без услуги:<br>
			Виновник:<br>
			Отключена услуга: <br>
			Выполнение:<br>
			Количество домов под отключение:<br>
			Корпус: <br>
			Комментарий: <br>
			Тип строения: <br>
			Номер подъезда: <br>
			Тип лифта: <br>
			Обслуживающая организация: <br>
			Ремонтно-аварийаная служба:<br>
			Обслуживание лифта:<br>
			ЦТП: <br>
			ТЭЦ:<br>
			Управляющая компания: <br>
				</td>
				<td align=left colspan=5>
				".iconv('CP866', 'CP1251', $row["DOCDATE"])." <br>
				".iconv('CP866', 'CP1251', $row["DATE_ON_PL"])."<br>
				".iconv('CP866', 'CP1251', $row["DATE_ON_FA"])."<br>
				".iconv('CP866', 'CP1251', $row["DATE_OFF"])."<br>
				".iconv('CP866', 'CP1251', $row["DOCDATEV"])."<br>
				".iconv('CP866', 'CP1251', $row["DOCNUMV"])."<br>
				".iconv('CP866', 'CP1251', $row["COMMENTS1"])."<br>
				".iconv('CP866', 'CP1251', $row["STYPE_DISC"])."<br>
				".iconv('CP866', 'CP1251', $row["SISPOLNITE"])."<br>
				".iconv('CP866', 'CP1251', $row["SCAUSE"])."<br>
				".iconv('CP866', 'CP1251', $row["DECLARANT"])."<br>
				".iconv('CP866', 'CP1251', $row["HOURS_WITH"])."<br>
				".iconv('CP866', 'CP1251', $row["SVINOVNIK"])."<br>
				".iconv('CP866', 'CP1251', $row["SSERVICE"])."<br>
				".iconv('CP866', 'CP1251', $row["SEXECUTION"])."<br>
				".iconv('CP866', 'CP1251', $row["COUNTBUILD"])."<br>
				".iconv('CP866', 'CP1251', $row["KORPUS"])."<br>
				".iconv('CP866', 'CP1251', $row["COMMENTS2"])."<br>
				".iconv('CP866', 'CP1251', $row["STYPE_BUIL"])."<br>
				".iconv('CP866', 'CP1251', $row["NP"])."<br>
				".iconv('CP866', 'CP1251', $row["STYPE_LIFT"])."<br>
				".iconv('CP866', 'CP1251', $row["SERVICE_OR"])."<br>
				".iconv('CP866', 'CP1251', $row["SERVICE_EM"])."<br>
				".iconv('CP866', 'CP1251', $row["AGENT_LIFT"])."<br>
				".iconv('CP866', 'CP1251', $row["CTP"])."<br>
				".iconv('CP866', 'CP1251', $row["TEC"])."<br>
				".iconv('CP866', 'CP1251', $row["DIRECTION"])."<br>
				</td>
				</tr>";
				
				
			//}
		}
		$rtn .= "</table><br>";
		
		$rtn .= "<br>";
		
		dbase_close($dbf);
		
		return $rtn;
	}	

function tr_vis($tr_id) 
{
	return "
		if (document.getElementById(\"".$tr_id."\").style.display == \"none\") 
			document.getElementById(\"".$tr_id."\").style.display = \"table-row\";	
		else document.getElementById(\"".$tr_id."\").style.display = \"none\";";
}	
	
	echo show_table();
?>