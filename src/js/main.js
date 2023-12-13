window.onload = () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
          nextEl: '.space-slider__control--next',
          prevEl: '.space-slider__control--prev',
        },
        autoplay: {
            delay: 4000
        }
      
      });
};