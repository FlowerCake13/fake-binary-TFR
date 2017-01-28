//console.log("awio")

function RoboTranslator(string) {
	//console.log(string.length)
	var i;
	for (i = 0; i < string.length; i++){
		//console.log(string[i])
		console.log(typeof string[i])
		string[i] = "1";
		console.log(string[i]);
		/*if (typeof string[i] === "string"){
			string[i] = "1";
			console.log(string[i])
			console.log("HEY IM HERE TOOOOO!")
		}*/
	}
}

RoboTranslator('h');
//RoboTranslator("Hello");
