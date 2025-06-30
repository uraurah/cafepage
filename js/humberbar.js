const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_nav");
const body = document.querySelector(".js_body");
const hamburgerText = document.getElementById("hamburger");
function toggleText(textClass){
  if(textClass.textContent=="もくじ"){
    textClass.textContent = "とじる";
  }else{
    textClass.textContent = "もくじ";
  }
}
hamburger.addEventListener("click", function () {
  toggleText(hamburgerText)
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

