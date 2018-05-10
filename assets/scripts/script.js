$(document).ready(function(){
	let audio = $("audio" );


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

	$(document).bind('keydown', '81', function(){
	 	playDatSound();
	});
	$(document).bind('keyup', '81', function(){
	 		$("audio" ).trigger('pause');
	});
	$(document).bind('keyup', '81', function(){
	 		$(".black-btn1" ).removeClass('-active');
	});
	$(document).bind('keydown', '81', function(){
	 	$("black-btn1").addClass('-active')
	});
	if ($("audio" ).trigger('play')) {
		$("black-btn1").addClass('-active');
	}

	// if ($("audio" ).trigger('pause')) {
	// 	$("audio").remove();
	// } 
	// if ($("audio" ).trigger('play')) {
	// 	$("audio") = url(../sounds/до.mp3);
	// } 
	function playDatSound() {
		$("audio" ).trigger('play');
	}
	function deleteAudio() {
		 $("audio").remove();
	}

	
	var synth = new Tone.Synth().toMaster();
	$('.black-btn1').on('mousedown', function(){
		synth.triggerAttackRelease('C4', '8n');

	});

// 	synth.sync()
// //schedule 3 notes when the transport first starts
// 	synth.triggerAttackRelease('C4', '8n', 0)
// 	synth.triggerAttackRelease('E4', '8n', '8n')
// 	synth.triggerAttackRelease('G4', '8n', '4n')
// 	Transport.start()
	
	//start the transport to hear the notes
}); 
 	