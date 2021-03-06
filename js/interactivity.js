function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// timeline event and purchase detail
$(function() {
  var enable_click_focus = function(item_sel, list_sel, dialog_sel) {
    list_sel = (list_sel === undefined ? '' : list_sel);
    var _focus_ = 'focus';
    var $all_items = $(list_sel + ' ' + item_sel);
    $all_items.click(function() {
      var $item = $(this);
      if(!$item.hasClass(_focus_)) {
        $all_items.removeClass(_focus_);
      }
      $item.toggleClass(_focus_);
      var max = $(window).width();
      if(dialog_sel && $item.hasClass(_focus_)) {
        // detect if dialog is out of viewport
        var $dialog = $item.find(dialog_sel);
        var m = $item.offset().left + $item.outerWidth()/2.0;
        var r = $dialog.outerWidth()/2.0;
        var g = 4;
        $dialog.css('margin-left', (max >= 750 ? (m + r > max ? max - (m + r) - g : (m - r < 0 ? r - m + g : 0)) : 0))
      }
    });
    $all_items.find('.close').click(function(event) {
      $(this).closest(item_sel).removeClass('focus');
      event.stopPropagation();
    });
  }
  enable_click_focus('.event', '#timeline', '.event-dialog');
  enable_click_focus('.purchase-option', '#one-time-purchases');
  enable_click_focus('.purchase-option', '#group-purchases');
  enable_click_focus('#why');
});

// support button
$(function(){
  var $window = $(window);
  var redline = $('#about').offset().top - $('nav').outerHeight();
  var $el = $('#support-buttons');
  var _deployed_ = 'deployed';
  var onScroll = debounce(function(){
    $el.toggleClass(_deployed_, $window.scrollTop() > redline);
  }, 250);
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
