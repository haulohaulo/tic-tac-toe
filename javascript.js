const buttons = document.querySelectorAll(".row button");
const dialog = document.querySelector("dialog");
const playBtn = document.querySelector(".playBtn");
const form = document.querySelector("form");
const player1Display = document.getElementById("p1");
const player2Display = document.getElementById("p2");
const numberOfRounds = document.querySelector(".roundDisplay");

let player1 = {
    name: "Player1",
    mark: ["cross", "./marks/cross-svgrepo-com.svg"]
}

let player2 = {
    name: "Player2",
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

        player1.name = document.getElementById("player1-Name").value;
        player2.name = document.getElementById("player2-Name").value;
        gameflow.round = document.getElementById("rounds").value;

        player1Display.textContent = player1.name;
        player2Display.textContent = player2.name;
        numberOfRounds.textContent = gameflow.round;

       
        
    })    
}


playerInput();


