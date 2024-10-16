<?php

	return [
		'title' => 'Page Video`s',

		'show_in_templates' => [ 7 ],

//		'show_in_docs' => [ 319 ],

//		'hide_in_docs' => [ 10, 63 ],

		'order' => 2,

//		'container' => ['docs'],

		'templates' => [
			'owner' => '
				<div class="videos">
				[+text:ifnotempty=`<h3 class="text-center news-title">`+][+text+][+text:ifnotempty=`</h3>`+]
					<div class="videos--list">
						[+videos+]
					</div>
				</div>
			',
			'videos' => '
				<div class="videos--list-item">
					<a target="_blank" href="[+EvoVideo+]" data-fancybox="video" savefrom_lm="0" target="_blank">
						<span class="overflow">
							<img src="[[GetEvoVideo? &url=`[+EvoVideo+]` &type=`image`]]" alt="[+text:notags:strip+]">
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
						'caption' => 'Видео',
						'type'    => 'evovideo',
					]
				]
			]
		]
	];