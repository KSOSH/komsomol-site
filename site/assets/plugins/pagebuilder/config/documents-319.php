<?php

	return [
		'title' => 'Page Documents',

		'show_in_templates' => [ 76,14,25,26,24,11,20,15,23,7,3,22,16,13,12,17,18,5,4,19 ],

		'icon' => 'fa fa-file-o',

//		'show_in_docs' => [ 319 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 2,

//		'container' => ['docs'],

		'templates' => [
			'owner' => '
				<div class="documents clearfix">
					[!ifnotempty? &input=`[+text+]` &replace=`<h3 class="text-center">%replace%</h3>`!]
					<ul>
						[+documents+]
					</ul>
				</div>
			',
			'documents' => '
				<li>
					<a target="_blank" href="[+file+]" download="[+text+][[FileExt? &file=`[+file+]`]]">[+text+]</a>
				</li>
			',
		],
		'fields' => [
			'text' => [
				'caption' => 'Название блока (необязательно)',
				'type'    => 'text',
			],
			'documents' => [
				'caption' => 'Документы',
				'type'    => 'group',
				'fields'  => [
					'text' => [
						'caption' => 'Название',
						'type'    => 'text',
					],
					'file' => [
						'caption' => 'Файл',
						'type'    => 'file',
					]
				]
			]
		]
	];
