//array of letters for choosing from
var alphabet = ['l','m','n','t','u','v','w','x','y','z','c','d','o','a','b','p','q','r','s','e','f','g','h','i','j','k',];
console.log(alphabet);
// counts the amount of times the player has guessed correctly 
var Wins = 0;

// counts how many times the player has guessed wrongly
var Losses = 0;

// lets the player know how many more guesses they have before game over
var Guesses_left = 9;

// tells the player what they've guessed so far
var Guesses_so_far = 0;

//creating function based off of activity 34 day-3 week-3
function renderLetter(){
  if (Wins <= (alphabet.length - 1)){
    document.querySelector('#Wins').innerHTML = alphabet[Wins];
  }
  else {
    document.querySelector('#Wins').innerHTML = "game";
  }
}

//keypress events 



 $(document).ready(function() {

  var captainPlanet = $(".captain-planet");
console.log (playerinput);
$(document).keyup(function(e) {
          

  // Move Buttons (Keyboard Down)
 
    captainPlanet.animate({ top: "+=200px" }, "normal");});
});
