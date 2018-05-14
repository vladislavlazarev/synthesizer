$(document).ready(function(){
	// let audio = $("audio" );


	// $('.black-btn').on('mousedown', function(){
	// 	$(this).addClass('-active')
	// });

	// $('.black-btn').on('mouseup', function(){
	// 	$(this).removeClass('-active')
	// });
	// $('.white-btn').on('mousedown', function(){
	// 	$(this).addClass('-active')
	// });

	// $('.white-btn').on('mouseup', function(){
	// 	$(this).removeClass('-active')
	// });

	// $('.black-btn1').on('mousedown', function(){
	// 	$("audio" ).trigger('play');
	// });
	// var synth = new Tone.Synth();
	// $(document).bind('keydown', '81', function(){
	//  	// playDatSound();
	//  	// console.log(123);
	//  	synth.triggerAttack("C4", 0.25);
	// 	synth.triggerRelease(555.25);		 	
	// });
	// $(document).bind('keyup', '81', function(){
	//  		// $("audio" ).trigger('pause');
	//  // 	synth.triggerAttack("C4", 0.1);
	// 	// synth.triggerRelease(0.5);	
	// });
	// $(document).bind('keyup', '81', function(){
	//  		$(".black-btn1" ).removeClass('-active');
	// });
	// $(document).bind('keydown', '81', function(){
	//  	$("black-btn1").addClass('-active')
	// });
	// if ($("audio" ).trigger('play')) {
	// 	$("black-btn1").addClass('-active');
	// }

	// if ($("audio" ).trigger('pause')) {
	// 	$("audio").remove();
	// } 
	// if ($("audio" ).trigger('play')) {
	// 	$("audio") = url(../sounds/до.mp3);
	// } 
	// function playDatSound() {
	// 	$("audio" ).trigger('play');
	// }
	// function deleteAudio() {
	// 	 $("audio").remove();
	// }

	
	// var synth = new Tone.Synth().toMaster();
	// $('.black-btn1').on('mousedown', function(){
	// 	synth.triggerAttackRelease('C4', '8n');

	// });
	var env = new Tone.AmplitudeEnvelope({
			"attack" : 0.11,
			"decay" : 0.21,
			"sustain" : 0.09,
			"release" : 1.2
		}).toMaster();

		//create an oscillator and connect it to the envelope
	var osc = new Tone.Oscillator({
		"partials" : [3, 2, 1],
		"type" : "custom",
		"frequency" : "C#4",
		"volume" : -8,
	}).connect(env).start();
	
	Interface.Button({
				text : "Trigger Attack",
				activeText : "Trigger Release",
				key : 32, //spacebar
				start : function(){
					env.triggerAttack();
				},
				end : function(){
					env.triggerRelease();
				},
			});



		//create an oscillator and connect it to the envelope
	

// 	synth.sync()
// //schedule 3 notes when the transport first starts
// 	synth.triggerAttackRelease('C4', '8n', 0)
// 	synth.triggerAttackRelease('E4', '8n', '8n')
// 	synth.triggerAttackRelease('G4', '8n', '4n')
// 	Transport.start()
	
	//start the transport to hear the notes
}); 
 	