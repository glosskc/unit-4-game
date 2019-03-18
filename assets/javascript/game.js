// global variables.
var attack;
var defend;
var attackcharacter;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

function reset() {	

$("#picRow").show();

$(".restart").hide();
$(".attackButton").show();

// reset myChar and myDef to equal nothing.
var myChar = "";
var myDef = "";
// var YourCharacter;
// var YourDefender;


// reset health points.
characters.Oishi.healthPoints = 120;
characters.Asano.healthPoints = 100;
characters.Kira.healthPoints = 150;
characters.Kimura.healthPoints = 180;

// reset attack power.
characters.Oishi.attackPower = 8;
characters.Asano.attackPower = 10;
characters.Kira.attackPower = 10;
characters.Kimura.attackPower = 12;

// delete all in-game text.
$(".youAttacked").empty();
$(".attackedBack").empty();
$(".youDefeated").empty();
$(".youWon").empty();
$(".youLose").empty();
$(".noEnemy").empty();

//writing each characters full name to the html so they show up on the page.
$(".name00").html(characters.Oishi.fullName);
$(".name01").html(characters.Asano.fullName);
$(".name02").html(characters.Kimura.fullName);
$(".name03").html(characters.Kira.fullName);

//adding the picture for each character so they show up on the page.
$("#oishi").appendTo("#picRow");
$("#asano").appendTo("#picRow");
$("#kira").appendTo("#picRow");
$("#kimura").appendTo("#picRow");

//writing each characters healthpoints to the html so they show up on the page.
$(".oishihp").html(characters.Oishi.healthPoints);
$(".asanohp").html(characters.Asano.healthPoints);
$(".kirahp").html(characters.Kira.healthPoints);
$(".kimurahp").html(characters.Kimura.healthPoints);

// reset border colors. 
$(".firstRow").css({"background-color": "white", "outline-color": "limegreen", 
"border-width": "3px", "outline-style": "solid", "border-color": "white", "outline-width": "3px"});

};

// array to hold each characters stats.
var characters = { 

Oishi: {
    name: "Oishi",
    visual:("src", "../unit-4-game/assets/images/Oishi.jpeg"),
    healthPoints: 120,
    attackPower: 8,
    fullName: "Oishi: Ronin Leader",
    counterAttackPower: 24
    },

Asano:{
    name: "Asano",
    visual: '../unit-4-game/assets/images/asano.jpg',
    healthPoints: 100,
    attackPower: 10,
    fullName: "Asano: Ronin Master",
    counterAttackPower: 5
    },

Kira:{ 
    name: "Kira",
    visual: '../unit-4-game/assets/images/kira.jpg',
    healthPoints: 150,
    attackPower: 10,
    fullName: "Kira: Court Official",
    counterAttackPower: 20
    },

Kimura:{ 
    name: "Kimura",
    visual: '../unit-4-game/assets/images/kimura.jpg',
    healthPoints: 180,
    attackPower: 12,
    fullName: "Kimura: Ronin",
    counterAttackPower: 25
    }
};


// $(document).ready(function(){
reset();

// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
// "Your Character" and moves the other three into "Enemies available to attach".
$(".firstRow").click(function(){
        
   if (myChar == "") {
   // appends the chosen character to "Your Character"
   console.log(this);	       
   $(this).appendTo("#yourChar");
   myChar = $(this);
   YourCharacter = $(myChar).attr("value");
      }
   // if else statements that determine who is currently "Your Character" and assign
   // that person to the character array's properties. 
   if (YourCharacter == characters.Oishi.name) {
           attackerHP = characters.Oishi.healthPoints;
           attackerAP = characters.Oishi.attackPower;
           attackerCAP = characters.Oishi.counterAttackPower;
           attackerFN = characters.Oishi.fullName;
           attack = characters.Oishi;
   }
   else if (YourCharacter == characters.Asano.name){
           attackerHP = characters.Asano.healthPoints;
           attackerAP = characters.Asano.attackPower;
           attackerCAP = characters.Asano.counterAttackPower;
           attackerFN = characters.Asano.fullName;
           attack = characters.Asano;
   }
   else if (YourCharacter == characters.Kira.name){
           attackerHP = characters.Kira.healthPoints;
           attackerAP = characters.Kira.attackPower;
           attackerCAP = characters.Kira.counterAttackPower;
           attackerFN = characters.Kira.fullName;
           attack = characters.Kira;
   }
   else if (YourCharacter == characters.Kimura.name){
           attackerHP = characters.Kimura.healthPoints;
           attackerAP = characters.Kimura.attackPower;
           attackerCAP = characters.Kimura.counterAttackPower;
           attackerFN = characters.Kimura.fullName;
           attack = characters.Kimura;
   }
          
   // clones the three remaining characters to "Enemies available to attack" three separate divs.
   for (var i = 0; i < 4; i++) {
       $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);

       // changing color
       $("._" + [i]).not(myChar).css({"background-color": "red", "outline-color": "black", 
           "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});


   }
           
   // Clears the characters from the top.
   // $("#picRow").empty();
   $("#picRow").hide();
  
});

// When the player clicks on any of the characters in the "enemies available to attack" section, the game 
// determines which one was clicked and moves the one clicked into the "Defender" position. The other two 
// characters remain in "enemies available to attack" section.     
$(".move").click(function(){

     // if (myDef === "") {
        // clones the chosen character to "Defender"
     // moves that character to the "Defender" section on the page.
     $(this).appendTo("#defender");
     myDef = $(this);
     YourDefender = $(myDef).children().attr("value");
     $(".youDefeated").empty();

 // }
     // if else statements that determine who is currently "Defender" and assign
   // that person to the character array's properties.
   if (YourDefender == characters.Oishi.name) {
           defenderHP = characters.Oishi.healthPoints;
           defenderAP = characters.Oishi.attackPower;
           defenderCAP = characters.Oishi.counterAttackPower;
           defenderFN = characters.Oishi.fullName;
           defend = characters.Oishi;
       
       }
       else if (YourDefender == characters.Asano.name){
           defenderHP = characters.Asano.healthPoints;
           defenderAP = characters.Asano.attackPower;
           defenderCAP = characters.Asano.counterAttackPower;
           defenderFN = characters.Asano.fullName;
           defend = characters.Asano;
           
   }
   else if (YourDefender == characters.Kira.name){
           defenderHP = characters.Kira.healthPoints;
           defenderAP = characters.Kira.attackPower;
           defenderCAP = characters.Kira.counterAttackPower;
           defenderFN = characters.Kira.fullName;
           defend = characters.Kira;
           
   }
   else if (YourDefender == characters.Kimura.name){
           defenderHP = characters.Kimura.healthPoints;
           defenderAP = characters.Kimura.attackPower;
           defenderCAP = characters.Kimura.counterAttackPower;
           defenderFN = characters.Kimura.fullName;
           defend = characters.Kimura;
           
   }


});


// when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack 
// property of the "Defender".Their counter attack decreases your health.
$(".attackButton").click(function(){

     // if player clicks attack button and no one is in the "defender" div, then 
     // game says "no enemy here".
     if ($("#defender").children().length == 0) {
         $(".noEnemy").html("No enemy here.");
     }

     if (!(attackerHP < 1) || !(defenderHP < 1)) {

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracks the defendersCAP from the attackers HP.)
     attackerHP = (attackerHP - defenderCAP);
     
     // writing the attacker/Your Character's new healthpoints to the html. 
     $("." + YourCharacter).html(attackerHP);

     // writing the text "You attacked Luke Skywalker for 8 damage".
     $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

     // when button is clicked (if both players healthpoints are not 0, 
     // the game subtracks the attackers AP points from the defenders HP.)
     defenderHP = (defenderHP - attackerAP);

     // writing the text "Luke Skywalker attacked you back for 10 damage."
     $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");
    
    // write the defender's new healthpoints to the html.
    $("." + YourDefender).html(defenderHP);

 } 
     // if your character defeats the defender.
     if (defenderHP <= 0) {

         // clear text from the bottom and add defeated text.
         $(".youAttacked").empty();
         $(".attackedBack").empty();
         $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

         // remove defender from the page.
         $("#defender").empty();

         // Your Character's attack power goes up by 10. 
         console.log(attackerAP);
         attackerAP = (attackerAP + 10);

         // redefining "YourCharacter"'s attack power to equal the new value. 
         attack.attackPower = attackerAP;
         console.log(attackerAP);

     }
     
     // if all enemies have been defeated and the attacker still has health, then the player wins
     if ($(".move").children().length == 0){
      
      // clear out the other paragraphs and let user know they won.
      $(".youAttacked").empty();
      $(".attackedBack").empty();
      $(".youDefeated").empty();
      $(".noEnemy").empty();
      $(".youWon").html("You Won!!!! GAME OVER!!!"); 

      // show the restart button. 
      $(".restart").show();

      // When you click "Restart" the game begins again. 
      $(".restart").click(function(){
          location.reload(true);
      })
                       
     }

     // if your characters hp = 0 then you lose.
     if (attackerHP <= 0) {

         // show the restart button.
         $(".restart").show();

         // hide the attack button.
         $(".attackButton").hide();

         // You lose.
         $(".youAttacked").empty();
          $(".attackedBack").empty();
         $(".youDefeated").empty();
         $(".youLose").html("You've been defeated...GAME OVER!!!")

          // When you click "Restart" the game begins again. 
          $(".restart").click(function(){
              location.reload(true);
          });

     }      
     
});


// The game remembers every time you attack and slowly increases your attack power. 

