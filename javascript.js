let buttons = document.querySelectorAll(".row button");
let dialog = document.querySelector("dialog");


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


dialog.showModal();

/* player1.name = prompt("What is ur name?");
player2.name = prompt("player 2 name pls");
 */


