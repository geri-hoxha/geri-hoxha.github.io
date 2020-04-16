var scores, roundScore, activePlayer, gamePlaying;
init();
var lastDice;
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dicesec = Math.floor(Math.random() * 6) + 1;
    //display block
    document.querySelector("#dice-1").style.display = "block";
    document.querySelector("#dice-1").src = "dice-" + dice + ".png";
    document.querySelector("#dice-2").style.display = "block";
    document.querySelector("#dice-2").src = "dice-" + dicesec + ".png";
    // IF nr=0 change the player
    if (lastDice == 6 && dice == 6) {
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = 0;
      nextPlayer();
    } else if (dice !== 1 && dicesec !== 1) {
      roundScore = dice + dicesec + roundScore;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
    lastDice = dice;
    console.log(dice, dicesec);
  }
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    var input = document.querySelector(".final-score").value;
    console.log(input);
    var winningScores;
    if (input) {
      input = winningScores;
    } else {
      winningScores = 100;
    }

    if (scores[activePlayer] >= winningScores) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.querySelector("#dice-1").style.display = "none";
      document.querySelector("#dice-2").style.display = "none";

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});
document.querySelector(".btn-new").addEventListener("click", init);
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector("#dice-1").style.display = "none";
  document.querySelector("#dice-2").style.display = "none";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
}
