const buttons = document.querySelectorAll(".row button");
const dialog = document.querySelector("dialog");
const playBtn = document.querySelector(".playBtn");
const form = document.querySelector("form");
const player1NameDisplay = document.querySelector("#p1 .playerName");
const player2NameDisplay = document.querySelector("#p2 .playerName");
const player1ScoreDisplay = document.querySelector("#p1 .playerScore");
const player2ScoreDisplay = document.querySelector("#p2 .playerScore");
const numberOfRoundsDisplay = document.querySelector(".roundDisplay");

let player1 = {
    name: "Player 1",
    mark: ["cross", "./marks/cross-svgrepo-com.svg"],
    markPlacements: [],
    score: 0
}

let player2 = {
    name: "Player 2",
    mark: ["circle", "./marks/circle-svgrepo-com.svg"],
    markPlacements: [],
    score: 0
    
}

let gameflow = {
    currentPlayer: player1,

    round: 1,
    totalRounds: 1
}


function playerInput() {

    dialog.showModal();

    playBtn.addEventListener('click', () => {
        dialog.close();
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const player1NameValue = document.getElementById("player1-Name").value;
        const player2NameValue = document.getElementById("player2-Name").value;
        
        const totalRoundsValue = document.getElementById("rounds").value;
        if (player1NameValue) {
            player1.name = player1NameValue;
        }
        if (player2NameValue) {
            player2.name = player2NameValue;
        }
        if (totalRoundsValue) {
            gameflow.totalRounds = totalRoundsValue;
        }
        

        player1NameDisplay.textContent = player1.name;
        player2NameDisplay.textContent = player2.name;
        numberOfRoundsDisplay.textContent = `Round ${gameflow.round} / ${gameflow.totalRounds}`;

        player1ScoreDisplay.textContent = `Score: ${player1.score}`;
        player2ScoreDisplay.textContent = `Score: ${player2.score}`;

        
        playRound();
        
    })    
}

function playRound() {
    console.log("playround");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(gameflow.currentPlayer);
            function addMark() {
                let mark = document.createElement("img");
                mark.className = "mark";
                mark.id = gameflow.currentPlayer.mark[0];
                mark.src = gameflow.currentPlayer.mark[1];
                button.appendChild(mark);
                button.disabled = true;
            }

            function swapPlayer() {
                if (gameflow.currentPlayer == player1) {
                    gameflow.currentPlayer = player2;
                } else if (gameflow.currentPlayer == player2) {
                    gameflow.currentPlayer = player1;
                }
            }

            function checkScorer() {
                const scoringCombinations = [
                    ["tl", 'tm', 'tr'],
                    ['ml', 'mm', 'mr'],
                    ['bl', 'bm', 'br'],

                    ['tl', 'ml', 'bl'],
                    ['tm', 'mm', 'bm'],
                    ['tr', 'mr', 'br'],

                    ['tl', 'mm', 'br'],
                    ['tr', 'mm', 'bl']

                ]
                gameflow.currentPlayer.markPlacements.push(button.id);
                console.log(gameflow.currentPlayer.markPlacements);

                for (let i = 0; i < scoringCombinations.length; i++) {
                    const checkScoringCombinations = (arr, target) => target.every(v => arr.includes(v));
                    const isThreeInARow = checkScoringCombinations(gameflow.currentPlayer.markPlacements, scoringCombinations[i]); 

                    if (isThreeInARow == true) {
                        endRound();
                    };
                }
            }

            addMark();
            checkScorer();
            swapPlayer();
            
        })
    })
}


function endRound() {

    function updateScore() {
        if (gameflow.currentPlayer == player1) {
            player1.score++;
            player1ScoreDisplay.textContent = `Score: ${player1.score}`;
        } else {
            player2.score++;
            player2ScoreDisplay.textContent = `Score: ${player2.score}`;
        }
    }
    
    function announceWinner() {
        console.log("winner");
    }

    function resetRound() {
        
        const allMarks = document.querySelectorAll(".mark");

        allMarks.forEach(eachMark => {
            eachMark.remove();
        })

        player1.markPlacements = [];
        player2.markPlacements = [];

        buttons.forEach(button => {
            button.disabled = false;
        })

        if (gameflow.round < gameflow.totalRounds) {
            nextRound();
        }
    }

    function nextRound() {
        gameflow.round++;
        numberOfRoundsDisplay.textContent = `Round ${gameflow.round} / ${gameflow.totalRounds}`;

    }

    
    

    updateScore();
    if (gameflow.round == gameflow.totalRounds) {
        announceWinner();
    }
    setTimeout(() => resetRound(), 1500);
    
}








playerInput();





