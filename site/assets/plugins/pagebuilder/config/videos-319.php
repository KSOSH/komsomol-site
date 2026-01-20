<?php

	return [
		'title' => 'Page Video`s',

		'show_in_templates' => [ 6,14,25,26,24,11,20,15,23,7,3,22,16,13,12,17,18,5,4,19,27 ],

		'icon' => 'fa fa-file-video-o',

//		'show_in_docs' => [ 319 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 2,

//		'container' => ['docs'],

		'templates' => [
			'owner' => '
				<div class="videos">
					[!ifnotempty? &input=`[+text+]` &replace=`<h3 class="text-center">%replace%</h3>`!]
					<div class="videos--list">
						[+videos+]
					</div>
				</div>
			',
			'videos' => '
				<div class="videos--list-item">
					<a target="_blank" href="[+video+]" data-fancybox="video" savefrom_lm="0" target="_blank">
						<span class="overflow">
							<img src="[[GetEvoVideo? &url=`[+video+]` &type=`image`]]" alt="[+text+]">
						</span>
						<span class="text-center">[+text+]</span>
					</a>
				</div>
			',
		],
		'fields' => [
			'text' => [
				'caption' => 'Название блока (необязательно)',
				'type'    => 'text',
			],
			'videos' => [
				'caption' => 'Видео',
				'type'    => 'group',
				'fields'  => [
					'text' => [
						'caption' => 'Название',
						'type'    => 'text',
					],
					'video' => [
						'caption' => 'Видео',
						'type'    => 'text',
					]
				]
			]
		]
	];
