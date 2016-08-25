// timeline event and purchase detail
$(function() {
  var enable_click_focus = function(list_sel, item_sel) {
    var _focus_ = 'focus';
    var $list = $(list_sel);
    $(list_sel + ' > ' + item_sel).click(function() {
      var $item = $(this);
      if(!$item.hasClass(_focus_)) {
        $(list_sel + ' > ' + item_sel).removeClass(_focus_);
      }
      $item.toggleClass(_focus_);
    });
  }
  enable_click_focus('#timeline', '.event');
  enable_click_focus('#one-time-purchases', '.purchase-option');
});

// support button
$(function(){
  var $window = $(window);
  var redline = $('#about').offset().top - $('nav').outerHeight();
  var $el = $('#support-buttons');
  var _deployed_ = 'deployed';

  $window.scroll(function(){
    if($window.scrollTop() > redline) {
      $el.addClass(_deployed_);
    } else {
      $el.removeClass(_deployed_);
    }
  });

  var $html = $('html, body');
  var $button = $('#support-buttons > .support-button.light');
  var $scrollTarget = $($button.attr('href'));
  $button.click(function() {
    $html.animate({scrollTop: $scrollTarget.offset().top}, 750);
    return false;
  })
});
