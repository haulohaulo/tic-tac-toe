const buttons = document.querySelectorAll(".row button");
const dialog = document.querySelector("dialog");
const playBtn = document.querySelector(".playBtn");
const form = document.querySelector("form");
const player1Display = document.getElementById("p1");
const player2Display = document.getElementById("p2");
const numberOfRounds = document.querySelector(".roundDisplay");

let player1 = {
    name: "Player 1",
    mark: ["cross", "./marks/cross-svgrepo-com.svg"],
    markPlacements: []
}

let player2 = {
    name: "Player 2",
    mark: ["circle", "./marks/circle-svgrepo-com.svg"],
    markPlacements: []
    
}

let gameflow = {
    currentPlayer: player1,
    // allPlayers: [player1, player2],

    round: "Round 1"
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
        const roundValue = document.getElementById("rounds").value;
        if (player1NameValue) {
            player1.name = player1NameValue;
        }
        if (player2NameValue) {
            player2.name = player2NameValue;
        }
        if (roundValue) {
            gameflow.round = roundValue;
        }
        

        player1Display.textContent = player1.name;
        player2Display.textContent = player2.name;
        numberOfRounds.textContent = gameflow.round;

       
        
    })    
}

function playGame() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {

            function addMark() {
                let mark = document.createElement("img");
                mark.className = gameflow.currentPlayer.mark[0];
                mark.src = gameflow.currentPlayer.mark[1];
                button.appendChild(mark);
                button.disabled = true;
            }
            
            function checkWinner() {
                const winningCombinations = [
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

                for (let i = 0; i < winningCombinations.length; i++) {
                    const checkWinningCombinations = (arr, target) => target.every(v => arr.includes(v));
                    const isThreeInARow = checkWinningCombinations(gameflow.currentPlayer.markPlacements, winningCombinations[i]); 
                    if (isThreeInARow == true) {
                        console.log(`${gameflow.currentPlayer.name} wins!`);
                    }

                    
                }
            }

            function swapPlayer() {
                if (gameflow.currentPlayer == player1) {
                    gameflow.currentPlayer = player2;
                } else if (gameflow.currentPlayer == player2) {
                    gameflow.currentPlayer = player1;
                }
            }

            addMark();
            checkWinner();
            swapPlayer();            
            
        })
    })
}








// playerInput();
playGame();


