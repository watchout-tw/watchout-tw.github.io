$(function() {
  var $timeline = $('#timeline');
  var _focus_ = 'focus';
  $('#timeline > .event').click(function() {
    var $event = $(this);
    if(!$event.hasClass(_focus_)) {
      $('#timeline > .event').removeClass(_focus_);
    }
    $event.toggleClass(_focus_);
  });
});
