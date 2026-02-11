const buttons = document.querySelectorAll(".row button");
const dialog = document.querySelector("dialog");
const playBtn = document.querySelector(".playBtn");
const form = document.querySelector("form");
const player1Display = document.getElementById("p1");
const player2Display = document.getElementById("p2");
const numberOfRounds = document.querySelector(".roundDisplay");

let player1 = {
    name: "Player 1",
    mark: ["cross", "./marks/cross-svgrepo-com.svg"]
}

let player2 = {
    name: "Player 2",
    mark: ["circle", "./marks/circle-svgrepo-com.svg"]
    
}

let gameflow = {
    currentPlayer: player1,
    round: "0"
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("clicked");
        let mark = document.createElement("img");
        mark.className = player2.mark[0];
        mark.src = player2.mark[1];
        button.appendChild(mark);
        button.disabled = true;
    })
})



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


playerInput();


