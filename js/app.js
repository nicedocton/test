// кнопка выбора языка
let lang_icon = document.querySelector('.lang__btn');
let lang_menu = document.querySelector('.lang ul');
lang_icon.addEventListener("click", function (e) {
	e.preventDefault();
	lang_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.lang')) {
		lang_menu.classList.remove('_active');
	}
});

// кнопка закрытия баннера
let banner_btn = document.querySelector('.advert__close');
let banner = document.querySelector('.advert');
banner_btn.addEventListener("click", function (e) {
	e.preventDefault();
	setInterval(function () {
		banner.style.opacity -= 0.1;
		banner.style.height -= 0;
    }, 200);
});



$(document).ready(function() {
	$('.main-slider').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					autoplay: true,
					arrows: false
				}
			},
		]
	});
	$('.categories__slider').slick({
		dots: false,
		arrows: true,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		variableWidth: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: false
				}
			}
		]
	});
	$('.main-banner__slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 1
	});
	$('.popular__products-slider').slick({
		dots: false,
		arrows: true,
		infinite: false,
		speed: 1000,
		autoplay: false,
		autoplaySpeed: 5000,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
});
;
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
/*
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
*/
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
;
