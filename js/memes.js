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


var sanic = new mememe("fast","Cum on step it up!","img/Sanic.png");
var snoopdogg = new mememe("dank","smoke weed every day","img/snoopdogg.jpeg");

function memewriter (I) {
	var p = document.createElement("P")
	var img = document.createElement("IMG")
	var content = document.createTextNode(I.type + "=");
	var div = document.getElementById("meme");
	p.appendChild(content);
	p.appendChild(img);
	div.appendChild(p);
	img.src = I.img;
	img.alt = I.text;
	

	
};
