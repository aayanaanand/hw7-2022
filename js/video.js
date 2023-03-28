 window.addEventListener("load", function() {

	var vid = document.getElementById("player1");

	console.log("Good job opening the window");

	console.log("Autoplay is set to false");
	vid.autoplay = false;

	console.log("Loop is set to false");
	vid.loop = false;

	document.querySelector("#volume").innerHTML = vid.volume*100 + "%";

	function playVid() { 
		console.log("Play Video");
		vid.play(); 
	} 
	
	function pauseVid() { 
		console.log("Pause Video");
		vid.pause(); 
	}

	function slowerVid() { 
		console.log("Slower Video");
		vid.defaultPlaybackRate *= 0.9;
		console.log(vid.defaultPlaybackRate);
	}

	function fasterVid() { 
		console.log("Faster Video");
		vid.defaultPlaybackRate *= 1.1;
		console.log(vid.defaultPlaybackRate);
	}

	function skipVid() { 
		console.log("Skip Video");
		vid.currentTime += 10;
		console.log(vid.currentTime);
	}

	function muteVid() {
		if(vid.muted = true) {
			console.log("Unmute Video");
			vid.muted = false;
			document.querySelector("#mute").value = "Mute";
		} else {
			console.log("Mute Video");
			vid.muted = true;
			document.querySelector("#mute").value = "Unmute";
		};
	}

	function changeVolume() {
		vid.volume = document.querySelector("#slider").value/100;
		document.querySelector("#volume").innerHTML = vid.volume*100 + "%";
		console.log("The current value is " + vid.volume);
	}

	function oldSchool() {
		console.log("Old School");
		vid.className = "oldSchool";
	}

	function original() {
		console.log("Original");
		vid.className = "video";
	}

	document.querySelector("#play").addEventListener("click", playVid);
	
	document.querySelector("#pause").addEventListener("click", pauseVid);

	document.querySelector("#slower").addEventListener("click", slowerVid);

	document.querySelector("#faster").addEventListener("click", fasterVid);

	document.querySelector("#skip").addEventListener("click", skipVid);

	document.querySelector("#mute").addEventListener("click", muteVid);

	document.querySelector("#slider").addEventListener("change", changeVolume);

	document.querySelector("#vintage").addEventListener("click", oldSchool);

	document.querySelector("#orig").addEventListener("click", original);

});