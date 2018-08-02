function onClick(){
	console.log("CLICKED")
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	    console.log(response.farewell);
	  });
	});
}

var readyStateCheckInterval = setInterval(function() {
if (document.readyState === "complete") {
	clearInterval(readyStateCheckInterval);
  document.getElementsByClassName("lowerLeftButton")[0].addEventListener('click', onClick);
}
}, 10);
