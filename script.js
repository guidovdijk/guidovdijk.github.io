// bacground color change when scrolling nav
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// animatie met scrollen
$('.navbar a[href*=#]:not([href=#])').click(function (e) {
  e.preventDefault;
  if (location.pathname.replace(/^\//, '') ===
    this.pathname.replace(/^\//, '') &&
    location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 52
      }, 500);
      return false;
    }
  }
});

//$("#switchKnop").click(function(){
//  $("wireframes").toggleClass("display");
//  $("visueel").toggleClass("display");
//});

$('#wireframes').hide();
$('[data-name="switchKnop"]').click(function () {
  $('#visueel,#wireframes').toggle();

  if ($('.toggleText').text() === 'visueel') {
    $('.toggleText').text('wireframes');
  } else {
    $('.toggleText').text('visueel');
  }
});

$('#wireframes2').hide();
$('[data-name="switchKnop2"]').click(function () {
  $('#visueel2,#wireframes2').toggle();

  if ($('.toggleText2').text() === 'visueel') {
    $('.toggleText2').text('wireframes');
  } else {
    $('.toggleText2').text('visueel');
  }
});

//    $(function () {
//            $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
//                    $('.navbar-toggle:visible').click();
//            });
//    });
//
$(document).on('touchend', function (event) {
  var clickover = $(event.target);
  var $navbar = $(".navbar-collapse");
  var _opened = $navbar.hasClass("in");
  if (_opened === true && !clickover.hasClass("navbar-toggle")) {
    $navbar.collapse('hide');
  }
});
