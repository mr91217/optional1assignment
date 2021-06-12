// The array of questions for the game.
var questions = [
  { q: 'The sun is blue.', a: 'f' },
  { q: 'There are 365 days in a year.', a: 't' },
  { q: 'There are 42 ounces in a pound.', a: 'f' },
  { q: 'Tiger can swim', a: 't' },
  { q: 'Bananas are vegetables.', a: 'f' }
];

function change_text(){
  document.getElementById("demo").innerHTML = "Thanks for playing, It will be closed after 5 secs";
}

var mainEl = document.getElementById('main');

var play = function(){
var score = 0;

// Loop over every question object
for (var i = 0; i < questions.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);
  

  // Compare answers
  if (
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
  ) {
    // Increase score
    score++;
    // Alert the user
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
}

// Show total at end
alert('You got ' + score + '/' + questions.length);
mainEl.textContent = ('You got ' + score + '/' + questions.length)
}

// play();

var timerEl = document.getElementById('countdown');


function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      
      window.close();
    }
  }, 1000);
}
