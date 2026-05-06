const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const progress = document.querySelector(".col");

const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

playBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        playBtn.textContent = "⏸";
    } else {
          song.pause();
        playBtn.textContent = "▶";
    }
});

function formatTime(time) {
       let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
}

song.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(song.duration);
});

    song.addEventListener("timeupdate", () => {
    const percent = (song.currentTime / song.duration) * 100;
    progress.style.width = percent + "%";

    currentTimeEl.textContent = formatTime(song.currentTime);
});