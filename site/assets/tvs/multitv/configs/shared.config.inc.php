<?php
$settings['display'] = 'vertical';
$settings['fields'] = array(
    'title' => array(
        'caption' => 'Заголовок (для понимания)',
        'type' => 'text'
    ),
    'type' => array(
        'caption' => 'HTML код',
        'type' => 'textarea'
    )
);
$settings['templates'] = array(
    'outerTpl' => '<h3 class="news-title text-center">Мы в социальных сетях</h3>
    <div id="vk_groups"></div>
    <div class="shared">[+wrapper+]</div>',
    'rowTpl' => '<div class="shared-item">[+type+]</div>'
);
$settings['configuration'] = array(
    'enablePaste' => true,
    'csvseparator' => ';'
);
