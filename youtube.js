$(document).ready(function() {
    
  // When the button is clicked make the lightbox fade in in the span of 1 second, hide itself and start the video
  $("#buttont").on("click", function() {
    $("#lightbox").fadeIn(1000);
    $(this).hide();
    var videoURL = $('#video').prop('src');
    videoURL += "?autoplay=1";
    $('#video').prop('src',videoURL);
  });
  
  // When the close button is clicked make the lightbox fade out in the span of 0.5 seconds and show the play button
  $("#close-btn").on("click", function() {
    $("#lightbox").fadeOut(500);
    $("#buttont").show(250);
  });
});
