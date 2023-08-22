
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //ハンバーガー
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
    loop: true,
    slidesPerView: 1.26,
    spaceBetween: 24,
    breakpoints: {
      768: { //768px以上
        slidesPerView: 3.3,
        spaceBetween: 30,
      },
      1024: { //1024px以上
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

  //要素の取得とスピードの設定
  var box = $('.js-color'),
  speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
      if(counter == 0){
        $(this).delay(200).animate({'width':'100%'},speed,function(){
          image.css('opacity','1');
          $(this).css({'left':'0' , 'right':'auto'});
          $(this).animate({'width':'0%'},speed);
        })
        counter = 1;
      }
    });
  });



});

