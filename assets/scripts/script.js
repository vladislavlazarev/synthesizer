$(document).ready(function(){

	 $('.btn').click(function(){
	 	$('.floor').addClass('-active');
	 });
	  $('.btn').click(function(){
	 	$('.leaf').addClass('-active');
	 });
	  $('.btn').click(function(){
	 	$('.btn').addClass('-active');
	 });
	   $('.btn').click(function(){
	 	$('.lo').addClass('-active');
	 }); 
	   $('.btn').click(function(){
	 	$('.pianino-move').addClass('-active');
	 });

	

	const keyParams = [
		{
			key: 81,
			text : "Q",
			activeText : "Q",
			frequency: "C4",
			type: 'white'
		},
		{
			key: 87,
				text : "W",
			activeText : "W",
			frequency: "D4",
			type: 'white'
		},
		{
			key: 69,
			text : "E",
			activeText : "E",
			frequency: "E4",
			type: 'white'
		},
		{
			key: 82,
			text : "R",
			activeText : "R",
			frequency: "F4",
			type: 'white'
		},
		{
			key: 84,
			text : "Y",
			activeText : "Y",
			frequency: "G4",
			type: 'white'
		},
		{
			key: 89,
			text : "U",
			activeText : "U",
			frequency: "A4",
			type: 'white'
		},
		{
			key: 85,
			text : "I",
			activeText : "I",
			frequency: "B4",
			type: 'white'
		},
		{
			key: 73,
			text : "O",
			activeText : "O",
			frequency: "C5",
			type: 'white'
		},
		{
			key: 50,
			text : "2",
			activeText : "2",
			frequency: "C#4",
			type: 'black'
		},
		{
			key: 51,
			text : "3",
			activeText : "3",
			frequency: "Eb4",
			type: 'black'
		},
		{
			key: 53,
			text : "5",
			activeText : "5",
			frequency: "F#4",
			type: 'black'
		},
		{
			key: 54,
			text : "6",
			activeText : "6",
			frequency: "G#4",
			type: 'black'
		},
		{
			key: 55,
			text : "7",
			activeText : "Соль(7)",
			frequency: "Bb4",
			type: 'black'
		}
	];
	let envParams = {
		"attack" : 0.11,
		"decay" : 0.21,
		"sustain" : 0.09,
		"release" : 1.2
	};

	let keyboard = [];

	for (let i = 0; i < keyParams.length; i++) {

		keyboard.push({});

		keyboard[i].env = new Tone.AmplitudeEnvelope(envParams).toMaster();

		keyboard[i].osc = new Tone.Oscillator({
			"partials" : [3, 2, 1],
			"type" : "custom",
			"frequency" : keyParams[i].frequency,
			"volume" : -8,
		}).connect(keyboard[i].env).start();

		Interface.Button({
					parent: '.' + keyParams[i].type + '-container',
					activeText : keyParams[i].text,
					key : keyParams[i].key,
					keyType: keyParams[i].type, 
					start : function(){
						keyboard[i].env.triggerAttack();
					},
					end : function(){
						keyboard[i].env.triggerRelease();
					},
				});
		}





}); 
 	