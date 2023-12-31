const play__button = document.querySelector("#play-button");
const video__overlay = document.getElementById("video__overlay");
const history__video = document.getElementById("history__video");

//PLAY VIDEO
play__button.addEventListener("click", (e) => {
  if (history__video.paused) {
    console.log("video is paused")
    handlePlayButton(history__video)
  }
});

function handlePlayButton(video) {
  video.play();
  video__overlay.classList.remove("show");
}
