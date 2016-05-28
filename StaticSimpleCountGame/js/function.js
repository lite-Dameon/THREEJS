(function() {
  $('.answer').click(function() {
    return ($("#player")).css({
      "transform": "translateX(1500px)"
    });
  });

  $('.wrong').click(function() {
    return ($("#player")).css({
      "transform": "translateX(-1500px)"
    });
  });

}).call(this);

