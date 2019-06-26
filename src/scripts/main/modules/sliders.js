var haveTime = document.querySelector('.have-time__slider');
var haveTimeSlider = new Swiper(haveTime,{
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 6000,
      },
      speed: 4000,
    });
