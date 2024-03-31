(function($){
	!(function(){
		let ref = document.referrer;
		try {
			let url = new window.URL(ref),
				link,
				a;
			if(url.origin == document.location.origin){
				let person = document.querySelector('.news_person');
				if(person){
					a = document.createElement('a');
					a.innerHTML = 'Вернуться';//'<span>В</span><span>е</span><span>р</span><span>н</span><span>у</span><span>т</span><span>ь</span><span>с</span><span>я</span>';
					//a.setAttribute('data-before', 'Вернуться');
					a.classList.add('btn');
					a.classList.add('btn-any')
					if(url.searchParams.has('page')){
						let page = parseInt(url.searchParams.get('page'));;
						// Вернуться на page
						link = url.origin + url.pathname + '?page=' + page;;
					}else{
						// Вернуться в новости
						link = url.origin + url.pathname;
					}
					a.setAttribute('href', link);
					let p = document.createElement('p');
					//p.append(a);
					person.prepend(a);
					//person.parentNode.insertBefore(p, person.nextSibling);
				}
			}
		}catch(err){
			console.log(ref);
		}
		
	}());
	/**
	 * http://gbou.school/viewer/web/viewer.html?file=assets/files/0007/0608/prn1-od-ot-09.01.2023_.pdf
	 **/
	/**
	 * Set Cookie notify (days)
	 **/
	const COOKIE_DATE = 7;
	/**
	 * Default options Fancybox
	**/
	var $style = $("<style></style>")[0];
	$("head").append($style);
	$.fancybox.defaults.parentEl = ".fancybox__wrapper";
	$.fancybox.defaults.transitionEffect = "circular";
	$.fancybox.defaults.transitionDuration = 500;
	$.fancybox.defaults.lang = "ru";
	$.fancybox.defaults.i18n.ru = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		ERROR: "Запрошенный контент не может быть загружен.<br/>Повторите попытку позже.",
		PLAY_START: "Начать слайдшоу",
		PLAY_STOP: "Остановить слайдшоу",
		FULL_SCREEN: "Полный экран",
		THUMBS: "Миниатюры",
		DOWNLOAD: "Скачать",
		SHARE: "Поделиться",
		ZOOM: "Увеличить"
	};
	$.fancybox.defaults.onInit = function(instance, slide) {
		if(!$.fancybox.isMobile && document.body.scrollHeight > window.innerHeight) {
			let wr = window.innerWidth - (document.body.clientWidth - 2);
			$style.innerText = `body.fancybox-active.compensate-for-scrollbar .bodywrapp::after {background-position: calc(100% - ${wr}px) 0;}`;
		}
	};
	$.fancybox.defaults.afterClose = function(instance, slide) {
		$style.innerText = ``;
	};
	/**
	 ** Is PDF file open browser supports
	**/
	function isPdf(){
		var is_pdf = false,
			plugins = Array.from(window.navigator.plugins || {}),
			map = plugins.map(function(a){
				var map = Array.from(a);
				if (map[0].suffixes=='pdf' && !is_pdf){
					is_pdf = true;
				}
				return map;
			});
		return is_pdf;
	}
	const IS_PDF = isPdf();
	$('.school .school-logo img').wrap('<a href="' + window.location.protocol + "//" + window.location.hostname + '/"></a>');
	/**
	** NavBar
	**/
	function toggleNavbar(e){
		e.preventDefault();
		var $this = $(this),
			$ul = $('nav > ul', $this.parent().parent());
		$this.parent().parent().toggleClass('open');
		$this.toggleClass('open');
		$ul.toggleClass('open');
		return !1;
	}
	$('.navmenu').each(function(){
		var $this = $(this),
			$btn = $('.navmenu-button', this),
			$ul = $('nav > ul', this);
		$btn.on('click', toggleNavbar);
	});
	$('.column.sidebar').each(function(){
		var $this = $(this),
			$btn = $('.sidebar-navmenu-button', this),
			$ul = $('nav > ul', this);
		$btn.on('click', toggleNavbar);
	});
	/**
	 ** Sliders
	**/
	$('.home').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true
	});
	$('.univers-slick').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 801,
				settings: {
					arrows: false,
					slidesToShow: 2,
					autoplay: true,
					autoplaySpeed: 5000
				}
			},
			{
				breakpoint: 503,
				settings: {
					arrows: false,
					slidesToShow: 1,
					autoplay: true,
					autoplaySpeed: 5000
				}
			}
		]
	});
	/**
	 ** IFrame
	**/
	$(".iframe-embed").each(function(){
		//https://docs.google.com/viewer?url=https%3A%2F%2Fkomsomol.minobr63.ru%2Fassets%2Ffiles%2F0001%2F0045%2F0049%2F0958%2Fprezentaciya.pptx&embedded=true
		var src = encodeURIComponent($(this).data('src'));
		this.src = 'https://docs.google.com/viewer?embedded=true&url=' + src;
	});

	// ССылки поделиться в футтере
	$(document)
	.on("click", ".footer a[down-link]", function(e){
		e.preventDefault();
		var attr = $(this).attr('down-link'),
			link = window.location.href,
			title = $("h1").text() || $("title").text(),
			description = $("meta[name=description]").attr("content"),
			image = encodeURIComponent($("meta[itemprop=image]").attr("content")),
			str = "",
			$a = null,
			server = null,
			download = null;
		switch (attr) {
			// Скриншот страницы
			case "photo":
				download = title;
				break;
			// Поделиться в фейсбук
			case "facebook":
				server = "http://www.facebook.com/sharer.php?s=100";
				server += "&[url]=" + encodeURIComponent(link);
				server += "&p[images][0]=" + image;
				server += "&p[title]=" + encodeURIComponent(title);
				server += "&p[summary]=" + encodeURIComponent(description);
				break;
			// Поделиться в ОК
			case "ok":
				server = "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview";
				server += "&st.shareUrl=" + encodeURIComponent(link);
				break;
			// Поделиться в ВК
			case "vk":
				server = "https://vk.com/share.php?";
				server += "url=" + encodeURIComponent(link);
				server += "&title=" + encodeURIComponent(title);
				server += "&image=" + image;
				server += "&description=" + encodeURIComponent(description);
				break;
			// Поделиться в Telegram
			case "telegram":
				let ttl = title + "\n\n" + description;
				ttl = ttl.substring(0, 247) + "...";
				server = "https://t.me/share/url?";
				server += "url=" + encodeURIComponent(link);
				server += "&text=" + encodeURIComponent(ttl);
				break;
			// Поделиться в Twitter
			case "twitter":
				//Длина сообщения 255 символов
				description = description.slice(0, 255);
				server = "https://twitter.com/intent/tweet?";
				server += "url=" + encodeURIComponent(link);
				server += "&text=" + encodeURIComponent(description);
				break;
		}
		if(server){
			// Если ссылка есть
			// Открываем новое окно
			window.open(server);
		}else if(download) {
			// Если ссылки нет - скриншот
			// Запрос на скриншот страницы
			$("body").addClass('screen');
			var laad_screen = false,
				jq_xhr = $.ajax({
				url: window.location.origin + '/screenshot/',
				type: 'POST',
				data: 'shot=' + link + '&title=' + download,
				responseType: 'blob',
				processData: false,
				xhr:function(){
					var xhr = new XMLHttpRequest();
					xhr.responseType= 'blob'
					return xhr;
				},
			}).done(
				function(blob, status, xhr){
					var disposition = JSON.parse(xhr.getResponseHeader('content-disposition').split("filename=")[1]);
					var a = $("<a>click</a>");
					a[0].href = URL.createObjectURL(blob);
					a[0].download = disposition.fname;
					$("body").append(a);
					a[0].click();
					$("body").removeClass('screen');
					setTimeout(function(){
						a.remove();
					}, 500);
				}
			).fail(
				function(){
					$("body").removeClass('screen');
					setTimeout(function(){
						alert("Не удалось обработать операцию");
					}, 500);
				}
			).always(
				function(data){
					$("body").removeClass('screen');
					//setTimeout(function(){
					//  alert("Не удалось обработать операцию");
					//}, 500);
				}
			);
			return !1;
		}
	})
	.on("click", "a[href$='.pdf'], a[href$='.docx'], a[href$='.xlsx']", function(e){
		var base = window.location.origin + '/',
			reg = new RegExp("^" + base),
			href = this.href,
			test = this.href,
			go = false,
			arr = href.split('.'),
			ext = arr.at(-1).toLowerCase(),
			options = {};
		if(reg.test(href)){
			$(this).data('google', go);
			$(this).data('options', options);
			switch (ext){
				case "pdf":
					href = href.replace(base, '');
					go = window.location.origin + '/viewer/pdf_viewer/?file=' + href;
					options = {
						src: go,
						opts : {
							afterShow : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass('pdf_viewer');
							},
							afterLoad : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass('pdf_viewer');
							},
						}
					};
					e.preventDefault();
					$.fancybox.open(options);
					return !1;
					break;
				case "xlsx":
					go = window.location.origin + '/viewer/xlsx_viewer/?file=' + test;
					options = {
						src: go,
						type: 'iframe',
						opts : {
							afterShow : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass('xlsx_viewer');
							},
							afterLoad : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass('xlsx_viewer');
							},
						}
					};
					e.preventDefault();
					$.fancybox.open(options);
					return !1;
					break;
				case "docx":
					go = window.location.origin + '/viewer/docx_viewer/?file=' + test;
					options = {
						src: go,
						type: 'iframe',
						opts : {
							afterShow : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass('docx_viewer');
							},
							afterLoad : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass('docx_viewer');
							},
						}
					};
					e.preventDefault();
					$.fancybox.open(options);
					return !1;
					break;
			}
		}
	})
	.on("click", "a[href$='.jpg'], a[href$='.jpeg'], a[href$='.png'], a[href$='.gif']", function(e){
		// Изображения  на сервере
		var base = window.location.origin,
			reg = new RegExp("^" + base),
			href = this.href,
			$this = $(this);
		if(reg.test(href)){
			if(!$this.hasClass("fancybox")){
				if(typeof $this.data("fancybox") !== "string") {
					e.preventDefault();
					$.fancybox.open({
						src: href
					});
					return !1;
				}
			}
		}
	})
	.on("mouseover", ".footer-icons-menu > li", function(e){
		$(".footer .icons").addClass("open");
	})
	.on("mouseout", ".footer-icons-menu > li", function(e){
		$(".footer .icons").removeClass("open");
	})
	.on("click", ".topmenu ul > li > span", function(e){
		e.preventDefault();
		window.location.href = window.location.protocol + "//" + window.location.hostname + "/";
		return !1;
	})
	/**
	 * Форма обратной связи
	 **/
	.on("click", '*[data-trigger="sendbot"]', function(e){
		e.preventDefault();
		let $this = $(e.target),
			$data = $("#" + $this.data('trigger'));
		if($data.length){
			/**/
			$.fancybox.open($data, {
				modal: true,
				infobar: false,
				clickOutside: false,
				buttons: [
					"close"
				],
			});
			/**/
		}
		return !1;
	})
	.on('submit', 'form', function(e){
		e.preventDefault();
		const $form = $(e.target).closest('.modal-form'),
			data = new FormData(e.target),
			url = e.target.action,
			method = e.target.method;
		//return !1;
		/**/
		$("body").addClass('formSend');
		$.ajax({
			url: url,
			type: method,
			data: data,
			async: true,
			cache: false,
			contentType: false,
			processData: false,
			dataType: 'json'
		}).done(function(a, b, c) {
			if(a.forms) {
				if(a.forms.form) {
					let form = $(a.forms.form),
						modal = $('.modal-form', form);
					$form.html(modal.html());
					$('input[name="phone"]').inputmask({"mask": "+7(999)999-99-99"});
				}
			};
		})
		.fail(function(a, b, c, d) {
			console.log('fail');
			console.log(arguments);
		})
		.always(function() {
			$("body").removeClass('formSend');
		});
		return !1;
		/**/
	});
	/**
	 ** Phone mask
	**/
	$('input[name="phone"]').inputmask({"mask": "+7(999)999-99-99"});
	/**
	 ** End Phone mask
	 **/

	/**
	** Yndex maps
	**/
	var mapsInit = function(){
		var orgAddress = $("#orgAddress").text(),
			orgPhones = $("#orgPhones").html(),
			orgEmail = $("#orgEmail").html(),
			mapPoint = $("#orgAddress").data('point').split(",").map(Number),
			$msosh = $('#map');
		var initSosh = function(){
				mapSosh = new ymaps.Map("map",
					{
						center: mapPoint,
						zoom: 17,
						controls: ['typeSelector','zoomControl','fullscreenControl']
					}
				);
				var soshPlacemark = new ymaps.Placemark(
					mapPoint,
					{
						balloonContent: `<div id="sosh_close" class="ballon text-left">
											<div class="ballon__close" onclick="mapSosh.balloon.close();">x</div>
											<p>` + orgAddress + `</p>
											<p class="text-right map__phones">` + orgPhones + `</p>
											<p class="text-center">
												<a href="mailto:` + orgEmail + `" >` + orgEmail + `</a>
											</p>
											<p class="text-center"><button class="callme-btn btn" type="button" data-trigger="sendbot">ЗАДАТЬ ВОПРОС</button></p>
										</div>`,
					},
					{
						iconLayout: 'default#image',
						iconImageHref: '/assets/templates/projectsoft/images/p__sosh.png?_=v0.0',
						iconImageSize: [46, 52],
						iconImageOffset: [-18, -50],
						balloonLayout: "default#imageWithContent",
						balloonImageHref: '/assets/templates/projectsoft/images/p__sosh.png?_=v0.0',
						balloonImageOffset: [-18, -50],
						balloonImageSize: [46, 52],
						balloonShadow: true,
						balloonAutoPan: true
					}
				);
				mapSosh.behaviors.disable('scrollZoom');
				mapSosh.geoObjects.add(soshPlacemark);
				soshPlacemark.balloon.open();
			};
		$msosh.length && initSosh();
	};
	if($('#map').length){
		var script = document.createElement('script');
		script.type = "text/javascript";
		script.src = "https://api-maps.yandex.ru/2.1.79/?apikey=dd535420-e429-48ca-a9e6-8d64c40e5bde&lang=ru_RU";
		script.onload = function(){
			ymaps.ready(mapsInit);
		}
		document.body.append(script);
	}
	/**
	** End Yandex maps
	**/

	/**
	** Eye Panel
	**/
	$.bvi({
		'bvi_target' : '.bvi-open', // Класс ссылки включения плагина
		"bvi_theme" : "white", // Цвет сайта
		"bvi_font" : "arial", // Шрифт
		"bvi_font_size" : 18, // Размер шрифта
		"bvi_letter_spacing" : "normal", // Межбуквенный интервал
		"bvi_line_height" : "normal", // Междустрочный интервал
		"bvi_images" : true, // Изображения
		"bvi_reload" : false, // Перезагрузка страницы при выключении плагина
		"bvi_fixed" : false, // Фиксирование панели для слабовидящих вверху страницы
		"bvi_tts" : false, // Синтез речи
		"bvi_flash_iframe" : true, // Встроенные элементы (видео, карты и тд.)
		"bvi_hide" : false // Скрывает панель для слабовидящих и показывает иконку панели.
	});

	/**
	** New Year
	**/
	(function(){
		var date = new Date(),
			day = date.getDate(),
			month = date.getMonth() + 1;
		/**
		 * new_year prazdnik                01
		 * defender_day prazdnik            23
		 *
		 **/
		if((day > 15 && month == 12) || (day < 15 && month == 1)) {
			$("body").addClass('new_year prazdnik');
		}
	})();
	/**
	 * Cookies
	**/
	(function(){
		const setCookieNotify = function(){
			$(".notification-form").addClass("hidden");
			/* Set Cookie`s */
			let date = new Date(Date.now() + 86400000 * COOKIE_DATE);
			Cookies.set('notify_policy', 'true', { expires: date, path: '/' });
		}
		$(document).on("click", ".notification-button .btn", function(e){
			e.preventDefault();
			setCookieNotify();
			return !1;
		})
		if(Cookies.get('notify_policy') != "true") {
			/**
			 * Если компьютер не в школе
			 * Показываем сообщение
			**/
			if(HTTP_CLIENT.int != 1){
				$('.notification-form').removeClass('hidden');
				var notIni = setTimeout(setCookieNotify, 10000);
			}
		}
	})();

	/**
	** Buttons
	**/
	(function(){
		$('.btn').btnAni({});
	})();

}(jQuery));
