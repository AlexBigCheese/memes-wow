var meme = {file:"xml/memes.xml",limit:5,};
var numberofmeme = 0;
var memeray;

function mememe (type , text , img) {
	this.type = type;
	this.text = text;
	this.img = img;
	this.number = counting("up" , 1 , numberofmeme , true);
};
function counting(mode , interval , variable , getin) {
	if (mode === "reset") {
		variable = 0;
	};
	if (mode === "up") {
		variable = variable + interval;
	};
	if (mode === "down") {
		variable = variable - interval;
	};
	if (getin === true) {
	return variable;
	};
};



function appendtoarray(array, variable) {
	array.push(variable);
};

function xmlvarbranch(branch) {
	
};

var sanic = new mememe("fast","Cum on step it up!","img/Sanic.png");
var snoopdogg = new mememe("dank","smoke weed every day","img/snoopdogg.jpeg");

function memewriter (I) {
	var line = "<p>" + I.type + "= <img src=" + I.img + " alt=" + I.text + "></img></p>";
	document.getElementById("memes").insertAdjacentHTML( "beforeend" , line);
	var line;
	
}

function pooptest() {
	
};

function sanictest(alarm) {
	if (alarm === true) {
	var confirmation = confirm("this is a test, stuff might go wrong, Continue?");
	if (confirmation === true) {
			document.write("<p>" + sanic.type + "=" + "<img src=" + sanic.img + " alt=" + sanic.text + "></img></p>")
		};
	};
};

