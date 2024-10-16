<?php

	return [
		'title' => 'Page Files',

		'show_in_templates' => [ 7 ],

//		'show_in_docs' => [ 319 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 1,

//		'container' => ['programms'],

		'templates' => [
			'owner' => '
				<div class="documents">
					<ul class="documents--list">
						[+documents+]
					</ul>
				</div>
			',
			'documents' => '
				<li class="documents--list-item">
					<a target="_blank" href="[+file+]" download="[+text+][[FileExt? &file=`[+file+]`]]">[+text+]</a>
				</li>
			',
		],
		'fields' => [
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