var haveTime = document.querySelector('.have-time__slider');

var slide = new Swiper(haveTime,{
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });
