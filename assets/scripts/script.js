$(document).ready(function(){
	$('.black-btn').on('mousedown', function(){
		$(this).addClass('-active')
	});

	$('.black-btn').on('mouseup', function(){
		$(this).removeClass('-active')
	});
	$('.white-btn').on('mousedown', function(){
		$(this).addClass('-active')
	});

	$('.white-btn').on('mouseup', function(){
		$(this).removeClass('-active')
	});

	$('.black-btn1').on('mousedown', function(){
		$("audio" ).trigger('play');
	});
}); 