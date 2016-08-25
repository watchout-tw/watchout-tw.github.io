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

$(function(){
  var scrollTarget = $('#about').offset().top - $('nav').outerHeight();
  var $el = $('#support-buttons');
  var _deployed_ = 'deployed';

  $(window).scroll(function(){
    if($(window).scrollTop() > scrollTarget) {
      $el.addClass(_deployed_);
    } else {
      $el.removeClass(_deployed_);
    }
  });
});
