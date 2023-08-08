
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  $('.header__drawer').on('click',function(){
    $('.header__drawer').toggleClass('is-open');

    return false;
  })


});
