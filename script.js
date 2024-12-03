function roll() {
  let dice = document.getElementById("dice");
  let btn = document.getElementById("btn");
  let audio = document.getElementById("dice-audio");
  dice.innerText = Math.floor(Math.random() * 6) + 1;
  dice.classList.add("spin");
  audio.play(audio);
  setTimeout(function () {
    dice.classList.remove("spin");
  }, 1000);
}
