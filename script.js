var pRed = 12;
var pBlack = 12;
var cRed = 12;
var cBlack = 12;
var roll = 0;
var message = "";
var log = "";
var cRoll = 0;
function pAddRedRemoveBlack(){
  if(cBlack - roll<1){
    pRed = pRed + roll;
    cBlack = cBlack - roll; 
    updateValues();
    endGame();
    
  }
  else{
    pRed = pRed + roll;
    cBlack = cBlack - roll; 
    log += "<p>" + "player turn" + "</p>" ;
    log += roll + " red added player ";
    log += "<p>" + roll + " black removed computer " + "</p>" ;
    computerTurn();
    updateValues();
    
  }
}
function pAddBlackRemoveRed(){
  if(cRed -roll>-1){
   pBlack = pBlack + roll;
   cRed = cRed - roll; 
    log += "<p>" + "player turn" + "</p>" ;
    log += roll + " black added player ";
    log += "<p>" + roll + " red removed computer " + "</p>" ;
    computerTurn();
    updateValues();
  }
}
function pRemoveRedAddBlack(){
  if(pRed -roll > -1){
    pRed = pRed - roll;
    cBlack = cBlack + roll; 
    log += "<p>" + "player turn" + "</p>" ;
    log += roll + " red removed player ";
    log += "<p>" + roll + " black added computer " + "</p>" ;
    computerTurn();
    updateValues();
  }
}
function pRemoveBlackAddRed(){
 if(pBlack - roll<1){
   pBlack = pBlack - roll;
   cRed = cRed + roll;
   updateValues()
    endGame();
  }
  else{
    pBlack = pBlack - roll;
    cRed = cRed + roll;
    log += "<p>" + "player turn" + "</p>" ;
    log += roll + " black removed player ";
    log += "<p>" + roll + " red added computer " + "</p>" ;
    computerTurn();
    updateValues();
  }
}

function cAddRedRemoveBlack(){
  if(pBlack - roll<1){
    cRed = cRed + roll;
    pBlack = pBlack - roll;
    updateValues()
    endGame();
  }
  else{
    cRed = cRed + roll;
    pBlack = pBlack - roll; 
    updateValues();
  }
}
function cAddBlackRemoveRed(){
  if(pRed - roll>-1){
   cBlack = cBlack + roll;
   pRed = pRed - roll; 
    updateValues()
  }
}
function cRemoveRedAddBlack(){
  if(cRed - roll > -1){
    cRed = cRed - roll;
    pBlack = pBlack + roll;
    updateValues();
  }
}
function cRemoveBlackAddRed(){
    if(cBlack - roll<1){
      cBlack = cBlack - roll;
      pRed = pRed + roll;
      updateValues();
      endGame();
  }
  else{
    cBlack = cBlack - roll;
    pRed = pRed + roll; 
    updateValues();
  }
}

function rollDice(){
   if(pBlack -roll<1){
     
  }
  else{
    roll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  updateValues();
  }
}
function cRollDice(){
  if(pBlack - roll<1){
  }
  else{
    cRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }
}

function reset(){
  pRed = 12;
  pBlack = 12;
  cRed = 12;
  cBlack = 12;
  roll = 0;
}
function endGame(){

  pRed>cRed ? message = "Player wins" : message = "Computer wins";
  
  if(pRed==cRed){
    message = "Tie";
  }
  display();
}
 function display(){
    messageOutput.innerHTML = message;
    messageOutput2.innerHTML= log;
}
function initialize(){
  	messageOutput = document.getElementById("output");
    messageOutput2 = document.getElementById("log");
			message = "Player Red:" + pRed + " Player Black:" + pBlack + " Computer Red:" + cRed + " Computer Black:" + cBlack + " Dice Value:" + roll;
  log = "";
			display();
 
}
function updateValues(){
  	message = "Player Red:" + pRed + " Player Black:" + pBlack + " Computer Red:" + cRed + " Computer Black:" + cBlack + " Dice Value:" + roll;
  display();
}
function computerTurn(){
cRollDice();
random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
if(random==1){
  cAddBlackRemoveRed();
  log += "<p>" + "computer turn" + "</p>" ;
  log += cRoll + " black added computer";
  log += "<p>" + cRoll + " red removed player " + "</p>" ;
}
if(random ==2){
  cAddRedRemoveBlack();
  log += "<p>" + "computer turn" + "</p>" ;
  log += cRoll + " red added computer ";
  log += "<p>" + cRoll + " black removed player " + "</p>" ;
}
if(random ==3){
  cRemoveBlackAddRed();
  log += "<p>" + "computer turn" + "</p>" ;
  log += cRoll + " black removed computer";
  log += "<p>" + cRoll + " red added player " + "</p>" ;
}
if(random ==4){
  cRemoveRedAddBlack();
  log += "<p>" + "computer turn" + "</p>" ;
  log += cRoll + " red removed computer";
  log += "<p>" + cRoll + " black added player " + "</p>" ;
}
}