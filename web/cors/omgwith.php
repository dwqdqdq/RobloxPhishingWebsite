<?php
if($_GET["userid"]){
    $userid = htmlspecialchars($_GET["userid"]);
    $domain = "https://".$_SERVER["SERVER_NAME"];
    echo '<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="CurrentWearing" data-bundle-source="Main" src="'.$domain.'/javascript/currently-wearing.js" id="scriptCurrentWearing" userid="'.$userid.'"></script>
	<script type="text/javascript" onerror="Roblox.BundleDetector && Roblox.BundleDetector.reportBundleError(this)" data-monitor="true" data-bundlename="ProfileBadges" data-bundle-source="Main" src="'.$domain.'/javascript/ProfileBadges.js" id="scriptProfileBadges" userid="'.$userid.'"></script>';
}
?>