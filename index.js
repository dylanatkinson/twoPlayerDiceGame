let numberRolled;
let playerOnePoints = 0;
let playerTwoPoints = 0;
let playerToggle = true;
let playerOneRolledNumbers = [];
let playerTwoRolledNumbers = [];

const rollButton = document.getElementById("roll-btn");
const holdButton = document.getElementById("hold-btn");
const diceImage = document.getElementById("dice-img");
const winOrLose = document.getElementById("win-loss");
const playerOneScore = document.getElementById("p1-score");
const playerTwoScore = document.getElementById("p2-score");
const diceRoll = document.getElementById("dice-roll");
const p1RollArray = document.getElementById("p1-roll-array");
const p2RollArray = document.getElementById("p2-roll-array");

diceImage.src = "dice.png";

const resetGame = () => {
    playerOnePoints = 0;
    playerTwoPoints = 0;
    playerToggle = true;
};


const rollDice = () => {
    numberRolled = Math.ceil(Math.random() * 6);
    console.log(numberRolled);
    // generates a random number between 1 and 6
};

const winLoss = () => {
    if (playerToggle) {
        if (numberRolled == 1) {
            winOrLose.textContent = "Player One Loses";
            winOrLose.style.visibility = "visible";
            console.log ("Player One Loses");
            holdButton.style.visibility = "hidden";
            playerOneLogScore();
            playerSwitch();
        } else if (playerOnePoints >= 20) {
            console.log ("Player One Wins");
            resetGame();
        } else {
            playerOneLogScore();
        };
    } else {
        if (numberRolled == 1) {
            winOrLose.textContent = "Player Two Loses";
            winOrLose.style.visibility = "visible";
            console.log ("Player Two Loses");
            holdButton.style.visibility = "hidden";
            playerTwoLogScore();
            resetGame();
        } else if (playerTwoPoints >= 20) {
            console.log ("Player Two Wins");
            resetGame();
        } else {
            playerTwoLogScore();
        }
    };
};

const playerOneLogScore = () => {
    playerOnePoints += numberRolled;
    console.log(`Player One current points ${playerOnePoints}`);
    playerOneRolledNumbers.push(" " + numberRolled);
    console.log(`Player One Array: ${playerOneRolledNumbers}`);
};

const playerTwoLogScore = () => {
    playerTwoPoints += numberRolled;
    console.log(`Player Two current points ${playerTwoPoints}`);
    playerTwoRolledNumbers.push(" " + numberRolled);
    console.log(`Player Two Array: ${playerTwoRolledNumbers}`);
};

rollButton.addEventListener("click", () => {
    holdButton.style.visibility = "visible";
    winOrLose.style.visibility = "hidden";
    console.log("Button is clicked");
    rollDice();
    diceImage.style.visibility = "visible";
    diceImage.src = `dice${numberRolled}.png`;
    diceRoll.textContent = `You rolled ${numberRolled}`;
    winLoss();
    playerOneScore.textContent = `Player One Score: ${playerOnePoints}`;
    playerTwoScore.textContent = `Player Two Score: ${playerTwoPoints}`;
});

const playerSwitch = () => {
    if (playerToggle) {
        playerToggle = false;
        console.log(`Player One's turn set to: ${playerToggle}`);
    } else {
        playerToggle = true;
        console.log(`Player One's turn set to: ${playerToggle}`);
    };
};

holdButton.addEventListener("click", () => {
    playerSwitch();
});