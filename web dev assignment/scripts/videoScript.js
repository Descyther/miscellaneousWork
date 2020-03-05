//Javascript
document.addEventListener("DOMContentLoaded", handleDocumentLoad) /* //you can call the handleDocumentLoad part anything as it is an ID */

function handleDocumentLoad()
{
	var video = document.getElementById("video");
	var playButton = document.getElementById("playPause");
	var muteButton = document.getElementById("muteUnmute");
	var scrubSlider = document.getElementById("seekBar");
	var volumeControl = document.getElementById("volumeBar");
	var currentTimeSlot = document.getElementById("vidCurrentTime");
	var vidDurSlot = document.getElementById("vidDurTime");
	
	var naughtPointFive = document.getElementById("naughtPointFive");
	var naughtPointSvnFive = document.getElementById("naughtPointSvnFive");
	var one = document.getElementById("one");
	var onePointTwoFive = document.getElementById("onePointTwoFive");
	var onePointFive = document.getElementById("onePointFive");
	var onePointSvnFive = document.getElementById("onePointSvnFive");
	var two = document.getElementById("two");
	
	playButton.addEventListener("click", playPauseVideo);
	muteButton.addEventListener("click", muteUnmuteVideo);
	scrubSlider.addEventListener("change", scrubVideo);
	video.addEventListener("timeupdate", movePlaySlider);
	video.addEventListener("timeupdate", vidCurrentTime);
	volumeControl.addEventListener("change", inDecVol);
	
	
	
	naughtPointFive.addEventListener("click", decrSpdToNaughtFive);
	naughtPointSvnFive.addEventListener("click", decrSpdToNaughtSvnFive);
	one.addEventListener("click", setSpdToOne);
	onePointTwoFive.addEventListener("click", incrSpdByOneTwoFive);
	onePointFive.addEventListener("click", incrSpdByOnePntFive);
	onePointSvnFive.addEventListener("click", incrSpdByOnePntSvnFive);
	two.addEventListener("click", incrSpdByTwo);
	
	
	
		function decrSpdToNaughtFive()
		{
			video.playbackRate = 0.5;
		}
		function decrSpdToNaughtSvnFive()
		{
			video.playbackRate = 0.75;
		}
		function setSpdToOne()
		{
			video.playbackRate = 1;
		}
		function incrSpdByOneTwoFive()
		{
			video.playbackRate = 1.25;
		}
		function incrSpdByOnePntFive()
		{
			video.playbackRate = 1.5;
		}
		function incrSpdByOnePntSvnFive()
		{
			video.playbackRate = 1.75;
		}
		function incrSpdByTwo()
		{
			video.playbackRate = 2;
		}
	
	
	
	
	
	function vidCurrentTime()
	{
		
		var curVidMins = Math.floor(video.currentTime / 60);
		var curVidSecs = Math.floor(video.currentTime - curVidMins * 60);
		
		if(curVidMins < 10 && curVidSecs < 10)
		{
			currentTimeSlot.innerHTML = "0" + curVidMins + ":0" + curVidSecs;
			
		}
		else if(curVidSecs < 10)
		{
			currentTimeSlot.innerHTML = curVidMins + ":0" + curVidSecs;
		}
		else
		{
			currentTimeSlot.innerHTML = "0" + curVidMins + ":" + curVidSecs;
		}
		
		var durVidMins = Math.floor(video.duration / 60);
		var durVidSecs = Math.floor(video.duration - durVidMins * 60);
		
		if(durVidMins < 10)
		{
			vidDurSlot.innerHTML = "0" + durVidMins + ":" + durVidSecs;
		}
		else if(durVidMins > 10)
		{
			vidDurSlot.innerHTML = "0" + durVidMins + ":" + durVidSecs;
		}
		else
		{
			vidDurSlot.innerHTML = "0" + durVidMins + ":0" + durVidSecs;
			
		}
	}
	
	
	
	
	function playPauseVideo()
	{
		if(video.paused === true)
		{
			video.play();
			playButton.innerHTML = "Pause";	
			
		}
		else
		{
			video.pause();
			playButton.innerHTML = "Play";
		}
	}
	
	function muteUnmuteVideo()
	{
		if(video.muted === false)
		{
			video.muted = true;
			muteButton.innerHTML = "Unmute";
		}
		else
		{
			video.muted = false;
			muteButton.innerHTML = "Mute";
		}
		
		
		
	}
	
	function scrubVideo()
	{
		var scrubTime = video.duration * (scrubSlider.value / 100);
		video.currentTime = scrubTime;
	}
	function movePlaySlider()
	{
		var playbackPoint = (100 / video.duration) * video.currentTime;
		scrubSlider.value = playbackPoint;
	}

	function inDecVol() 
	{
		video.volume = volumeControl.value / 100;
	} 

	
}


