$(function() {
  var $gameFrame = $("#gameFrame");
  var $editor = $("#jsEditor");
  initEditor();
  var reloadGameFrame = function() {
    $gameFrame.off('load');
    $gameFrame.on('load', function() {
      var doc = getDocumentOfFrame($gameFrame[0]);
      appendJSTag(doc, {"text": $editor.val() + ";window.onload();"});
      appendJSTag(doc, {"url": "/lib/keyevent-simulator.js"});
    });
    $gameFrame.attr("src", "");
    $gameFrame.attr("src", "hack-for-play/index.html");
  };
  reloadGameFrame();
  $("#runButton").click(reloadGameFrame);
  $("body").on('keyup keypress keydown', function(event) {
    $gameFrame.get(0).contentWindow.simulateKeyEvent(event.type, event.keyCode);
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

  function initEditor() {
    loadRemoteText("hack-for-play/main.js", function(src) {
      $editor.text(src);
    });
  }
  function loadRemoteText(fileName, onTextLoaded) {
    $hiddenFrame = $("<iframe src='" + fileName + "' style='display: none;'></iframe>");
    $hiddenFrame.load(function() {
      text = $(getDocumentOfFrame($hiddenFrame.get(0)).body).text();
      onTextLoaded(text);
    });
    $("body").append($hiddenFrame);
  }

  function appendJSTag(document, src) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (src["url"]) {
      $(script).attr("src", src["url"]);
    } else if (src["text"]) {
      $(script).text(src["text"]);
    }
    document.body.appendChild(script);
  }
});
