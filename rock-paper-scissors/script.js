let user = 0;
let comp = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let userScore = document.getElementById("user-choice");
let compScore = document.getElementById("comp-choice");

const compChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    return options[rand];
};

const drawGame = () => {
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if (userWin) {
        user++;
        userScore.innerText = user;
        msg.innerText = "You Win! 🎉";
        msg.style.backgroundColor = "green";
    } else {
        comp++;
        compScore.innerText = comp;
        msg.innerText = "You Lose 😞 ";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    let compCh = compChoice();

    if (userChoice === compCh) {
        drawGame();
    } else {
        let userWin;

        if (userChoice === "rock") {
            userWin = compCh !== "paper";
        } else if (userChoice === "paper") {
            userWin = compCh !== "scissors";
        } else {
            userWin = compCh !== "rock";
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
document.body.classList.add("dark");

let themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    themeBtn.innerText = document.body.classList.contains("dark") ? "🌙" : "☀️";
});


