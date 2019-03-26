$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#walrus-showing").slideDown();
    $("#walrus-hidden").slideUp();
    });


    $(".clickable2").click(function() {
      $("#walrus-showing").slideUp();
      $("#walrus-hidden").slideDown();
      });
});
