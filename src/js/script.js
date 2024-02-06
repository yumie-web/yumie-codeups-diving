jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ハンバーガー
  $(".js-hamburger").on("click", function () {
    $(".header__drawer").toggleClass("is-open");
    $(".sp-nav").fadeToggle(400);
    $(".header").toggleClass("is-color");
    $(".body").toggleClass("js-active");
    return false;
  });

  // sp-nav内のaタグをクリックした際の処理
  $(".sp-nav a").on("click", function () {
    $(".header__drawer").removeClass("is-open");
    $(".sp-nav").fadeOut(400);
    $(".header").removeClass("is-color");
    $("body").removeClass("js-active");
    // return false;
  });

  // mv
  var swiper = new Swiper(".js-mv-swiper", {
    // Optional parameters
    loop: true,
    effect: "fade",
    speed: 2000,
    autoplay: {
      delay: 4000,
    },
  });

  // campaign
  var swiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    slidesPerView: 1.26,
    spaceBetween: 24,
    breakpoints: {
      426: {
        //426以上
        slidesPerView: 1.6,
      },
      580: {
        slidesPerView: 2.2,
      },
      768: {
        //768px以上
        slidesPerView: 3.2,
        spaceBetween: 30,
      },
      1024: {
        //1024px以上
        slidesPerView: 3.5,
        spaceBetween: 40,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".js-campaign-next",
      prevEl: ".js-campaign-prev",
    },
  });

  //要素の取得とスピードの設定
  var box = $(".js-color"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // to-top
  const topBtn = $(".js-to-top");
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

  topBtn.click(function () {
    $("body,html").animate (
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // footerの手前でto-topを固定
  $(".to-top").hide();
  $(window).on("scroll", function () {
    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      $(".to-top").css({ //フッター手前に来た時
        position: "absolute",
        bottom: footHeight + 15 + "px",
      });
    } else {
      $(".to-top").css({ // スクロール中は右端に固定
        position: "fixed",
        bottom: "15px",
      });
    };
  });

  // about モーダル表示
  $(".sub-about-gallery__content img").click(function () {
    // .sub-about-gallery__content imgをクリックした時
    $(".sub-about-gallery__model").html($(this).prop("outerHTML"));
    // クリックされた画像要素の外部htmlを取得→.sub-about-gallery__modelの中に挿入
    // クリックされた画像をモデルとして表示するためのコンテンツを生成
    $(".sub-about-gallery__model").fadeIn(200);
    $(".js-header, .js-to-top").hide();
    $("html, body").css("overflow", "hidden");
    // スクロール禁止
    return false;
  });

  // about モーダル非表示
  $(".sub-about-gallery__model").click(function () {
    $(".sub-about-gallery__model").fadeOut(200);
    $(".js-header, .js-to-top").fadeIn(200);
    $("html, body").removeAttr("style");
    return false;
  });

  // 下層(ダイビング情報 タブ)
  $(".sub-info__tag-item").on("click", function () {
    // ↓ タグをクリックした時の色の変更
    $(".sub-info__tag-item").removeClass("js-active");
    $(this).addClass("js-active");

    // ↓ 最初のカードについてるjs-openを無くす
    $(".sub-info__card").removeClass("js-open");
    // ↓ sub-info__tag-itemのaタグのhrefの値を取得
    //   hrefに指定した値と同じ要素にjs-openを付与する
    //   (タグのhrefの値＝カードのidの値の時)
    $($(this).children("a").attr("href")).addClass("js-open");
    return false;
  });

  // 下層FAQ
  $(".sub-faq__q").on("click", function () {
    $(this).next().slideToggle(); //.qa-box__qの次のclassをslideToggleで開く
    $(this).children(".sub-faq__icon2").toggleClass("js-open");
    return false;
  });

});


