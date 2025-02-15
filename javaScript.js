
const container = document.querySelector("#container");
const r = document.createElement("button"); 
const p= document.createElement("button");
const s = document.createElement("button");
r.textContent = "rock";
p.textContent = "paper";
s.textContent = "scissors";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";
document.body.style.gap  = "50px";
document.body.style.fontSize = "30px";

container.appendChild(r);
container.appendChild(p);
container.appendChild(s);
container.style.gap = "10px";


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

let computerScore = 0;
let humanScore = 0;
    
const outputs = document.querySelector("#outputs");
        const op = document.createElement("div");
            op.setAttribute = ("id" , "op");
            outputs.appendChild(op);
            

function startGame(){
    const buttons = document.querySelectorAll("button");
    // used to create button and make them to act upon and provide output 
    //on clicking using addEventListener
    //as the name suggest it listens for event like clk,dbclk etc.
    //and do as says upon listening for the events
    //in this case provide desired output.
    buttons.forEach((button) => {
        button.style.height = "100px"
        button.style.width  = "100px";
        button.style.background = "lightBlue";
        button.style.fontStyle = "3px solid black";
        button.addEventListener("click", () => {
            op.textContent = playRound(button.textContent , getComputerChoice());
            
        });
    });
} 

    
    
const scores = document.querySelector("#scores");
const compScore = document.createElement("div");
const personScore = document.createElement("div");
scores.appendChild(compScore);
scores.appendChild(personScore);
scores.style.display = "flex";
scores.style.gap = "10px";
scores.style.border= "2px solid black";

compScore.textContent = "computer Score: " + `${computerScore}`;
personScore.textContent = "Human Score: " + `${humanScore}`;


function playRound(humanChoice , computerChoice){
    if((humanChoice === "rock" && computerChoice === "rock") || (humanChoice=== "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        return "TIE!  COMPUTER CHOSE: " + `${computerChoice}` + " AND YOU CHOSE : " + `${humanChoice}`;
    }else if (humanChoice === "rock" && computerChoice === "paper"){
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




    


