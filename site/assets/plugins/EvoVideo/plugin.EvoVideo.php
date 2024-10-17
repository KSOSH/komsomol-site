<?php
if (!defined('MODX_BASE_PATH')) {
	http_response_code(403);
	die('For'); 
}
use ProjectSoft\Video;
$e =& $modx->event;
$params = $e->params;
$regexp = '/^((?:https?:\/\/(?:www\.)?(?:rutube|youtube|youtu)\.(?:com|ru)\/))/i';
$regexp2 = '/"(https?:(?:\\\\)?\/(?:\\\\)\/(?:www\.)?(?:rutube|youtube|youtu)\.(?:com|ru)(?:\\\\)\/.+)"/Usi';
switch ($e->name) {
	case 'OnBeforeDocFormSave':
		/**
		 * Создаём Video с включённым автосохранением перевьюшек
		 * Старые Изображения перезаписываются
		 * assets/cache/images/video очистить вручную
		**/
		$vd = new Video(null, true);
		foreach($_POST as $key=>$value):
			if(is_string($value)):
				$url = trim($value);
				/*
				* Проверяем все $_POST параметры на присутствие ссылки на видео YouTube
				*/
				preg_match($regexp, $url, $matches);
				if(count($matches)):
					/*
					* Получить файл и сохранить
					*/
					$vd->setLink($url);
				endif;
			else:
				// Забрать остальное
				$str = json_encode($value, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
				preg_match_all($regexp2, $str, $matches, PREG_SET_ORDER, 0);
				if(count($matches)):
					foreach ($matches as $k => $val) {
						// code...
						$re = '/\\\\/Usi';
						$result = preg_replace($re, "", $val[1]);
						$vd->setLink($result);
						//file_put_contents(dirname(__FILE__) . "/0001.txt", $k . " ------> " . PHP_EOL . print_r($vd, true) . PHP_EOL ."---------------------" . PHP_EOL . PHP_EOL, FILE_APPEND);
					}
				endif;
					//
			endif;
		endforeach;

		break;
}
