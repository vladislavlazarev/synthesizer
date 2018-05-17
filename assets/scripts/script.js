$(document).ready(function(){
	

	const keyParams = [
		{
			key: 81,
			text : "До(Q)",
			activeText : "До(Q)",
			frequency: "C4",
			type: 'white'
		},
		{
			key: 87,
				text : "Ре(W)",
			activeText : "Ре(W)",
			frequency: "D4",
			type: 'white'
		},
		{
			key: 69,
			text : "Ми(E)",
			activeText : "Ми(E)",
			frequency: "E4",
			type: 'white'
		},
		{
			key: 82,
			text : "Фа(R)",
			activeText : "Фа(R)",
			frequency: "F4",
			type: 'white'
		},
		{
			key: 84,
			text : "Си(Y)",
			activeText : "Си(Y)",
			frequency: "G4",
			type: 'white'
		},
		{
			key: 89,
			text : "Ля(U)",
			activeText : "Ля(U)",
			frequency: "A4",
			type: 'white'
		},
		{
			key: 85,
			text : "Соль(I)",
			activeText : "Соль(I)",
			frequency: "B4",
			type: 'white'
		},
		{
			key: 73,
			text : "До(O)",
			activeText : "До(O)",
			frequency: "C5",
			type: 'white'
		},
		{
			key: 85,
			text : "Соль(I)",
			activeText : "Соль(I)",
			frequency: "B4",
			type: 'black'
		},
		{
			key: 73,
			text : "До(O)",
			activeText : "До(O)",
			frequency: "C5",
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
 	