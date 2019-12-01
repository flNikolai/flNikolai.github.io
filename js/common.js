document.addEventListener("DOMContentLoaded", function() {

// Меню для планшета и смартфона
$("body").after("<div id='my-menu'>");
$(".menu").clone().appendTo("#my-menu");

// Меню для планшета и смартфона (футер)
$("body").after("<div id='footer-menu'>");
$(".footer-menu nav.nav").clone().appendTo("#footer-menu");

// Выпадающее Меню
let subMenu,
		subMenuStyle,
		opener,
	el = document.getElementsByClassName('menu-item'),
	winWidth = document.documentElement.clientWidth;
	for(let i=0; i<el.length; i++){
			if(el[i].children.length > 1) {
					opener = document.createElement('span');
					opener.innerHTML = '<i class="ico ico-arrow"></i>';
					el[i].insertBefore(opener, el[i].children[1]);
					if(winWidth>=992){
							el[i].addEventListener("mouseenter",showSubMenu,false);
							el[i].addEventListener("mouseleave",hideSubMenu,false);
					} else {
							el[i].children[1].addEventListener("click",subMenuOpen,false);
					}
			}
	}
function showSubMenu() {
		subMenu = this.children[2];
		subMenu.style.height = "auto";
		subMenu.style.overflow = "visible";
		subMenu.style.opacity = "1";
}
function hideSubMenu() {
		subMenu = this.children[2];
		subMenu.style.height = "0px";
		subMenu.style.overflow = "hidden";
		subMenu.style.opacity = "0";
}
function subMenuOpen() {
	subMenu = this.nextElementSibling;
	subMenuStyle = getComputedStyle(subMenu);
	if(subMenuStyle.height == "0px"){
			subMenu.style.height = "auto";
			subMenu.style.overflow = "visible";
			subMenu.style.opacity = "1";
	} else {
			subMenu.style.height = "0px";
			subMenu.style.overflow = "hidden";
			subMenu.style.opacity = "0";
	}
}

// Гамбургер
$("#toggle-mnu").click(function() {
	$(this).toggleClass("on");
	document.getElementById('my-menu').style.transform = 'translate3d(0,0,0)';
	return false;
});

// Гамбургер для футера
$("#toggle-mnu__footer").click(function() {
	$(this).toggleClass("on");
	$("#footer-menu").slideToggle();
	return false;
});

// Убирает мобильное меню по клику вне области
$(document).click(function(e) {
	if (!$(e.target).is('#my-menu, #my-menu *')) {
		document.getElementById('my-menu').style.transform = 'translate3d(-100%,0,0)';
		document.getElementById('toggle-mnu').classList.remove('on');
	}
});

// Вывод даты
let now = new Date();
		html = document.getElementById('date');
html.innerHTML = now.getDate();

// Кнопка сворачивания уроков
$("#arrow").click(function() {
	$(".video-lists").slideToggle();
	return false;
});

// блок с уроками
$("[data-youtube]").click(function(){
	let dataYoutube = $('.video_play').attr('data-youtube');
	$('.video_play').html('<iframe src="https://www.youtube.com/embed/' + $(this).attr('data-youtube') + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
});

$('.video-lists__list a').click(function(event){
  event.preventDefault();
});

});
