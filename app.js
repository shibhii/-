const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const vinyl = document.getElementById("vinyl");
const panel = document.getElementById("panel");

let playing = false;

/* PLAY / PAUSE */
playBtn.onclick = () => {
  if (!playing) {
    audio.play();
    vinyl.style.animationPlayState = "running";
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    vinyl.style.animationPlayState = "paused";
    playBtn.textContent = "▶";
  }
  playing = !playing;
};

/* LOAD CONTENT */
fetch("content.json")
  .then(r => r.json())
  .then(data => {
    title.textContent = data.title;
    tagline.textContent = data.tagline;
    quote.textContent = data.quote;

    data.nav.forEach(item => {
      const a = document.createElement("a");
      a.textContent = item.name;

      a.onclick = () => {
        panel.innerHTML = `<h3>${item.name}</h3>` +
          item.sub.map(s => `<p>${s}</p>`).join("");
        panel.classList.remove("hidden");
      };

      nav.appendChild(a);
    });
  });
