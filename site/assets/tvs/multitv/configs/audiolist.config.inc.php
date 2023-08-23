<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
	'title' => array(
		'caption' => 'Заголовок',
		'type' => 'text'
	),
	'file' => array(
		'caption' => 'Файл',
		'type' => 'file'
	),
	'image' => array(
		'caption' => 'Изображение',
		'type' => 'image'
	),
    'thumb' => array(
        'caption' => 'Thumbnail',
        'type' => 'thumb',
        'thumbof' => 'image'
    ),
);
$settings['templates'] = array(
	'outerTpl' => '<ul class="audio-list">[+wrapper+]</ul>
	<div id="audioPlayer"><div class="panel"><div class="panel-left"><div class="cover"><div class="btn-play"></div></div></div><div class="panel-right"><div class="data"><div class="title"></div><div class="time"></div></div><div class="volume"><div class="volume-bar"><div class="bar"></div></div></div><div class="progress"><div class="progress-bar"><div class="bar"></div></div></div><div class="btns"><div class="block"><div class="btns-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485 485" style="enable-background:new 0 0 485 485" xml:space="preserve"><path d="M414 71C368.2 25.2 307.3 0 242.5 0S116.8 25.2 71 71 0 177.7 0 242.5 25.2 368.2 71 414s106.7 71 171.5 71 125.7-25.2 171.5-71 71-106.7 71-171.5S459.8 116.8 414 71zM242.5 455C125.3 455 30 359.7 30 242.5S125.3 30 242.5 30 455 125.3 455 242.5 359.7 455 242.5 455z"/><path d="M303.9 148.4 141 242.5l162.9 94.1V148.4z"/></svg></div></div><div class="block"><div class="btns-next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485 485" style="enable-background:new 0 0 485 485" xml:space="preserve"><path d="M414 71C368.2 25.2 307.3 0 242.5 0S116.8 25.2 71 71 0 177.7 0 242.5 25.2 368.2 71 414s106.7 71 171.5 71 125.7-25.2 171.5-71 71-106.7 71-171.5S459.8 116.8 414 71zM242.5 455C125.3 455 30 359.7 30 242.5S125.3 30 242.5 30 455 125.3 455 242.5 359.7 455 242.5 455z"/><path d="M181.1 336.6 344 242.5l-162.9-94.1v188.2z"/></svg></div></div></div></div></div></div>',
	'rowTpl' => '<li><a href="[(site_url)][+file+]" target="_blank" download="[+title+]">[+title+]</a></li>'
);
$settings['configuration'] = array(
	'enablePaste' => true,
	'csvseparator' => ';'
);