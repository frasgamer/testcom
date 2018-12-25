(function() {
  var video = document.getElementById("video");
  video.addEventListener("canplay", function() {
    video.play();
  });
})();