$('.pt-surface__action').on('click', function(){
	var __this = $(this);

	showPopup(__this);

	return false;
});

$('.pt-surface__close').on('click', function(){
	hidePopup();
});

function showPopup(__this) {
	var attribute = __this.attr('data-name');

	$("#"+attribute).fadeIn(220);
	$('body').attr('style', 'min-height: 100vh; overflow: hidden;');
}

function hidePopup() {
	$('.pt-surface').fadeOut(220);
	$('body').attr('style', '');
}

document.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
		hidePopup();
	}
};