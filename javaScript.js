
function  getComputerChoice(){
const minCeil = Math.ceil(0);
const maxFloor = Math.floor(3);
return Math.floor(Math.random()* (maxFloor - minCeil) + minCeil);
}
function getHumanChoice(){
     return prompt("Enter The Value");
}
getHumanChoice();
    


if (getComputerChoice() === 0) {
    console.log("rock") ;
}else if (getComputerChoice() === 1){
    console.log("paper") ;
}else { 
    console.log("scissors") ;
}

