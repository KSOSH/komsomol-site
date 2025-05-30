<?php

	return [
		'title' => 'Page Richtext',

		'show_in_templates' => [ 6,14,25,26,24,11,20,15,23,7,3,22,16,13,12,17,18,5,4,19 ],

		'icon' => 'fa fa-pencil-square-o',

//		'show_in_docs' => [ 319 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 2,

//		'container' => ['programms'],

		'templates' => [
			'owner' => '
				<div class="richtext clearfix">
					[!ifnotempty? &input=`[+text+]` &replace=`<h3 class="text-center">%replace%</h3>`!]
				<!-- [+text:ifnotempty=`<h3 class="text-center">`+][+text+][+text:ifnotempty=`</h3>`+] -->
					[+documents+]
				</div>
			',
			'documents' => '
				[!ifnotempty? &input=`[+title+]` &replace=`<h4 class="text-center">%replace%</h4>`!]
				<!-- [+title:ifnotempty=`<h4 class="text-center">`+][+title+][+title:ifnotempty=`</h4>`+] -->
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
