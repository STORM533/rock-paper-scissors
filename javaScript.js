
const container = document.querySelector("#container");
const r = document.createElement("button"); 
const p= document.createElement("button");
const s = document.createElement("button");
r.textContent = "rock";
p.textContent = "paper";
s.textContent = "scissors";

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


    



    const buttons = document.querySelectorAll("button");
    // used to create button and make them to act upon and provide output 
    //on clicking using addEventListener
    //as the name suggest it listens for event like clk,dbclk etc.
    //and do as says upon listening for the events
    //in this case provide desired output.
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const outputs = document.querySelector("#outputs");
            const op = document.createElement("div");
            op.setAttribute = ("id" , "op");
            outputs.appendChild(op);
            op.textContent = playRound(button.textContent , getComputerChoice());
        });
    });

    
    



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    if((humanChoice === "rock" && computerChoice === "rock") || (humanChoice=== "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        return "TIE!  COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "YOU LOSE! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;  
    }else if (humanChoice ==="rock" && computerChoice=== "scissors"){
        humanScore++
        return "YOU WIN! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;
    }else if (humanChoice ==="paper" && computerChoice=== "scissors"){
        computerScore++;
        return "YOU LOSE! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;  
    }else if (humanChoice ==="paper" && computerChoice=== "rock"){
        humanScore++;
        return "YOU WIN! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;
    }else if (humanChoice ==="scissors" && computerChoice=== "rock"){
        computerScore++;
        return "YOU LOSE! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;
    }else if (humanChoice ==="scissors" && computerChoice=== "paper"){
        humanScore++;
        return "YOU WIN! COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;
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
