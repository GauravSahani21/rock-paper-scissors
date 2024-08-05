let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () =>{
    msg.innerHTML = "game was Draw. Play Again";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, comChoice )=>{
    if(userWin){
        userScore++;
        userScorepara.innerHTML = userScore;
        msg.innerHTML = `You Win. Your ${userChoice} beats ${comChoice}} `;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerHTML = compScore;
        msg.innerHTML = `You lose. ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    const comChoice = genCompChoice();

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors"){
            userWin = comChoice === "rock" ? false : true;          
        }
        showWinner(userWin, userChoice, comChoice);
    }
}

choices.forEach((choice) =>{
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })  
})