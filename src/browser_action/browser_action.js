function cornerSet(corner){
	console.log("CLICKED")
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: corner}, function(response) {
	    console.log(response.farewell);
	  });
	});
}

function setBotRight(){
	cornerSet("-botRight");
}
function setTopRight(){
	cornerSet("-topRight");
}

function setTopLeft(){
	cornerSet("-topLeft");
}

function setBotLeft(){
	cornerSet("-botLeft");
}


var readyStateCheckInterval = setInterval(function() {
if (document.readyState === "complete") {
	clearInterval(readyStateCheckInterval);
	document.getElementsByClassName("lowerLeftButton")[0].addEventListener('click', setBotLeft);
	document.getElementsByClassName("upperLeftButton")[0].addEventListener('click', setTopLeft);
	document.getElementsByClassName("upperRightButton")[0].addEventListener('click', setTopRight);
	document.getElementsByClassName("lowerRightButton")[0].addEventListener('click', setBotRight);
	
}
}, 10);
