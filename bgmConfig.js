window.addEventListener("load", () => {
  // Search audio with id "BGM"
  const bgm = document.getElementById("bgm");

  // If bgm not played
  if (bgm.paused) {
    // Get the play button and show it
    let play = document.getElementById("play");
    play.classList.add("show");

    // If user click on play, then play the bgm and remove the button
    play.onclick = () => {
      bgm.play();
      play.classList.remove("show");
    };
  }
});