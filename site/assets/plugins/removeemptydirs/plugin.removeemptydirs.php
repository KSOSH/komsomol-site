<?php
if(!defined('MODX_BASE_PATH')){die('What are you doing? Get out of here!');}

if(!function_exists('removeEmptyFolders')):
	function removeEmptyFolders($path){
		$isFolderEmpty = true;
		$pathForGlob = (substr($path, -1) == "/") ? $path . "*" : $pathForGlob = $path . DIRECTORY_SEPARATOR . "*";
		// смотрим что есть внутри раздела
		foreach (glob($pathForGlob) as $file){
			if (is_dir($file)){
				if (!removeEmptyFolders($file)) {
					$isFolderEmpty = false;
				}
			}else{
				$isFolderEmpty = false;
			}
		}
		if ($isFolderEmpty){
			@rmdir($path);
		}
		return $isFolderEmpty;
	}
endif;

if(!function_exists('removeEmptyFoldersSetCookie')):
	function removeEmptyFoldersSetCookie() {
		$time = time() - 3600;
		if (isset($_SERVER['HTTP_COOKIE'])):
			$cookies = explode(';', $_SERVER['HTTP_COOKIE']);
			foreach($cookies as $cookie):
				$parts = explode('=', $cookie);
				if(count($parts)):
					$name = trim($parts[0]);
					setcookie($name, '', $time);
					setcookie($name, '', $time, '/');
				endif;
			endforeach;

			/*
			$kcFinder = [
				'displaySettings',
				'order',
				'orderDesc',
				'showname',
				'showsize',
				'showtime',
				'view',
				'widthSideBar'
			];
			$yaMin = [
				'_ym_d',
				'_ym_isad',
				'_ym_uid'
			];
			$gosUsl = [
				'_idp_authn_id',
				'_ym_d',
				'_ym_uid',
				'_ym_isad',
				'nau',
				'userSelectedLanguage'
			];
			foreach($kcFinder as $item):
				setcookie(
					'KCFINDER_' . $item,   // name
					'',                    // value
					$time,                 // time
					'/',                   // path
					'.komsomol.minobr63.ru'// domain
				);
			endforeach;
			foreach($yaMin as $item):
				setcookie(
					$item,                 // name
					'',                    // value
					$time,                 // time
					'/',                   // path
					'.minobr63.ru'         // domain
				);
			endforeach;
			foreach($gosUsl as $item):
				setcookie(
					$item,                 // name
					'',                    // value
					$time,                 // time
					'/',                   // path
					'.gosuslugi.ru'        // domain
				);
			endforeach;
			*/

		endif;
	}
endif;

$e = &$modx->event;

$output = '
<script>
	localStorage.clear();
	sessionStorage.clear();
</script>';

switch($e->name){
	case "OnManagerLogin":
		/**
		 * Запустим для директорий images, files, media
		 */
		removeEmptyFolders(MODX_BASE_PATH . 'assets/images');
		removeEmptyFolders(MODX_BASE_PATH . 'assets/files');
		removeEmptyFolders(MODX_BASE_PATH . 'assets/media');
		break;
	case "OnManagerLogout":
		/**
		 * Запустим для директорий images, files, media
		 */
		removeEmptyFolders(MODX_BASE_PATH . 'assets/images');
		removeEmptyFolders(MODX_BASE_PATH . 'assets/files');
		removeEmptyFolders(MODX_BASE_PATH . 'assets/media');
		/**
		 * Очистим куки
		 */
		removeEmptyFoldersSetCookie();
		break;
	case "OnManagerLoginFormRender":
		/**
		 * Рендер формы логина
		 */
		// Очищаем всё
		$modx->Event->output($output);
		break;
}