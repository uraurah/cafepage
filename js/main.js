"use strict";

/*---------- GSAP 設定 ----------*/

//存在しない要素を取得しようとするときに出るエラーを非表示にする
gsap.config({
  nullTargetWarn: false,
});

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const hamburgerText = document.getElementById("hamburger");
// const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  toggleText(hamburgerText);
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");

});
function toggleText(textClass){
  if(textClass.textContent=="もくじ"){
    textClass.textContent = "とじる";
  }else{
    textClass.textContent = "もくじ";
  }
}
/*---------- スライドショー ----------*/
const slideShow = new Swiper(".js_slideshow",{
  loop: true,
  speed: 1200,
  effect: "fade",
  autoplay:{
    delay:1600,
    disableOnInteraction:false,
  },
});
// slideShow.on('slideChange', function () {
//   const nav = document.querySelector('.l_header-nav');
//   nav.style.width = '100%'; // 幅を再設定
// });
const observer = new ResizeObserver(entries => {
  for (let entry of entries) {
    // サイズが変わったときの処理
    const nav = document.querySelector('.l_header-nav');
    nav.style.width = '100%'; // 必要に応じてリセット
  }
});

observer.observe(document.querySelector('.js_slideshow'));

//フッターのジャンプボタン
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".l_back-to-top");

  // スクロールイベントの監視
  window.addEventListener("scroll", function () {
    if (window.scrollY > 320) { // 320px以上スクロールで表示
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // ボタンクリックでトップに戻る
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // スムーズスクロール
    });
  });
});