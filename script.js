let userScore=0;
let compScore=0;
const uscore=document.querySelector("#user-score")
const cscore=document.querySelector("#comp-score")
const msg =document.querySelector("#msg");
const rst=document.querySelector("button");
const choices= document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame=(userChoice) =>{
    console.log("userChoice =",userChoice);
    const compChoice=genCompChoice();
    console.log("computer Choice =",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice === "Rock" && compChoice ==="Paper"|| userChoice ==="Paper" && compChoice === "Scissor" || userChoice ==="Scissor"  && compChoice ==="Rock"){
            userWin=false;
        }
        if(userWin){
            gameWon(compChoice,userChoice);
        }
        else{
            gameLoss(compChoice,userChoice);
        }
    }
};
const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    let Idx=Math.floor(Math.random()*3);
    return options[Idx];

};
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="#081b31"
};
const gameWon=(compChoice,userChoice)=>{
    console.log("YOU WON the Game.");
    msg.innerText=`You Win! Your "${userChoice}"  beats "${compChoice}"`
    msg.style.backgroundColor="green";
    userScore++;
    uscore.innerText=userScore;
    cscore.innerText=compScore;
    
};
const gameLoss=(compChoice,userChoice)=>{
    console.log("You loss the Game.");
    msg.innerText=`You Lose! "${compChoice}" beats Your "${userChoice}"`;
    msg.style.backgroundColor="red";
    compScore++;
    uscore.innerText=userScore;
    cscore.innerText=compScore;
};
const reset=()=>{
    compScore=0;
    userScore=0;
    uscore.innerText=userScore;
    cscore.innerText=compScore;
};
rst.addEventListener("click",reset);
