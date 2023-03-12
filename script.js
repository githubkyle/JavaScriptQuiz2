var timerEl = document.getElementById("timer");
var Q1Q2 = document.getElementById("q1q2");
var Q2Q3 = document.getElementById("q2q3");
var Q1 = document.getElementById("q1");
var Q2 = document.getElementById("q2");
var Q3 = document.getElementById("q3");
var R1 = document.getElementById("right1");
var R2 = document.getElementById("right2");
var R3 = document.getElementById("right3");
var W1 = document.getElementById("wrong1");
var W2 = document.getElementById("wrong2");
var W3 = document.getElementById("wrong3");
var W4 = document.getElementById("wrong4");
var W5 = document.getElementById("wrong5");
var W6 = document.getElementById("wrong6");
var W7 = document.getElementById("wrong7");
var W8 = document.getElementById("wrong8");
var Ender = document.getElementById("endGame");
var score = 0;
var StartButton = document.getElementById("Starter");
var Respite = document.getElementById("result");
var PostScore = document.getElementById("posted-score");
var Name = document.getElementById("form1");
var SaveButton = document.getElementById("saver");
var HighScoresList = [];
var ShowingScores = document.getElementById("all-scores");
var ClearList = document.getElementById("clearer");

var EndTimer = function() {
  timeLeft = 0;
};
var timeLeft = 55;
function countdown() {
  console.log("high");

  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "The game has ended";
      clearInterval(timeInterval);
    }
  }, 1000);
}

W1.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W2.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W3.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W4.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W5.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
});
W6.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  PostScore.innerHTML = score;
});
W7.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  PostScore.innerHTML = score;
});
W8.addEventListener("click", function() {
  timeLeft -= 5;
  Respite.textContent = "Wrong!";
  EndTimer();
  PostScore.innerHTML = score;
});
R1.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R2.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
});
R3.addEventListener("click", function() {
  Respite.textContent = "Correct!";
  score++;
  EndTimer();
  PostScore.innerHTML = score;
});

function StartQ2() {
  Q1.hidden = true;
  Q2.hidden = false;
}

function StartQ3() {
  Q2.hidden = true;
  Q3.hidden = false;
}

function ShowScore() {
  endGame.hidden = false;
}

const form = document.querySelector("form");
var NewHighScore = {
  Name: form.name,
  Score: form.score
};

function SaveHighScore() {
  HighScoresList.push(NewHighScore);
}
StartButton.addEventListener("click", countdown);
SaveButton.addEventListener("click");
function ClearName() {
  form1.textContent = "";
}
var SortedHighs = HighScoresList.sort(score);
ShowingScores.textContent = SortedHighs;
