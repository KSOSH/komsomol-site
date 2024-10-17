<?php
use ProjectSoft\Video;
if(!defined('MODX_BASE_PATH')) die('What are you doing? Get out of here!');
$url = isset($url) ? $url : '';
$type = isset($type) ? $type : "video";
$save = isset($save) ? $save : "false";
$save = filter_var($save, FILTER_VALIDATE_BOOLEAN);
$vd = new Video(null, $save);
$arr = $vd->setLink($url);

switch ($type) {
	case 'image':
		return $arr['video'] ? $arr["image"] : "";
		break;
	default:
		return $arr['video'] ? $arr['video'] . '<p class="text-center"><a href="' . $url . '" target="_blank" savefrom_lm="0">' . $url . '</a></p>' : "";
		break;
}