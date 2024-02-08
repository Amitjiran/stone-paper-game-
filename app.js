let userScore=0;
let compScore=0;

const choicce= document.querySelectorAll(".container2");
const mesg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game was draw");
    mesg.innerText="game is draw";
    mesg.style.backgroundColor="blue";

}

const showWinner=(userWin, userChoice,compChoice)=>{

    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        mesg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        mesg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        mesg.innerText=`You lose computer ${compChoice}  beats  ${userChoice}`;
        mesg.style.backgroundColor="purple";
    }
}


const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice==compChoice){
        //draw the game
        drawGame();
    }    

    else{
        let userWin=true;
        if(userChoice==="stone"){
            // compchoice would be paper scissors
           userWin= compChoice=== "scissors" ? true:false;
        }

        else if(userChoice==="paper"){
            // compchoice would be stone scissors
           userWin= compChoice=== "stone" ? true:false;
        }


        else if(userChoice==="scissors"){
            // compchoice would be paper stone
           userWin= compChoice=== "paper" ? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};


choicce.forEach((container2) =>{

    container2.addEventListener("click", ()=>{
        let userChoice=container2.getAttribute("id");
        console.log("the event was clicked is",userChoice);
        playGame(userChoice);
        
    });
});