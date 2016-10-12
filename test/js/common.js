$(document).ready(function(){

	$('[type=phone]').mask('+7 (999) 999-99-99', {placeholder:'_'});


	$('.slides').bxSlider({
		nextSelector: '.arrows .arrow-right',
		prevSelector: '.arrows .arrow-left',
		nextText: '',
		prevText: '',
		onSliderLoad: function () {
			$(".bx-pager.bx-default-pager").remove();
		}
	});


	$('.popup').magnificPopup({
		type: 'inline',
		removalDelay: 100,
		mainClass: 'mfp-fade',		
	});


	$('.section5 .variant').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-fade'
    	/*gallery: {
    		enabled: true
    	},*/
    })

	$('.section1 .variant').on('click', function(){
		setTimeout(function(){
			$.magnificPopup.open({
				items: {
            src: '#cart' 
        },
        type:'inline',
        mainClass: 'mfp-fade'
    });
     }, 1000); 
	});






	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function(data) {
			yaCounter30067704.reachGoal('order');
			$.magnificPopup.close();
			setTimeout(function() {
				$.magnificPopup.open({
					items: {
						src: '#thank',
						type: 'inline'
					},
					closeBtnInside:true,
					removalDelay: 72,
					mainClass: 'mfp-fade'
				});
			}, 150);

			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


	var catalog = {

		ramki:[ 
		{
			title: 'Любимая мама',
			material: 'дерево',
			size: '44х40',
			dopInfo: 'Размер рамок:  10х15,10х10, 11х10,12х12 см. Возможен любой цвет, размер и надписи',
			cost : '2 910'
		},

		{
			title: 'Супер муж',
			material: 'дерево',
			size: '68х25',
			dopInfo: 'Возможен любой цвет, размер и надписи',
			cost : '2 090'
		},

		{
			title: 'Вере годик',
			material: 'дерево',
			size: '48х48',
			dopInfo: 'Возможен любой цвет, размер и имя',
			cost : '2 500'
		},

		{
			title: 'Часы бабушке',
			material: 'дерево',
			size: '50x37',
			dopInfo: 'Размеры фоторамок 10х15, 13х18 см. Возможен любой цвет, размер и надписи.',
			cost : '7 300'
		},

		{
			title: 'Кошелевы',
			material: 'дерево',
			size: '?',
			dopInfo: 'Размеры фоторамок 10х15, 15х20 см. Возможен любой цвет, размер и надпись.',
			cost : '3 450'
		},

		{
			title: 'Love',
			material: 'дерево',
			size: '35х41',
			dopInfo: 'Размеры фоторамок 10х15 см. Возможен любой цвет, размер и надпись.',
			cost : '1 780'
		},

		{
			title: 'Любимой бабуле',
			material: 'дерево',
			size: '55х44',
			dopInfo: 'Возможен любой цвет, размер и надписи',
			cost : '3 700'
		},

		{
			title: 'Мой муж',
			material: 'дерево',
			size: '54х27',
			dopInfo: 'Размер рамок 10х15, 12х12, 10х10 см. Возможен любой цвет, размер и надписи.',
			cost : '2 885'
		},

		{
			title: 'Самое важное рядом',
			material: 'дерево',
			size: '81х50',
			dopInfo: 'Размер рамок 10х15, 12х12, 10х10, 16х12 см. Возможен любой цвет, размер и надписи.',
			cost : '5 290'
		},

		{
			title: 'Мужу папе',
			material: 'дерево',
			size: '40х20',
			dopInfo: 'Размер рамок:  10х15,10х10 см. Возможен любой цвет, размер и надписи',
			cost : '2 090'
		},

		{
			title: 'Family',
			material: 'дерево',
			size: '38х20',
			dopInfo: 'Размер рамок:  10х15,10х10 см. Возможен любой цвет, размер и надписи',
			cost : '1 950'
		},

		{
			title: 'Я love',
			material: 'дерево',
			size: '38х30',
			dopInfo: 'Размер рамок:  10х15 см. Возможен любой цвет, размер и надписи',
			cost : '2 230'
		},

		{
			title: 'Семья',
			material: 'дерево',
			size: '67,5х49',
			dopInfo: 'Размер рамок: 10х15 см, 19,5х15, 15,5х12 см. Возможен любой цвет, размер и надписи',
			cost: '3 805'
		}],

		kompoz:[ 
		{
			title: 'Семья – это',
			material: 'дерево',
			size: '137х187',
			dopInfo: 'Размер рамок: 35х45, 20х20, 15х20, 15х15, 10х15 см. Размер герба: 50*50 см. Возможен любой цвет, размер и любые надписи. Высота надписей: 10-15 см.  Возможно выполнение композиции без рамок ( цена: 13206 руб.)',
			cost : '15 847'
		},

		{
			title: 'Дерево',
			material: 'дерево',
			size: '50x37',
			dopInfo: 'Размеры фоторамок: 30х20, 18х15, 15х10 смРазмер надписи: 15 см.Возможен любой цвет, размер и любые надписи.',
			cost : '4 400'
		},

		{
			title: 'Любовь, счастье, семья',
			material: 'дерево',
			size: '126х107',
			dopInfo: 'Размер рамок: 35х45, 21х30, 20х15, 13х18, 15х15см. Возможен любой цвет, размер и любые надписи. ',
			cost : '7 000'
		},

		{
			title: 'На лестнице',
			material: 'дерево',
			size: '123х187',
			dopInfo: 'Размер рамок: 35х45, 20х20, 15х20, 15х15, 10х15 см. Возможен любой цвет, размер и любые надписи. Высота надписей: 10-15 см. Возможно выполнение композиции без рамок ( цена: 9866 руб.)',
			cost: '10 945'
		}],

		derzhat:[ 
		{
			title: 'Максим Коробов',
			material: 'дерево',
			size: '60x15',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : '2 100'
		},

		{
			title: 'Мария',
			material: 'дерево',
			size: '26x60',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : '2 370'
		},

		{
			title: 'Борцы',
			material: 'дерево',
			size: '100x30',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : '3 300'
		},

		{
			title: 'Мувстер',
			material: 'дерево',
			size: '100x29',
			dopInfo: 'Фигурка спортсмена рисуется по Вашей фотографии. Возможен любой цвет и размер.',
			cost : '5 050'
		},

		{
			title: 'Бегун',
			material: 'дерево',
			size: '100x27',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost: '3 050'
		}],

		monogram:[ 
		{
			title: 'ЕА',
			material: 'дерево',
			size: '43х30',
			dopInfo: 'Толщина – 1см. Возможен любой цвет, размер и буквы. Стоимость зависит от фамилии/инициалов и размера.',
			cost : '2 800'
		},

		{
			title: 'ВА',
			material: 'дерево',
			size: '35х32, 35х38',
			dopInfo: 'Толщина – 1см. Возможен любой цвет, размер и буквы. Стоимость зависит от фамилии/инициалов и размера.',
			cost : '5310 (2 герба)'
		},

		{
			title: 'ВА',
			material: 'дерево',
			size: 'диаметр 40',
			dopInfo: 'Толщина – 1см. Возможен любой цвет, размер и буквы. Стоимость зависит от фамилии/инициалов и размера.',
			cost : '2 950'
		},

		{
			title: 'ВА',
			material: 'дерево',
			size: '50',
			dopInfo: 'Толщина – 1см. Возможен любой цвет, размер и буквы. Стоимость зависит от фамилии/инициалов и размера.',
			cost : '4 250'
		}],

		detskmetr:[ 
		{
			title: 'Эвелина',
			material: 'дерево',
			size: '50х37',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : '3 550'
		},

		{
			title: 'Василиса',
			material: 'дерево',
			size: '70x40',
			dopInfo: 'Размер фоторамок: 9х9, 9х13, 14х12 см. Возможен любой цвет, размер и имя.',
			cost : '3 540'
		},

		{
			title: 'Метрика розовая',
			material: 'дерево',
			size: '40x30',
			dopInfo: 'Размеры фоторамок: 5*5, 15*20 см. Возможен любой цвет, размер и имя.',
			cost : '2 000'
		},

		{
			title: 'Метрика голубая',
			material: 'дерево',
			size: '40x30',
			dopInfo: 'Размеры фоторамок: 5*5, 15*20 см. Возможен любой цвет, размер и имя.',
			cost : '2 000'
		},

		{
			title: 'Эмилия',
			material: 'дерево',
			size: '70x40',
			dopInfo: 'Размер фоторамок: 9х9, 9х13, 14х12 см. Возможен любой цвет, размер и имя.',
			cost: '3 550'
		}],

		derevnadp:[ 
		{
			title: 'IStore',
			material: 'дерево',
			size: 'любой под индивидуальный заказ.',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : 'зависит от дизайна конкретной вывески'
		},

		{
			title: 'Невеста',
			material: 'дерево',
			size: '43х24',
			dopInfo: 'Возможен любой цвет, размер и надписи.',
			cost : '1 610'
		},

		{
			title: 'Жених',
			material: 'дерево',
			size: '43x23',
			dopInfo: 'Возможен любой цвет, размер и надписи.',
			cost : '1 610'
		},

		{
			title: 'Шуваловы',
			material: 'дерево',
			size: 'высота 10',
			dopInfo: 'Высота даты – 10 см. Высота фамилии – 10 см. Возможен любой цвет, размер и надписи.',
			cost : '1 795'
		},

		{
			title: 'ключница',
			material: 'дерево',
			size: '33х20',
			dopInfo: 'Возможен любой цвет, размер и надписи.',
			cost: '2 300'
		}],

		watch:[ 
		{
			title: 'Максим Коробов',
			material: 'дерево',
			size: '60x15',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : '2 100'
		},

		{
			title: 'Мария',
			material: 'дерево',
			size: '26x60',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : '2 370'
		},

		{
			title: 'Борцы',
			material: 'дерево',
			size: '100x30',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost : '3 300'
		},

		{
			title: 'Мувстер',
			material: 'дерево',
			size: '100x29',
			dopInfo: 'Фигурка спортсмена рисуется по Вашей фотографии. Возможен любой цвет и размер.',
			cost : '5 050'
		},

		{
			title: 'Бегун',
			material: 'дерево',
			size: '100x27',
			dopInfo: 'Возможен любой цвет, размер и фигурка спортсмена',
			cost: '3 050'
		}]


	};

	var curentCart,
	imgInd;



	/*$('.variant').on('click', function(){
		curentCart = $(this).data('id');
		imgInd = 0;
		currentText();
		$('.cart .images').removeClass('active');
		$('.cart .images.' + curentCart).addClass('active');
		$('.cart .images.' + curentCart + ' img').removeClass('active');
		$('.cart .images.' + curentCart + ' img:first').addClass('active');
		

	});*/
	
	function currentText(){
		if (curentCart == 'ramki') {
			$('.cart .title').text(catalog.ramki[imgInd].title);
			$('.cart .val.material').text(catalog.ramki[imgInd].material);
			$('.cart .val.size span').text(catalog.ramki[imgInd].size);
			$('.cart .val.dop-info').text(catalog.ramki[imgInd].dopInfo);
			$('.cart .val.price span').text(catalog.ramki[imgInd].cost);
		}	else if (curentCart == 'kompoz') {
			$('.cart .title').text(catalog.kompoz[imgInd].title);
			$('.cart .val.material').text(catalog.kompoz[imgInd].material);
			$('.cart .val.size span').text(catalog.kompoz[imgInd].size);
			$('.cart .val.dop-info').text(catalog.kompoz[imgInd].dopInfo);
			$('.cart .val.price span').text(catalog.kompoz[imgInd].cost);
		} else if (curentCart == 'derzhat') {
			$('.cart .title').text(catalog.derzhat[imgInd].title);
			$('.cart .val.material').text(catalog.derzhat[imgInd].material);
			$('.cart .val.size span').text(catalog.derzhat[imgInd].size);
			$('.cart .val.dop-info').text(catalog.derzhat[imgInd].dopInfo);
			$('.cart .val.price span').text(catalog.derzhat[imgInd].cost);
		} else if (curentCart == 'monogram') {
			$('.cart .title').text(catalog.monogram[imgInd].title);
			$('.cart .val.material').text(catalog.monogram[imgInd].material);
			$('.cart .val.size span').text(catalog.monogram[imgInd].size);
			$('.cart .val.dop-info').text(catalog.monogram[imgInd].dopInfo);
			$('.cart .val.price span').text(catalog.monogram[imgInd].cost);
		} else if (curentCart == 'detsk-metr') {
			$('.cart .title').text(catalog.detskmetr[imgInd].title);
			$('.cart .val.material').text(catalog.detskmetr[imgInd].material);
			$('.cart .val.size span').text(catalog.detskmetr[imgInd].size);
			$('.cart .val.dop-info').text(catalog.detskmetr[imgInd].dopInfo);
			$('.cart .val.price span').text(catalog.detskmetr[imgInd].cost);
		} else if (curentCart == 'derev-nadp') {
			$('.cart .title').text(catalog.derevnadp[imgInd].title);
			$('.cart .val.material').text(catalog.derevnadp[imgInd].material);
			$('.cart .val.size span').text(catalog.derevnadp[imgInd].size);
			$('.cart .val.dop-info').text(catalog.derevnadp[imgInd].dopInfo);
			$('.cart .val.price span').text(catalog.derevnadp[imgInd].cost);
		} else if (curentCart == 'watch') {
			$('.cart .title').text(catalog.watch[imgInd].title);
			$('.cart .val.material').text(catalog.watch[imgInd].material);
			$('.cart .val.size span').text(catalog.watch[imgInd].size);
			$('.cart .val.dop-info').text(catalog.watch[imgInd].dopInfo);
			$('.cart .val.price span').text(catalog.watch[imgInd].cost);
		}
	}

	$('.cart .arrow-right').on('click', function(){
		var nextImg = $(this).parent().find('.images.active').children('img.active').next('img');
		var images = $(this).parent().find('img');
		
		

		if (nextImg.length > 0) {
			imgInd = nextImg.index();
			console.log(imgInd);
			currentText();
			images.removeClass('active');
			nextImg.addClass('active');
		}

	})

	$('.cart .arrow-left').on('click', function(){
		var prevImg = $(this).parent().find('.images.active').children('img.active').prev('img');
		var images = $(this).parent().find('img');

		if (prevImg.length > 0) {
			imgInd = prevImg.index();
			console.log(imgInd);
			currentText();
			images.removeClass('active');
			prevImg.addClass('active');
		}

	});

	$(".section1 .variant, .section9 .kat").click(function() {
		$('html, body').animate({
			scrollTop: $(".section5").offset().top
		}, 1000);
	});


	$('.an-size, .scroll').on('click', function(){
		$.magnificPopup.close();
		$('html, body').animate({
			scrollTop: $(".section1 .top-form").offset().top - 300
		}, 1000);
	});
	

});