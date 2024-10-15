<?php

	return [
		'title' => 'Page Richtext',

//		'show_in_templates' => [5, 7, 8, 9],

		'show_in_docs' => [ 319 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 2,

//		'container' => ['programms'],

		'templates' => [
			'owner' => '
				<div class="richtext">
				[+text:ifnotempty=`<h3 class="text-center news-title">`+][+text+][+text:ifnotempty=`</h3>`+]
					[+documents+]
				</div>
			',
			'documents' => '
				[+title:ifnotempty=`<h4 class="text-center news-title">`+][+title+][+title:ifnotempty=`</h4>`+]
				[+richtext+]
			',
		],
		'fields' => [
			'text' => [
				'caption' => 'Название блока (необязательно)',
				'type'    => 'text',
			],
			'documents' => [
				'caption' => 'Текстовые блоки',
				'type'    => 'group',
				'fields'  => [
					'title' => [
						'caption' => 'Заголовок блока (необязательно)',
						'type'    => 'text',
					],
					'richtext' => [
						'caption' => 'Текст',
						'type'    => 'richtext',
					]
				]
			]
		]
	];
