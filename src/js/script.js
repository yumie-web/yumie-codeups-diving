
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //　ハンバーガー
  $('.js-hamburger').on('click',function(){
    $('.header__drawer').toggleClass('is-open');
    $('.sp-nav').toggleClass('is-open');
    $('.header').toggleClass('is-color')
    return false;
  })

  // mv
  var swiper = new Swiper('.js-mv-swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 4000,
    }
  });

  // campaign
  var swiper = new Swiper('.js-campaign-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 24,
    allowTouchMove: true,
    breakpoints: {
      768: { //768px以上
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.js-campaign-next',
      prevEl: '.js-campaign-prev',
    },
  });


});
