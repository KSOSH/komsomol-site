<?php
global $modx;
$settings['display'] = 'datatable';
$settings['fields'] = array(
    'title1_1' => array(
        'caption' => 'Отображаемое имя',
        'type' => 'text'
    ),
    'title2_1' => array(
        'caption' => 'Отображаемое имя',
        'type' => 'text'
    ),
    'title_3' => array(
        'caption' => 'Отображаемое имя',
        'type' => 'text'
    ),
    'content1_1' => array(
        'caption' => 'Документ',
        'type' => 'dropdown',
		'elements' => '@SELECT `pagetitle`, `id` FROM [+PREFIX+]site_content WHERE parent != 2 AND published = 1 AND deleted = 0 ORDER BY `pagetitle` ASC'
    ),
    'content2_1' => array(
        'caption' => 'Файл',
        'type' => 'file'
    ),
    'content1_3' => array(
        'caption' => 'Ссылка на сторонний ресурс',
        'type' => 'text'
    ),
	'attributes' => array(
		'caption' => 'Открыть в новом окне',
		'type' => 'checkbox',
		'elements' => 'Да==target="_blank" '
	),
	'attributes_2' => array(
		'caption' => 'Открыть в новом окне',
		'type' => 'checkbox',
		'elements' => 'Да==target="_blank" '
	),
	'noindex' => array(
		'caption' => 'Не индексировать ссылку',
		'type' => 'checkbox',
		'elements' => 'Да==rel="nofollow"'
	)
);
$settings['columns'] = array(
    array(
        'caption' => 'Content',
        'fieldname' => 'title1_1',
        'render' => '[+fieldTab:select=`onecol=<div><p><b>[+title1_1+]</b></p><b>ID: </b>[+content1_1+]<br /></div>&twocol=<div><p><b>[+title2_1+]</b></p><b>File: </b>http://komsomol.minobr63.ru/[+content2_1+]<br /></div>&threecol=<div><p><b>[+title_3+]</b></p><b>WWW: </b>[+content1_3+]<br /></div>`+]'
    )
);
$settings['form'] = array(
    array(
        'caption' => 'Ссылка на страницу',
        'value' => 'onecol',
        'content' => array(
            'title1_1' => array(),
            'content1_1' => array()
        )
    ),
    array(
        'caption' => 'Ссылка на файл',
        'value' => 'twocol',
        'content' => array(
            'title2_1' => array(),
            'content2_1' => array(),
            'attributes' => array()
        )
    ),
    array(
        'caption' => 'Ссылка на сторонний ресурс',
        'value' => 'threecol',
        'content' => array(
            'title_3' => array(),
            'content1_3' => array(),
			'attributes_2' =>array(),
			'noindex' =>array(),
        )
    )
);
$settings['configuration'] = array(
    'enablePaste' => true,
    'csvseparator' => ',',
    'radioTabs' => true,
    'hideHeader' => true,
	'displayLength'=>"-1"
);
$settings['templates'] = array(
    'outerTpl' => '<ul class="item-collapse">[+wrapper+]</ul>',
    'rowTpl' => '<li>
	[+fieldTab:is=`onecol`:then=`<a class="is_document" href="[~[+content1_1+]~]">[+title1_1+]</a>`+]
	[+fieldTab:is=`twocol`:then=`{{linksFilesMTV}}`+]
	[+fieldTab:is=`threecol`:then=`<a class="is_another" href="[+content1_3+]" [+attributes_2+][+noindex+]>[+title_3+]</a>`+]
	</li>'
);

$settings['templatesdistfiles'] = array(
    'outerTpl' => '<ul class="distation_files">[+wrapper+]</ul>',
    'rowTpl' => '<li>
	[+fieldTab:is=`onecol`:then=`<a class="link" href="[~[+content1_1+]~]">[+title1_1+]</a>`+]
	[+fieldTab:is=`twocol`:then=`<span><a class="link google-viewed" href="[+content2_1+]" [+attributes+]>[+title2_1+]</a>{{linksFilesMTVDist}}</span>`+]
	[+fieldTab:is=`threecol`:then=`<a class="link" href="[+content1_3+]" [+attributes_2+][+noindex+]>[+title_3+]</a>`+]
	</li>'
);
$settings['templatesdocs'] = array(
    'outerTpl' => '[+wrapper+]<div class="clearfix"></div>',
    'rowTpl' => '<div class="reports-col col-lg-3 col-md-3 col-sm-4 col-xs-6">
	[+fieldTab:is=`onecol`:then=`<a class="reports is_document" href="[~[+content1_1+]~]" ><span class="reports__icon embedresponsive"><i class="reports__icon_bg"><span class="glyphicon glyphicon-link" data-toggle="tooltip" data-container="body" title="Перейти на страницу документа"></span></i></span><span class="reports__title">[+title1_1+]</span></a>`+]
	[+fieldTab:is=`twocol`:then=`{{iconViewedDoc}}`+]
	[+fieldTab:is=`threecol`:then=`<a class="reports is_another" href="[+content1_3+]" [+attributes_2+] [+noindex+]><span class="reports__icon embedresponsive"><i class="reports__icon_bg"><span class="glyphicon glyphicon-new-window"  data-toggle="tooltip" data-container="body" title="Перейти на сайт документа"></span></i></span><span class="reports__title">[+title_3+]</span></a>`+]
</div>'
);
$settings['templatesGoogleViewed'] = array(
    'outerTpl' => '<ul>[+wrapper+]</ul>',
    'rowTpl' => '<li>
	[+fieldTab:is=`onecol`:then=`<a class="google-viewed" href="[~[+content1_1+]~]">[+title1_1+]</a>`+]
	[+fieldTab:is=`twocol`:then=`<a class="google-viewed" href="[+content2_1+]" [+attributes+]>[+title2_1+]</a>`+]
	[+fieldTab:is=`threecol`:then=`<a class="google-viewed" href="[+content1_3+]" [+attributes_2+][+noindex+]>[+title_3+]</a>`+]
	</li>'
);