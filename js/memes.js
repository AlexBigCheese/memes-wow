var meme = {file:"your mom",limit:5,};

function mememe (type , text , img) {
	this.type = type;
	this.text = text;
	this.img = img;
};

var sanic = new mememe("fast","Cum on step it up!","img/Sanic.png");

function pooptest() {
	
};

function sanictest(alarm) {
	if (alarm === true) {
	var confirmation = confirm("this is a test, stuff might go wrong, Continue?");
	if (confirmation === true) {
			document.write("<p>" + sanic.type + "=" + "<img src=" + sanic.img + " alt=" + sanic.text + "></img>""</p>")
		};
	};
};
