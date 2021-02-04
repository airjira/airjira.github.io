
window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("giftbox")[0];
  var step = 1;
  var stepMinutes = [2000, 1000, 10000, 1000];
  function init() {
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      test();
      reveal();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  init();

};

function reveal() {
  document.querySelector('.merrywrap').style.backgroundColor = 'transparent';
  // $('.type-js').style.border = 'none';
  document.querySelector('.cake-1').style.opacity = '1';
  // loop();

  // var w, h;
  // if (window.innerWidth >= 1000) {
  //   w = 295;h = 185;
  // } else
  // {
  //   w = 255;h = 155;
  // }

  // var ifrm = document.createElement("iframe");
  // ifrm.setAttribute("src", "https://www.youtube.com/embed/KDxJlW6cxRk?controls=0&loop=1&autoplay=1");
  // //ifrm.style.width = `${w}px`;
  // //ifrm.style.height = `${h}px`;
  // ifrm.style.border = 'none';
  // document.querySelector('#video').appendChild(ifrm);
}

function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",200);
});

function test() {
const timeline = gsap.timeline({
  duration: 0.3 });


timeline.fromTo('.cake-topping', {
  yPercent: -300,
  opacity: 0.5 },
{
  yPercent: 0,
  opacity: 1 });


timeline.to('.candle-container', {
  opacity: 1 });


timeline.to('.flame-wrap', {
  scale: 1,
  ease: "back.out" });


timeline.to('.greeting', {
  scale: 1,
  ease: "back.out" });


timeline.to('.star', {
  opacity: 0.5,
  stagger: 0.05,
  onComplete: function () {
    gsap.to('.star', {
      scale: 0.25,
      repeat: -1,
      stagger: 0.1,
      yoyo: true,
      yoyoEase: "power1.out" });

  } });
}