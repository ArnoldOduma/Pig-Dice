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