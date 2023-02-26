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



// ---------ロード画面を１回のみ表示させるためのjqery-----------
// 何度も更新して動きを見合い場合はsessionStorage.setItem('access', 'true');を
// コメントアウトすればsessionにアクセスした記録を残さないのでやる場合は試してみてください。

$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      
      /*
        2回目以降アクセス時の処理
      */
      $("#screen").css({ 'display': 'none' });//2回目以降 #screenをdisplay:noneにする（動画を非表示）
      $("#container").css({ 'opacity': '1' });//2回目以降 body.appear #containerのopacityを1にする

    } else {
      /*
        初回アクセス時の処理
      */
      $(window).on('load', function () {
        $("#splash-logo").delay(1200).fadeOut('slow');  //ロゴを1.2秒でフェードアウトする記述

        $('body').addClass('appear');                   //フェードアウト後bodyにappearクラス付与
      }),

      sessionStorage.setItem('access', 'true');         // sessionStorageにデータを保存してブラウザ（タブ）を閉じるまで有効
      $("#splash-logo").addClass('is-active');          // loadingアニメーションを表示

      setTimeout(function () {                          // ローディングを数秒後に非表示にする
        $("#splash").addClass('is-active');
      }, 2000);                                         // ローディングを表示する時間
    }
  }
  webStorage();
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