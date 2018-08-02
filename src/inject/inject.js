let loaded = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting[0] == "-"){
			if(request.greeting == "-topLeft"){
				console.log("topLeft Move");
				updateCorner("0", "auto", "0", "auto");
			} else if (request.greeting == "-topRight"){
				console.log("topRight Move");
				updateCorner("0", "auto", "auto", "0");
			} else if (request.greeting == "-botLeft"){
				console.log("botLeft Move");
				updateCorner("auto", "0", "0", "auto");
			} else if (request.greeting == "-botRight"){
				console.log("botRight Move");
				updateCorner("auto", "0", "auto", "0");
			}
		} else {
			console.log(`Loading Video ${request.greeting}`);
			if(!loaded){
				loadVideoPlayer(request.greeting);
			}	else if (request.greeting === '') {
				$('.videoPlayer').remove();
			} else {
				$("#video").attr('src', `https://www.youtube.com/embed/${request.greeting}?rel=0&autoplay=true`);
			}
		}
  });

function loadVideoPlayer(videoCode){
	if (document.readyState === "complete") {
		loaded = true;

		let video = $(`<div id='videoPlayer'><iframe id='video' style='padding-top: 15px;' width='640' height='360'src='https://www.youtube.com/embed/${videoCode}?rel=0&autoplay=true' frameborder='0' allowfullscreen></iframe></div>`);
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
		$("#videoPlayer").css({'top' : `${top}`, 'bottom': ` ${bot}`, 'left': `${left}`, 'right': `${right}`});
	}
}
