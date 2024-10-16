<?php

	return [
		'title' => 'Page Video`s',

		'show_in_templates' => [4],

//		'show_in_docs' => [ 82 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 2,

//		'container' => ['programms'],

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
					<a target="_blank" href="[+EvoVideo+]" data-fancybox="video" savefrom_lm="0" target="_blank">
						<span class="overflow">
							<img src="[[GetEvoVideo2? &url=`[+EvoVideo+]` &type=`image`]]" alt="[+text:notags:strip+]">
							<span class="bvi-caption-alt">[+text:notags:strip+]</span>
						</span>
						<span class="text-center">[+text:notags:strip+]</span>
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
					'EvoVideo' => [
						'caption' => 'Видео (URL на видео из строки браузера)',
						'type'    => 'text',
					]
				]
			]
		]
	];
