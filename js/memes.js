var meme = {file:"xml/memes.xml",limit:5,};
var numberofmeme = 0;
var memeray;

function mememe (type , text , img) {
	this.type = type;
	this.text = text;
	this.img = img;
	this.number = counting("up" , 1 , numberofmeme);
};
function counting(mode , interval , variable) {
	if (mode === "reset") {
		this.variable = 0;
	};
	if (mode === "up") {
		this.variable = this.variable + interval;
	};
	if (mode === "down") {
		this.variable = this.variable - interval;
	};
	return this.variable
};

function memewriter (I) {
	
}

function appendtoarray(array, variable) {
	
};

var sanic = new mememe("fast","Cum on step it up!","img/Sanic.png");
var snoopdogg = new mememe("dank");

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

