function mSc () {
	var mpath = "meme." + memename;
	var mfunction = "memewriter(" + mpath + ")";
	
	var lol = "<span onclick=" + mfunction + ">" + mpath.name "</span>";
	
}

function memeSpan () {
	for (dank in memes) {
		var span = document.createElement("SPAN");
		var spantxt = document.createTextNode(dank.name);
		span.onclick = memewriter(dank);
		span.appendChild("spantxt");
		nav.appendChild("span");
	}
};
