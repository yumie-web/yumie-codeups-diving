
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //　ハンバーガー
  $('.js-hamburger').on('click',function(){
    $('.header__drawer').toggleClass('is-open');
    $('.sp-nav').toggleClass('is-open');
    $('.header').toggleClass('is-color')
    return false;
  })

  const swiper = new Swiper('.js-mv-swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 4000,
    }
  });


});
