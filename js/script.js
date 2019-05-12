/*-----------------------------------------------
            BUSINESS LOGIC
-------------------------------------------------*/
var player_1 = document.getElementById("pl-1").value;
var player_2 = document.getElementById("pl-2").value;

var accumulatedRounds = [];
var accumulatedTotal = 0;
var total = [];
var finalScore = 0;
var player1Score = 0;
var player2Score = 0;
var random_roll = 0;

// Adding the accumulated rolls
function getAccumulated(total, num) {
  return total + num;
}
//checking the winner
function status() {
  if (player1Score >= 100) {
    alert(player_1 + " won");
  } else if (player2Score >= 100) {
    alert(player_2 + " won");
  } else {
    roll();
  }
}
//Rolling the dice
function roll() {

  random_roll = Math.floor(Math.random() * 6 + 1);
  if (random_roll === 1) {
    accumulatedRounds = [];
    accumulatedTotal = 0;
    document.querySelector('.rolled-side').src = "./images/d-" + random_roll + ".png";

  } else {
    accumulatedRounds.push(random_roll);
    accumulatedTotal = accumulatedRounds.reduce(getAccumulated, 0);
    document.querySelector('.rolled-side').src = "./images/d-" + random_roll + ".png";
  }
};


/*--------------------------------------------
         USER INTERFACE
--------------------------------------------*/
$(document).ready(function () {
  $("#home").click(function () {
    $("#game-sec").addClass("non-visible");
    $(".home").removeClass("non-visible");
    $("#inst-cont").hide();
  });
  $(".player-name").hide();
  $(".getName").click(function () {
    $(".player-name").slideToggle();
    $("#game-sec").addClass("non-visible");
  });
  $("#quit").click(function () {
    $("#game-sec").addClass("non-visible");
    $(".nav-bar").removeClass("shrink");
    $(".home").removeClass("non-visible");
  });
  $(".instruct").click(function () {
    $("#inst-cont").show();
    $(".home").addClass("non-visible");
    $("#game-sec").addClass("non-visible");
  });

  // Go to game-play window
  $(".startGame").submit(function (event) {
    player_1 = $("#pl-1").val();
    player_2 = $("#pl-2").val();
    event.preventDefault();
    $(".player-name").slideToggle();
    $(".home").addClass("non-visible");
    $("#game-sec").addClass("visible");
    $("#game-sec").removeClass("non-visible");
    $(".nav-bar").addClass("shrink");
    $("#inst-cont").hide();
    $("#pl-1").val("");
    $("#pl-2").val("");
    // give the sections the player names
    $(".pl-1").text(player_1);
    $(".pl-2").text(player_2);

  });
});