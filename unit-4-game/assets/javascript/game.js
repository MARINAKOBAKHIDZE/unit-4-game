$(document).ready(function(){
  // code here
  var randomNumber = Math.floor(Math.random() * 67);
  var redCrystal = Math.floor(Math.random() * 11);
  var blueCrystal = Math.floor(Math.random() * 11);
  var purpleCrystal = Math.floor(Math.random() * 11);
  var lavenderCrystal = Math.floor(Math.random() * 11);
  var crystalButtons = $("#crystalButtons");
  var redCrystal=$("#redCrystal");
  var blueCrystal=$("#blueCrystal");
  var purpleCrystal=$("#pupleCrystal");
  var lavenderCrystal=$("#lavenderCrystal");
  $("#redCrystal").click(function(evt){
  $("#crystalButtons").on("click", function(){

  $( "#crystalButtons" ).click(function() {
  $( "#target" ).click();
  
  });
  

  // crystalButtons.append(redCrystal);
  // <button type="button" id="#redCrystal"></button>

//   <div class="box" id="redCrystal">div</div>
// <div class="test" id="testDiv2">div2</div>
// <div class="test" id="testDiv3">div2</div>
// <div class="test" id="testDiv4">div2</div>
  
  
  
  
  
  
  // var redCrystal=$('<img src="assets/images/crystal1.jpeg"></img>');
  // crystalButtons.append(redCrystal);
 
});​
  

  
 
  
//   console.log (crystals)


  // [crystals.append(<img src="assets/images/crystal1.jpeg"></img>)]
  
  // I have the crystals div
    // Attach crystals on this div
      /* // Use jquery append [crystals.append




//Pseudo Coding
//A game with 4 crystals and Random Results
// every crystal needs to have a random number between 1-10
//A new random number should be generated every single time we win or lost
//to thos 4 crystals
//When clicking any crysta, it should be adding with the previous result
// until it equals the random result
//If it is greater than the random result, we decrement the loss counter
//if it is equal, then we increment a win
