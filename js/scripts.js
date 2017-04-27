$(document).ready(function(){

  var age = prompt("How old are you?");

  if (parseInt(age) >= 18) {
    $("#old-enough").show();
  } else {
    $("#minor").show();
  }

});
