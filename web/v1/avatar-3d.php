<?php
// implemented by vkevin to fix the uh oh oopsie daddy in the source with 3d avatars
session_start();
$id = $_SESSION['userid'];
echo file_get_contents("https://thumbnails.roblox.com/v1/users/avatar-3d?userId=$id");
?>