$(function() {
  var $slides = $('#slides');
  var $all_slides = $slides.find('.slide');
  var $first_slide = $all_slides.filter(':eq(0)');
  console.log($first_slide);
  var $prev = $('#arrows > .sp-previous-arrow');
  var $next = $('#arrows > .sp-next-arrow');

  var get_current = function() {
    return parseInt($slides.attr('status'));
  }
  var increase_current = function() {
    $slides.attr('status', (get_current()+1 + $all_slides.length)%$all_slides.length);
  }
  var decrease_current = function() {
    $slides.attr('status', (get_current()-1 + $all_slides.length)%$all_slides.length);
  }
  $next.click(function() {
    increase_current();
    $first_slide.animate({'margin-left': '-' + get_current()*100 + '%'});
  });
  $prev.click(function() {
    decrease_current();
    $first_slide.animate({'margin-left': '-' + get_current()*100 + '%'});
  });
});
