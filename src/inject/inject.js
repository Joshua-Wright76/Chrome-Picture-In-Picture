let loaded = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting[0] == "-"){
			if(request.greeting[0] == "-topLeft"){
				updateCorner("0", "auto", "0", "auto");
			} else if (request.greeting[0] == "-topRight"){
				updateCorner("0", "auto", "auto", "0");
			} else if (request.greeting[0] == "-botLeft"){
				updateCorner("auto", "0", "0", "auto");
			} else if (request.greeting[0] == "-botRight"){
				updateCorner("auto", "0", "auto", "0");
			}
		} else {
			loadVideoPlayer(request.greeting[0]);
		}
  });

function loadVideoPlayer(videoCode){
	if (document.readyState === "complete") {
		loaded = true;
		clearInterval(readyStateCheckInterval);

		let video = $(`<div id='videoPlayer'><iframe style='padding-top: 15px;' width='640' height='360'src='https://www.youtube.com/embed/${videoCode}?rel=0&autoplay=true' frameborder='0' allowfullscreen></iframe></div>`);
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
}

function updateCorner(top, bot, left, right) {
	if(loaded) {
		$("#videoPlayer").css({'position' : `${top} ${bot} ${left} ${right}`})
	}
}
