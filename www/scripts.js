window.addEventListener("load", init, false);

var polling;

function init()
{
	window.addEventListener("touchstart", touchStart, false);
	window.addEventListener("touchend", touchEnd, false);
}

function touchStart(e)
{
	polling = setInterval(function(){touch(e);}, 100);
}

function touchEnd(e)
{
	clearInterval(polling);
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