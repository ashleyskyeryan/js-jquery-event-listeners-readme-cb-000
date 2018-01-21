//define functions here

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});

function getIt() {
  $("p").click(function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $(this).addClass('tasty');

  });
}

function pressIt() {
  $('input').on('keydown', function(key)) {
    if(key.which == 71) {
      alert('Someone pressed the G key!!!');
    }
  });
}
