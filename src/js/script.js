
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

  // to-top
  let topBtn = $('.js-to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });


  // footerの手前でto-topを固定
  $(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var footHeight = $("js-footer").innerHeight();
    var bottomValue;

    if ($(window).width() <= 768) {
      // スマートフォンの場合
      bottomValue = 16; // 16px
    } else {
      // タブレットやデスクトップの場合
      bottomValue = 20;
    }

    if (scrollHeight - scrollPosition <= footHeight) {
      // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      $(".to-top").css({
        position: "absolute",
        bottom: footHeight + bottomValue,
      });
    } else {
      $(".to-top").css({
        position: "fixed",
        bottom: bottomValue,
      });
    }
  });

  // スムーススクロール
  $('a[href^="#"]').on('click', function() { //hrefの#がクリックされた時
    var header = $('.header').innerHeight(); //headerの高さを取得
    var id = $(this).attr('href'); //idの取得
    var position =0;
    if ( id != '#') { //idが#じゃない場合 to-topも動くように
      var position = $(id).offset().top - header; //該当idのtopからheaderの高さを引いた位置の取得(headerと被らないように)
    }
    jQuery('html,body').animate({
      scrollTop: position //topから該当位置までスクロールする
    },
    300); //0.3秒かけてスクロール
  });


});

