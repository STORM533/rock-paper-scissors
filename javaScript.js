
const container = document.querySelector("#container");
const r = document.createElement("div"); 
const p= document.createElement("div");
const s = document.createElement("div");
r.textContent = "rock";
p.textContent = "paper";
s.textContent = "scissor";
container.appendChild(r);
container.appendChild(p);
container.appendChild(s);


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
    userChoice = prompt("rock , paper , scissors");
    return userChoice.toLowerCase();
}
    
    



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){

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




/*function playGame(){

    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("round : " + i);
        playRound(humanSelection , computerSelection);

    }
    
}
playGame();
*/
console.log("humanScore : "  + humanScore);
console.log("computerScore : "  + computerScore);

