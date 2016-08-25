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
