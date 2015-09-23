
var winner;
var playerMove;
var computerMove;

playToFive();



function getInput() {

    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt(); 

}

function randomPlay() {
    randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
        
    } else if (randomNumber < 0.66) {
        return "paper";
        
    } else {
        return "scissors";
        
    }
    
}

function getPlayerMove() {
    playerMove = getInput();
    console.log("You chose " + playerMove);
    // return playerMove;
}

function getComputerMove() {
    computerMove = randomPlay();
    console.log("Computer chose " + computerMove);
    // return computerMove;
}


function getWinner() {

  
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("tie")
        
    } 
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
            console.log("computer wins")
            
        } else {
            winner = "player";
            console.log("Looks like you win");
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
            console.log("player wins")
            
        } else {
            winner = "computer";
            console.log("computer wins");
            
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
            console.log("computer wins");
            
        } else {
            winner = "player";
            console.log('player wins')
        }
    } 
}


function playToFive() {
    

    console.log("Let's play Rock, Paper, Scissors"); 
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
     getPlayerMove();
     getComputerMove();
     getWinner();

      if (winner === "player") {
        playerWins ++;
      }

      else if (winner === "computer") {
        computerWins ++;
      }

      console.log("Score is " + playerWins + " for the player and " + computerWins + " for the computer.");

    }
   
    console.log("Final socre " + playerWins + "for the player and " + computerWins + " for the computer.");

    return playerWins, computerWins;

}



