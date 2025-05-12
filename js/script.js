// Variables
const gameMap = document.getElementById("game-map");
const player = document.getElementById("player");
const btnUp = document.getElementById("btn-up");
const btnRight = document.getElementById("btn-right");
const btnDown = document.getElementById("btn-down");
const btnLeft = document.getElementById("btn-left");
const overlay = document.getElementById("overlay");
const seconds = document.getElementById("seconds");
let intervalVeltical;
let intervalHorizontal;
let timeOver;
let time = 10;
let horizontal = 50;
let vertical = 50;
let playerOn = true;
let pauseGame = true;

// Functions
function playerUP() {
  stopIntervals();
  intervalVeltical = setInterval(() => {
    if (vertical >= 9 && playerOn) {
      vertical--;
      player.style.top = vertical + "%";
    } else if (pauseGame) {
      pauseGame = false;
      gameOver();
    }
  }, 30);
}

function playerDown() {
  stopIntervals();
  intervalVeltical = setInterval(() => {
    if (vertical <= 91.1 && playerOn) {
      vertical++;
      player.style.top = vertical + "%";
    } else if (pauseGame) {
      pauseGame = false;
      gameOver();
    }
  }, 30);
}

function playerLeft() {
  stopIntervals();
  intervalHorizontal = setInterval(() => {
    if (horizontal >= 9 && playerOn) {
      horizontal--;
      player.style.left = horizontal + "%";
    } else if (pauseGame) {
      pauseGame = false;
      gameOver();
    }
  }, 30);
}

function playerRight() {
  stopIntervals();
  intervalHorizontal = setInterval(() => {
    if (horizontal <= 91.1 && playerOn) {
      horizontal++;
      player.style.left = horizontal + "%";
    } else if (pauseGame) {
      pauseGame = false;
      gameOver();
    }
  }, 30);
}

function stopIntervals() {
  clearInterval(intervalHorizontal);
  clearInterval(intervalVeltical);
}

function gameOver() {
  stopIntervals();
  playerOn = false;
  overlay.style.display = "flex";
  timeOver = setInterval(() => {
    if (time < 11 && time > 0) {
      time--;
      seconds.innerHTML = `${time}s`;
      stopIntervals();
    } else {
      clearInterval(timeOver);
      overlay.style.display = "none";
      restart();
    }
  }, 1000);
}

function restart() {
  time = 10;
  horizontal = 50;
  vertical = 50;
  playerOn = true;
  pauseGame = true;
  player.style.top = "50%";
  player.style.left = "50%";
  seconds.innerHTML = "10s";
}

// Events
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    playerLeft();
  } else if (e.keyCode == 38) {
    playerUP();
  } else if (e.keyCode == 39) {
    playerRight();
  } else if (e.keyCode == 40) {
    playerDown();
  }
});

btnUp.addEventListener("click", playerUP);
btnDown.addEventListener("click", playerDown);
btnLeft.addEventListener("click", playerLeft);
btnRight.addEventListener("click", playerRight);
