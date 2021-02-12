
setTimeout(function(){
  $(".wrapp-coffee").addClass('bg-non');
}, 10000);
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*45);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*45));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 3500);
$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
  var button = $(this);

  $(current).removeClass("active");
  setTimeout(function() {
    if ($(button).hasClass("js-right")) {
      $(findNext).addClass("active");
      checkForDisable();
    } else if ($(button).hasClass("js-left")) {
      $(findPrev).addClass("active");
      checkForDisable();
    }
  }, 300);
});

function checkForDisable() {
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}