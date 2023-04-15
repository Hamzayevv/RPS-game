var rps = ["r", "p", "s"];
var playerscore = 0;
var botscore = 0;

function playerwinpartresult() {
  playerpartresult.classList = "text-success";
  playerpartresult.innerHTML = "You WIN!";
  botpartresult.classList = "text-danger";
  botpartresult.innerHTML = "You Lose!";
}

function botwinpartresult() {
  botpartresult.classList = "text-success";
  botpartresult.innerHTML = "You WIN!";
  playerpartresult.classList = "text-danger";
  playerpartresult.innerHTML = "You Lose!";
}

function draftpartresult() {
  botpartresult.innerHTML = "Draft!";
  playerpartresult.innerHTML = "Draft!";
}

function selectrandom(arr) {
  var selection = Math.floor(Math.random() * arr.length);
  return arr[selection];
}
function show(p1, p2) {
  playerscoretag.innerText = `score: ${playerscore}`;
  botscoretag.innerText = `score: ${botscore}`;
  console.log("playerscore:", playerscore);
  console.log("botscore:", botscore);

  playerimg.src = `./img/${p1}.jpg`;
  botimg.src = `./img/${p2}.jpg`;
}

function returnrock() {
  var e = { key: "r" };
  startgame(e);
}

function returnpaper() {
  var e = { key: "p" };
  startgame(e);
}

function returnsc() {
  var e = { key: "s" };
  startgame(e);
}

function startgame(e) {
  var playerchoose = e.key;
  console.log(e);

  if (!rps.includes(playerchoose)) {
    alert("press the correct button: 's','p','r' ");
    return;
  }

  var botselection = selectrandom(rps);

  if (playerchoose == botselection) {
    draftpartresult();
    show(playerchoose, botselection);
    return;
  } else if (
    (playerchoose == "s" && botselection == "p") ||
    (playerchoose == "p" && botselection == "r") ||
    (playerchoose == "r" && botselection == "s")
  ) {
    playerwinpartresult();
    playerscore += 1;
    show(playerchoose, botselection);
    return;
  } else {
    botwinpartresult();
    botscore += 1;
    show(playerchoose, botselection);
    return;
  }
}

window.addEventListener("keydown", startgame);
window.addEventListener("onclick", returnrock);
