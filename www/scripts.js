window.addEventListener("load", init, false);

function init()
{
	window.addEventListener("touchstart", touch, false);
}

function touch(e)
{
	var infoDiv = document.getElementById("touchInfo");
	
	var touch = e.touches[0];
	
	var info = "";
	
	info += touch.screenX + "<br />";
	info += touch.screenY + "<br />";
	
	infoDiv.innerHTML = info;
}