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
		return $arr['image'] ? $arr["image"] . ($save ? "?true" : "?false") : "" . ($save ? "?true" : "?false");
		break;
	default:
		return $arr['video'] ? $arr['video'] . ($save ? "?true" : "?false") : "" . ($save ? "?true" : "?false");
		break;
}