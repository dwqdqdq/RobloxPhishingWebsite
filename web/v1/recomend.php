<?php
if($_GET["gameid"] && $_GET["maxRows"]){
$maxRows = $_GET["maxRows"];
$gameid = htmlspecialchars($_GET["gameid"]);
echo file_get_contents("https://games.roblox.com/v1/games/recommendations/game/$gameid?maxRows=$maxRows");
}
?>