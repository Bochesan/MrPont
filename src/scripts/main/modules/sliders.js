var haveTime = document.querySelector('.have-time__slider');
var haveTimeSlider = new Swiper(haveTime,{
      pagination: {
        el: '.have-time__slider .swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      // autoplay: {
      //   delay: 4000,
      // },
      speed: 3000,
    });

// haveTime.addEventListener('mouseenter', function(e){
//     haveTimeSlider.autoplay.stop();
// });
// haveTime.addEventListener('mouseleave', function(e){
//     haveTimeSlider.autoplay.start();
// });

var novelty1 = document.querySelector('.novelty__slider--1');
var noveltySlider1 = new Swiper(novelty1,{
      pagination: {
        el: '.novelty__slider--1 .swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3000,
      },
      speed: 1500,
    });

var novelty2 = document.querySelector('.novelty__slider--2');
var noveltySlider2 = new Swiper(novelty2,{
      pagination: {
        el: '.novelty__slider--2 .swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 2500,
      },
      speed: 1500,
    });

var novelty3 = document.querySelector('.novelty__slider--3');
var noveltySlider3 = new Swiper(novelty3,{
      pagination: {
        el: '.novelty__slider--3 .swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3500,
      },
      speed: 1500,
    });

var detail = document.querySelector('.detail__slider');
var detailSlider = new Swiper(detail,{
      pagination: {
        el: '.detail__slider .swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 3500,
      },
      speed: 1500,
    });



var order = document.querySelector('.order__slider');
var orderSlider = new Swiper(order,{
      pagination: {
        el: '.order__slider .swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 2500,
      },
      speed: 1500,
    });

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  var breakpoint = window.matchMedia( '(min-width:640px)' );

  // keep track of swiper instances to destroy later
  var mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  var breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  var enableSwiper = function() {

    mySwiper = new Swiper ('.advantages__slider', {

      loop: true,

      keyboardControl: true,
      grabCursor: true,

      // pagination
      pagination: {
        el: '.advantages__slider .swiper-pagination',
        clickable: true,
      },

    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();
