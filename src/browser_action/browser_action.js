function cornerSet(corner){
	console.log("CLICKED")
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: corner}, function(response) {
	    console.log(response.farewell);
	  });
	});
}

function parseURL(url){
	let parsed = url;
	parsed = parsed.split("v=")[1]
	console.log(parsed);
	if(parsed.split("?").length === 2){
		parsed = parsed.split("?")[0];
	}

	//splits the url along the v=, then splits the second half by the ?, then return the middle bit.
	return parsed;
}

function urlSet(){
	let url =document.getElementById("URL").value;
	url = parseURL(url);
	console.log("CLICKED")
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: url}, function(response) {
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
	document.getElementById("submit").addEventListener('click', urlSet);
}
}, 10);
