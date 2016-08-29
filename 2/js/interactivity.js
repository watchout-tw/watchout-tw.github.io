// timeline event and purchase detail
$(function() {
  var enable_click_focus = function(list_sel, item_sel) {
    var _focus_ = 'focus';
    var $list = $(list_sel);
    var $all_items = $(list_sel + ' ' + item_sel);
    $all_items.click(function() {
      var $item = $(this);
      if(!$item.hasClass(_focus_)) {
        $all_items.removeClass(_focus_);
      }
      $item.toggleClass(_focus_);
      return false;
    });
    $all_items.find('.close').click(function(event) {
      $(this).closest(item_sel).removeClass('focus');
      event.stopPropagation();
    });
  }
  enable_click_focus('#timeline', '.event');
  enable_click_focus('#one-time-purchases', '.purchase-option');
  enable_click_focus('#group-purchases', '.purchase-option');
});

// support button
$(function(){
  var $window = $(window);
  var redline = $('#about').offset().top - $('nav').outerHeight();
  var $el = $('#support-buttons');
  var _deployed_ = 'deployed';
  var onScroll = function(){
    if($window.scrollTop() > redline) {
      $el.addClass(_deployed_);
    } else {
      $el.removeClass(_deployed_);
    }
  };
  $window.scroll(onScroll);
  onScroll();

  var $html = $('html,body');
  var $button = $('#support-buttons > .support-button.light');
  var $scrollTarget = $($button.attr('href'));
  $button.click(function() {
    $html.scrollTo($scrollTarget.offset().top, 750);
    return false;
  })
});

// prevent event propagation at buttons
$(function() {
  $('.button:not(.close)').click(function(event) {
    event.stopPropagation();
  })
});

var frame_count = 0;
$(function() {
  setInterval(function() {
    var $container = $('.split-flap');
    var $items =  $container.find('> span');
    $items.removeClass('focus').eq(frame_count%$items.length).addClass('focus');
    frame_count++;
  }, 1000)

});
