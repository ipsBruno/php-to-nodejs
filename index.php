<?php
	sendScript("var cmf = 1 + 1; console.log(cmf);");

	function sendScript($code, $ip = "localhost", $port = 777, $timeout = 5) {
		if (($fp = fsockopen($ip, $port, $errno, $errstr, 5))) {
			fwrite($fp, $in);
			fclose($fp);

			return true;	
		}
		return false;
	}
?>
   
