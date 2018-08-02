chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		let port = chrome.extension.connect({"What??":"How Does this wok?"});

		let url = 'jofNR_WkoCE';

		port.onMessage.addListener(function(msg) {
			if([Object.keys(msg)[0] == "newURL"]){
				console.log('testing');
			}
		  });

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		 console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		let script = $("<script>window.onYouTubeIframeAPIReady = () => { console.log('RUNNING!!!!!!!!!'); player = new YT.Player('player', {height: '390',width: '640',videoId: 'M7lc1UVf-VE',events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange}});} </script>")
		$('body').append(script);

		let video = $(`<div id='videoPlayer'><iframe style="padding-top: 15px;" width='640' height='360'src='https://www.youtube.com/embed/${url}?rel=0&autoplay=true' frameborder='0' allowfullscreen></iframe></div>`);
		video.css({'position' : 'fixed', 'bottom' : '0', 'right' : '0', 'z-index' : '1000000'});
		video.draggable();
		$('body').append(video);

		var tag = $(``);
		$('body').append(tag);

		// 4. The API will call this function when the video player is ready.
		function onPlayerReady(event) {
			event.target.playVideo();
		}

		// 3. This function creates an <iframe> (and YouTube player)
		//    after the API code downloads.
	}
	}, 10);
});
