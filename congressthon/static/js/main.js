$(window).load(function() {
	/*----------------------------------------------------*/
	/*  mobilenav
	/*----------------------------------------------------*/
	$('.mobilenav').mobilenav({});
});



/*----------------------------------------------------*/
/*  Sticky Kit / for aside and top nav sticky effect
/*----------------------------------------------------*/
$(function() {
	var shrinkHeader = 300;
	$(window).scroll(function() {
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHeader) {
			$('header').addClass('shrink');
		} else {
			$('header').removeClass('shrink');
		}
	});

	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});
/*----------------------------------------------------*/
/*  Slider Prp
/*----------------------------------------------------*/
$(document).ready(function() {

	$('#index-slider').sliderPro({
		width: '100%',
		height: 400,
		autoHeight: true,
		fadeArrows: false,
		arrows: true,
		fade: true,
		autoplay: false,
		touchSwipe: true,
		breakpoints: {
			768: {
				arrows: false
			}
		}
	});
});


$(document).ready(function() {
	/*----------------------------------------------------*/
	/*  SUPERFISH
	/*----------------------------------------------------*/
	$('ul.sf-menu').superfish({
		animation: {
			opacity: 'show',
			height: 'show'
		}, // fade-in and slide-down animation 
		cssArrows: false,
		delay: 300
	});

	/*----------------------------------------------------*/
	/*  Make Youtube Video in content Responsive
	/*----------------------------------------------------*/
	// Target your .container, .wrapper, .post, etc.
	$("#index-slider").fitVids();

});


/*----------------------------------------------------*/
/* Back To top
/*----------------------------------------------------*/

$(document).ready(function() {
	// Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});

	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 300);
	})
});


/*----------------------------------------------------*/
/* Animstion
/*----------------------------------------------------*/
$(document).ready(function() {
	$('.animsition').animsition({
		loading: false,
		inClass: 'fade-in',
		outClass: 'fade-out'
	})
});
/*
$(window).load(function() {
	// Animate loader off screen
	$(".loader-wrap").fadeOut("slow");
});
*/
/*----------------------------------------------------*/
/*  Tab smooth scrool to , hash change
/*----------------------------------------------------*/
$(function() {
	$('.nav-toggle, nav.mobile-nav').click(function() {
		$('header, main').toggleClass('blur');
		$('.nav-toggle').toggleClass('navbar-on');
		$('nav.mobile-nav').fadeToggle();
		$('nav.mobile-nav').removeClass('nav-hide');
	});
});


$(document).ready(function() {


	$('.sf-menu li a').click(function(event) {
		event.preventDefault();
		var link = this;
		$.smoothScroll({
			scrollTarget: link.hash
		});
	});

});


// $(document)
// 	.on('click', 'a[href*="#"]', function() {
// 		if (this.hash && this.pathname === location.pathname) {
// 			$.bbq.pushState('#/' + this.hash.slice(1));
// 			return false;
// 		}
// 	})
// 	.ready(function() {
// 		$(window).bind('hashchange', function(event) {
// 			var tgt = location.hash.replace(/^#\/?/, '');
// 			if (document.getElementById(tgt)) {
// 				$.smoothScroll({
// 					scrollTarget: '#' + tgt
// 				});
// 			}
// 		});

// 		$(window).trigger('hashchange');
// 	});


/*----------------------------------------------------*/
/*  Youtubne Play on hover
/*----------------------------------------------------*/


var $$ = function(tagname) {
	return document.getElementsByTagName(tagname); }

function onYouTubeIframeAPIReady() {
	var videos = $$('iframe'), // the iframes elements
		players = [], // an array where we stock each videos youtube instances class
		playingID = null; // stock the current playing video
	for (var i = 0; i < videos.length; i++) // for each iframes
	{
		var currentIframeID = videos[i].id; // we get the iframe ID
		players[currentIframeID] = new YT.Player(currentIframeID); // we stock in the array the instance
		// note, the key of each array element will be the iframe ID

		videos[i].onmouseover = function(e) { // assigning a callback for this event
			var currentHoveredElement = e.target;
			if (playingID) // if a video is currently played
			{
				players[playingID].pauseVideo();
			}
			players[currentHoveredElement.id].playVideo();
			playingID = currentHoveredElement.id;
		};
	}

}
onYouTubeIframeAPIReady();
