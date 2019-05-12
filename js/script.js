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

});