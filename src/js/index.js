$(function(){

	var mobileBtn = $('.mobail-menu');
	var menu = $('.nav-menu');

	mobileBtn.on('click', function(){
		menu.toggleClass('isOpened');
		mobileBtn.toggleClass('closer');
	});

	menu.on('click', function(){
		menu.removeClass('isOpened');
		mobileBtn.removeClass('closer');

	});





});