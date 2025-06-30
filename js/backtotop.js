"use strict";

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