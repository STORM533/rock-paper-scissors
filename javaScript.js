
function  getComputerChoice(){
const minCeil = Math.ceil(0);
const maxFloor = Math.floor(3);
 if( Math.floor(Math.random()* (maxFloor - minCeil) + minCeil) === 0){
    return console.log("rock");
 } else if (Math.floor(Math.random()* (maxFloor - minCeil) + minCeil) === 1){
    return console.log("paper");
 }else{
    return console.log("scissors");
 }
}
function getHumanChoice(){
     return prompt("rock ,paper , scissors");
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    getHumanChoice()== humanChoice;
    getComputerChoice() === computerChoice;
    if(humanChoice === "rock" && computerChoice === "rock"){
        return console.log("TIE");
    }else if (humanChoice=== "paper" && computerChoice === "paper"){
        return console.log("TIE");
    }else if (humanChoice === "scissors" && computerChoice === "scissors"){
        return console.log("TIE");
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        return console.log("COMPUTER WINS");
        computerScore++;
    }else if (humanChoice ==="rock" && computerChoice=== "scissors"){
        return console.log("HUMAN WINS");
        humanScore++;
    }else if (humanChoice ==="paper" && computerChoice=== "scissors"){
        return console.log("COMPUTER WINS");
        computerScore++;
    }else if (humanChoice ==="paper" && computerChoice=== "rock"){
        return console.log("HUMAN WINS");
        humanScore++;   
    }else if (humanChoice ==="scissors" && computerChoice=== "rock"){
        return console.log("COMPUTER WINS");
        computerScore++;
    }else if (humanChoice ==="scissors" && computerChoice=== "paper"){
        return console.log("HUMAN WINS");
        humanScore++;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);

