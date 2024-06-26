// Get our Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const fullscreen = player.querySelector(".fullscreen");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build our functions
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function toggleFullscreen() {
  const method = video.requestFullscreen ? "requestFullscreen" : "pause";
  video[method]();
  //   if (video.requestFullscreen) {
  //     video.requestFullscreen();
  //   } else if (video.mozRequestFullScreen) {
  //     video.mozRequestFullScreen();
  //   } else if (video.webkitRequestFullscreen) {
  //     video.webkitRequestFullscreen();
  //   } else if (video.msRequestFullscreen) {
  //     video.msRequestFullscreen();
  //   }
}

function updateButton() {
  const icon = this.paused ? "►" : "| |";
  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // this.name = volume or playbackRate
  video[this.name] = this.value;
}

function handleProgress() {
  // currentTime and duration are propeties in HTML5 video elements
  // currentTime example 0.5 * 100 is 50 and this is the precentage
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Hook up the event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("click", toggleFullscreen);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);
fullscreen.addEventListener("click", toggleFullscreen);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
