
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $('.js-hamburger').on('click',function(){
    $('.header__drawer').toggleClass('is-open');
    $('.sp-nav').toggleClass('is-open');
    $('.header').toggleClass('is-color')
    return false;
  })


});
