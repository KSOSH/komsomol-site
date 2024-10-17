<?php

	return [
		'title' => '«Page Documents»',

//		'show_in_templates' => [6],

		'show_in_docs' => [ 82 ],

//		'hide_in_docs' => [ 10, 63 ],

//		'order' => 2,

		'container' => ['programms'],

		'templates' => [
			'owner' => '
				<div class="documents">
					<h3 class="text-center news-title">[+text+]</h3>
					<ul class="documents--list">
						[+documents+]
					</ul>
				</div>
			',
			'documents' => '
				<li class="documents--list-item">
					<p>
						<a target="_blank" href="[+file+]" downliad="[+text+]">[+text+]</a>
					</p>
				</li>
			',
		],
		'fields' => [
			'text' => [
				'caption' => 'Название блока',
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