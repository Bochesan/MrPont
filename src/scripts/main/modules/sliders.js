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
