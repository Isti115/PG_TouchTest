window.addEventListener("load", init, false);

function init()
{
	window.addEventListener("touchstart", touch, false);
	window.addEventListener("touchmove", touch, false);
}

function touch(e)
{
	var infoDiv = document.getElementById("touchInfo");
	
	var touch = e.touches[0];
	
	var info = "";
	
	info += "screenX : " + touch.screenX + "<br />";
	info += "screenY : " + touch.screenY + "<br />";
	info += "radiusX : " + touch.radiusX + "<br />";
	info += "radiusY : " + touch.radiusY + "<br />";
	
	infoDiv.innerHTML = info;
}