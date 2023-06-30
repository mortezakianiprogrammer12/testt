var playButton = document.getElementById("playButton");
var videoContainer = document.getElementById("videoContainer");

playButton.onclick = function () {
  videoContainer.style.display = "block";
};

document.onclick = function (event) {
  if (!videoContainer.contains(event.target) && event.target !== playButton) {
    videoContainer.style.display = "none";
    videoPlayer.pause();
  }
};
