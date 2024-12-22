
function  getComputerChoice(){
const minCeil = Math.ceil(0);
const maxFloor = Math.floor(3);
 if( Math.floor(Math.random()* (maxFloor - minCeil) + minCeil) === 0){
    return "rock";
 } else if (Math.floor(Math.random()* (maxFloor - minCeil) + minCeil) === 1){
    return "paper";
 }else{
    return "scissors";
 }
}
function getHumanChoice(){
     userChoice = prompt("rock ,paper , scissors");
     
     return userChoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if((humanChoice === "rock" && computerChoice === "rock") || (humanChoice=== "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        return console.log("TIE COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`);
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return console.log("YOU LOSE! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`);  
    }else if (humanChoice ==="rock" && computerChoice=== "scissors"){
        humanScore++
        return console.log("YOU WIN! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`);;
    }else if (humanChoice ==="paper" && computerChoice=== "scissors"){
        computerScore++;
        return console.log("YOU LOSE! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`);  
    }else if (humanChoice ==="paper" && computerChoice=== "rock"){
        humanScore++;
        return console.log("YOU WIN! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`);;
    }else if (humanChoice ==="scissors" && computerChoice=== "rock"){
        computerScore++;
        return console.log("YOU LOSE! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`);
    }else if (humanChoice ==="scissors" && computerChoice=== "paper"){
        humanScore++;
        return console.log("YOU WIN! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`);
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

    console.log(humanScore);
    console.log(computerScore);


function playGame(){
    for(let i = 0 ;i <= 5 ; i++){
        playRound(humanSelection ,computerSelection);
    }
}
playGame();

