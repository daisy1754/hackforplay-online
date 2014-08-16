$(function() {
  loadRemoteText("hack-for-play/main.js", function(src) {
    $("#jsEditor").text(src);
  });
  $("#runButton").click(function() {
    var src = $("#jsEditor").val();
    $gameFrame = $("#gameFrame");
    $gameFrame.off('load');
    $gameFrame.on('load', function() {
      var doc = getDocumentOfFrame($gameFrame[0]);
      var script = doc.createElement("script");
      script.type = "text/javascript";
      $(script).text(src + "window.onload();");
      doc.body.appendChild(script);
    });
    $gameFrame.attr("src", "");
    $gameFrame.attr("src", "hack-for-play/index.html");
  });

  function getDocumentOfFrame(frame) {
    if (frame.contentDocument) {
      return frame.contentDocument;
    } else if(frame.contentWindow) {
      return frame.contentWindow.document;
    } else {
      return frame.document;
    }
  }

  function loadRemoteText(fileName, onTextLoaded) {
    $hiddenFrame = $("<iframe src='" + fileName + "' style='display: none;'></iframe>");
    $hiddenFrame.load(function() {
      text = $(getDocumentOfFrame($hiddenFrame.get(0)).body).text();
      onTextLoaded(text);
    });
    $("body").append($hiddenFrame);
  }
});
