const vinyl = document.getElementById("vinyl");
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");

const panel = document.getElementById("panel");
const panelTitle = document.getElementById("panelTitle");
const panelText = document.getElementById("panelText");

let playing = false;
let contentData = {};

/* LOAD JSON CONTENT */
fetch("content.json")
  .then(res => res.json())
  .then(data => contentData = data);

/* PLAY / PAUSE */
playBtn.addEventListener("click", () => {
  playing = !playing;

  vinyl.style.animationPlayState = playing ? "running" : "paused";
  playBtn.textContent = playing ? "❚❚" : "▶";

  playing ? audio.play() : audio.pause();
});

/* MENU CLICK */
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.key;
    const data = contentData[key];

    panelTitle.textContent = data.title;
    panelText.textContent = data.text;

    panel.classList.add("show");
  });
});

/* CLOSE PANEL */
panel.addEventListener("click", () => {
  panel.classList.remove("show");
});
