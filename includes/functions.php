<?php
function getUserIP()
{
    // Get real visitor IP behind CloudFlare network
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
              $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
              $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}
function getid($username)
{
    $ch = file_get_contents('https://api.roblox.com/users/get-by-username?username='.$username.'');
    $json = json_decode($ch, true);
    $userid = $json['Id'];
    return $userid;
}
$domain = "https://".$_SERVER["SERVER_NAME"];
function request($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

function pdoQuery($con, $query, $values = array()) {
  try{
      if($values) {
          $stmt = $con->prepare($query);
          $stmt->execute($values);
      } else {
          $stmt = $con->query($query);
      }
      return $stmt;
  }catch(PDOException $Exception) {
      die("Error");
  }
}
function abbreviateNumber($num) {
    if ($num >= 0 && $num < 1000) {
      $format = floor($num);
      $suffix = '';
    } 
    else if ($num >= 1000 && $num < 1000000) {
      $format = floor($num / 1000);
      $suffix = 'K+';
    } 
    else if ($num >= 1000000 && $num < 1000000000) {
      $format = floor($num / 1000000);
      $suffix = 'M+';
    } 
    else if ($num >= 1000000000 && $num < 1000000000000) {
      $format = floor($num / 1000000000);
      $suffix = 'B+';
    } 
    else if ($num >= 1000000000000) {
      $format = floor($num / 1000000000000);
      $suffix = 'T+';
    }
    
    return !empty($format . $suffix) ? $format . $suffix : 0;
  }

//start of Functions
function requestId($username)
{
    $getId = request("https://api.roblox.com/users/get-by-username?username=$username");
    if (strpos($getId, 'Id') !== false) {
        $idDecode = json_decode($getId);
        $id = $idDecode->Id;
        return $id;
    } else {
        return "Not Exist";
    }
    return;
}
function requestSponsorship($id)
{
    $getSponsorship = request("https://www.roblox.com/user-sponsorship/$id");
    return $getSponsorship;
}
function randNum($length)
{
    $intMin = (10 ** $length) / 10; // 100...
    $intMax = (10 ** $length) - 1;  // 999...

    $codeRandom = mt_rand($intMin, $intMax);

    return $codeRandom;
}

?>