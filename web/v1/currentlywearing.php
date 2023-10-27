<?php
session_start();
if($_GET["id"]){
//$id = htmlspecialchars($_GET["id"]);
$id = $_SESSION['userid'];
$shit = file_get_contents("https://avatar.roblox.com/v1/users/$id/currently-wearing");
echo $shit;
}
?>