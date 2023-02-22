// ハンバーガーメニュー＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
$(function(){
$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
});
// ハンバーガーメニューおしまい＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

$(window).on('load',function(){
    $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
   //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function() {    
        //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
});

// スライダー
$(function () {
    $(".slider").slick({
      arrows: true,
      autoplay: true,
      adaptiveHeight: true,
      dots: true,
      slidesToShow: 3,
      prevArrow: '<button class="slide-arrow prev-arrow">',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1024, // 768〜1023px以下のサイズに適用
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 680, // 399px以下のサイズに適用
          settings: {
            fade: true,
            slidesToShow: 1,
        
          },
        },
      ],
    });
  });