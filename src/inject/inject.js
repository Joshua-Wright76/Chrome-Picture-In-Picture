chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });

var readyStateCheckInterval = setInterval(function() {
if (document.readyState === "complete") {
	clearInterval(readyStateCheckInterval);

	// ----------------------------------------------------------
	// This part of the script triggers when page is done loading
	 console.log("Hello. This message was sent from scripts/inject.js");
	// ----------------------------------------------------------

	let video = $("<div id='videoPlayer'><iframe style='padding-top: 15px;' width='640' height='360'src='https://www.youtube.com/embed/jI-kpVh6e1U?rel=0&autoplay=true' frameborder='0' allowfullscreen></iframe></div>");
	video.css({'position' : 'fixed', 'bottom' : '0', 'right' : '0', 'z-index' : '1000000'});
	$('body').append(video);
	$("#videoPlayer").draggable();

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		event.target.playVideo();
	}

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
}
}, 10);
