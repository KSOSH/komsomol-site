<?php
use ProjectSoft\Video;
if(!defined('MODX_BASE_PATH')) die('What are you doing? Get out of here!');
$url = isset($url) ? $url : '';
$type = isset($type) ? $type : "video";
$vd = new Video(null, false);
$arr = $vd->setLink($url);

switch ($type) {
	case 'image':
		return $arr['image'] ? $arr["image"] : "";
		break;
	default:
		return $arr['video'] ? $arr['video'] : "";
		break;
}